import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Briefcase, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tag } from "@/components/Section";
import { experience } from "@/data/experience";

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = experience.find((x) => x.slug === slug);
  return e ? { title: `${e.company} | John Carlo Macoco`, description: e.summary } : {};
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = experience.find((x) => x.slug === slug);
  if (!e) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-28 sm:pt-32">
        <Link
          href="/#experience"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <ArrowLeft size={16} /> Back to experience
        </Link>

        <div
          className={`mt-6 rounded-2xl border border-zinc-200/80 bg-gradient-to-br ${e.gradient} p-8 shadow-xs sm:p-10 dark:border-zinc-800 dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-zinc-950`}
        >
          <div className="flex flex-col-reverse justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/90 px-3 py-1 font-mono text-xs font-medium text-zinc-700 shadow-xs backdrop-blur-xs dark:border-zinc-700/80 dark:bg-zinc-800/90 dark:text-zinc-300">
                {e.badge}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-100">
                {e.company}
              </h1>
              <p className="mt-2 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">{e.context}</p>
            </div>

            {e.image ? (
              <div className="w-fit shrink-0 rounded-xl border border-zinc-200/80 bg-white px-4 py-2.5 shadow-sm dark:border-zinc-700/80">
                <Image
                  src={e.image}
                  alt={`${e.company} logo`}
                  width={150}
                  height={86}
                  priority
                  className="h-auto w-32 object-contain sm:w-36"
                />
              </div>
            ) : (
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-zinc-200/90 bg-white/90 text-zinc-800 shadow-xs backdrop-blur-xs dark:border-zinc-700/80 dark:bg-zinc-800/90 dark:text-zinc-200">
                <Briefcase size={28} />
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-y border-zinc-200/80 py-3 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <span>
            <strong className="text-zinc-900 dark:text-zinc-100">Role:</strong> {e.role}
          </span>
          <span>
            <strong className="text-zinc-900 dark:text-zinc-100">Timeline:</strong> {e.date}
          </span>
          <span>
            <strong className="text-zinc-900 dark:text-zinc-100">Team:</strong> {e.team}
          </span>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Overview</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">{e.overview}</p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Key contributions &amp; impact
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {e.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900 dark:bg-zinc-400" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Architecture &amp; stack
          </h2>
          <div className="mt-4 space-y-3">
            {e.stack.map((s) => (
              <div key={s.group} className="card p-4 sm:p-5">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {s.group}
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {s.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {e.note && (
          <section className="mt-10 flex flex-wrap items-center gap-3">
            <p className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              <Lock size={13} className="text-zinc-500 dark:text-zinc-400" /> {e.note}
            </p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
