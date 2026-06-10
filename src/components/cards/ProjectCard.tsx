import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Globe, Video } from "lucide-react"
import { TbBrandGithub } from "react-icons/tb"
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="w-full h-full flex flex-col overflow-hidden border-2 border-black rounded-base shadow-shadow">
      
      {/* Image Container*/}
      <div className="relative w-full h-48 border-b-2 border-black bg-white overflow-hidden shrink-0 group">
        <img
          src={project.imagePath}
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Overlay Icons */}
        <div className="absolute top-3 right-3 flex gap-3 z-10">
          {project.links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer" 
              title={link.label}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white border transition-all hover:-translate-y-1"
            >
              {link.icon === 'website' ? (
                <Globe size={18} strokeWidth={2.5} className="text-black" />
              ) : link.icon === 'video' ? (
                <Video size={18} strokeWidth={2.5} className="text-black" />
              ) : (
                <TbBrandGithub size={20} className="text-black" />
              )} 
            </a>
          ))}
        </div>
      </div>

      <CardHeader className=" pb-3 shrink-0">
        <CardTitle className="font-bold text-2xl tracking-tighter text-black">
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm text-black/80 font-medium leading-relaxed mt-2 line-clamp-3">
          {project.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="grow">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-bold tracking-wide border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}