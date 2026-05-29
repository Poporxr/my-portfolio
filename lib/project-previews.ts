import type { Project } from "@/lib/projects";

export type ProjectPreview = {
  url: string;
  image?: string;
};

export type ProjectWithPreview = Project & {
  preview?: ProjectPreview;
};

const getScreenshotPreviewUrl = (url: string) => {
  const params = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": "1366",
    "viewport.height": "900",
    "waitForTimeout": "800",
  });

  return `https://api.microlink.io/?${params.toString()}`;
};

const getProjectPreview = (project: Project): ProjectPreview | undefined => {
  if (!project.liveUrl?.startsWith("http")) {
    return undefined;
  }

  return {
    url: project.liveUrl,
    image: getScreenshotPreviewUrl(project.liveUrl),
  };
};

export const addProjectPreviews = (projects: Project[]): ProjectWithPreview[] =>
  projects.map((project) => ({
    ...project,
    preview: getProjectPreview(project),
  }));
