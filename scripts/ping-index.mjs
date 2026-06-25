#!/usr/bin/env node
// ── InvoiceSnap Growth Engine · IndexNow pinger ───────────────────────────────
// Submits InvoiceSnap URLs to IndexNow (Bing, Yandex, Seznam, Naver) so newly
// deployed pages get crawled within hours instead of weeks. Google discovers the
// same pages via the sitemap referenced in robots.txt + Search Console.
//
// Source of URLs (in priority order):
//   1) --urls-file <path>     (default ./out/new-urls.txt if present & non-empty)
//   2) {SITE_URL}/sitemap.xml (fetched and parsed)
//
// Requires env INDEXNOW_KEY and a key file hosted at {SITE_URL}/{KEY}.txt
// (contents = the key). Without a key the script does a dry run and prints the
// payload it would submit.
// ──────────────────────────────────────────────────────────────────────────────
import { readFile } from "node:fs/promises";

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const v = process.argv[i + 1];
  return !v || v.startsWith("--") ? true : v;
}

const SITE = String(arg("site", process.env.SITE_URL || "https://invoicesnap.app")).replace(/\/+$/, "");
const KEY = process.env.INDEXNOW_KEY || "";
const host = new URL(SITE).host;

async function getUrls() {
  const file = String(arg("urls-file", "out/new-urls.txt"));
  try {
    const txt = await readFile(file, "utf8");
    const urls = txt.split("\n").map((s) => s.trim()).filter(Boolean);
    if (urls.length) { console.log(`Using ${urls.length} URLs from ${file}`); return urls; }
  } catch { /* fall through to sitemap */ }

  console.log(`Fetching ${SITE}/sitemap.xml ...`);
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  console.log(`Parsed ${urls.length} URLs from sitemap`);
  return urls;
}

const urlList = await getUrls();
if (urlList.length === 0) { console.log("No URLs to submit."); process.exit(0); }

const payload = { host, key: KEY || "<INDEXNOW_KEY>", keyLocation: `${SITE}/${KEY || "<KEY>"}.txt`, urlList };

if (!KEY) {
  console.log("\n[dry run] INDEXNOW_KEY not set. Would POST to https://api.indexnow.org/indexnow:");
  console.log(JSON.stringify({ ...payload, urlList: urlList.slice(0, 5).concat(urlList.length > 5 ? ["…"] : []) }, null, 2));
  console.log(`\nTo enable: generate a key, host it at ${SITE}/<KEY>.txt, set INDEXNOW_KEY.`);
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});
console.log(`IndexNow responded ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (res.status >= 400) { console.error(await res.text()); process.exit(1); }
console.log("✓ Submitted. Bing/Yandex will crawl shortly.");
