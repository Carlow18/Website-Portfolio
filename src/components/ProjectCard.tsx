"use client";

import Link from "next/link";
import Image from "next/image";
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
        {/* Oversized showcase container */}
        <div className="relative h-56 w-full overflow-hidden border-b border-zinc-200/80 bg-zinc-950 dark:border-zinc-800/80">
          {/* Project visual filling the container */}
          {p.slug === "getgains" && (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
              {/* Warm energetic radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,_rgba(249,115,22,0.22),_transparent_70%)]" />
              {/* Architectural subtle grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
              {/* Oversized 3D Muscle Arm & Text */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <Image
                  src={p.image}
                  alt={`${p.title} showcase`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-2 scale-110 sm:scale-115 transition-transform duration-500 ease-out group-hover:scale-125 drop-shadow-[0_16px_28px_rgba(0,0,0,0.7)]"
                  priority
                />
              </div>
            </div>
          )}

          {p.slug === "cpu-pmp" && (
            <div className="absolute inset-0 bg-zinc-950">
              {/* Real client web dashboard screenshot filling the entire container */}
              <Image
                src={p.image}
                alt={`${p.title} showcase`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-108"
                priority
              />
              {/* Scrim gradient for contrast and legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/45 pointer-events-none" />
            </div>
          )}

          {p.slug === "baylocentral" && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#020b1f] via-[#04143a] to-[#010816]">
              {/* Ambient sapphire/gold glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(14,165,233,0.18),_transparent_65%)]" />
              {/* Subtle architectural grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
              {/* Oversized gold & navy emblem filling the container */}
              <div className="absolute inset-0 flex items-center justify-center p-3">
                <Image
                  src={p.image}
                  alt={`${p.title} showcase`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-2 scale-110 sm:scale-115 transition-transform duration-500 ease-out group-hover:scale-125 drop-shadow-[0_16px_32px_rgba(0,0,0,0.8)]"
                  priority
                />
              </div>
            </div>
          )}

          {!["getgains", "cpu-pmp", "baylocentral"].includes(p.slug) && p.image && (
            <div className="absolute inset-0 bg-zinc-950">
              <Image
                src={p.image}
                alt={`${p.title} showcase`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />
            </div>
          )}

          {/* Top bar: Badge & Folder icon */}
          <div className="relative z-10 flex items-center justify-between p-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-xs font-medium text-white shadow-xs backdrop-blur-md">
              {p.badge}
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 text-zinc-200 backdrop-blur-md transition-colors duration-200 group-hover:bg-black/80 group-hover:text-white">
              <FolderGit2 size={16} />
            </div>
          </div>

          {/* Bottom bar: Timeline date */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between p-4 pointer-events-none">
            <span className="inline-flex items-center rounded-md border border-white/15 bg-black/60 px-2.5 py-1 font-mono text-[11px] font-medium text-zinc-200 shadow-xs backdrop-blur-md">
              {p.date}
            </span>
          </div>
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
