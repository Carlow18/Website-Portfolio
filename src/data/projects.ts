export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  date: string;
  badge: string;
  image: string;
  summary: string;
  overview: string;
  highlights: string[];
  stack: { group: string; items: string[] }[];
  tags: string[];
  links: { label: string; href: string }[];
  gradient: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "getgains",
    title: "GetGains",
    subtitle: "AI-Powered Fitness & Pose Detection Platform",
    role: "Full-Stack & Mobile Developer",
    date: "Jan 2026 – Jun 2026",
    badge: "Thesis Project",
    image: "/projects/getgains-logo.png",
    summary:
      "Agent-first Flutter app and Express.js/TypeScript backend built with Stitch MCP, Google ML Kit pose detection, and Unity 3D form scoring.",
    overview:
      "GetGains is our thesis mobile application: a fitness platform where coaches record reference exercise forms and clients are scored on how closely they match. I led agent-first development across the Flutter client and Express.js/TypeScript backend, orchestrating parallel frontend and backend agents with AGENTS.md/CLAUDE.md, custom skills, and the Google Stitch MCP server.",
    highlights: [
      "Led agent-first development of a Flutter app and Express.js/TypeScript backend scoring client exercise form against a coach’s reference, orchestrating parallel frontend and backend agents with AGENTS.md/CLAUDE.md and custom skills.",
      "Generated UI screens in Google Stitch and connected the Stitch MCP server so IDE coding agents implemented the Flutter screens directly.",
      "Integrated Google ML Kit pose detection with an embedded Unity 3D module, scoring movements via Dynamic Time Warping (DTW) with joint-angle correction feedback.",
    ],
    stack: [
      { group: "Mobile & Backend", items: ["Flutter", "Express.js", "TypeScript"] },
      { group: "AI & 3D", items: ["Google ML Kit", "Dynamic Time Warping (DTW)", "Unity 3D"] },
      { group: "AI-Assisted Workflow", items: ["Google Stitch", "Stitch MCP", "AGENTS.md / CLAUDE.md"] },
    ],
    tags: ["Flutter", "Express.js", "TypeScript", "Stitch MCP", "ML Kit", "Unity 3D"],
    links: [
      { label: "App Repo", href: "https://github.com/get-gains/get_gains_app" },
      { label: "Server Repo", href: "https://github.com/get-gains/get-gains-server" },
    ],
    gradient: "from-indigo-50/80 via-slate-50 to-white",
  },
  {
    slug: "cpu-pmp",
    title: "CPU Project Management System",
    subtitle: "Project & service-request platform for the Office of the VPAA",
    role: "Full-Stack Developer",
    date: "Oct 2024 – May 2025",
    badge: "Real Client",
    image: "/projects/cpu-pmp.jpg",
    summary:
      "A Next.js platform for CPU’s VPAA featuring a drag-and-drop Kanban board, inventory management, RBAC, and Selenium WebDriver regression suites.",
    overview:
      "A web application developed in a 4-person team for a real client, the Vice President for Academic Affairs of Central Philippine University, from requirements gathering through client handoff. It manages service requests, Kanban task workflows, role-based access control, and equipment inventory, backed by Selenium WebDriver E2E and integration suites serving as a pre-merge regression gate for AI-generated code.",
    highlights: [
      "Developed a project and service-request platform for the university’s VPAA with Next.js, TypeScript, Prisma, and PostgreSQL in a 4-person team, from requirements gathering through client handoff.",
      "Built a drag-and-drop Kanban board from scratch with optimistic UI updates and status persistence in PostgreSQL.",
      "Implemented role-based access control (admin, supervisor, secretary) and an equipment inventory module with CRUD, server-side pagination, department filtering, and reports.",
      "Set up Selenium WebDriver E2E and integration suites for core service-request workflows as a pre-merge regression gate for AI-generated code.",
    ],
    stack: [
      { group: "Frontend & Backend", items: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"] },
      { group: "Testing", items: ["Selenium WebDriver"] },
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Selenium WebDriver", "RBAC"],
    links: [{ label: "GitHub Repo", href: "https://github.com/Wisdomous20/PMP" }],
    gradient: "from-sky-50/80 via-slate-50 to-white",
  },
  {
    slug: "baylocentral",
    title: "BayloCentral",
    subtitle: "Centralized e-commerce platform for Filipino MSMEs",
    role: "Full-Stack Developer",
    date: "Apr 2025 – Jul 2025",
    badge: "Student Startup",
    image: "/projects/baylocentral-logo.png",
    summary:
      "A student-led startup building a centralized e-commerce platform for Filipino MSMEs within an 11-member cross-functional team.",
    overview:
      "BayloCentral is a student-led startup building a centralized e-commerce platform for Filipino MSMEs. I contributed within an 11-member cross-functional team of UI/UX, frontend, backend, and full-stack engineers.",
    highlights: [
      "Contributed to a centralized e-commerce platform for Filipino MSMEs within an 11-member cross-functional team of UI/UX, frontend, backend, and full-stack engineers.",
      "Built and integrated RESTful APIs with Node.js and Express.js to support inventory management, order processing, and seller data flows.",
      "Managed relational data modeling and query optimization with PostgreSQL and Prisma ORM, ensuring data integrity across product listings, transactions, and user accounts.",
    ],
    stack: [{ group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "Prisma ORM"] }],
    tags: ["Node.js", "Express.js", "PostgreSQL", "Prisma"],
    links: [],
    gradient: "from-amber-50/70 via-slate-50 to-white",
    note: "The source code for this project is in a private repository.",
  },
];
