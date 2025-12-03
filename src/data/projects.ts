export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "project-ecommerce-saas",
    title: "E-Commerce SaaS Platform",
    subtitle: "Full-Stack Platform • 2025",
    description: "Multi-tenant e-commerce solution with real-time inventory, payment processing, and analytics dashboard.",
    tags: ["Full-Stack", "SaaS", "React"],
    year: "2025",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "project-asr-robots",
    title: "ASR System for Social Robots",
    subtitle: "AI & Machine Learning • 2024",
    description: "Automatic speech recognition system optimized for human-robot interaction in noisy environments.",
    tags: ["AI", "Python", "Research"],
    year: "2024",
    githubUrl: "https://github.com",
  },
  {
    id: "project-analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    subtitle: "Frontend Development • 2024",
    description: "Interactive data visualization platform with customizable widgets and real-time data streaming.",
    tags: ["Frontend", "Data Viz", "TypeScript"],
    year: "2024",
    liveUrl: "https://example.com",
  },
  {
    id: "project-task-automation",
    title: "Workflow Automation Engine",
    subtitle: "Backend & Automation • 2024",
    description: "No-code automation platform for connecting APIs and building complex business workflows.",
    tags: ["Automation", "Node.js", "API"],
    year: "2024",
    githubUrl: "https://github.com",
  },
  {
    id: "project-design-system",
    title: "Component Design System",
    subtitle: "UI/UX & Development • 2023",
    description: "Comprehensive design system with 50+ accessible components, documentation, and theming support.",
    tags: ["Design System", "React", "Accessibility"],
    year: "2023",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
