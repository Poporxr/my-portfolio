import ProjectCard from "@/components/ProjectCard";
import type { ProjectWithPreview } from "@/lib/project-previews";

type ProjectsGridSectionProps = {
  title: string;
  description: string;
  projects: ProjectWithPreview[];
  compactCards?: boolean;
};

const ProjectsGridSection = ({
  title,
  description,
  projects,
  compactCards = false,
}: ProjectsGridSectionProps) => {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
          All Projects
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-zinc-50">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-zinc-400">
          {description}
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              compact={compactCards}
              eagerPreview={index < 2}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-[28px] border border-dashed border-slate-300 bg-white/70 p-6 text-sm text-slate-500 dark:border-white/12 dark:bg-white/[0.03] dark:text-zinc-400">
          No projects match this filter yet.
        </div>
      )}
    </section>
  );
};

export default ProjectsGridSection;
