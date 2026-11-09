import Link from "next/link";

const WorkCTASection = () => {
  return (
    <section className="flex flex-col gap-4 border-t border-slate-200 pt-8 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-lg font-semibold text-slate-950 dark:text-zinc-50">
        Interested in working together?
      </h2>
      <Link
        href="/contact"
        className="inline-flex min-h-[44px] flex-none items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
      >
        Contact
      </Link>
    </section>
  );
};

export default WorkCTASection;
