export type ExperienceItem = {
  slug: string;
  company: string;
  context: string;
  role: string;
  date: string;
  badge: string;
  image?: string;
  team: string;
  summary: string;
  overview: string;
  bullets: string[];
  highlights: string[];
  stack: { group: string; items: string[] }[];
  tags: string[];
  gradient: string;
  note?: string;
};

export const experience: ExperienceItem[] = [
  {
    slug: "allutional",
    company: "Allutional",
    context: "InsurTech SaaS Platform",
    role: "Full-Stack Developer Intern",
    date: "May 2026 – Jul 2026",
    badge: "Internship",
    image: "/experience/allutional-logo.png",
    team: "10+ person engineering team",
    summary:
      "Delivered 5 tracked feature sets on a multi-tenant InsurTech SaaS platform (Next.js, Express.js, headless WordPress CRM) using an AI-agent workflow gated by code review and testing.",
    overview:
      "During my internship at Allutional, I contributed within a 10+ person engineering team building and extending a multi-tenant InsurTech SaaS platform. Using an AI-agent workflow gated by code review and testing before merge, my work spanned the Next.js frontend, Express.js backend, headless WordPress CRM, multi-step registration UX, and Stripe/HubSpot lead pipelines.",
    bullets: [
      "Delivered 5 tracked feature sets on a multi-tenant InsurTech SaaS platform (Next.js, Express.js, headless WordPress CRM) in a 10+ person engineering team using an AI-agent workflow gated by code review and testing before merge.",
      "Redesigned the multi-step insurance registration flow across 8+ React components, replacing toast-based errors with a reusable inline notification system to improve form completion.",
      "Extended a Stripe and HubSpot lead pipeline via REST APIs and webhooks, adding coverage-interest parameters and referral-based dynamic theming to registration forms.",
    ],
    highlights: [
      "Delivered 5 tracked feature sets on a multi-tenant InsurTech SaaS platform (Next.js, Express.js, headless WordPress CRM) in a 10+ person engineering team using an AI-agent workflow gated by code review and testing before merge.",
      "Redesigned the multi-step insurance registration flow across 8+ React components, replacing toast-based errors with a reusable inline notification system to improve form completion.",
      "Extended a Stripe and HubSpot lead pipeline via REST APIs and webhooks, adding coverage-interest parameters and referral-based dynamic theming to registration forms.",
    ],
    stack: [
      { group: "Frontend", items: ["Next.js", "React"] },
      { group: "Backend & Headless CMS", items: ["Express.js", "REST APIs", "Webhooks", "Headless WordPress"] },
      { group: "CRM & Payments", items: ["HubSpot", "Stripe"] },
    ],
    tags: [
      "Next.js",
      "Express.js",
      "React",
      "Headless WordPress",
      "HubSpot",
      "Stripe",
      "Webhooks",
    ],
    gradient: "from-sky-50/80 via-slate-50 to-white",
    note: "This work was completed on a proprietary platform; the source code is in a private repository.",
  },
];
