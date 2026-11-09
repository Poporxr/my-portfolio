"use client";

import { useState } from "react";
import Link from "next/link";
import StackTags from "@/components/StackTags";
import type { ProjectWithPreview } from "@/lib/project-previews";

type ProjectCardProps = {
  project: ProjectWithPreview;
  compact?: boolean;
  eagerPreview?: boolean;
};

const FALLBACK_IMAGE = "/projects/portfolio-system.svg";

const ProjectCard = ({ project, eagerPreview = false }: ProjectCardProps) => {
  const initialSrc = project.preview?.image ?? project.image ?? FALLBACK_IMAGE;
  const [imgSrc, setImgSrc] = useState(initialSrc);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-zinc-900">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-zinc-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={`${project.title} preview`}
          loading={eagerPreview ? "eager" : "lazy"}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => {
            if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE);
          }}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
            {project.category}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/5 dark:text-zinc-300">
            {project.status}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-950 dark:text-zinc-50">
            {project.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-zinc-400">
            {project.shortDescription}
          </p>
        </div>

        <StackTags techStack={project.techStack} limit={4} />

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
            >
              Live Demo
            </Link>
          ) : null}
          {project.slug ? (
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Details
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
