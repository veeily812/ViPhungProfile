import Link from 'next/link';
import type { ResearchPublication } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, ExternalLink, CalendarDays } from 'lucide-react';

interface ResearchPublicationItemProps {
  item: ResearchPublication;
}

export default function ResearchPublicationItem({ item }: ResearchPublicationItemProps) {
  const IconComponent = item.icon || FileText;

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center">
             <IconComponent className="w-6 h-6 mr-3 text-primary flex-shrink-0" />
             <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">{item.title}</CardTitle>
          </div>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
            <CalendarDays className="w-4 h-4 mr-1.5" />
            <span>{item.date}</span>
            <span className="mx-2">|</span>
            <span className="font-medium">{item.venue}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/80 leading-relaxed mb-4">{item.description}</CardDescription>
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      {item.link && (
        <CardFooter className="pt-0">
          <Button asChild variant="outline" className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Read More
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
