type WorkPageIntroProps = {
  title: string;
  description: string;
};

const WorkPageIntro = ({ title, description }: WorkPageIntroProps) => {
  return (
    <section className="rounded-[30px] border border-slate-200/85 bg-white/88 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)] dark:ring-white/5 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
        Work
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-zinc-400 sm:text-base">
        {description}
      </p>
    </section>
  );
};

export default WorkPageIntro;
