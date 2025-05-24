import type { Skill } from '@/lib/types';
import SkillItem from '@/components/skill-item';
import { SectionWrapper } from '@/components/section-wrapper';
import { Code, Database, Cloud, Palette, PencilRuler, Brain } from 'lucide-react';

const skillsData: Skill[] = [
  { id: '1', name: 'JavaScript / TypeScript', proficiency: 95, icon: Code },
  { id: '2', name: 'React / Next.js', proficiency: 90, icon: Code },
  { id: '3', name: 'Node.js / Express', proficiency: 85, icon: Database },
  { id: '4', name: 'Python', proficiency: 80, icon: Code },
  { id: '5', name: 'Cloud Platforms (AWS/Firebase)', proficiency: 75, icon: Cloud },
  { id: '6', name: 'UI/UX Design Principles', proficiency: 70, icon: Palette },
  { id: '7', name: 'Problem Solving', proficiency: 92, icon: Brain },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="My Expertise" subtitle="Technologies and tools I work with.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 max-w-4xl mx-auto">
        {skillsData.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
}
