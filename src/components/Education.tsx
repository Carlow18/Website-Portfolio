import { GraduationCap } from "lucide-react";
import Section, { Tag } from "./Section";
import Reveal from "./Reveal";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" eyebrow="05 / Education" title="Education">
      <Reveal>
        <div className="card flex flex-col gap-5 p-6 sm:flex-row sm:p-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-800 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:text-zinc-200">
            <GraduationCap size={22} />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{education.school}</h3>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{education.date}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">{education.degree}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Relevant coursework
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {education.coursework.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
