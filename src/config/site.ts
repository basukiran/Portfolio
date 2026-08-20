/**
 * Central portfolio configuration.
 * Replace the placeholder URLs below with your own.
 */

export const siteConfig = {
  name: 'Basukiran',
  fullName: 'Basukiran Dadibavi',
  role: 'AI / ML Engineer',
  tagline: 'Building intelligent systems where AI meets real-world problems.',
  email: 'basukiran@example.com',
  location: 'Karnataka, India',
  resume: '/resume.pdf',
  social: {
    github: 'https://github.com/basukiran',
    linkedin: 'https://www.linkedin.com/in/basukiran-dadibavi',
  },
};

export interface ProjectLink {
  label: string;
  href: string;
  variant: 'primary' | 'ghost';
}

export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  accent: string;
  visual: 'neural' | 'os' | 'vision' | 'speech';
}

export const projects: Project[] = [
  {
    id: 'ai-pdf-assistant',
    index: '01',
    title: 'AI PDF Assistant',
    description:
      'An AI-powered document assistant using Retrieval-Augmented Generation to understand and answer questions from PDF documents.',
    tech: ['Python', 'Streamlit', 'RAG', 'FAISS', 'Ollama', 'Qwen', 'Embeddings'],
    links: [
      { label: 'Live Demo', href: 'https://example.com/ai-pdf-assistant', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/basukiran/ai-pdf-assistant', variant: 'ghost' },
    ],
    accent: '#4ade80',
    visual: 'neural',
  },
  {
    id: 'ai-personal-os',
    index: '02',
    title: 'AI Personal OS',
    description:
      'An AI-powered personal productivity system designed to bring intelligent assistance, automation and personal workflows into one platform.',
    tech: ['React', 'TypeScript', 'AI', 'Backend', 'Database'],
    links: [
      { label: 'Live Demo', href: 'https://example.com/ai-personal-os', variant: 'primary' },
      { label: 'GitHub', href: 'https://github.com/basukiran/ai-personal-os', variant: 'ghost' },
    ],
    accent: '#22d3ee',
    visual: 'os',
  },
  {
    id: 'speech-to-speech',
    index: '03',
    title: 'Speech-to-Speech Assistant',
    description:
      'An AI-powered assistive system combining speech recognition, language processing and text-to-speech.',
    tech: ['Python', 'Speech Recognition', 'Whisper', 'Text-to-Speech', 'Generative AI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/basukiran/speech-to-speech', variant: 'ghost' },
    ],
    accent: '#a78bfa',
    visual: 'speech',
  },
];

export interface TimelineEntry {
  year: string;
  title: string;
}

export const timeline: TimelineEntry[] = [
  { year: '2023', title: 'Started engineering journey' },
  { year: '2024', title: 'Started building AI/ML projects' },
  { year: '2025', title: 'Explored Generative AI, RAG and computer vision' },
  { year: '2026', title: 'Building advanced AI systems and preparing for industry' },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI / ML',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Computer Vision', 'Generative AI', 'RAG', 'LLMs'],
  },
  {
    category: 'Development',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Flask', 'Django', 'Streamlit'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Cloud platforms'],
  },
];

export const aboutInterests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Generative AI',
  'Computer Vision',
  'Full-Stack Development',
  'Intelligent Systems',
];
