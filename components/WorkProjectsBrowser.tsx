"use client";

import { useState } from "react";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ProjectsGridSection from "@/components/ProjectsGridSection";
import WorkCTASection from "@/components/WorkCTASection";
import WorkFilters from "@/components/WorkFilters";
import WorkPageIntro from "@/components/WorkPageIntro";
import type { Project } from "@/lib/projects";

type WorkProjectsBrowserProps = {
  featuredProjects: Project[];
  standardProjects: Project[];
  categories: string[];
};

const WorkProjectsBrowser = ({
  featuredProjects,
  standardProjects,
  categories,
}: WorkProjectsBrowserProps) => {
  const filterOptions = ["All", ...categories];
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? standardProjects
      : standardProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="space-y-8">
      <WorkPageIntro
        title="Work designed to be scanned quickly and explored in depth."
        description="This page highlights the products, dashboards, admin systems, and frontend builds I have worked on. Start with the featured work for the strongest examples, then scan the broader project list for scope, stack, and delivery context."
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

      <FeaturedProjectsSection projects={featuredProjects.slice(0, 3)} />

      <ProjectsGridSection
        title={
          activeFilter === "All"
            ? "Broader project archive"
            : `${activeFilter} projects`
        }
        description="Compact cards keep the full project list easy to compare, while still surfacing the role, timeframe, stack, and strongest highlights for each build."
        projects={visibleProjects}
      />

      <WorkCTASection />
    </div>
  );
};

export default WorkProjectsBrowser;
