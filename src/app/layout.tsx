import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import SpotlightBackground from "@/components/SpotlightBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Carlo Macoco | AI-Native Full-Stack Software Engineer",
  description:
    "Portfolio of John Carlo C. Macoco, an AI-native full-stack software engineer from Iloilo City orchestrating AI coding agents to ship Next.js, Express.js, PostgreSQL, Flutter, and CRM/payment integration (Stripe, HubSpot, GoHighLevel, n8n) applications.",
  openGraph: {
    title: "John Carlo Macoco | AI-Native Full-Stack Software Engineer",
    description:
      "AI-native full-stack engineering with parallel coding agents, MCP workflows, Next.js, Express.js, PostgreSQL, Prisma, Flutter, and Stripe/HubSpot/GoHighLevel/n8n integrations.",
    type: "website",
  },
  icons: { icon: "/avatar.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="relative min-h-screen bg-bg text-fg antialiased selection:bg-zinc-200 selection:text-zinc-950 dark:selection:bg-zinc-800 dark:selection:text-zinc-100">
        <ThemeProvider>
          <SpotlightBackground />
          <SmoothScroll>
            <div className="relative z-10">{children}</div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
