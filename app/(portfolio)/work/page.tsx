import WorkProjectsBrowser from "@/components/WorkProjectsBrowser";
import {
  getFeaturedProjects,
  getProjectCategories,
  getStandardProjects,
} from "@/lib/projects";

export default function WorkPage() {
  return (
    <WorkProjectsBrowser
      featuredProjects={getFeaturedProjects()}
      standardProjects={getStandardProjects()}
      categories={getProjectCategories()}
    />
  );
}
