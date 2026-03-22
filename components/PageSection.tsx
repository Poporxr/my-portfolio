import type { ReactNode } from "react";

type PageSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

const PageSection = ({
  eyebrow,
  title,
  description,
  children,
}: PageSectionProps) => {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-200/85 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:p-8">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_72%)] dark:bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_72%)]" />

      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 sm:text-[1.9rem]">
          {title}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-zinc-400">
          {description}
        </p>

        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
};

export default PageSection;