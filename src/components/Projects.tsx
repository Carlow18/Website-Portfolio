import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 / Projects" title="Featured projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Want to see more code? Check out my{" "}
          <Link
            href="https://github.com/Carlow18"
            target="_blank"
            className="inline-flex items-center gap-1 font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
          >
            GitHub profile <ArrowUpRight size={14} />
          </Link>
        </p>
      </Reveal>
    </Section>
  );
}
