import Image from "next/image";
import { notFound } from "next/navigation";
import ProjectActions from "@/components/ProjectActions";
import StackTags from "@/components/StackTags";
import { getProjectBySlug } from "@/lib/projects";

export default async function ProjectDetailPage(
  props: PageProps<"/work/[slug]">
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[30px] border border-slate-200/85 bg-white/88 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)] dark:ring-white/5 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
          Project Detail
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-zinc-50">
          {project.title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-zinc-400">
          {project.shortDescription}
        </p>
      </section>

      <section className="overflow-hidden rounded-[30px] border border-slate-200/85 bg-white/88 shadow-[0_12px_35px_rgba(15,23,42,0.05)] ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)] dark:ring-white/5">
        <div className="relative aspect-[16/9] bg-slate-100 dark:bg-zinc-800">
          {project.image ? (
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-400 dark:text-zinc-500">
              No preview available
            </div>
          )}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <article className="rounded-[28px] border border-slate-200/85 bg-white/88 p-6 ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:ring-white/5">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-zinc-50">
              Project context
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-zinc-400">
              <p>{project.longDescription ?? project.shortDescription}</p>
              {project.projectContext ? <p>{project.projectContext}</p> : null}
              {project.problem ? (
                <p>
                  <strong className="text-slate-900 dark:text-zinc-100">Problem:</strong>{" "}
                  {project.problem}
                </p>
              ) : null}
            </div>
          </article>

          <article className="rounded-[28px] border border-slate-200/85 bg-white/88 p-6 ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:ring-white/5">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-zinc-50">
              Role and responsibilities
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-zinc-400">
              <p>{project.role}</p>
              {project.contributionSummary ? <p>{project.contributionSummary}</p> : null}
            </div>
          </article>

          {project.keyFeatures?.length ? (
            <article className="rounded-[28px] border border-slate-200/85 bg-white/88 p-6 ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:ring-white/5">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-zinc-50">
                Key features
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-zinc-400">
                {project.keyFeatures.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}

          {project.challenges?.length ? (
            <article className="rounded-[28px] border border-slate-200/85 bg-white/88 p-6 ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:ring-white/5">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-zinc-50">
                Challenges
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-zinc-400">
                {project.challenges.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}

          {project.solution || project.impact ? (
            <article className="rounded-[28px] border border-slate-200/85 bg-white/88 p-6 ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:ring-white/5">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-zinc-50">
                Solution and outcome
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-zinc-400">
                {project.solution ? (
                  <p>
                    <strong className="text-slate-900 dark:text-zinc-100">Approach:</strong>{" "}
                    {project.solution}
                  </p>
                ) : null}
                {project.impact ? (
                  <p>
                    <strong className="text-slate-900 dark:text-zinc-100">Impact:</strong>{" "}
                    {project.impact}
                  </p>
                ) : null}
              </div>
            </article>
          ) : null}
        </div>

        <aside className="space-y-6">
          <article className="rounded-[28px] border border-slate-200/85 bg-white/88 p-6 ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:ring-white/5">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-zinc-50">
              Project summary
            </h2>
            <dl className="mt-4 grid gap-4 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">Category</dt>
                <dd className="mt-1 text-slate-700 dark:text-zinc-200">{project.category}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">Status</dt>
                <dd className="mt-1 text-slate-700 dark:text-zinc-200">{project.status}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">Timeframe</dt>
                <dd className="mt-1 text-slate-700 dark:text-zinc-200">{project.timeframe}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">Team</dt>
                <dd className="mt-1 text-slate-700 dark:text-zinc-200">{project.teamType ?? "Not specified"}</dd>
              </div>
              {project.clientType ? (
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">Client Type</dt>
                  <dd className="mt-1 text-slate-700 dark:text-zinc-200">{project.clientType}</dd>
                </div>
              ) : null}
            </dl>
          </article>

          <article className="rounded-[28px] border border-slate-200/85 bg-white/88 p-6 ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:ring-white/5">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-zinc-50">
              Tech stack
            </h2>
            <div className="mt-4">
              <StackTags techStack={project.techStack} limit={project.techStack.length} />
            </div>
          </article>

          {project.metrics?.length ? (
            <article className="rounded-[28px] border border-slate-200/85 bg-white/88 p-6 ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:ring-white/5">
              <h2 className="text-lg font-semibold text-slate-950 dark:text-zinc-50">
                Outcome snapshot
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/8 dark:bg-zinc-800/55">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-zinc-500">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-zinc-100">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ) : null}

          <article className="rounded-[28px] border border-slate-200/85 bg-white/88 p-6 ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/72 dark:ring-white/5">
            <h2 className="text-lg font-semibold text-slate-950 dark:text-zinc-50">
              Links
            </h2>
            <ProjectActions
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              caseStudyUrl={project.caseStudyUrl}
              slug={project.slug}
            />
          </article>
        </aside>
      </section>
    </div>
  );
}
