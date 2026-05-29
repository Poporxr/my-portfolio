"use client";

import { useState } from "react";
import ProjectsGridSection from "@/components/ProjectsGridSection";
import WorkCTASection from "@/components/WorkCTASection";
import WorkFilters from "@/components/WorkFilters";
import WorkPageIntro from "@/components/WorkPageIntro";
import type { ProjectWithPreview } from "@/lib/project-previews";

type WorkProjectsBrowserProps = {
  projects: ProjectWithPreview[];
  categories: string[];
};

const WorkProjectsBrowser = ({
  projects,
  categories,
}: WorkProjectsBrowserProps) => {
  const filterOptions = ["All", ...categories];
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="space-y-8">
      <WorkPageIntro
        title="Work designed to be scanned quickly and explored in depth."
        description="This page highlights the products, dashboards, admin systems, and fullstack builds I have worked on in one place. Filter by project type, then open any project for deeper scope, stack, and delivery context."
      />

      <section className="space-y-3 rounded-[28px] border border-slate-200/85 bg-white/70 p-5 ring-1 ring-white/70 backdrop-blur-sm dark:border-white/8 dark:bg-zinc-900/52 dark:ring-white/5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-zinc-500">
            Browse
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-zinc-50">
            Filter by project type
          </h2>
        </div>
        <WorkFilters
          options={filterOptions}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />
      </section>

      <ProjectsGridSection
        title={
          activeFilter === "All"
            ? "All projects"
            : `${activeFilter} projects`
        }
        description="Every project appears in the same list, with compact cards for scanning and detail pages for deeper role, outcome, and implementation notes."
        projects={visibleProjects}
        compactCards
      />

      <WorkCTASection />
    </div>
  );
};

export default WorkProjectsBrowser;
