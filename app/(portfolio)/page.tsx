import PageSection from "@/components/PageSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import SkillsSection from "@/components/SkillsSection";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 2);

  return (
    <div className="space-y-6">
      <PageSection
        eyebrow="Introduction"
        title="Building clean, useful web products with a strong product eye."
        description="I design and ship frontend-heavy experiences with solid backend foundations. My work focuses on usable interfaces, maintainable systems, and fast iteration from idea to production."
      />
      <SkillsSection />

      <SelectedWorkSection projects={featuredProjects} />
    </div>
  );
}
