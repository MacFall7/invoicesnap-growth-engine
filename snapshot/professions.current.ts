export interface Profession {
  slug: string;
  name: string; // Title case, e.g. "Graphic Designer"
  noun: string; // lowercase, e.g. "graphic designer"
  intro: string;
  items: string[];
  tip: string;
  faqs: { q: string; a: string }[];
}

export const PROFESSIONS: Profession[] = [
  {
    slug: "graphic-designer", name: "Graphic Designer", noun: "graphic designer",
    intro: "From logo packages to full brand systems, graphic designers juggle several deliverables per client. An invoice that itemizes each piece of work — and your revision policy — keeps projects profitable and payments on time.",
    items: ["Logo design", "Brand identity package", "Social media templates", "Print layout (per page)", "Stock assets / licensing", "Additional revision round"],
    tip: "List revision rounds as their own line item so scope creep becomes billable instead of a freebie.",
    faqs: [
      { q: "What should a graphic design invoice include?", a: "Your studio details, the client, an itemized list of deliverables, any usage or licensing terms, and clear payment terms. InvoiceSnap fills all of this in for you." },
      { q: "Should I charge a deposit?", a: "Many designers bill 50% upfront and 50% on delivery. Send a deposit invoice first, then a balance invoice when the work ships." },
    ],
  },
  {
    slug: "web-developer", name: "Web Developer", noun: "web developer",
    intro: "Whether you bill hourly, per sprint, or per project, web developers need invoices that map cleanly to the work delivered. Itemize features, hours, and any third-party costs so clients can approve quickly.",
    items: ["Front-end development (hrs)", "Back-end / API work (hrs)", "Bug fixes & QA", "Hosting / domain setup", "Third-party licenses", "Monthly maintenance retainer"],
    tip: "Track hours per feature, not per day — it makes your invoice read like a deliverables list and reduces pushback.",
    faqs: [
      { q: "How do developers usually invoice?", a: "Common models are hourly, fixed-price per milestone, or a monthly retainer. List the model clearly and break the total into line items the client recognizes." },
      { q: "Should I invoice for maintenance separately?", a: "Yes — keep build work and ongoing maintenance on separate invoices or line items so recurring revenue is easy to track." },
    ],
  },
  {
    slug: "photographer", name: "Photographer", noun: "photographer",
    intro: "Sessions, prints, licensing, travel — photography invoices add up across line items. A professional, itemized invoice protects your usage rights and gets you paid faster after the shoot.",
    items: ["Session fee (per hour/day)", "Editing & retouching", "Print package", "Digital image licensing", "Travel / mileage", "Rush delivery"],
    tip: "Spell out image licensing and usage rights on the invoice — it prevents disputes about how photos can be used.",
    faqs: [
      { q: "What goes on a photography invoice?", a: "Your session fee, editing, prints or digital deliverables, licensing terms, travel, and payment terms. Add your logo for a polished, on-brand look." },
      { q: "How do I handle deposits for shoots?", a: "Bill a non-refundable booking deposit up front to hold the date, then invoice the balance on or before delivery." },
    ],
  },
  {
    slug: "consultant", name: "Consultant", noun: "consultant",
    intro: "Consultants sell expertise and time, so clarity matters. A clean invoice that ties fees to outcomes or hours keeps high-value clients confident and your cash flow steady.",
    items: ["Strategy session (per hour)", "Project retainer", "Research & analysis", "Workshop facilitation", "Travel & expenses", "Follow-up advisory"],
    tip: "If you work on retainer, invoice on the same date each month — predictable billing builds trust and steadies your income.",
    faqs: [
      { q: "How should consultants present fees?", a: "Whether hourly or fixed retainer, itemize the engagement so the client sees exactly what they're paying for. Add a notes line summarizing the scope." },
      { q: "Can I bill expenses separately?", a: "Yes — list travel and expenses as their own line items, ideally with receipts attached in your email when you send the invoice." },
    ],
  },
  {
    slug: "copywriter", name: "Copywriter", noun: "copywriter",
    intro: "Words are your product, and per-word or per-project billing should read clearly on the page. A tidy invoice helps editors and marketing managers approve your work without back-and-forth.",
    items: ["Website copy (per page)", "Blog post / article", "Email sequence", "Ad copy / headlines", "Editing & proofreading", "Rush turnaround"],
    tip: "Bill by deliverable (per page, per email) rather than vague 'content' — it's easier to approve and easier to repeat.",
    faqs: [
      { q: "How do copywriters invoice clients?", a: "By project, by word, or by retainer. List each deliverable as its own line so the client can match it to the brief." },
      { q: "Should I include revisions in my rate?", a: "Specify how many revision rounds are included, then bill extra rounds as a separate line item to protect your time." },
    ],
  },
  {
    slug: "videographer", name: "Videographer", noun: "videographer",
    intro: "Pre-production, shoot days, editing, and licensing each carry real cost. An itemized videography invoice makes your pricing transparent and keeps complex projects on budget.",
    items: ["Pre-production / planning", "Shoot day (per day)", "Editing & color grading", "Motion graphics", "Music licensing", "Additional cut / version"],
    tip: "Charge per shoot day and per edit version separately — clients often underestimate the editing time, and this makes it visible.",
    faqs: [
      { q: "What should a videography invoice show?", a: "Shoot days, editing, graphics, music licensing, and delivery format, plus your payment terms. Add your studio logo for a professional finish." },
      { q: "How do I bill for extra edits?", a: "Define the number of included revisions, then list each additional version as its own billable line item." },
    ],
  },
  {
    slug: "social-media-manager", name: "Social Media Manager", noun: "social media manager",
    intro: "Most social work is retainer-based, but deliverables vary month to month. A clear invoice that lists content, ad management, and reporting keeps clients seeing the value you deliver.",
    items: ["Monthly management retainer", "Content creation (per post)", "Ad campaign management", "Community management", "Analytics & reporting", "Strategy session"],
    tip: "Add a short notes line summarizing the month's wins — an invoice is a great place to remind clients of your impact.",
    faqs: [
      { q: "How do social media managers bill?", a: "Usually a monthly retainer, sometimes plus per-post or ad-spend management fees. Itemize so the client sees the full scope." },
      { q: "Should ad spend be on my invoice?", a: "Keep your management fee separate from the client's ad budget. If you front ad spend, list it as a clearly labeled reimbursable line." },
    ],
  },
  {
    slug: "marketing-agency", name: "Marketing Agency", noun: "marketing agency",
    intro: "Agencies bill across channels and team members, so invoices can get complex fast. Clean itemization by service line keeps approvals quick and clients happy.",
    items: ["Strategy & account management", "Paid media management", "SEO / content", "Creative production", "Reporting & analytics", "Tools & subscriptions"],
    tip: "Group line items by service (paid, SEO, creative) so each department's value is visible and easy to justify at renewal.",
    faqs: [
      { q: "How should an agency structure invoices?", a: "By service line or by retainer plus project work. Itemizing each service makes large invoices easy for clients to approve." },
      { q: "Can I bill a retainer and projects together?", a: "Yes — list the monthly retainer as one line and any one-off projects as additional lines on the same invoice." },
    ],
  },
  {
    slug: "virtual-assistant", name: "Virtual Assistant", noun: "virtual assistant",
    intro: "VAs bill by the hour or by package across a range of tasks. A simple, itemized invoice keeps your hours transparent and your clients coming back.",
    items: ["Admin support (hrs)", "Inbox & calendar management", "Customer support", "Data entry", "Research tasks", "Monthly package"],
    tip: "If you offer packages, show the package as one line and note included hours — it positions you as a service, not just hourly help.",
    faqs: [
      { q: "How do virtual assistants invoice?", a: "Hourly or by retainer package. Track your hours and list task categories so clients see where time went." },
      { q: "What if I go over the package hours?", a: "Note your overage rate in the terms, then bill extra hours as a separate line item." },
    ],
  },
  {
    slug: "contractor", name: "General Contractor", noun: "contractor",
    intro: "Materials, labor, and subcontractors all need to appear clearly on a construction invoice. Itemized billing keeps clients informed and helps you get paid on milestone schedules.",
    items: ["Labor (per hour/day)", "Materials & supplies", "Subcontractor work", "Equipment rental", "Permits & fees", "Project milestone payment"],
    tip: "Bill by milestone for larger jobs — invoice a deposit, then progress payments tied to completed stages.",
    faqs: [
      { q: "What should a contractor invoice include?", a: "Labor, materials, subcontractors, permits, and the milestone or balance due. Add your business details and license number in the notes." },
      { q: "How do progress payments work?", a: "Split the job into stages and invoice as each stage completes. Reference the original estimate so the client can track totals." },
    ],
  },
  {
    slug: "electrician", name: "Electrician", noun: "electrician",
    intro: "Service calls, parts, and labor add up on every job. A clear electrical invoice itemizes parts and labor so customers understand the bill and pay promptly.",
    items: ["Service call fee", "Labor (per hour)", "Parts & materials", "Panel / wiring work", "Emergency call-out", "Inspection / certification"],
    tip: "Separate the service call fee from hourly labor so customers see the trip charge clearly and there are no surprises.",
    faqs: [
      { q: "What goes on an electrician's invoice?", a: "A service call fee, hourly labor, parts, and any inspection or certification, plus your license details. InvoiceSnap makes it quick to itemize." },
      { q: "Should I charge a call-out fee?", a: "Many electricians bill a flat call-out or service fee plus hourly labor. List both as separate line items for transparency." },
    ],
  },
  {
    slug: "plumber", name: "Plumber", noun: "plumber",
    intro: "From quick fixes to full installs, plumbing jobs mix labor and parts. An itemized invoice keeps customers clear on what they're paying and helps you collect on the spot.",
    items: ["Service call fee", "Labor (per hour)", "Parts & fixtures", "Emergency call-out", "Drain / pipe work", "Disposal fee"],
    tip: "List parts and labor separately — customers are far more comfortable paying when they can see the breakdown.",
    faqs: [
      { q: "What should a plumbing invoice include?", a: "Your service fee, labor, parts and fixtures, and any emergency or disposal charges, plus payment terms. Add your logo and license number." },
      { q: "How do I invoice for emergency jobs?", a: "Add an emergency call-out line item at your after-hours rate, on top of standard labor and parts." },
    ],
  },
  {
    slug: "cleaning-service", name: "Cleaning Service", noun: "cleaning service",
    intro: "Recurring or one-off, cleaning invoices should be fast to produce and easy to read. Itemize by service and frequency so clients renew without hesitation.",
    items: ["Standard clean (per visit)", "Deep clean", "Move-in / move-out clean", "Window cleaning", "Supplies", "Recurring discount"],
    tip: "For recurring clients, invoice on a set schedule and note the next service date — it cuts down on no-shows and late payments.",
    faqs: [
      { q: "How do cleaning businesses invoice?", a: "Per visit or on a recurring schedule. List the service type, frequency, and any supplies. InvoiceSnap saves your details so each invoice takes seconds." },
      { q: "Can I offer a recurring discount?", a: "Yes — add it as a negative discount line or set a percentage discount, and InvoiceSnap calculates the total automatically." },
    ],
  },
  {
    slug: "handyman", name: "Handyman", noun: "handyman",
    intro: "Handyman jobs span dozens of small tasks and materials. A clean, itemized invoice makes a one-person operation look professional and gets you paid faster.",
    items: ["Labor (per hour)", "Materials & hardware", "Furniture assembly", "Mounting / installation", "Minor repairs", "Trip / call-out fee"],
    tip: "Keep a saved list of your common tasks and rates so you can build an invoice in under a minute on-site.",
    faqs: [
      { q: "What should a handyman invoice include?", a: "Hourly labor, materials, a trip fee if you charge one, and a short description of the work done, plus your contact details." },
      { q: "Should I invoice on-site?", a: "Yes — create and send the invoice from your phone right after the job. InvoiceSnap works on mobile with no signup." },
    ],
  },
  {
    slug: "personal-trainer", name: "Personal Trainer", noun: "personal trainer",
    intro: "Sessions, packages, and programs each bill differently. A simple invoice keeps your training business organized and your clients paying on time.",
    items: ["Single session", "Session package (e.g. 10)", "Monthly membership", "Custom program design", "Nutrition plan", "Online coaching"],
    tip: "Sell packages as a single line item — clients commit to more sessions and you reduce per-session admin.",
    faqs: [
      { q: "How do personal trainers invoice clients?", a: "Per session, by package, or monthly membership. List the package and number of sessions so it's clear what's included." },
      { q: "Can I bill monthly memberships?", a: "Yes — invoice the membership on the same date each month. Save the client's details so it's one click to repeat." },
    ],
  },
  {
    slug: "tutor", name: "Tutor", noun: "tutor",
    intro: "Whether you teach hourly or by package, tutoring invoices should be simple for parents and students to approve. Itemize sessions and subjects for clarity.",
    items: ["Hourly tutoring", "Session package", "Exam prep program", "Group session", "Materials / workbook", "Travel (in-person)"],
    tip: "Note the subject and dates covered on the invoice — parents appreciate seeing exactly what they're paying for.",
    faqs: [
      { q: "How should tutors invoice?", a: "Hourly or by package. List the subject, number of sessions, and dates. InvoiceSnap remembers your details for next time." },
      { q: "Do I charge for prep time?", a: "If you build custom materials or exam prep, add it as its own line item rather than folding it into the hourly rate." },
    ],
  },
  {
    slug: "bookkeeper", name: "Bookkeeper", noun: "bookkeeper",
    intro: "As a bookkeeper, your own invoices should set the standard. Clear, itemized billing by service keeps clients on monthly schedules and your cash flow predictable.",
    items: ["Monthly bookkeeping", "Payroll processing", "Accounts payable / receivable", "Financial reporting", "Year-end / tax prep support", "Software subscription"],
    tip: "Invoice on a fixed monthly cadence and itemize by service so clients see the full value of what you manage.",
    faqs: [
      { q: "How do bookkeepers bill clients?", a: "Usually a fixed monthly fee, sometimes plus hourly for extra work. Itemize the services included so the scope is always clear." },
      { q: "Should I bill year-end work separately?", a: "Yes — keep recurring bookkeeping and one-off year-end or tax-prep support on separate line items or invoices." },
    ],
  },
  {
    slug: "landscaper", name: "Landscaper", noun: "landscaper",
    intro: "Mowing, planting, materials, and crew time all factor into a landscaping bill. An itemized invoice keeps customers clear and supports recurring maintenance billing.",
    items: ["Labor / crew (per hour)", "Mowing & maintenance", "Planting & materials", "Hardscaping", "Equipment / haul-away", "Recurring service plan"],
    tip: "For maintenance clients, set up a recurring service line and bill on a regular schedule to smooth out seasonal income.",
    faqs: [
      { q: "What should a landscaping invoice include?", a: "Crew labor, materials, equipment, and the service performed, plus payment terms. Add your business logo for a professional look." },
      { q: "How do I bill recurring maintenance?", a: "List the recurring service as a flat line item and invoice on a set schedule. Save the client to repeat it in seconds." },
    ],
  },
];

export function getProfession(slug: string): Profession | undefined {
  return PROFESSIONS.find((p) => p.slug === slug);
}
