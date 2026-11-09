import Link from "next/link";
import SkillsSection from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="pt-2 sm:pt-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
          Software Engineer
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-zinc-50 sm:text-5xl">
          Emmanuel Aondohemba
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
          I build complete, production-ready products end to end, applications
          people use daily across learning, commerce and booking.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/[0.06]"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <SkillsSection />

      <section className="flex flex-col gap-4 border-t border-slate-200 pt-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-base font-semibold text-slate-900 dark:text-zinc-50">
          Have a project or a role in mind?
        </p>
        <Link
          href="/contact"
          className="inline-flex min-h-[44px] flex-none items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
