#!/usr/bin/env node
// ── InvoiceSnap Growth Engine · AI catalog extender (optional) ────────────────
// Keeps the engine from ever running dry. When ANTHROPIC_API_KEY is set, this
// asks Claude for N brand-new profession entries (schema-matched, deduped against
// everything already live or in the catalog) and APPENDS them to data/catalog.ts.
// Fully deterministic engine works without this; it just extends the runway.
//
// Usage: node --experimental-strip-types scripts/ai-extend.mjs --n 15
// ──────────────────────────────────────────────────────────────────────────────
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6";
const N = parseInt((process.argv[process.argv.indexOf("--n") + 1] || "15"), 10) || 15;

if (!KEY) { console.log("ANTHROPIC_API_KEY not set — skipping AI extension (deterministic engine still works)."); process.exit(0); }

const { CATALOG } = await import(resolve(repoRoot, "data/catalog.ts"));
const live = await readFile(resolve(repoRoot, "snapshot/professions.current.ts"), "utf8");
const liveSlugs = [...live.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
const exclude = [...new Set([...liveSlugs, ...CATALOG.map((p) => p.slug)])];

const example = CATALOG.slice(0, 2);
const prompt =
  `You write content for InvoiceSnap, a free invoice generator. Produce exactly ${N} NEW profession entries ` +
  `for people/businesses that send invoices. Output STRICT JSON: an array of objects with keys ` +
  `slug, name, noun, intro, items (6 strings), tip, faqs (2 objects with q & a).\n` +
  `Rules: slug is kebab-case; name Title Case; noun lowercase; intro 2 sentences (>=80 chars) about why a clear ` +
  `invoice matters for that trade; items are realistic billable line items; tip is a genuine billing tip; faqs are ` +
  `real questions that profession googles. Natural, specific, non-repetitive. Mention InvoiceSnap at most once total.\n` +
  `Do NOT use any of these existing slugs: ${exclude.join(", ")}.\n` +
  `Match this style exactly:\n${JSON.stringify(example, null, 2)}\n\nReturn ONLY the JSON array.`;

const res = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: { "x-api-key": KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
  body: JSON.stringify({ model: MODEL, max_tokens: 8000, messages: [{ role: "user", content: prompt }] }),
});
if (!res.ok) { console.error("Anthropic API error", res.status, await res.text()); process.exit(1); }
const data = await res.json();
const text = (data.content || []).map((b) => b.text || "").join("");
const json = text.slice(text.indexOf("["), text.lastIndexOf("]") + 1);
let entries;
try { entries = JSON.parse(json); } catch (e) { console.error("Could not parse JSON from model:", e.message); process.exit(1); }

const have = new Set(exclude);
const valid = entries.filter((p) =>
  p && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug || "") && !have.has(p.slug) &&
  Array.isArray(p.items) && p.items.length >= 4 && Array.isArray(p.faqs) && p.faqs.length >= 2 &&
  (have.add(p.slug) || true));

if (valid.length === 0) { console.log("No new valid entries returned."); process.exit(0); }

const j = (s) => JSON.stringify(s);
const ser = (p) =>
  `  {\n    slug: ${j(p.slug)}, name: ${j(p.name)}, noun: ${j(p.noun)},\n    intro: ${j(p.intro)},\n` +
  `    items: [${p.items.map(j).join(", ")}],\n    tip: ${j(p.tip)},\n    faqs: [\n` +
  p.faqs.map((f) => `      { q: ${j(f.q)}, a: ${j(f.a)} },`).join("\n") + `\n    ],\n  },\n`;

const catPath = resolve(repoRoot, "data/catalog.ts");
const cat = await readFile(catPath, "utf8");
const close = cat.lastIndexOf("];", cat.search(/export\s+function\s+getCatalogProfession/));
const merged = cat.slice(0, close) + valid.map(ser).join("") + cat.slice(close);
await writeFile(catPath, merged, "utf8");
console.log(`✓ Appended ${valid.length} AI-generated entries to data/catalog.ts`);
