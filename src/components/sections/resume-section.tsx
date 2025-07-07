import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { DownloadCloud } from 'lucide-react';
import Link from 'next/link';

export default function ResumeSection() {
  return (
    <SectionWrapper id="resume" title="My Resume" subtitle="Download my comprehensive resume to learn more about my professional background." className="bg-muted">
      <div className="text-center">
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105">
          <Link href="public/Vivian Phung RESUME.pdf" target="_blank" download="My_Resume.pdf">
            <DownloadCloud className="mr-2 h-5 w-5" />
            Download Resume (PDF)
          </Link>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
        </p>
      </div>
    </SectionWrapper>
  );
}
