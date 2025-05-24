import type { Project } from '@/lib/types';
import ProjectCard from '@/components/project-card';
import { SectionWrapper } from '@/components/section-wrapper';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Personality Quiz App',
    description: 'A full-featured e-commerce platform with Next.js, Stripe, and Tailwind CSS. Includes product listings, cart, and checkout.',
    imageUrl: '/1.png',
    imageHint: "online shopping",
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://veeily812.github.io/Personality_Testing_Platform/',
    sourceUrl: 'https://github.com/veeily812/Personality_Testing_Platform',
  },
  {
    id: '2',
    title: 'Food delivery Web App',
    description: 'A collaborative task management application built with React and Firebase. Features real-time updates and user authentication.',
    imageUrl: '/2.png',
    imageHint: "task list",
    tags: ["UX/UI", 'Wix'],
    liveUrl: 'https://phungvi08123.wixsite.com/my-site-2',
  },
  {
    id: '3',
    title: 'KaizenTabi-Digital Testing Platform',
    description: 'This very portfolio website, designed to showcase my skills and projects using modern web technologies.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: "personal website",
    tags: ['React', 'Javascript', 'CSS', 'Html'],
    liveUrl: 'https://kaizentabi.academy/',
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="A glimpse into my passion for building.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
