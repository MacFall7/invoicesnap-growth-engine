// Mirrors the exact Profession interface in the invoicesnap repo (lib/professions.ts).
// Keep this in sync so generated entries are drop-in compatible.
export interface Profession {
  slug: string;
  name: string; // Title case, e.g. "Graphic Designer"
  noun: string; // lowercase, e.g. "graphic designer"
  intro: string;
  items: string[];
  tip: string;
  faqs: { q: string; a: string }[];
}
