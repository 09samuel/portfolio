export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export const experienceData: Experience[] = [
  {
    id: "jeffs-group-intern",
    role: "Full Stack Intern",
    company: "Jeff's Group of Companies",
    location: "Bengaluru, India",
    startDate: "Feb. 2026",
    endDate: "Present",
    bullets: [
      "Developing a sports management ERP platform from scratch as a Full-Stack Intern in a startup environment, developing core frontend and backend modules to support sports operations.",
      "Designed and implemented end-to-end application features, contributing across the stack to establish scalable architecture and foundational system components."
    ]
  }
];