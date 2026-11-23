"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Section id="contact" eyebrow="06 / Contact" title="Get in touch">
      <Reveal>
        <div className="card mx-auto max-w-xl p-8 text-center sm:p-10">
          <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            I&apos;m currently open to full-time software engineering, automation developer roles, and freelance projects.
            Feel free to reach out directly.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-xs transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              <Mail size={16} /> Send email
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 font-mono text-xs font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {copied ? <Check size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={14} />}
              {copied ? "Copied to clipboard!" : profile.email}
            </motion.button>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <motion.a
              whileHover={{ scale: 1.08, y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <Github size={16} /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08, y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <Linkedin size={16} /> LinkedIn
            </motion.a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
