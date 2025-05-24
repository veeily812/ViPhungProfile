import type { Skill } from '@/lib/types';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { Code } from 'lucide-react'; // Default icon

interface SkillItemProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillItemProps) {
  const IconComponent = skill.icon || Code;
  return (
    <div className="mb-6 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <IconComponent className="w-5 h-5 mr-2 text-primary" />
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
      </div>
      <Progress value={skill.proficiency} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-accent [&>div]:to-primary" />
    </div>
  );
}
