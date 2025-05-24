import type { Achievement } from '@/lib/types';
import AchievementItem from '@/components/achievement-item';
import { SectionWrapper } from '@/components/section-wrapper';
import { Award, Zap, Rocket } from 'lucide-react';

const achievements: Achievement[] = [
  {
    id: '1',
    date: '2024 Q4',
    title: 'Project Manager Intern at Vision Mentors (Full-time, Sept–Present)',
    description: 'Led LMS Project v1 release scheduled for December.',
    icon: Rocket,
  },
  {
    id: '2',
    date: '2024 Q2',
    title: 'Swinbiz Rock-Star Competition (2024)',
    description: 'Pitched AI-powered career counseling platform: VISIONPATH',
    icon: Award,
  },
  {
    id: '3',
    date: '2024 Q3',
    title: 'Published 5 AI-related papers ',
    description: 'Applied domains like education, finance, and computer vision',
    icon: Zap,
  },
];

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements" title="Milestones & Achievements" subtitle="A journey of growth and accomplishments.">
      <div className="max-w-3xl mx-auto">
        {achievements.map((achievement, index) => (
          <AchievementItem 
            key={achievement.id} 
            achievement={achievement}
            isLast={index === achievements.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
