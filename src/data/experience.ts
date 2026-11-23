export type ExperienceItem = {
  slug: string;
  company: string;
  context: string;
  role: string;
  date: string;
  badge: string;
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
    team: "10+ person engineering team",
    summary:
      "Delivered 5 tracked feature sets across a multi-tenant InsurTech platform with Next.js, Express.js, Headless WordPress, GoHighLevel, HubSpot, and Stripe.",
    overview:
      "During my internship at Allutional, I contributed within a 10+ person engineering team building and extending a multi-tenant InsurTech SaaS platform. My work spanned the Next.js frontend, Express.js backend, WordPress as a headless CRM, and automated lead-capture and payment workflows across GoHighLevel (GHL), HubSpot, and Stripe.",
    bullets: [
      "Delivered 5 tracked feature sets for a multi-tenant InsurTech platform across a Next.js frontend and Express.js backend integrated with WordPress as a headless CRM within a 10+ person engineering team.",
      "Built and configured an automated GoHighLevel (GHL) lead-capture chatbot to qualify incoming prospects and streamline automated follow-ups.",
      "Extended a Stripe and HubSpot-integrated lead pipeline via REST APIs and webhooks, adding coverage-interest parameters and referral-based dynamic theming to registration forms.",
      "Redesigned the multi-step insurance registration flow across 8+ React components, replacing toast-based errors with a reusable inline notification system to improve form completion.",
    ],
    highlights: [
      "Delivered 5 tracked feature sets for a multi-tenant InsurTech platform across a Next.js frontend and Express.js backend integrated with WordPress as a headless CRM within a 10+ person engineering team.",
      "Built and configured an automated GoHighLevel (GHL) lead-capture chatbot to qualify incoming prospects and streamline automated follow-ups.",
      "Extended a Stripe and HubSpot-integrated lead pipeline via REST APIs and webhooks, adding coverage-interest parameters and referral-based dynamic theming to registration forms.",
      "Redesigned the multi-step insurance registration flow across 8+ React components, replacing toast-based errors with a reusable inline notification system to improve form completion.",
    ],
    stack: [
      { group: "Frontend", items: ["Next.js", "React", "TypeScript"] },
      { group: "Backend & Headless CMS", items: ["Express.js", "REST APIs", "Webhooks", "Headless WordPress"] },
      { group: "CRM, Payments & Automation", items: ["GoHighLevel (GHL)", "HubSpot", "Stripe"] },
    ],
    tags: [
      "Next.js",
      "Express.js",
      "React",
      "Headless WordPress",
      "GoHighLevel (GHL)",
      "HubSpot",
      "Stripe",
      "Webhooks",
    ],
    gradient: "from-emerald-50/70 via-slate-50 to-white",
    note: "This work was completed on a proprietary platform; the source code is in a private repository.",
  },
];
