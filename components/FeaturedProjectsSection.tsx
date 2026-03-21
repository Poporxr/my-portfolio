import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import type { Project } from "@/lib/projects";

type FeaturedProjectsSectionProps = {
  projects: Project[];
};

const FeaturedProjectsSection = ({
  projects,
}: FeaturedProjectsSectionProps) => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
          Featured Projects
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-zinc-50">
          Strongest work to review first
        </h2>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
