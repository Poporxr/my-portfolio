import ProjectActions from "@/components/ProjectActions";
import StackTags from "@/components/StackTags";
import type { ProjectWithPreview } from "@/lib/project-previews";

type ProjectCardProps = {
  project: ProjectWithPreview;
  compact?: boolean;
  eagerPreview?: boolean;
};

const ProjectCard = ({
  project,
  compact = false,
  eagerPreview = false,
}: ProjectCardProps) => {
  const highlights = (project.keyFeatures ?? project.outcomes ?? []).slice(0, 3);
  const previewImage = project.preview?.image;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/85 bg-white/88 shadow-[0_12px_35px_rgba(15,23,42,0.05)] ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)] dark:ring-white/5">
      <div
        className={`relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-amber-50 via-sky-50 to-emerald-50 dark:border-white/8 dark:from-zinc-800 dark:via-slate-900 dark:to-emerald-950/40 ${compact ? "aspect-[16/11]" : "aspect-[16/10]"}`}
      >
        {previewImage ? (
          <div className="absolute inset-4 overflow-hidden rounded-[20px] border border-white/70 bg-white/75 shadow-[0_18px_45px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/5 dark:border-white/10 dark:bg-zinc-950/45 dark:shadow-[0_18px_45px_rgba(0,0,0,0.32)] dark:ring-white/10 sm:inset-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewImage}
              alt={`${project.title} live demo preview`}
              loading={eagerPreview ? "eager" : "lazy"}
              decoding="async"
              referrerPolicy="no-referrer"
              className="h-full w-full object-contain object-center"
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400 dark:text-zinc-500">
            No preview available
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20">
            {project.category}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/[0.05] dark:text-zinc-300">
            {project.status}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-950 dark:text-zinc-50">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-zinc-400">
            {project.shortDescription}
          </p>
        </div>

        {!compact ? (
          <dl className="grid gap-3 text-sm sm:grid-cols-3">
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
          </dl>
        ) : null}

        <StackTags techStack={project.techStack} limit={compact ? 4 : undefined} />

        {!compact && highlights.length > 0 ? (
          <ul className="space-y-2 text-sm text-slate-600 dark:text-zinc-400">
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
          compact
        />
      </div>
    </article>
  );
};

export default ProjectCard;
