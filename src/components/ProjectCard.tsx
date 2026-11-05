"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FolderGit2 } from "lucide-react";
import { Tag } from "./Section";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="h-full"
    >
      <Link
        href={`/projects/${p.slug}`}
        className="card group flex h-full flex-col overflow-hidden"
      >
        <div
          className={`relative flex h-40 flex-col justify-between border-b border-zinc-100 bg-gradient-to-br ${p.gradient} p-5 dark:border-zinc-800/80 dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-zinc-950`}
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/90 bg-white/90 px-3 py-1 font-mono text-xs font-medium text-zinc-700 shadow-xs backdrop-blur-xs dark:border-zinc-700/80 dark:bg-zinc-800/90 dark:text-zinc-300">
              {p.badge}
            </span>
            <FolderGit2 size={18} className="text-zinc-400 transition-colors duration-200 group-hover:text-zinc-800 dark:text-zinc-500 dark:group-hover:text-zinc-200" />
          </div>
          <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{p.date}</p>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-zinc-950 transition-colors duration-200 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
            {p.title}
          </h3>
          <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">{p.role}</p>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.summary}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 transition-colors duration-200 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
              View project details
              <ArrowRight size={13} className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
