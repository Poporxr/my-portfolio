import Link from "next/link";

type ProjectActionsProps = {
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  slug?: string;
  compact?: boolean;
};

const actionClass =
  "inline-flex items-center justify-center rounded-full border border-slate-200/90 bg-white/90 px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-white/14 dark:hover:bg-white/[0.08]";

const ProjectActions = ({
  liveUrl,
  githubUrl,
  caseStudyUrl,
  slug,
  compact = false,
}: ProjectActionsProps) => {
  const detailHref = slug ? `/work/${slug}` : undefined;

  return (
    <div className={`flex flex-wrap gap-2 ${compact ? "" : "pt-1"}`}>
      {liveUrl ? (
        <Link
          href={liveUrl}
          className={actionClass}
          target={liveUrl.startsWith("http") ? "_blank" : undefined}
          rel={liveUrl.startsWith("http") ? "noreferrer" : undefined}
        >
          Live Demo
        </Link>
      ) : null}
      {githubUrl ? (
        <Link href={githubUrl} className={actionClass} target="_blank" rel="noreferrer">
          GitHub
        </Link>
      ) : null}
      {caseStudyUrl ? (
        <Link
          href={caseStudyUrl}
          className={actionClass}
          target={caseStudyUrl.startsWith("http") ? "_blank" : undefined}
          rel={caseStudyUrl.startsWith("http") ? "noreferrer" : undefined}
        >
          Case Study
        </Link>
      ) : null}
      {!caseStudyUrl && detailHref ? (
        <Link href={detailHref} className={actionClass}>
          Details
        </Link>
      ) : null}
    </div>
  );
};

export default ProjectActions;
