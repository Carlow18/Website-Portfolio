import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-5xl px-6 py-20 sm:py-24 border-t border-zinc-200/70 dark:border-zinc-800/80">
      {/* Corner crosshairs for architectural tech aesthetic */}
      <span className="absolute -top-[6px] -left-1 font-mono text-[10px] text-zinc-300 select-none pointer-events-none dark:text-zinc-700">
        +
      </span>
      <span className="absolute -top-[6px] -right-1 font-mono text-[10px] text-zinc-300 select-none pointer-events-none dark:text-zinc-700">
        +
      </span>

      <Reveal>
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
          {title}
        </h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-zinc-200/90 bg-zinc-100/70 px-2.5 py-1 font-mono text-xs font-medium text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-800/60 dark:text-zinc-300">
      {children}
    </span>
  );
}
