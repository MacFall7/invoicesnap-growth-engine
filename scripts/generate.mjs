#!/usr/bin/env node
// ── InvoiceSnap Growth Engine · generator ─────────────────────────────────────
// Merges the curated growth catalog into InvoiceSnap's lib/professions.ts by
// APPENDING only the next batch of new, non-duplicate profession entries.
// The existing file is preserved byte-for-byte except for the inserted entries,
// so PRs are minimal and review-friendly. Pages, hub, sitemap and internal links
// all scale automatically because they map over PROFESSIONS.
//
// Usage:
//   node --experimental-strip-types scripts/generate.mjs [options]
//   --source <path>   existing professions.ts to read   (default: ./snapshot/professions.current.ts)
//   --write           edit the --source file in place    (used by CI against the invoicesnap checkout)
//   --out <path>      output path when not --write        (default: ./out/professions.ts)
//   --batch <n|all>   how many new entries to add          (default: env BATCH_SIZE or 12)
//   --site <url>      production base url for URL list     (default: env SITE_URL or https://invoicesnap.app)
//   --stats           print catalog/coverage stats and exit
// ──────────────────────────────────────────────────────────────────────────────
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

function arg(name, fallback = undefined) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const next = process.argv[i + 1];
  if (!next || next.startsWith("--")) return true; // boolean flag
  return next;
}

const SOURCE = resolve(repoRoot, String(arg("source", "snapshot/professions.current.ts")));
const WRITE_INPLACE = arg("write", false) === true;
const OUT = resolve(repoRoot, String(arg("out", "out/professions.ts")));
const SITE = String(arg("site", process.env.SITE_URL || "https://invoicesnap.app")).replace(/\/+$/, "");
const STATS = arg("stats", false) === true;
const batchArg = String(arg("batch", process.env.BATCH_SIZE || "12"));
const BATCH = batchArg === "all" ? Infinity : Math.max(0, parseInt(batchArg, 10) || 0);

const REQUIRED = ["slug", "name", "noun", "intro", "items", "tip", "faqs"];
function validate(p) {
  for (const k of REQUIRED) if (!(k in p)) return `missing ${k}`;
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)) return `bad slug "${p.slug}"`;
  if (!Array.isArray(p.items) || p.items.length < 4) return `items<4`;
  if (!Array.isArray(p.faqs) || p.faqs.length < 2) return `faqs<2`;
  for (const f of p.faqs) if (!f.q || !f.a) return `faq missing q/a`;
  if (p.intro.length < 80) return `intro too short`;
  return null;
}

function serialize(p) {
  const j = (s) => JSON.stringify(s);
  const items = p.items.map(j).join(", ");
  const faqs = p.faqs.map((f) => `      { q: ${j(f.q)}, a: ${j(f.a)} },`).join("\n");
  return (
    `  {\n` +
    `    slug: ${j(p.slug)}, name: ${j(p.name)}, noun: ${j(p.noun)},\n` +
    `    intro: ${j(p.intro)},\n` +
    `    items: [${items}],\n` +
    `    tip: ${j(p.tip)},\n` +
    `    faqs: [\n${faqs}\n    ],\n` +
    `  },\n`
  );
}

const { CATALOG } = await import(resolve(repoRoot, "data/catalog.ts"));

const srcText = await readFile(SOURCE, "utf8");
const existingSlugs = new Set([...srcText.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]));

// Dedupe catalog internally and against existing live slugs.
const seen = new Set();
const candidates = [];
for (const p of CATALOG) {
  if (existingSlugs.has(p.slug) || seen.has(p.slug)) continue;
  const err = validate(p);
  if (err) { console.warn(`! skipping ${p.slug}: ${err}`); continue; }
  seen.add(p.slug);
  candidates.push(p);
}

if (STATS) {
  console.log(`Live pages:        ${existingSlugs.size}`);
  console.log(`Catalog entries:   ${CATALOG.length}`);
  console.log(`New & available:   ${candidates.length}`);
  console.log(`Projected total:   ${existingSlugs.size + candidates.length}`);
  process.exit(0);
}

const selected = candidates.slice(0, BATCH === Infinity ? candidates.length : BATCH);

if (selected.length === 0) {
  console.log("Nothing to add — catalog is fully merged into the live site.");
  console.log("Tip: run scripts/ai-extend.mjs (needs ANTHROPIC_API_KEY) to grow the catalog.");
  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(resolve(repoRoot, "out/new-urls.txt"), "", "utf8");
  process.exit(0);
}

// Insert serialized entries just before the array-closing "];" that precedes getProfession().
const fnIdx = srcText.search(/export\s+function\s+getProfession/);
const anchor = fnIdx === -1 ? srcText.length : fnIdx;
const closeIdx = srcText.lastIndexOf("];", anchor);
if (closeIdx === -1) { console.error("Could not locate PROFESSIONS array close. Aborting."); process.exit(1); }

const addition = selected.map(serialize).join("");
const merged = srcText.slice(0, closeIdx) + addition + srcText.slice(closeIdx);

const target = WRITE_INPLACE ? SOURCE : OUT;
await mkdir(dirname(target), { recursive: true });
await writeFile(target, merged, "utf8");

// Side artifacts for the indexing + PR steps.
const newUrls = selected.map((p) => `${SITE}/invoice-template/${p.slug}`);
await mkdir(resolve(repoRoot, "out"), { recursive: true });
await writeFile(resolve(repoRoot, "out/new-urls.txt"), newUrls.join("\n") + "\n", "utf8");

const report =
  `# Growth run — ${new Date().toISOString().slice(0, 10)}\n\n` +
  `- Added **${selected.length}** new profession pages\n` +
  `- Live pages: ${existingSlugs.size} → **${existingSlugs.size + selected.length}**\n` +
  `- Remaining in catalog after this batch: ${candidates.length - selected.length}\n\n` +
  `## New pages\n` +
  selected.map((p) => `- [${p.name}](${SITE}/invoice-template/${p.slug})`).join("\n") + "\n";
await writeFile(resolve(repoRoot, "out/report.md"), report, "utf8");

console.log(`✓ Added ${selected.length} pages (${existingSlugs.size} → ${existingSlugs.size + selected.length})`);
console.log(`  Wrote: ${target}`);
console.log(`  URLs:  out/new-urls.txt (${newUrls.length})`);
console.log(`  Report: out/report.md`);
