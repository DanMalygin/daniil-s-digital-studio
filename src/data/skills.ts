export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Express", "FastAPI"],
  },
  {
    id: "tools",
    label: "Core Concepts & Tools",
    skills: ["System Design", "REST APIs", "GraphQL", "Git", "Docker", "CI/CD", "Testing"],
  },
];
