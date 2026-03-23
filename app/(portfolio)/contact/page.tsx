import PageSection from "@/components/PageSection";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <PageSection
        eyebrow="Contact"
        title="Open to product, frontend, and full-stack work."
        description="If you need a portfolio site, dashboard, or product interface implemented with care, reach out through email or phone and I can respond with scope and next steps."
      >
        <ContactForm />
      </PageSection>
    </div>
  );
}
