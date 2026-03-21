import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

type SelectedWorkSectionProps = {
  projects: Project[];
};

const SelectedWorkSection = ({ projects }: SelectedWorkSectionProps) => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
            Selected Work
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-zinc-50">
            A few projects worth exploring first
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-zinc-400">
            A quick sample of the products and systems I have built, with more detail available on the full work page.
          </p>
        </div>

        <Link
          href="/work"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/8 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:bg-white/[0.08]"
        >
          View All Work
        </Link>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorkSection;
