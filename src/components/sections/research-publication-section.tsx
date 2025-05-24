import type { ResearchPublication } from '@/lib/types';
import ResearchPublicationItem from '@/components/research-publication-item';
import { SectionWrapper } from '@/components/section-wrapper';
import { BookOpenText, FileText, Mic } from 'lucide-react';

const publicationsData: ResearchPublication[] = [
  {
    id: 'rp1',
    title: 'Deep Learning-Based Image Captioning with Keras and TensorFlow',
    venue: 'Journal of Advanced Computing',
    date: 'Published 2023',
    description: 'Built a full pipeline using Keras and TensorFlow to convert images into natural language descriptions.',
    link: 'https://www.researchgate.net/publication/380014329_DICKT-Deep_Learning-Based_Image_Captioning_using_Keras_and_TensorFlow', // Replace with actual link
    icon: FileText,
    tags: ['Computer Vision', 'Deep Learnig'],
  },
  {
    id: 'rp2',
    title: 'User Interface Design and Usability in Information Systems',
    venue: 'Creative Approaches Towards Development of Computing and Multidisciplinary IT Solutions for Society',
    date: 'Published 2023',
    description: 'Analyzed key usability principles, evaluated real platforms, and proposed best practices.',
    link: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/9781394272303.ch23', // Replace with actual link
    icon: Mic, // Icon for conference presentation
    tags: ['Human-Computer Interaction', 'Information Systems'],
  },
  {
    id: 'rp3',
    title: 'Predictive Analytics in Education: A Holistic AI Approach Using Academic, Behavioral, and Socio-Demographic Features',
    venue: '#',
    date: 'Presented in 2024',
    description: 'Created a predictive model to forecast student performance using multidimensional input data.',
    icon: FileText,
    tags: ['Educational Data Mining,', 'Machine Learning'],
  },
  {
    id: 'rp4',
    title: 'Credit Risk Prediction in Vietnamese Commercial Banks with an Explainable AI Framework Using XGBoost',
    venue: 'IGI Global Scientific Publishing',
    date: 'Published 2023–2024',
    description: 'Applied XGBoost + SHAP to provide interpretable credit scoring pipeline for Vietnamese banks.',
    icon: FileText,
    link: 'https://www.igi-global.com/chapter/credit-risk-prediction-in-vietnamese-commercial-banks-with-an-explainable-ai-framework-using-xgboost/380145', 
    tags: ['Financial Technology', 'Explainable AI'],
  },
  {
    id: 'rp5',
    title: 'Autonomous Vision‐Based Fleet Management for Drone Delivery Optimization in E‐Commerce',
    venue: 'IGI Global Scientific Publishing',
    date: 'Published 2024',
    description: 'Developed an AI system for optimizing drone paths using vision data in last-mile delivery.',
    icon: FileText,
    link: 'https://www.igi-global.com/chapter/autonomous-vision-based-fleet-management-for-drone-delivery-optimization-in-e-commerce/380146',
    tags: ['Robotics', 'Computer Vision', 'Smart Logistics'],
  },
  {
    id: 'rp6',
    title: 'C3QG: Context-Controlled, Explainable, and Efficient Question Generation with Transformers',
    venue: 'IEEE EAIC 2025',
    date: 'Present in June 2025',
    description: 'Developed a context-controlled, explainable, and efficient question generation model using transformers.',
    icon: FileText,
    link: '#',
    tags: ['Artificial Intelligence', 'NLP'],
  },
];

export default function ResearchPublicationSection() {
  return (
    <SectionWrapper 
      id="research-publication" 
      title="Research & Publications" 
      subtitle="Exploring new frontiers and sharing knowledge."
      className="bg-muted"
    >
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {publicationsData.map((item) => (
          <ResearchPublicationItem key={item.id} item={item} />
        ))}
      </div>
       <p className="mt-8 text-center text-sm text-muted-foreground">
          Note: These are placeholder publications. Replace with your actual work.
        </p>
    </SectionWrapper>
  );
}
