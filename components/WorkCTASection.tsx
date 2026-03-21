import Link from "next/link";

const WorkCTASection = () => {
  return (
    <section className="rounded-[30px] border border-slate-200/85 bg-white/88 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)] dark:ring-white/5 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
        Next Step
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-zinc-50">
        Need a walkthrough, build partner, or product UI support?
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-zinc-400">
        I can walk through a project in more detail, share the thinking behind the implementation, or discuss what a similar build would look like for your team.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
        >
          Contact Me
        </Link>
        <Link
          href="/resume"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:bg-white/[0.08]"
        >
          View Resume
        </Link>
      </div>
    </section>
  );
};

export default WorkCTASection;
