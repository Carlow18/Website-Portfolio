import Section, { Tag } from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 / Skills" title="Technical toolkit">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal
            key={s.group}
            delay={i * 0.05}
            className={i === skills.length - 1 ? "sm:col-span-2" : undefined}
          >
            <div className="card h-full p-5 sm:p-6">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {s.group}
              </h3>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <Tag key={it}>{it}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
