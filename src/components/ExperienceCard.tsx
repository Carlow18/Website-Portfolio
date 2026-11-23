"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Tag } from "./Section";
import type { ExperienceItem } from "@/data/experience";

export default function ExperienceCard({ item: e }: { item: ExperienceItem }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <Link href={`/experience/${e.slug}`} className="card group block p-6 sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-zinc-900 transition-colors duration-200 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
            {e.role}{" "}
            <span className="font-normal text-zinc-600 dark:text-zinc-400">@ {e.company}</span>
          </h3>
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{e.date}</span>
        </div>
        <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">{e.context}</p>
        <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {e.bullets.map((b) => (
            <li key={b} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {e.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-800/80">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 transition-colors duration-200 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
            View experience details
            <ArrowRight
              size={13}
              className="transition-transform duration-200 ease-out group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
