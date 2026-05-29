import WorkProjectsBrowser from "@/components/WorkProjectsBrowser";
import { addProjectPreviews } from "@/lib/project-previews";
import {
  getAllProjects,
  getProjectCategories,
} from "@/lib/projects";

export const revalidate = 86400;

export default function WorkPage() {
  const projects = addProjectPreviews(getAllProjects());

  return (
    <WorkProjectsBrowser
      projects={projects}
      categories={getProjectCategories()}
    />
  );
}
