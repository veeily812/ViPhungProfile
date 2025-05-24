import type { Achievement } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, CalendarDays } from 'lucide-react'; // Default icon

interface AchievementItemProps {
  achievement: Achievement;
  isLast: boolean;
}

export default function AchievementItem({ achievement, isLast }: AchievementItemProps) {
  const IconComponent = achievement.icon || Briefcase;

  return (
    <div className="relative pl-12 pb-10 group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[1.375rem] top-5 h-full w-0.5 bg-border group-hover:bg-primary transition-colors duration-300"></div>
      )}
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 transform translate-x-[-50%]">
         <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      <Card className="ml-[-1rem] group-hover:shadow-xl transition-shadow duration-300 border-transparent hover:border-primary">
        <CardHeader>
          <div className="flex items-center justify-between mb-1">
            <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">{achievement.title}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="w-4 h-4 mr-1.5" />
              {achievement.date}
            </div>
          </div>
          <CardDescription className="text-foreground/80 leading-relaxed">{achievement.description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
