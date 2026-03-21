import Image from "next/image";
import ProjectActions from "@/components/ProjectActions";
import StackTags from "@/components/StackTags";
import type { Project } from "@/lib/projects";

type FeaturedProjectCardProps = {
  project: Project;
};

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  const highlights = (project.keyFeatures ?? []).slice(0, 4);

  return (
    <article className="overflow-hidden rounded-[30px] border border-slate-200/85 bg-white/90 shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/78 dark:shadow-[0_22px_55px_rgba(0,0,0,0.32)] dark:ring-white/5">
      <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative min-h-[260px] overflow-hidden border-b border-slate-200/80 bg-slate-100 dark:border-white/8 dark:bg-zinc-800 lg:min-h-full lg:border-b-0 lg:border-r">
          {project.image ? (
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-400 dark:text-zinc-500">
              No preview available
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5 p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20">
              Featured
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/[0.05] dark:text-zinc-300">
              {project.category}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/[0.05] dark:text-zinc-300">
              {project.status}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-zinc-50">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-zinc-400">
              {project.longDescription ?? project.shortDescription}
            </p>
          </div>

          <dl className="grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">
                Role
              </dt>
              <dd className="mt-1 text-slate-700 dark:text-zinc-200">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">
                Timeframe
              </dt>
              <dd className="mt-1 text-slate-700 dark:text-zinc-200">{project.timeframe}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">
                Team
              </dt>
              <dd className="mt-1 text-slate-700 dark:text-zinc-200">
                {project.teamType ?? "Not specified"}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">
                Context
              </dt>
              <dd className="mt-1 text-slate-700 dark:text-zinc-200">
                {project.projectContext ?? project.clientType ?? "Product build"}
              </dd>
            </div>
          </dl>

          <StackTags techStack={project.techStack} limit={5} />

          {highlights.length > 0 ? (
            <ul className="grid gap-2 text-sm text-slate-600 dark:text-zinc-400">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <ProjectActions
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            caseStudyUrl={project.caseStudyUrl}
            slug={project.slug}
          />
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
