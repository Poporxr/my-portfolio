import ProjectCard from "@/components/ProjectCard";
import type { ProjectWithPreview } from "@/lib/project-previews";

type ProjectsGridSectionProps = {
  title: string;
  description?: string;
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
        <h2 className="text-xl font-semibold text-slate-950 dark:text-zinc-50">
          {title}
        </h2>
        {description ? (
          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600 dark:text-zinc-400">
            {description}
          </p>
        ) : null}
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
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
        <div className="rounded-[20px] border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-400">
          No projects match this filter yet.
        </div>
      )}
    </section>
  );
};

export default ProjectsGridSection;
