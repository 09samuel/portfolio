export type TechnologyName =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Next.js"
  | "Tailwind CSS"
  | "Node.js"
  | "Express.js"
  | "FastAPI"
  | "REST APIs"
  | "WebSockets"
  | "MongoDB"
  | "PostgreSQL"
  | "AWS S3"
  | "Supabase"
  | "Firebase"
  | "Git"
  | "GitHub"
  | "GitHub Actions"
  | "Docker"
  | "AWS EC2"
  | "AWS ECS"
  | "JWT Auth"
  | "Real-time Systems";

export interface SkillCategory {
  category: string;
  technologies: TechnologyName[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    technologies: ["JavaScript", "TypeScript", "React", "Tailwind CSS"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets"]
  },
  {
    category: "Databases & Storage",
    technologies: ["MongoDB", "PostgreSQL", "AWS S3", "Supabase", "Firebase"]
  },
  {
    category: "DevOps & Tools",
    technologies: ["Git", "GitHub", "GitHub Actions", "Docker", "AWS EC2", "AWS ECS"]
  },
  {
    category: "Other",
    technologies: ["JWT Auth", "Real-time Systems"]
  }
];