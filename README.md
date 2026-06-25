# InvoiceSnap Growth Engine

Autonomous SEO content + indexing engine for **[InvoiceSnap](https://github.com/MacFall7/invoicesnap)** — a free, no-signup invoice generator.

It mass-produces **on-domain** profession-specific invoice-template pages (the exact mechanism InvoiceSnap already validated with its first 18) and gets them crawled fast. Set it up once and organic traffic compounds on autopilot.

> **Why on-domain (and not a separate content site):** InvoiceSnap already ships programmatic SEO pages at `/invoice-template/[slug]`, driven by `lib/professions.ts`. A separate satellite site targeting the same keywords would cannibalize those pages and split link equity. This engine instead **feeds InvoiceSnap's own domain**, so every page strengthens one authority profile and links straight to the generator.

---

## How it works

```
 data/catalog.ts            scripts/generate.mjs          PR → MacFall7/invoicesnap
 (55+ curated pro­fessions) ───▶ dedupe vs live slugs ───▶  append next N to            ──▶ you merge ──▶ Vercel
                                 + minimal append           lib/professions.ts               auto-deploys
                                                                                                  │
 scripts/ping-index.mjs  ◀──────────────  daily IndexNow ping  ◀───────────────────────────  new pages live
 (Bing/Yandex crawl in hours)                                                                     │
                                                                              Google ◀─ sitemap.xml in robots.txt
```

Because InvoiceSnap's pages, hub, sitemap, and internal links all map over `PROFESSIONS`, **adding data is all it takes** — no new routes, no template work. Add an entry, get a fully-formed, internally-linked, FAQ-schema'd page.

---

## What's in here

| Path | Purpose |
|------|---------|
| `data/catalog.ts` | Curated, hand-authored profession entries matched to InvoiceSnap's quality bar. The growth fuel. |
| `lib/profession-type.ts` | The exact `Profession` interface (kept in sync with InvoiceSnap). |
| `snapshot/professions.current.ts` | Copy of the live 18 for dedupe + offline runs. |
| `scripts/generate.mjs` | Merges the next batch into `lib/professions.ts` (additive, review-friendly diff). |
| `scripts/ping-index.mjs` | Submits URLs to IndexNow for fast crawling. |
| `scripts/ai-extend.mjs` | Optional: uses Claude to grow the catalog so it never runs dry. |
| `.github/workflows/grow.yml` | Weekly → opens a PR to InvoiceSnap with the next batch. |
| `.github/workflows/index-ping.yml` | Daily → pings IndexNow with the live sitemap. |
| `.github/workflows/extend-catalog.yml` | Manual → AI-extends the catalog (needs a key). |

---

## Quickstart (local)

Requires Node 20+ (uses native TypeScript type-stripping).

```bash
# See coverage
node --experimental-strip-types scripts/generate.mjs --stats

# Produce a 12-page batch into ./out/professions.ts (does not touch the live repo)
node --experimental-strip-types scripts/generate.mjs --batch 12

# Generate ALL remaining as one drop-in file
node --experimental-strip-types scripts/generate.mjs --batch all
```

The output `out/professions.ts` is a complete, drop-in replacement for InvoiceSnap's `lib/professions.ts`.

---

## Turn on the autonomous loop

Add these in the **engine repo** → Settings.

**Secrets** (Settings → Secrets and variables → Actions → Secrets)

| Secret | Needed for | Notes |
|--------|-----------|-------|
| `GH_PAT` | weekly PRs into InvoiceSnap | Fine-grained PAT with **Contents: Read/Write** and **Pull requests: Read/Write** on `MacFall7/invoicesnap`. |
| `INDEXNOW_KEY` | IndexNow pings | Any 8–128 char hex string. Also host it at `https://<your-domain>/<KEY>.txt` (file body = the key). |
| `ANTHROPIC_API_KEY` | optional AI catalog growth | Only if you run `extend-catalog`. |

**Variables** (optional — sensible defaults built in)

| Variable | Default | Purpose |
|----------|---------|---------|
| `SITE_URL` | `https://invoicesnap.app` | Production domain for indexing. |
| `BATCH_SIZE` | `12` | New pages per weekly run. |
| `TARGET_REPO` | `MacFall7/invoicesnap` | Where pages ship. |

That's it. Each Monday the engine opens a PR adding the next batch. Merge it; InvoiceSnap's Vercel deploy publishes the pages; the daily IndexNow ping gets them crawled. You can also run **Actions → Grow InvoiceSnap SEO → Run workflow** any time.

> Prefer hands-off? Enable auto-merge on the PR (or add an auto-merge step) — but a weekly one-click review keeps quality control in your hands.

---

## IndexNow key setup (one time)

1. Pick a key, e.g. `a1b2c3d4e5f6...` (hex, 8–128 chars).
2. In **InvoiceSnap**, add `public/<KEY>.txt` whose only contents are the key, so it serves at `https://<domain>/<KEY>.txt`.
3. In the **engine** repo, set the `INDEXNOW_KEY` secret to the same value.

Google doesn't use IndexNow — submit the sitemap once in **Google Search Console** (`https://<domain>/sitemap.xml`); it then re-crawls automatically as the sitemap grows.

---

## Adding professions by hand

Append to `CATALOG` in `data/catalog.ts` using the same shape. The generator validates slugs, item counts, and FAQ counts, and refuses duplicates, so bad entries are skipped automatically.

## Quality stance

No spun or thin content. Every entry has realistic billable line items, a genuine billing tip, and real FAQs — built to *earn* rankings, not game them. All distribution is white-hat (your own domain + standard IndexNow/Search Console), with zero platform-ToS risk.
