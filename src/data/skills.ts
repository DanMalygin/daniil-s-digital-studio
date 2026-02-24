export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "Python", "TypeScript"],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "tools",
    label: "Other Concepts & Tools",
    skills: ["Git", "Figma", "REST APIs", "Responsive Design"],
  },
];
