export interface Service {
  id: string;
  indexLabel: string;
  title: string;
  description: string;
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "service-1",
    indexLabel: "01",
    title: "Full-Stack Development",
    description: "Building complete web applications from database architecture to polished user interfaces. I create scalable, maintainable systems that grow with your business.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Next.js"],
  },
  {
    id: "service-2",
    indexLabel: "02",
    title: "Frontend & UI/UX",
    description: "Crafting intuitive, responsive interfaces that users love. From design systems to pixel-perfect implementations, I focus on performance and accessibility.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Figma", "Storybook"],
  },
  {
    id: "service-3",
    indexLabel: "03",
    title: "AI & Automation",
    description: "Integrating intelligent solutions into applications. From conversational AI to automated workflows, I help businesses leverage machine learning effectively.",
    technologies: ["Python", "OpenAI API", "LangChain", "TensorFlow", "Docker"],
  },
];
