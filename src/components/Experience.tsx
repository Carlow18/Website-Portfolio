import Section from "./Section";
import Reveal from "./Reveal";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 / Experience" title="Where I've worked">
      <div className="relative space-y-8 border-l border-zinc-200 pl-6 sm:pl-8 dark:border-zinc-800">
        {experience.map((e) => (
          <Reveal key={e.slug}>
            <div className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-zinc-900 ring-4 ring-white sm:-left-[39px] dark:bg-zinc-100 dark:ring-zinc-950" />
              <ExperienceCard item={e} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
