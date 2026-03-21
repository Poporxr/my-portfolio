type PageSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

const PageSection = ({ eyebrow, title, description, children }: PageSectionProps) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
};

export default PageSection;
