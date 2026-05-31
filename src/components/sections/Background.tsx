import {
  CardContent,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { experienceData } from "../../data/experience"
import { educationData } from "../../data/education"
import { Briefcase, GraduationCap } from "lucide-react"

export default function BackgroundSection() {
  return (
    <section id="background" className="w-full px-6 pt-36 pb-52 md:px-12 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto">

        <div className="mb-12">
          <h2 className="inline-block font-heading text-3xl sm:text-4xl tracking-tighter pb-2">
            Background
          </h2>
        </div>

        <Tabs defaultValue="experience">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            
            {/* Experience Tab */}
            <TabsContent value="experience">
                {/* <Card> */}
                    <CardContent className="relative px-6 flex flex-col gap-12 pt-6">
                        {experienceData.map((job, index) => (
                            <div key={job.id} className="relative pl-16">
                                {/* Vertical Line */}
                                {index !== experienceData.length - 1 && (
                                    <div className="absolute left-6 top-12 -bottom-14 w-0.5 bg-black" />
                                )}
                                
                                {/* Circular Logo */}
                                <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
                                    <Briefcase className="w-6 h-6 text-black" />
                                </div>
                                
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                                    <div>
                                        <h3 className="font-bold text-lg sm:text-xl text-black leading-tight">{job.role}</h3>
                                        <p className="text-sm sm:text-base font-semibold text-black/75 mt-1">{job.company} • {job.location}</p>
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold text-black/50 whitespace-nowrap sm:mt-1">
                                        {job.startDate} - {job.endDate}
                                    </div>
                                </div>
                                
                                <ul className="list-disc list-outside ml-4 mt-4 space-y-2 text-sm sm:text-base text-black/70">
                                    {job.bullets.map((bullet, idx) => (
                                        <li key={idx} className="leading-relaxed">{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </CardContent>
                {/* </Card> */}
            </TabsContent>
            
            {/* Education Tab */}
            <TabsContent value="education">
                {/* <Card> */}
                    <CardContent className="relative px-6 flex flex-col gap-12 pt-6">
                        {educationData.map((edu, index) => (
                            <div key={edu.id} className="relative pl-16">
                                {/* Vertical Line */}
                                {index !== educationData.length - 1 && (
                                    <div className="absolute left-6 top-12 -bottom-14 w-0.5 bg-black" />
                                )}
                                
                                {/* Circular Logo */}
                                <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
                                    <GraduationCap className="w-6 h-6 text-black" />
                                </div>
                                
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                                    <div>
                                        <h3 className="font-bold text-lg sm:text-xl text-black leading-tight">{edu.degree}</h3>
                                        <p className="text-sm sm:text-base font-semibold text-black/75 mt-1">{edu.institution} • {edu.location}</p>
                                        <p className="text-sm sm:text-base font-medium mt-2 text-black/80">
                                            CGPA: {edu.cgpa}
                                        </p>
                                    </div>
                                    <div className="text-xs sm:text-sm font-bold text-black/50 whitespace-nowrap sm:mt-1">
                                        {edu.startDate} - {edu.endDate}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                {/* </Card> */}
            </TabsContent>
        </Tabs>

      </div>
    </section>
  )
}