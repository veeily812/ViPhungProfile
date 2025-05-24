import HeroSection from '@/components/sections/hero-section';
import AchievementsSection from '@/components/sections/achievements-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import ResearchPublicationSection from '@/components/sections/research-publication-section';
import AiGeneratorSection from '@/components/sections/ai-generator-section';
import ContactSection from '@/components/sections/contact-section';
import ResumeSection from '@/components/sections/resume-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <ProjectsSection />
      <SkillsSection />
      <ResearchPublicationSection />
      <AiGeneratorSection />
      <ContactSection />
      <ResumeSection />
    </>
  );
}
