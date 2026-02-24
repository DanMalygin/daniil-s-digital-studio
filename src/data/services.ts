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
    title: "Frontend Development",
    description: "Building responsive, clean web pages and components from scratch. I turn layouts into code that works across every device.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "service-2",
    indexLabel: "02",
    title: "UI Component Building",
    description: "Designing and developing reusable, modular UI components that are easy to maintain and scale.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Figma"],
  },
  {
    id: "service-3",
    indexLabel: "03",
    title: "Website Integration & Fixes",
    description: "Plugging components into existing websites, fixing layout issues, and making sure everything looks and functions as intended.",
    technologies: ["Git", "TypeScript", "Next.js"],
  },
];
