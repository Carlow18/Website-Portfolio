import Section, { Tag } from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 / Experience" title="Where I've worked">
      <div className="relative space-y-8 border-l border-zinc-200 pl-6 sm:pl-8 dark:border-zinc-800">
        {experience.map((e) => (
          <Reveal key={e.company}>
            <div className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-zinc-900 ring-4 ring-white sm:-left-[39px] dark:bg-zinc-100 dark:ring-zinc-950" />
              <div className="card p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
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
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
