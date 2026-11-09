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
    <div className="space-y-8 sm:space-y-10">
      <WorkPageIntro />

      <WorkFilters
        options={filterOptions}
        activeFilter={activeFilter}
        onChange={setActiveFilter}
      />

      <ProjectsGridSection
        title={
          activeFilter === "All"
            ? "All projects"
            : `${activeFilter} projects`
        }
        projects={visibleProjects}
        compactCards
      />

      <WorkCTASection />
    </div>
  );
};

export default WorkProjectsBrowser;
