import type { Profession } from "../lib/profession-type";

// ── InvoiceSnap Growth Catalog ────────────────────────────────────────────────
// Curated, hand-authored profession entries matched to the quality bar of the
// live lib/professions.ts (real line items, a genuine billing tip, 2 real FAQs).
// The generator dedupes these against the slugs already live in InvoiceSnap and
// adds the next BATCH_SIZE on each scheduled run. Never spun/thin content.
// ──────────────────────────────────────────────────────────────────────────────

export const CATALOG: Profession[] = [
  {
    slug: "illustrator", name: "Illustrator", noun: "illustrator",
    intro: "Illustration work spans spot art, full spreads, and licensed characters — each with different usage rights and price. An itemized invoice that separates the art from the license keeps your rates defensible and your payments on time.",
    items: ["Spot illustration", "Full-page / spread artwork", "Character design", "Usage / licensing rights", "Source files (per file)", "Additional revision round"],
    tip: "Price the artwork and the license as separate lines — clients pay for usage, and bundling it hides value you could charge for.",
    faqs: [
      { q: "What should an illustration invoice include?", a: "Your studio details, the client, each piece of art as a line item, the granted usage rights, and payment terms. InvoiceSnap fills it in for you." },
      { q: "How do I bill for usage rights?", a: "List the license (e.g. web-only, print run, exclusive) as its own line. Broader or exclusive usage should cost more than a limited license." },
    ],
  },
  {
    slug: "ux-designer", name: "UX/UI Designer", noun: "UX designer",
    intro: "Research, wireframes, prototypes, and design systems each represent real hours. A clear UX invoice that maps to deliverables helps product teams approve fast and tie your work to outcomes.",
    items: ["UX research / interviews", "Wireframes", "High-fidelity UI design", "Interactive prototype", "Design system / components", "Design QA & handoff"],
    tip: "Bill by deliverable phase (research, wireframe, UI) rather than vague 'design hours' — it reads like progress and speeds up sign-off.",
    faqs: [
      { q: "How do UX designers invoice clients?", a: "By project phase, hourly, or on a sprint retainer. Itemize each deliverable so stakeholders see exactly what shipped." },
      { q: "Should I charge for research separately?", a: "Yes — research is high-value work. List interviews, synthesis, and usability testing as their own lines instead of folding them into UI design." },
    ],
  },
  {
    slug: "motion-designer", name: "Motion Designer", noun: "motion designer",
    intro: "Motion graphics mix concepting, animation, and render time that clients rarely see. An itemized invoice makes the craft visible and keeps complex animation projects profitable.",
    items: ["Concept / storyboard", "Animation (per second / scene)", "2D / 3D modeling", "Sound design & sync", "Render / export", "Additional version"],
    tip: "Charge per finished second or per scene, and list revisions separately — animation revisions are expensive and should never be free.",
    faqs: [
      { q: "What goes on a motion design invoice?", a: "Storyboarding, animation, sound, render, and delivery format, plus your payment terms. Add your studio logo for a professional finish." },
      { q: "How do I price animation work?", a: "Many motion designers price per finished second or per scene. Quote the included revisions and bill extra cuts as their own line item." },
    ],
  },
  {
    slug: "voice-actor", name: "Voice Actor", noun: "voice actor",
    intro: "Voice work is billed by usage as much as by time — a national ad and an internal training video are priced worlds apart. A clear invoice protects your usage terms and gets you paid after the session.",
    items: ["Session fee (per hour)", "Per finished minute", "Usage / broadcast license", "Pickups / re-records", "Rush delivery", "Sync to picture"],
    tip: "Always state the usage (web, broadcast, in perpetuity) on the invoice — usage drives your rate far more than recording time does.",
    faqs: [
      { q: "How do voice actors invoice?", a: "A session fee plus a usage license. List both clearly so the client understands what they're licensing and for how long." },
      { q: "What are pickups?", a: "Pickups are re-records of small sections. Note how many are included, then bill additional sessions as a separate line item." },
    ],
  },
  {
    slug: "podcast-producer", name: "Podcast Producer", noun: "podcast producer",
    intro: "Editing, mixing, show notes, and publishing all go into every episode. An itemized invoice keeps podcast clients clear on what each episode and add-on costs.",
    items: ["Editing (per episode)", "Mixing & mastering", "Show notes / transcript", "Audiogram / clips", "Publishing & distribution", "Monthly retainer"],
    tip: "Sell a per-episode package as one line, then list add-ons like clips and transcripts separately so upgrades are easy to approve.",
    faqs: [
      { q: "How do podcast producers bill?", a: "Per episode or on a monthly retainer. Itemize editing, mixing, and any extras so the client sees the full production scope." },
      { q: "Should I bundle or itemize add-ons?", a: "Bundle the core episode work, but list clips, transcripts, and audiograms as separate lines — they're easy upsells when visible." },
    ],
  },
  {
    slug: "music-producer", name: "Music Producer", noun: "music producer",
    intro: "Production, beats, mixing, and points all factor into how a producer gets paid. A clear invoice keeps artists and labels aligned on fees, rights, and deliverables.",
    items: ["Production fee (per track)", "Beat lease / exclusive", "Mixing", "Mastering", "Session musician coordination", "Revisions / recall"],
    tip: "Separate the production fee from publishing or points — the invoice handles the work-for-hire fee, and rights belong in a written agreement.",
    faqs: [
      { q: "What should a music producer invoice include?", a: "The production fee per track, mixing or mastering if included, deliverables, and payment terms. Keep splits and royalties in a separate agreement." },
      { q: "How do I bill beat leases?", a: "List the lease type (non-exclusive, exclusive) as a line item — exclusive rights should be priced significantly higher." },
    ],
  },
  {
    slug: "audio-engineer", name: "Audio Engineer", noun: "audio engineer",
    intro: "Tracking, mixing, and mastering are distinct services with distinct rates. An itemized invoice keeps studio clients clear on what each stage of the session costs.",
    items: ["Studio time (per hour/day)", "Recording / tracking", "Mixing (per song)", "Mastering (per song)", "Editing & comping", "Stems / alternate mixes"],
    tip: "Bill mixing and mastering per song, not per hour — clients budget per song, and it removes any worry about how long it takes.",
    faqs: [
      { q: "How do audio engineers invoice?", a: "By studio hour or per song for mixing and mastering. Itemize each service and deliverable so the client knows exactly what they're paying for." },
      { q: "Should stems be an extra line?", a: "Yes — stems and alternate mixes are deliverables beyond the standard mix. List them separately at a clear add-on rate." },
    ],
  },
  {
    slug: "wordpress-developer", name: "WordPress Developer", noun: "WordPress developer",
    intro: "Theme work, plugins, migrations, and care plans each bill differently. A clean WordPress invoice maps every line to something the client recognizes on their site.",
    items: ["Theme setup / customization", "Plugin configuration", "Custom development (hrs)", "Site migration", "Speed / SEO optimization", "Monthly care plan"],
    tip: "Turn maintenance into a recurring care-plan line — it's predictable revenue and clients value the peace of mind.",
    faqs: [
      { q: "How do WordPress developers bill?", a: "Fixed price for builds, hourly for custom work, and a monthly retainer for care plans. Itemize so each part of the project is clear." },
      { q: "Should I offer a care plan?", a: "Yes — updates, backups, and security are ongoing. Bill them as a recurring monthly line instead of one-off fixes." },
    ],
  },
  {
    slug: "seo-consultant", name: "SEO Consultant", noun: "SEO consultant",
    intro: "Audits, content, and link work deliver value over months, so clarity on the invoice matters. Itemizing your SEO services keeps clients seeing progress and renewing.",
    items: ["Technical SEO audit", "Keyword research & strategy", "On-page optimization", "Content briefs", "Link building / outreach", "Monthly retainer & reporting"],
    tip: "Add a short notes line tying the month's work to ranking or traffic gains — it makes renewals far easier.",
    faqs: [
      { q: "How do SEO consultants invoice?", a: "Usually a monthly retainer, sometimes plus one-off audits. Itemize the services delivered so clients see ongoing value." },
      { q: "Should audits be billed separately?", a: "Yes — a one-time technical audit is a deliverable on its own. Invoice it upfront, then move the client to a monthly retainer." },
    ],
  },
  {
    slug: "ppc-specialist", name: "PPC Specialist", noun: "PPC specialist",
    intro: "Paid-ads management fees should never get tangled with the client's ad spend. A clean invoice keeps your management fee, setup, and any spend reimbursement clearly separated.",
    items: ["Account setup / audit", "Monthly management fee", "Campaign build", "Creative / ad copy", "Conversion tracking setup", "Reporting"],
    tip: "Keep your management fee and the client's ad spend on separate lines (or separate invoices) — never blur the two.",
    faqs: [
      { q: "How do PPC specialists charge?", a: "A flat monthly fee or a percentage of ad spend. List the management fee clearly and keep it distinct from the platform spend." },
      { q: "Should ad spend be on my invoice?", a: "Only if you front it — then label it as a reimbursable line. Most specialists have the client pay the platform directly." },
    ],
  },
  {
    slug: "email-marketer", name: "Email Marketer", noun: "email marketer",
    intro: "Campaigns, automations, and list strategy each take real work. An itemized email-marketing invoice keeps clients clear on what's a one-off and what's ongoing.",
    items: ["Campaign design & build", "Automation / flow setup", "Copywriting", "List segmentation & strategy", "A/B testing", "Monthly retainer & reporting"],
    tip: "Bill flow and automation setup as one-time builds, then move ongoing campaigns to a monthly line — it separates project from retainer revenue.",
    faqs: [
      { q: "How do email marketers invoice?", a: "Per campaign, per automation build, or on a monthly retainer. Itemize each so clients see what's a project versus ongoing work." },
      { q: "Should setup be a separate fee?", a: "Yes — flow and platform setup is upfront work. Bill it once, then invoice ongoing campaigns and management monthly." },
    ],
  },
  {
    slug: "brand-strategist", name: "Brand Strategist", noun: "brand strategist",
    intro: "Strategy work is high-value and easy to undersell. A clear invoice that names each deliverable — positioning, messaging, guidelines — keeps your fees anchored to outcomes.",
    items: ["Brand discovery / workshop", "Positioning & messaging", "Naming", "Brand guidelines", "Competitor / market research", "Strategy retainer"],
    tip: "Package strategy as named deliverables, not hours — clients pay for the positioning and playbook, not the time it took.",
    faqs: [
      { q: "How do brand strategists bill?", a: "By project or retainer. Itemize each deliverable — discovery, positioning, guidelines — so the value of strategy is visible." },
      { q: "Can I bill a workshop separately?", a: "Yes — a discovery workshop is a discrete, billable deliverable. List it as its own line, often invoiced upfront." },
    ],
  },
  {
    slug: "technical-writer", name: "Technical Writer", noun: "technical writer",
    intro: "Docs, API references, and guides are billed by page, by hour, or by project. A tidy invoice helps engineering and product managers approve your work without back-and-forth.",
    items: ["Documentation (per page)", "API reference", "User guide / manual", "Editing & restructure", "Diagrams / screenshots", "Rush turnaround"],
    tip: "Bill by deliverable (per guide, per page) rather than vague 'writing' — it's easier to approve and easier to repeat next quarter.",
    faqs: [
      { q: "How do technical writers invoice?", a: "Per page, per project, or hourly. List each document as a line item so the client can match it to the scope." },
      { q: "Should I charge for diagrams?", a: "Yes — diagrams and annotated screenshots take time. List them as their own line rather than absorbing them into the page rate." },
    ],
  },
  {
    slug: "translator", name: "Translator", noun: "translator",
    intro: "Translation is billed by word, page, or hour, with rush and certification as add-ons. A clear invoice keeps agencies and direct clients aligned on rate and scope.",
    items: ["Translation (per word)", "Proofreading / review", "Certified translation", "Localization", "Rush turnaround", "Project minimum fee"],
    tip: "Set a project minimum fee — small jobs still carry setup and admin time, and a minimum keeps them worth your while.",
    faqs: [
      { q: "How do translators charge?", a: "Most bill per source word, sometimes per page or hour. State the language pair and word count on the invoice for clarity." },
      { q: "What is a certified translation fee?", a: "Certification adds a signed statement of accuracy. Bill it as a separate line above the standard translation rate." },
    ],
  },
  {
    slug: "ghostwriter", name: "Ghostwriter", noun: "ghostwriter",
    intro: "Ghostwriting trades your byline for a premium rate, billed by project or milestone. A clean invoice keeps long book and content engagements on a clear payment schedule.",
    items: ["Discovery / interviews", "Outline & sample chapter", "Manuscript (per word / milestone)", "Revisions", "Editing pass", "Rights transfer / kill fee"],
    tip: "Tie payments to milestones — deposit, outline, draft, final — so a long project keeps cash flowing instead of waiting for the end.",
    faqs: [
      { q: "How do ghostwriters invoice?", a: "By project, usually split into milestone payments. Itemize each phase so the client knows what each payment covers." },
      { q: "Should I take a deposit?", a: "Yes — ghostwriting is intensive. Invoice a deposit upfront, then bill the balance across outline, draft, and delivery milestones." },
    ],
  },
  {
    slug: "painter", name: "Painter", noun: "painter",
    intro: "Prep, paint, and labor all factor into a painting job. An itemized invoice keeps customers clear on coverage and coats, and supports clean deposit-then-balance billing.",
    items: ["Labor (per hour / room)", "Paint & materials", "Surface prep / patching", "Priming", "Trim & detail work", "Deposit / balance"],
    tip: "List prep separately from painting — customers underestimate prep, and itemizing it justifies the hours that make the finish last.",
    faqs: [
      { q: "What should a painting invoice include?", a: "Labor, paint and materials, prep work, and the area covered, plus your deposit and balance terms. Add your business logo and license." },
      { q: "How do painters handle deposits?", a: "Bill a deposit to cover materials before starting, then invoice the balance on completion after a final walkthrough." },
    ],
  },
  {
    slug: "carpenter", name: "Carpenter", noun: "carpenter",
    intro: "Custom builds and finish carpentry mix labor, materials, and shop time. A clear invoice itemizes each so clients understand the craft they're paying for.",
    items: ["Labor (per hour/day)", "Lumber & materials", "Custom build / millwork", "Installation", "Hardware & finishing", "Milestone / balance"],
    tip: "Quote custom builds by milestone — deposit for materials, progress payment at build, balance on install — to keep cash flow steady.",
    faqs: [
      { q: "What goes on a carpentry invoice?", a: "Labor, materials, the build or installation, and your payment terms. For custom work, reference the original quote so totals are easy to track." },
      { q: "Should materials be marked up?", a: "Many carpenters add a modest materials markup for sourcing and handling. List materials as their own line so it's transparent." },
    ],
  },
  {
    slug: "roofer", name: "Roofer", noun: "roofer",
    intro: "Tear-off, materials, labor, and disposal make roofing invoices add up fast. Clear itemization keeps homeowners and insurers aligned on what the job includes.",
    items: ["Tear-off / removal", "Roofing materials (per square)", "Labor", "Underlayment & flashing", "Disposal / dumpster", "Warranty"],
    tip: "Itemize by roofing square and include the warranty line — it reassures homeowners and helps with insurance claims.",
    faqs: [
      { q: "What should a roofing invoice include?", a: "Tear-off, materials by square, labor, disposal, and warranty terms, plus your license. InvoiceSnap itemizes it cleanly for insurance." },
      { q: "How do I bill for insurance jobs?", a: "Match your line items to the insurance scope so the adjuster can approve quickly. Keep supplements as clearly labeled extra lines." },
    ],
  },
  {
    slug: "hvac-technician", name: "HVAC Technician", noun: "HVAC technician",
    intro: "Service calls, parts, and labor define every HVAC job. A clear invoice separates the diagnostic, the repair, and any maintenance plan so customers know exactly what they paid for.",
    items: ["Service call / diagnostic", "Labor (per hour)", "Parts & components", "Refrigerant", "System install (per unit)", "Maintenance plan"],
    tip: "Offer a seasonal maintenance plan as a recurring line — it smooths your off-season income and keeps customers loyal.",
    faqs: [
      { q: "What goes on an HVAC invoice?", a: "A diagnostic or service call fee, labor, parts, and any maintenance plan, plus your license number. InvoiceSnap makes itemizing quick." },
      { q: "Should I sell maintenance plans?", a: "Yes — recurring tune-ups are predictable revenue. Bill the plan as its own scheduled line item." },
    ],
  },
  {
    slug: "flooring-installer", name: "Flooring Installer", noun: "flooring installer",
    intro: "Material, removal, subfloor prep, and install per square foot all shape a flooring bill. An itemized invoice keeps customers clear on coverage and avoids disputes.",
    items: ["Flooring material (per sq ft)", "Removal / disposal of old floor", "Subfloor prep / leveling", "Installation (per sq ft)", "Trim & transitions", "Deposit / balance"],
    tip: "Bill install and materials per square foot, and list subfloor prep separately — prep is where surprises hide, so make it visible upfront.",
    faqs: [
      { q: "What should a flooring invoice include?", a: "Materials and installation by square foot, removal, prep, trim, and your deposit and balance terms. Add your business details." },
      { q: "How do I handle subfloor surprises?", a: "Quote prep as a separate line and note that uncovered issues are billed as a change order, agreed before extra work begins." },
    ],
  },
  {
    slug: "tiler", name: "Tiler", noun: "tiler",
    intro: "Tile, setting materials, and labor per square foot define a tiling job. A clean invoice itemizes prep, layout, and grout so clients see the precision they're paying for.",
    items: ["Tile material (per sq ft)", "Setting materials & grout", "Surface prep / waterproofing", "Installation (per sq ft)", "Edging & trim", "Sealing"],
    tip: "List waterproofing and prep separately — they protect the install for years and justify hours clients might otherwise question.",
    faqs: [
      { q: "What goes on a tiling invoice?", a: "Tile and setting materials, prep and waterproofing, installation by square foot, and sealing, plus payment terms. InvoiceSnap itemizes it fast." },
      { q: "Should I charge for layout?", a: "Intricate patterns and layout take real time. Note complex layouts as their own line rather than absorbing them into the base rate." },
    ],
  },
  {
    slug: "welder", name: "Welder", noun: "welder",
    intro: "Fabrication, materials, and shop or mobile labor define welding work. A clear invoice itemizes material, labor, and any mobile call-out so clients understand the bill.",
    items: ["Labor (per hour)", "Materials / metal stock", "Fabrication", "Mobile / on-site call-out", "Cutting & finishing", "Rush / after-hours"],
    tip: "Add a mobile call-out line for on-site jobs — bringing the rig to them is a real cost that shop pricing doesn't cover.",
    faqs: [
      { q: "How do welders invoice?", a: "Hourly plus materials, with a call-out fee for mobile work. Itemize fabrication and finishing so the client sees the full scope." },
      { q: "Should I charge for materials markup?", a: "List metal stock as its own line. A modest markup for sourcing is standard — keeping it transparent avoids questions." },
    ],
  },
  {
    slug: "locksmith", name: "Locksmith", noun: "locksmith",
    intro: "Service calls, hardware, and labor make up every locksmith job, often with an emergency premium. A clear invoice keeps customers comfortable paying on the spot.",
    items: ["Service call fee", "Labor", "Locks & hardware", "Rekey (per lock)", "Emergency / after-hours call-out", "Key cutting"],
    tip: "Separate the service call from labor and parts — customers expect a trip charge, and itemizing it prevents friction at payment.",
    faqs: [
      { q: "What should a locksmith invoice include?", a: "A service call fee, labor, hardware, and any emergency premium, plus your license. InvoiceSnap lets you bill from your phone on-site." },
      { q: "How do I bill emergency call-outs?", a: "Add an after-hours call-out line at your premium rate on top of standard labor and parts." },
    ],
  },
  {
    slug: "pest-control", name: "Pest Control", noun: "pest control",
    intro: "One-off treatments and recurring plans bill differently. An itemized invoice keeps customers clear on the treatment and makes recurring service easy to renew.",
    items: ["Initial inspection", "Treatment (per visit)", "Materials / chemicals", "Recurring service plan", "Specialty (termite / rodent)", "Re-treatment guarantee"],
    tip: "Sell the recurring plan as a scheduled line item — pests come back, and a quarterly plan keeps customers protected and your revenue steady.",
    faqs: [
      { q: "How do pest control businesses invoice?", a: "Per treatment or on a recurring plan. List the service, materials, and any guarantee so customers know what's covered." },
      { q: "Should I offer a service plan?", a: "Yes — quarterly or monthly plans are predictable revenue. Bill the plan as its own scheduled line item." },
    ],
  },
  {
    slug: "pressure-washing", name: "Pressure Washing", noun: "pressure washing",
    intro: "Driveways, decks, and exteriors price by area and surface. A clean invoice itemizes each surface so customers see exactly what was cleaned.",
    items: ["Driveway / concrete (per sq ft)", "House / siding wash", "Deck / patio", "Roof soft-wash", "Sealing", "Recurring service"],
    tip: "Quote by surface and square footage, and offer a recurring exterior wash — annual or seasonal cleaning is an easy add-on line.",
    faqs: [
      { q: "What should a pressure washing invoice include?", a: "Each surface cleaned with its area, any sealing, and payment terms. Add your business logo for a professional look." },
      { q: "Can I bill recurring cleans?", a: "Yes — seasonal exterior washing is recurring revenue. List it as a scheduled service line and save the customer to repeat it." },
    ],
  },
  {
    slug: "tree-service", name: "Tree Service", noun: "tree service",
    intro: "Removal, trimming, stump grinding, and cleanup all carry real risk and cost. An itemized invoice keeps customers clear on the scope of a job that's priced by difficulty.",
    items: ["Tree removal (per tree)", "Trimming / pruning", "Stump grinding", "Debris haul-away", "Emergency / storm work", "Equipment / crane"],
    tip: "Price by tree and difficulty, and list haul-away separately — cleanup is real labor that customers forget to budget for.",
    faqs: [
      { q: "What goes on a tree service invoice?", a: "Removal or trimming per tree, stump grinding, haul-away, and any equipment, plus your insurance details. InvoiceSnap itemizes it cleanly." },
      { q: "Should I charge for cleanup?", a: "Yes — hauling debris is labor and disposal cost. List it as its own line rather than absorbing it into the removal price." },
    ],
  },
  {
    slug: "appliance-repair", name: "Appliance Repair", noun: "appliance repair technician",
    intro: "A diagnostic fee, parts, and labor define every repair. A clear invoice keeps customers comfortable and makes warranty terms easy to reference.",
    items: ["Diagnostic / service call", "Labor", "Replacement parts", "Emergency / same-day", "Installation", "Repair warranty"],
    tip: "Apply the diagnostic fee toward the repair if the customer proceeds — note it on the invoice, and it turns a fee into a reason to book.",
    faqs: [
      { q: "What should an appliance repair invoice include?", a: "A diagnostic fee, labor, parts, and your repair warranty, plus payment terms. InvoiceSnap lets you bill on-site in seconds." },
      { q: "Do I credit the diagnostic fee?", a: "Many technicians apply the diagnostic toward the repair. Show it as a credit line so the customer sees the goodwill." },
    ],
  },
  {
    slug: "auto-mechanic", name: "Auto Mechanic", noun: "auto mechanic",
    intro: "Parts, labor hours, and shop fees make up every repair order. An itemized invoice builds trust and helps customers approve work before it starts.",
    items: ["Diagnostic", "Labor (per hour)", "Parts", "Shop supplies / fees", "Fluids & consumables", "Warranty"],
    tip: "Quote labor by the book hour and list parts separately — a clear breakdown is what turns a one-time customer into a regular.",
    faqs: [
      { q: "What goes on a mechanic's invoice?", a: "Diagnostic, labor by the hour, parts, shop supplies, and your warranty, plus payment terms. InvoiceSnap itemizes the repair order for you." },
      { q: "Should I get approval before extra work?", a: "Yes — quote first, then bill. Note approved additions as their own lines so the final invoice matches what the customer agreed to." },
    ],
  },
  {
    slug: "mobile-detailing", name: "Mobile Car Detailer", noun: "mobile detailer",
    intro: "Packages, add-ons, and travel define mobile detailing. A clean invoice keeps customers clear on what each package includes and makes upsells easy.",
    items: ["Exterior detail package", "Interior detail package", "Full detail", "Ceramic coating / wax", "Pet hair / heavy soil", "Travel fee"],
    tip: "Sell tiered packages as single lines, then list add-ons like ceramic coating separately — visible upgrades sell themselves.",
    faqs: [
      { q: "How do mobile detailers invoice?", a: "By package, with add-ons and a travel fee. List each so the customer sees what's included and what's extra." },
      { q: "Should I charge a travel fee?", a: "For out-of-area jobs, yes — add a travel line. Coming to the customer is convenience worth charging for." },
    ],
  },
  {
    slug: "moving-company", name: "Moving Company", noun: "mover",
    intro: "Crew, truck, hours, and materials define a moving job. A clear invoice keeps customers aligned on the estimate and avoids disputes on moving day.",
    items: ["Crew labor (per hour)", "Truck / mileage", "Packing materials", "Packing service", "Heavy / specialty items", "Travel / fuel fee"],
    tip: "Bill by crew size and hours, and list specialty items (piano, safe) separately — they're extra labor and risk that deserve their own line.",
    faqs: [
      { q: "What should a moving invoice include?", a: "Crew hours, truck and mileage, materials, and any specialty items, plus your terms. InvoiceSnap itemizes the move clearly." },
      { q: "How do I handle the estimate vs final?", a: "Reference the original estimate and list any approved extras as separate lines so the final total is easy to reconcile." },
    ],
  },
  {
    slug: "junk-removal", name: "Junk Removal", noun: "junk removal service",
    intro: "Volume, labor, and disposal fees define junk removal. An itemized invoice keeps customers clear on what drove the price and supports clean on-site billing.",
    items: ["Pickup / labor", "Volume (per load / fraction)", "Disposal / dump fees", "Heavy items (appliances, furniture)", "Recycling / donation handling", "Same-day service"],
    tip: "Price by truck volume and list disposal fees separately — dump charges are real costs customers understand when they're itemized.",
    faqs: [
      { q: "How do junk removal businesses invoice?", a: "By volume or load, plus disposal fees and any heavy items. List each so the customer sees how the price was built." },
      { q: "Should disposal be separate?", a: "Yes — landfill and recycling fees are pass-through costs. Itemize them so your labor and the dump fee are both transparent." },
    ],
  },
  {
    slug: "accountant", name: "Accountant", noun: "accountant",
    intro: "Tax prep, advisory, and filings each carry distinct value. A clean, itemized invoice sets the professional standard your clients expect and keeps engagements clear.",
    items: ["Tax preparation & filing", "Monthly / quarterly accounting", "Financial statements", "Advisory (per hour)", "Payroll / compliance", "Year-end review"],
    tip: "Separate compliance work from advisory — advisory is your highest-value service, and itemizing it keeps the rate from getting buried.",
    faqs: [
      { q: "How do accountants invoice clients?", a: "By engagement, monthly retainer, or hourly for advisory. Itemize each service so clients see the full scope of what you handle." },
      { q: "Should advisory be billed separately?", a: "Yes — keep recurring compliance and one-off advisory on separate lines so your highest-value work is visible and easy to repeat." },
    ],
  },
  {
    slug: "real-estate-agent", name: "Real Estate Agent", noun: "real estate agent",
    intro: "Beyond commission, agents bill for marketing, staging, and transaction services. A clear invoice keeps these professional fees organized and transparent for clients.",
    items: ["Professional / marketing fee", "Photography & media", "Staging", "Listing / advertising", "Transaction coordination", "Administrative fee"],
    tip: "Itemize marketing and transaction fees separately from commission — clients value seeing exactly what your service includes.",
    faqs: [
      { q: "What should a real estate invoice include?", a: "Any professional, marketing, or transaction fees with clear descriptions, plus payment terms. InvoiceSnap keeps it polished and on-brand." },
      { q: "Can I bill marketing separately?", a: "Yes — photography, staging, and advertising can be itemized so clients understand the investment behind a strong listing." },
    ],
  },
  {
    slug: "notary", name: "Mobile Notary", noun: "notary",
    intro: "Per-signature fees, travel, and after-hours work define mobile notary jobs. A clean invoice keeps each notarization and trip charge clear and compliant.",
    items: ["Notarization (per signature)", "Travel / mobile fee", "Loan signing", "Printing / scanning", "After-hours / weekend", "Waiting time"],
    tip: "List the per-signature fee and the travel fee separately — many states cap the notarial fee, so the travel line is where mobile value lives.",
    faqs: [
      { q: "How do mobile notaries invoice?", a: "A per-signature notarial fee plus a travel fee, with extras for printing or after-hours. Itemize each to stay transparent and compliant." },
      { q: "Why separate the travel fee?", a: "Many states regulate the maximum notarial fee per signature. The travel or convenience fee is billed separately and isn't capped the same way." },
    ],
  },
  {
    slug: "life-coach", name: "Life Coach", noun: "life coach",
    intro: "Sessions, packages, and programs each bill differently. A simple, professional invoice keeps your coaching practice organized and clients committed.",
    items: ["Single session", "Coaching package (e.g. 6)", "Monthly program", "Group coaching", "Workshop / intensive", "Accountability check-ins"],
    tip: "Sell multi-session packages as one line — clients commit to the journey and you cut down on per-session scheduling and billing.",
    faqs: [
      { q: "How do life coaches invoice?", a: "Per session or by package. List the package and number of sessions so clients see exactly what's included." },
      { q: "Should I bill packages upfront?", a: "Many coaches invoice the full package or a deposit upfront to secure commitment, then the balance partway through." },
    ],
  },
  {
    slug: "business-coach", name: "Business Coach", noun: "business coach",
    intro: "Coaching executives and founders is premium work billed by package or retainer. A clear invoice ties your fee to the engagement and keeps high-value clients confident.",
    items: ["Strategy session", "Monthly coaching retainer", "Quarterly intensive", "Group / mastermind", "Workshop facilitation", "Email / Voxer support"],
    tip: "Bill a monthly retainer on the same date each cycle and note between-session support — it positions you as an ongoing partner, not an hourly cost.",
    faqs: [
      { q: "How do business coaches bill?", a: "Usually a monthly retainer or package. Itemize the sessions and any between-session support so the full value is clear." },
      { q: "Can I include async support?", a: "Yes — note email or Voxer support as part of the retainer line; it's a differentiator clients value and a reason to renew." },
    ],
  },
  {
    slug: "nutritionist", name: "Nutritionist", noun: "nutritionist",
    intro: "Consultations, plans, and follow-ups each carry value. A clean invoice keeps your nutrition practice professional and clients on a clear plan.",
    items: ["Initial consultation", "Custom meal plan", "Follow-up session", "Monthly program", "Grocery / supplement guide", "Group workshop"],
    tip: "Bundle the consult and first plan as an onboarding package, then move clients to a monthly follow-up line for ongoing accountability.",
    faqs: [
      { q: "How do nutritionists invoice?", a: "Per consultation, by plan, or on a monthly program. Itemize each so clients see what's included at every step." },
      { q: "Should plans and sessions be separate?", a: "Yes — a custom meal plan is a deliverable; follow-ups are ongoing. Listing them separately makes your packages easy to understand." },
    ],
  },
  {
    slug: "massage-therapist", name: "Massage Therapist", noun: "massage therapist",
    intro: "Sessions, modalities, and packages define a massage practice. A simple invoice keeps billing professional, especially for clients submitting to insurance or HSA.",
    items: ["Session (per 60/90 min)", "Deep tissue / specialty", "Package (e.g. 5 sessions)", "Hot stone / add-ons", "Mobile / in-home fee", "Gratuity (optional)"],
    tip: "Sell session packages as one line — clients prepay, commit to their wellness routine, and you reduce per-visit admin.",
    faqs: [
      { q: "What should a massage invoice include?", a: "The session length and type, any add-ons, and payment terms. A clear invoice helps clients submit to HSA or insurance." },
      { q: "Can I bill packages?", a: "Yes — prepaid packages are one line item. Save the client's details and decrement sessions as they visit." },
    ],
  },
  {
    slug: "esthetician", name: "Esthetician", noun: "esthetician",
    intro: "Facials, treatments, and packages each price differently. A clean invoice keeps your skincare services clear and makes retail and add-ons easy to bill.",
    items: ["Facial / treatment", "Chemical peel", "Waxing", "Treatment package", "Retail products", "Membership"],
    tip: "List retail products as their own lines — skincare retail is high-margin, and an itemized invoice makes the add-on natural.",
    faqs: [
      { q: "How do estheticians invoice?", a: "Per treatment, by package, or membership. Itemize services and any retail so clients see the full visit." },
      { q: "Should memberships be recurring?", a: "Yes — a monthly facial membership is predictable revenue. Bill it as a recurring line and save the client to repeat." },
    ],
  },
  {
    slug: "hairstylist", name: "Hairstylist", noun: "hairstylist",
    intro: "Cuts, color, and treatments each carry their own time and product cost. A clean invoice keeps salon and freelance billing professional and clear.",
    items: ["Cut & style", "Color / highlights", "Treatment / conditioning", "Extensions", "Blowout", "Retail products"],
    tip: "Itemize color and treatments separately from the cut — they're the higher-value services, and a clear breakdown supports your pricing.",
    faqs: [
      { q: "How do hairstylists invoice?", a: "Per service, sometimes plus retail. List each service so clients see what the appointment included." },
      { q: "Should I bill deposits for big appointments?", a: "For lengthy color or extension work, a deposit protects your time. Invoice it upfront and apply it to the final total." },
    ],
  },
  {
    slug: "barber", name: "Barber", noun: "barber",
    intro: "Cuts, shaves, and grooming services price quickly but add up with add-ons. A clean invoice or receipt keeps a barber business professional and consistent.",
    items: ["Haircut", "Beard trim / shave", "Hot towel shave", "Line-up / detailing", "Kids / senior cut", "Grooming products"],
    tip: "Offer a cut-and-beard combo as one line — bundling raises the average ticket and clients see it as a deal.",
    faqs: [
      { q: "How do barbers invoice or receipt clients?", a: "Per service or combo. List each so the client has a clear, professional receipt — useful for regulars and bookings." },
      { q: "Can I sell memberships?", a: "Yes — a monthly cut membership is recurring revenue. Bill it as a scheduled line and save the client to repeat." },
    ],
  },
  {
    slug: "makeup-artist", name: "Makeup Artist", noun: "makeup artist",
    intro: "Bridal, events, and shoots each price differently, often with travel and trials. A clear invoice keeps booking, deposit, and balance terms clean for big days.",
    items: ["Bridal / event makeup", "Trial session", "Per additional person", "Travel / on-location fee", "Early call-time fee", "Touch-up kit"],
    tip: "Take a non-refundable deposit to hold the date, and bill per additional face — group bookings are where event makeup scales.",
    faqs: [
      { q: "What should a makeup artist invoice include?", a: "The service, any trial, per-person pricing, travel, and your deposit terms. InvoiceSnap keeps it polished for bridal clients." },
      { q: "How do deposits work for weddings?", a: "Bill a non-refundable booking deposit to secure the date, then invoice the balance before or on the event day." },
    ],
  },
  {
    slug: "nail-technician", name: "Nail Technician", noun: "nail technician",
    intro: "Manicures, enhancements, and art each take different time and product. A clean invoice or receipt keeps a nail business professional and add-ons easy to bill.",
    items: ["Manicure", "Pedicure", "Gel / acrylic set", "Fill / maintenance", "Nail art (per nail)", "Removal"],
    tip: "Charge nail art per nail or by design complexity — it's the detail work that justifies premium pricing, so make it a visible line.",
    faqs: [
      { q: "How do nail technicians invoice?", a: "Per service, plus add-ons like art or removal. List each so the client sees what the appointment included." },
      { q: "Should removal be a separate charge?", a: "Yes — soak-off and removal take time. List it as its own line rather than including it for free with a new set." },
    ],
  },
  {
    slug: "dog-groomer", name: "Dog Groomer", noun: "dog groomer",
    intro: "Breed, size, and condition all shape a grooming price. A clean invoice keeps customers clear on the package and makes recurring grooming easy to schedule.",
    items: ["Full groom (by size/breed)", "Bath & brush", "Nail trim", "De-shedding treatment", "De-matting (per condition)", "Mobile / pickup fee"],
    tip: "Price by size and coat, and add a de-matting line for tough coats — it's extra time and care that shouldn't be free.",
    faqs: [
      { q: "How do dog groomers invoice?", a: "By groom package based on size and breed, plus add-ons. List each so customers see what's included." },
      { q: "Can I bill recurring grooms?", a: "Yes — schedule a recurring groom every 4–8 weeks as its own line and save the pet's details to repeat in seconds." },
    ],
  },
  {
    slug: "dog-walker", name: "Dog Walker", noun: "dog walker",
    intro: "Walks, packages, and add-ons price simply but benefit from clear billing. A tidy invoice keeps recurring clients on a schedule and payments on time.",
    items: ["Single walk (30/60 min)", "Walk package (weekly)", "Group walk", "Solo walk premium", "Holiday / weekend rate", "Pet taxi / extras"],
    tip: "Sell weekly walk packages as one recurring line — it locks in regulars and removes the friction of billing each walk.",
    faqs: [
      { q: "How do dog walkers invoice?", a: "Per walk or by weekly package. List the schedule so clients see the walks covered and the rate." },
      { q: "Should holidays cost more?", a: "Yes — note a holiday or weekend premium as its own line so the higher rate is clear in advance." },
    ],
  },
  {
    slug: "pet-sitter", name: "Pet Sitter", noun: "pet sitter",
    intro: "Visits, overnights, and holiday rates define pet sitting. A clear invoice keeps clients aligned on the schedule and any extra care provided.",
    items: ["Drop-in visit", "Overnight stay", "Dog walking add-on", "Medication administration", "Holiday / peak rate", "Key pickup / meet & greet"],
    tip: "Charge a holiday premium and note medication or special-needs care as its own line — extra responsibility deserves extra pay.",
    faqs: [
      { q: "How do pet sitters invoice?", a: "Per visit or overnight, plus add-ons. List the dates and services so clients see exactly what was covered." },
      { q: "Should special care be extra?", a: "Yes — medication, injections, or multiple pets add responsibility. Bill them as separate lines above the base visit rate." },
    ],
  },
  {
    slug: "event-planner", name: "Event Planner", noun: "event planner",
    intro: "Planning fees, coordination, and vendor management each carry value. A clear invoice keeps complex events organized and your fees distinct from vendor costs.",
    items: ["Planning fee", "Day-of coordination", "Vendor management", "Design / styling", "Setup & teardown", "Travel & expenses"],
    tip: "Keep your planning fee separate from vendor pass-throughs — never blur your service fee with the catering or venue invoices.",
    faqs: [
      { q: "How do event planners invoice?", a: "By package or planning fee, plus coordination and any expenses. Itemize so clients see your service apart from vendor costs." },
      { q: "Should vendor costs be on my invoice?", a: "Only if you pay them and pass them through — then label them as reimbursables. Keep your planning fee on its own line." },
    ],
  },
  {
    slug: "wedding-planner", name: "Wedding Planner", noun: "wedding planner",
    intro: "Full planning, partial, and day-of coordination each price differently. A clean invoice keeps couples clear on the package and the payment schedule for the big day.",
    items: ["Full planning package", "Partial planning", "Day-of coordination", "Vendor sourcing & management", "Design & styling", "Travel / destination fee"],
    tip: "Bill the package in milestones — booking deposit, midpoint, final before the date — so a long engagement keeps cash flowing.",
    faqs: [
      { q: "What should a wedding planner invoice include?", a: "The planning package, coordination, and any travel, plus your milestone payment schedule. InvoiceSnap keeps it elegant and clear." },
      { q: "How do payment milestones work?", a: "Most planners split the fee into a deposit, a midpoint payment, and a final balance before the wedding date." },
    ],
  },
  {
    slug: "caterer", name: "Caterer", noun: "caterer",
    intro: "Per-head pricing, staff, rentals, and travel define catering. An itemized invoice keeps clients clear on the menu and headcount and supports deposit billing.",
    items: ["Menu (per head)", "Staff / service", "Rentals (tables, linens)", "Delivery & setup", "Bar / beverage service", "Gratuity / service charge"],
    tip: "Price per head and confirm the final count a week out — list it clearly so a headcount change is a simple line adjustment, not a dispute.",
    faqs: [
      { q: "How do caterers invoice?", a: "Per head plus staff, rentals, and delivery. Itemize each so the client sees how the per-person price and extras build the total." },
      { q: "How do deposits work for catering?", a: "Bill a deposit to lock the date and cover sourcing, then invoice the balance once the final headcount is confirmed." },
    ],
  },
  {
    slug: "dj", name: "Mobile DJ", noun: "DJ",
    intro: "Event hours, equipment, and add-ons like lighting define DJ pricing. A clear invoice keeps the package and any extras clean for weddings and parties.",
    items: ["Event package (per hours)", "Additional hour", "Lighting / uplighting", "MC services", "Travel fee", "Ceremony / extra sound system"],
    tip: "Sell a tiered event package and bill additional hours separately — overtime at the party is common and should be a clear rate.",
    faqs: [
      { q: "What should a DJ invoice include?", a: "The event package and hours, any lighting or MC add-ons, travel, and your deposit terms. InvoiceSnap itemizes it cleanly." },
      { q: "How do deposits work?", a: "Take a booking deposit to hold the date, then invoice the balance before or on the event day." },
    ],
  },
  {
    slug: "florist", name: "Florist", noun: "florist",
    intro: "Arrangements, event work, and delivery each price differently. A clean invoice keeps weddings and recurring corporate orders clear and on schedule.",
    items: ["Arrangement (per piece)", "Bridal / event florals", "Delivery & setup", "Rental items (vases, arches)", "Recurring / subscription order", "Consultation"],
    tip: "Bill event florals with a deposit and list delivery and setup separately — installation is labor that the flowers' price doesn't cover.",
    faqs: [
      { q: "How do florists invoice?", a: "Per arrangement or event package, plus delivery and setup. Itemize so clients see the florals and the labor distinctly." },
      { q: "Can I bill recurring orders?", a: "Yes — weekly corporate or subscription arrangements are recurring revenue. List them as a scheduled line and save the client." },
    ],
  },
  {
    slug: "interior-designer", name: "Interior Designer", noun: "interior designer",
    intro: "Design fees, sourcing, and project management each carry value. A clear invoice keeps your fee distinct from furnishings and keeps clients confident through a long project.",
    items: ["Design concept / fee", "Space planning", "Sourcing & procurement", "Project management (hrs)", "Furnishings / materials", "Install & styling"],
    tip: "Charge a design fee separate from procurement — your expertise is the product, and bundling it into furniture costs undervalues it.",
    faqs: [
      { q: "How do interior designers invoice?", a: "A design fee plus hourly or flat project management, with furnishings itemized. List each so clients see service apart from product." },
      { q: "Should furniture be on my invoice?", a: "If you procure it, list furnishings as their own lines (often with a markup). Keep your design fee clearly separate." },
    ],
  },
  {
    slug: "yoga-instructor", name: "Yoga Instructor", noun: "yoga instructor",
    intro: "Private sessions, class packs, and corporate bookings each bill differently. A simple invoice keeps your teaching organized and clients on a routine.",
    items: ["Private session", "Class pack (e.g. 10)", "Group / corporate class", "Workshop", "Online / on-demand", "Travel (in-home)"],
    tip: "Sell class packs and private packages as one line — clients prepay, commit to their practice, and you cut per-class admin.",
    faqs: [
      { q: "How do yoga instructors invoice?", a: "Per private session, by class pack, or per corporate booking. List each so clients see what's included." },
      { q: "Can I bill corporate clients?", a: "Yes — corporate and studio bookings often want a proper invoice. List the sessions, dates, and rate clearly." },
    ],
  },
  {
    slug: "music-teacher", name: "Music Teacher", noun: "music teacher",
    intro: "Lessons, packages, and recital fees define private music teaching. A clean invoice keeps parents and adult students clear on the schedule and any materials.",
    items: ["Private lesson (per 30/60 min)", "Lesson package (monthly)", "Group class", "Recital / performance fee", "Materials / books", "Online lesson"],
    tip: "Bill monthly for a set number of lessons rather than per lesson — it stabilizes your income and reduces no-shows.",
    faqs: [
      { q: "How do music teachers invoice?", a: "Per lesson or by monthly package. List the number of lessons and instrument so parents see exactly what they're paying for." },
      { q: "Should I bill monthly?", a: "Yes — a monthly package on a set date smooths income and cuts admin. Save the student to repeat the invoice each month." },
    ],
  },
  {
    slug: "driving-instructor", name: "Driving Instructor", noun: "driving instructor",
    intro: "Lessons, packages, and test-day services define driving instruction. A clear invoice keeps learners and parents aligned on hours and any test fees.",
    items: ["Single lesson (per hour)", "Lesson package", "Intensive course", "Test-day / vehicle use", "Pickup / drop-off", "Theory support"],
    tip: "Sell multi-lesson packages as one line — learners commit to enough hours to pass, and you lock in the booking.",
    faqs: [
      { q: "How do driving instructors invoice?", a: "Per lesson or by package, plus test-day use of the vehicle. List the hours so learners see what's included." },
      { q: "Should test day be extra?", a: "Yes — use of your car for the test and the time involved is its own line, separate from regular lesson hours." },
    ],
  },
];

export function getCatalogProfession(slug: string): Profession | undefined {
  return CATALOG.find((p) => p.slug === slug);
}
