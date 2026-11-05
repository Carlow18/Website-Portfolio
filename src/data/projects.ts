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
    role: "Full-Stack & Mobile Developer (Lead Contributor)",
    date: "Jan 2026 – Jun 2026",
    badge: "Thesis Project",
    image: "/projects/getgains-logo.png",
    summary:
      "A Flutter fitness app with an Express.js backend that uses on-device pose detection and an embedded Unity 3D avatar to compare a client's exercise form against a coach's.",
    overview:
      "GetGains is our thesis mobile application: a fitness platform where coaches record reference exercise forms and clients are scored on how closely they match. I led the end-to-end development across the Flutter client and the Express.js backend.",
    highlights: [
      "Client pose recording and coach-vs-client form comparison using Dynamic Time Warping (DTW), scored by mean angular deviation, with joint-angle correction feedback.",
      "Integrated Google ML Kit pose detection with an embedded Unity 3D module, including animated skeleton playback of the coach's reference form.",
      "Designed an offline-first data layer with Drift (SQLite) and Riverpod so workouts, profile, credentials and pose data persist and sync across connectivity states.",
      "Built workout sessions, a program and routine builder, a workout calendar, monthly volume insights and a rep counter.",
      "Implemented authentication: Google Sign-In, JWT refresh-token handling and email verification codes.",
      "Built 10+ RESTful API modules with Prisma ORM and Zod validation, backed by versioned PostgreSQL migrations.",
    ],
    stack: [
      { group: "Mobile", items: ["Flutter", "Dart", "Riverpod", "Drift (SQLite)", "GoRouter", "Dio"] },
      { group: "AI / 3D", items: ["Google ML Kit", "Unity 3D"] },
      { group: "Backend", items: ["Express.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Zod", "Vitest"] },
    ],
    tags: ["Flutter", "Express.js", "Prisma", "ML Kit", "Unity"],
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
      "A Next.js web app built for a real client, the VPAA of Central Philippine University, featuring a drag-and-drop Kanban board, inventory management and role-based access.",
    overview:
      "A web application built for a real client, the Vice President for Academic Affairs of Central Philippine University, to manage service requests, implementation plans, personnel and equipment inventory. I worked in a 4-person team using Git and GitHub from requirements gathering through client handoff.",
    highlights: [
      "Built a drag-and-drop Kanban board from scratch with optimistic UI updates and backend status persistence via Prisma/PostgreSQL.",
      "Developed an equipment inventory module with CRUD operations, server-side pagination, office filtering and inventory reports.",
      "Implemented role-based access control for admin, supervisor and secretary roles, including role-based redirects and admin-only actions.",
      "Built login and registration with bcrypt password hashing and CPU-email-only validation, plus user and personnel management with pagination and filters.",
      "Added service-request archiving with auto-archive, a details modal and delete.",
      "Established end-to-end testing with Selenium WebDriver, plus integration test suites for core service-request workflows.",
    ],
    stack: [
      { group: "Frontend", items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Redux Toolkit", "TanStack Query", "dnd-kit"] },
      { group: "Backend", items: ["Next.js API Routes", "NextAuth", "Prisma", "PostgreSQL", "Supabase"] },
      { group: "Testing", items: ["Jest", "Selenium WebDriver"] },
    ],
    tags: ["Next.js", "Prisma", "PostgreSQL", "Selenium", "RBAC"],
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
      "A student-led startup building a centralized e-commerce platform for micro, small and medium enterprises in our province.",
    overview:
      "BayloCentral is a student-led startup serving MSMEs in our province. I contributed within an 11-member cross-functional team of UI/UX, frontend, backend and full-stack engineers.",
    highlights: [
      "Built and integrated RESTful APIs with Node.js and Express.js to support inventory management, order processing and seller data flows.",
      "Managed relational data modeling and query optimization with PostgreSQL and Prisma ORM.",
      "Ensured data integrity across product listings, transactions and user accounts.",
      "Collaborated in an 11-member cross-functional team of UI/UX, frontend, backend and full-stack engineers.",
    ],
    stack: [{ group: "Backend", items: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM"] }],
    tags: ["Node.js", "Express.js", "PostgreSQL", "Prisma"],
    links: [],
    gradient: "from-amber-50/70 via-slate-50 to-white",
    note: "The source code for this project is in a private repository.",
  },
];
