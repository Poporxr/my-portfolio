import PageSection from "@/components/PageSection";
import SkillsSection from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageSection
        eyebrow="Introduction"
        title="Building clean, useful fullstack web products with a strong product eye."
        description="I design and ship fullstack experiences with polished interfaces, reliable backend foundations, and practical iteration from idea to production."
      />
      <SkillsSection />
    </div>
  );
}
