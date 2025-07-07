import type { Project } from '@/lib/types';
import ProjectCard from '@/components/project-card';
import { SectionWrapper } from '@/components/section-wrapper';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Breast Cancer Diagnosis Prediction App',
    description: 'A Streamlit application that helps medical professionals diagnose breast cancer by analyzing cell nuclei measurements. Features interactive input sliders, real-time predictions, and visual representations using radar charts.',
    tags: ['Python', 'Streamlit', 'Machine Learning', 'Data Science'],
    liveUrl: 'https://github.com/veeily812/streamlit_App_Breast_Cancer',
    sourceUrl: 'https://github.com/veeily812/streamlit_App_Breast_Cancer',
  },
  {
    id: '2',
    title: 'KMeans Clustering Project',
    description: 'A data science project demonstrating unsupervised learning using KMeans clustering on real-world datasets. Includes Jupyter notebooks and CSV data for hands-on exploration.',
    tags: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Science', 'Clustering'],
    liveUrl: 'https://github.com/veeily812/KMeans_Clustering_Project',
    sourceUrl: 'https://github.com/veeily812/KMeans_Clustering_Project',
  },
  {
    id: '3',
    title: 'Personality Quiz App',
    description: 'A full-featured e-commerce platform with Next.js, Stripe, and Tailwind CSS. Includes product listings, cart, and checkout.',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://veeily812.github.io/Personality_Testing_Platform/',
    sourceUrl: 'https://github.com/veeily812/Personality_Testing_Platform',
  },
  {
    id: '4',
    title: 'Food delivery Web App',
    description: 'A collaborative task management application built with React and Firebase. Features real-time updates and user authentication.',
    tags: ["UX/UI", 'Wix'],
    liveUrl: 'https://phungvi08123.wixsite.com/my-site-2',
  },
  {
    id: '5',
    title: 'KaizenTabi-Digital Testing Platform',
    description: 'This very portfolio website, designed to showcase my skills and projects using modern web technologies.',
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
