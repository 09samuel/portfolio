import { skillsData, type SkillCategory, type TechnologyName } from "../../data/skills" 
import { certificationsData, type Certification } from "../../data/certifications"
import { ArrowUpRight, Award } from "lucide-react"
import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandNodejs,
  TbServer,
  TbBolt,
  TbApi,
  TbBrandSocketIo,
  TbBrandMongodb,
  TbBrandSupabase,
  TbBrandFirebase,
  TbBrandGit,
  TbBrandGithub,
  TbBrandDocker,
  TbKey,
  TbStack2,
  TbActivity,
} from "react-icons/tb"
import { SiPostgresql } from "react-icons/si"
import { FaAws } from "react-icons/fa"

interface TechIconProps {
  className?: string;
}

type TechIconsMap = Record<TechnologyName, React.ComponentType<TechIconProps>>;

const techIcons: TechIconsMap = {
  "JavaScript": TbBrandJavascript,
  "TypeScript": TbBrandTypescript,
  "React": TbBrandReact,
  "Next.js": TbBrandNextjs,
  "Tailwind CSS": TbBrandTailwind,
  "Node.js": TbBrandNodejs,
  "Express.js": TbServer,
  "FastAPI": TbBolt,
  "REST APIs": TbApi,
  "WebSockets": TbBrandSocketIo,
  "MongoDB": TbBrandMongodb,
  "PostgreSQL": SiPostgresql,
  "AWS RDS": FaAws,
  "AWS S3": FaAws,
  "Supabase": TbBrandSupabase,
  "Firebase": TbBrandFirebase,
  "Git": TbBrandGit,
  "GitHub": TbBrandGithub,
  "GitHub Actions": TbBrandGithub,
  "Docker": TbBrandDocker,
  "AWS EC2": FaAws,
  "AWS ECS": FaAws,
  "JWT Authentication": TbKey,
  "Message Queues": TbStack2,
  "Real-time Systems": TbActivity,
}


export default function SkillsAndCertsSection() {
  return (
    <section id="skills" className="w-full px-6 py-36 md:px-12 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-24">
        
        {/* Skills Section*/}
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tighter mb-10">
            Tech Stack
          </h2>

          <div className="flex flex-col gap-6">
            {skillsData.map((track: SkillCategory, index: number) => (
              <div key={index} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                
                {/* Category */}
                <h3 className="w-48 text-base font-bold text-slate-900 pt-1 shrink-0">
                  {track.category}
                </h3>
                
                {/* Skill Icons & Labels */}
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {track.technologies.map((tech: TechnologyName, techIndex: number) => {
                    const Icon = techIcons[tech];
                    return (
                      <div 
                        key={techIndex} 
                        className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-slate-700 cursor-default"
                      >
                        {Icon && <Icon className="w-5 h-5 text-slate-900 shrink-0" />}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tighter mb-10">
            Certifications & Courses
          </h2>

          <div className="relative flex flex-col gap-12 pt-6">
            {certificationsData.map((cert: Certification) => (
              <a 
                key={cert.id} 
                href={cert.link} 
                target="_blank"
                rel="noreferrer"
                className="group relative pl-16 block"
              >
                {/* Logo */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
                  <Award className="w-6 h-6 text-black" />
                </div>
                
                <div className="flex flex-row justify-between items-start gap-4">
                  <div className="flex-1 pr-2">
                    <h3 className="font-bold text-lg sm:text-xl text-black leading-tight group-hover:underline underline-offset-4">
                      {cert.name}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-black/75 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 sm:mt-1">
                    <span className="hidden sm:inline-block text-xs sm:text-sm font-bold text-black/50 whitespace-nowrap">
                      {cert.date}
                    </span>
                    
                    {/* Arrow */}
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-black bg-white transition-all group-hover:-translate-y-0.5">
                      <ArrowUpRight size={16} className="text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}