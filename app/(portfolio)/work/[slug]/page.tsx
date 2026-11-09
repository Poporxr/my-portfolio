import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ProjectAccordion, {
  type AccordionItem,
} from "@/components/ProjectAccordion";
import ProjectImage from "@/components/ProjectImage";
import StackTags from "@/components/StackTags";
import { getAllProjects, getProjectBySlug, type Project } from "@/lib/projects";
import { addProjectPreviews } from "@/lib/project-previews";

export function generateStaticParams() {
  return getAllProjects()
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Work`,
    description: project.shortDescription,
  };
}

const bulletList = (items: string[]) => (
  <ul className="space-y-2 text-sm leading-7 text-slate-600 dark:text-zinc-400">
    {items.map((item) => (
      <li key={item} className="flex gap-2">
        <span className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-amber-400 dark:bg-amber-300" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ProjectFacts = ({ project }: { project: Project }) => {
  const facts: { label: string; value: string }[] = [
    { label: "Role", value: project.role },
    { label: "Timeframe", value: project.timeframe },
    { label: "Status", value: project.status },
    ...(project.teamType
      ? [{ label: "Team", value: project.teamType }]
      : []),
    ...(project.clientType
      ? [{ label: "Type", value: project.clientType }]
      : []),
    ...(project.metrics ?? [])
      .filter((metric) => metric.label !== "Type")
      .map((metric) => ({ label: metric.label, value: metric.value })),
  ];

  return (
    <div>
      <dl className="divide-y divide-slate-200 dark:divide-white/10">
        {facts.map((fact) => (
          <div
            key={fact.label}
            className="flex items-baseline justify-between gap-4 py-3 first:pt-0"
          >
            <dt className="flex-none text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-zinc-500">
              {fact.label}
            </dt>
            <dd className="text-right text-sm font-medium text-slate-800 dark:text-zinc-100">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-zinc-500">
          Stack
        </h3>
        <div className="mt-3">
          <StackTags
            techStack={project.techStack}
            limit={project.techStack.length}
          />
        </div>
      </div>

      {project.liveUrl || project.githubUrl ? (
        <div className="mt-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-zinc-500">
            Links
          </h3>
          <ul className="mt-1 divide-y divide-slate-200 dark:divide-white/10">
            {project.liveUrl ? (
              <li>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[44px] items-center justify-between gap-3 py-2 text-sm font-medium text-slate-800 transition hover:text-slate-950 dark:text-zinc-100 dark:hover:text-white"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-zinc-500" />
                </a>
              </li>
            ) : null}
            {project.githubUrl ? (
              <li>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[44px] items-center justify-between gap-3 py-2 text-sm font-medium text-slate-800 transition hover:text-slate-950 dark:text-zinc-100 dark:hover:text-white"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-zinc-500" />
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default async function ProjectDetailPage(
  props: PageProps<"/work/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectWithPreview = addProjectPreviews([project])[0];
  const previewImage = projectWithPreview.preview?.image;

  const accordionItems: AccordionItem[] = [];

  if (project.keyFeatures?.length) {
    accordionItems.push({
      id: "features",
      title: "Key features",
      content: bulletList(project.keyFeatures),
    });
  }

  const builtContent = (
    <>
      {project.contributionSummary ? (
        <p className="text-sm leading-7 text-slate-600 dark:text-zinc-400">
          {project.contributionSummary}
        </p>
      ) : null}
      {project.challenges?.length ? (
        <div className={project.contributionSummary ? "mt-5" : undefined}>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
            Challenges
          </h4>
          <div className="mt-2">{bulletList(project.challenges)}</div>
        </div>
      ) : null}
    </>
  );

  if (project.contributionSummary || project.challenges?.length) {
    accordionItems.push({
      id: "built",
      title: "How it was built",
      content: builtContent,
    });
  }

  if (project.outcomes?.length) {
    accordionItems.push({
      id: "outcomes",
      title: "Outcomes",
      content: bulletList(project.outcomes),
    });
  }

  return (
    <div className="w-full">
      <Link
        href="/work"
        className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to work
      </Link>

      <header className="mt-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
            {project.status}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/[0.05] dark:text-zinc-300">
            {project.category}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-zinc-50 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 dark:text-zinc-400">
          {project.shortDescription}
        </p>
        <p className="mt-4 text-sm text-slate-500 dark:text-zinc-400">
          {project.role}
          <span aria-hidden className="mx-2 text-slate-300 dark:text-zinc-600">
            ·
          </span>
          {project.timeframe}
          {project.teamType ? (
            <>
              <span aria-hidden className="mx-2 text-slate-300 dark:text-zinc-600">
                ·
              </span>
              {project.teamType} project
            </>
          ) : null}
        </p>
      </header>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
        <ProjectImage
          src={previewImage ?? project.image}
          alt={`${project.title} preview`}
          className="aspect-[16/9]"
        />
      </div>

      <div className="mt-8 border-t border-slate-200 dark:border-white/10 lg:hidden">
        <ProjectAccordion
          items={[
            {
              id: "project-details",
              title: "Project details",
              content: <ProjectFacts project={project} />,
            },
          ]}
        />
      </div>

      <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
        <div className="min-w-0">
          <section>
            <h2 className="text-xl font-semibold text-slate-950 dark:text-zinc-50">
              Overview
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 dark:text-zinc-400 sm:text-[15px]">
              <p>{project.longDescription ?? project.shortDescription}</p>
              {project.problem ? (
                <p>
                  <strong className="font-semibold text-slate-900 dark:text-zinc-100">
                    Problem:{" "}
                  </strong>
                  {project.problem}
                </p>
              ) : null}
              {project.solution ? (
                <p>
                  <strong className="font-semibold text-slate-900 dark:text-zinc-100">
                    Solution:{" "}
                  </strong>
                  {project.solution}
                </p>
              ) : null}
              {project.impact ? (
                <p>
                  <strong className="font-semibold text-slate-900 dark:text-zinc-100">
                    Impact:{" "}
                  </strong>
                  {project.impact}
                </p>
              ) : null}
            </div>
          </section>

          {accordionItems.length ? (
            <div className="mt-8 border-t border-slate-200 dark:border-white/10">
              <ProjectAccordion
                items={accordionItems}
                defaultOpenId={accordionItems[0].id}
              />
            </div>
          ) : null}
        </div>

        <aside className="hidden lg:block">
          <ProjectFacts project={project} />
        </aside>
      </div>
    </div>
  );
}
