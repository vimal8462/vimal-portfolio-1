import { AboutSection } from "@/components/about/about-section";
import { AiSection } from "@/components/ai/ai-section";
import { ArchitectureSection } from "@/components/architecture/architecture-section";
import { CertificationsSection } from "@/components/certifications/certifications-section";
import { ContactSection } from "@/components/contact/contact-section";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Navbar } from "@/components/navbar/navbar";
import { ProjectsSection } from "@/components/projects/projects-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsSection />
        <ProjectsSection />
        <ArchitectureSection />
        <CertificationsSection />
        <AiSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
