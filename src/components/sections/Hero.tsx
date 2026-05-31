import { Button } from "@/components/ui/button"
import { MapPin } from 'lucide-react';
import { TbBrandGithub, TbFileDownload } from "react-icons/tb"
import { LinkedinIcon } from "../icons/lucide-linkedin";

export default function HeroSection() {
  return (
    <section id="home" className="w-full px-6 pt-32 md:px-12 lg:px-20 min-h-screen flex items-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        
        {/* Left Column */}
        <div className="flex flex-col items-start flex-1 z-10">
          
          {/* Location */}
          <div className="flex items-center gap-2 border-2 rounded-base border-black px-3 py-1 text-sm font-bold tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-8">
            <MapPin size={16} strokeWidth={3} />
            Bengaluru, India
          </div>

          {/* Name */}
          <h1 className="font-heading text-5xl sm:text-6xl tracking-tighter text-black flex flex-col">
            <span>Samuel Menino</span>
            <span>Fernandes</span>
          </h1>

          {/* Position */}
          <div className="mt-8 inline-block border-2 rounded-base border-black px-3 py-1 text-sm sm:text-base font-bold tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Full-Stack Developer
          </div>

          {/* Description */}
          <p className="mt-6 max-w-sm text-balance text-sm sm:text-base">
            Building scalable web applications, real-time systems, and developer-focused products with architectural precision and high energy.
          </p>

          {/* Social Links */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button asChild variant="neutral" className="cursor-pointer gap-4">
              <a 
                href="/samuel_fernandes_resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="font-semibold"> Resume </span>
                <TbFileDownload size={20}/>
              </a>
            </Button>

            <a 
              href="https://github.com/09samuel" 
              target="_blank" 
              rel="noreferrer"
              className="transition-transform hover:-translate-y-1"
            >
              <TbBrandGithub size={24}/>
            </a>

            <a 
              href="https://www.linkedin.com/in/samuel-fernandes-450701240/" 
              target="_blank" 
              rel="noreferrer"
              className="transition-transform hover:-translate-y-1"
            >
              <LinkedinIcon />
            </a>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex justify-center max-w-md shrink-0 mx-auto lg:ml-auto mt-12 lg:mt-0">
          
          {/* Profile Photo */}
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-black bg-gray-200 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden ">
            <img 
              src="/images/headshot.webp" 
              alt="Samuel Fernandes" 
              className="w-full h-full object-cover grayscale"
            />
          </div>

        </div>

      </div>
    </section>
  );
}