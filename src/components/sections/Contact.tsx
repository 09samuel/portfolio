import { useState } from "react"
import { Calendar, Mail } from "lucide-react"
import { TbBrandGithub } from "react-icons/tb"
import { LinkedinIcon } from "@/components/icons/lucide-linkedin"
import { Button } from "../ui/button"

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("samuelfernandes009@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="w-full px-6 pt-36 pb-18 md:px-12 lg:px-20 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="font-heading text-3xl sm:text-4xl tracking-tighter text-black mb-6">
          Let's Build Something.
        </h2>
        
        {/* Pitch */}
        <p className="max-w-xl text-lg text-black/80 font-medium mb-12">
          I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to connect, my inbox is always open.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-6 w-full sm:w-auto">

            <Button variant="neutral" className="cursor-pointer gap-4" asChild>
              <a href="https://calendly.com/samuelfernandes009/30min" target="_blank" rel="noreferrer">
                <span className="font-semibold"> Contact Me </span>
                <Calendar size={20}/>
              </a>
            </Button>
            
            <button 
              onClick={handleCopyEmail}
              className="relative transition-transform hover:-translate-y-1 cursor-pointer focus:outline-none"
              title="Copy email to clipboard"
            >
              <Mail/>
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-bold text-white bg-black rounded-base border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap z-50">
                  Copied!
                </span>
              )}
            </button>

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
              <LinkedinIcon/>
            </a>

        </div>

      </div>

      {/* Footer Sign-off */}
      <div className="w-full max-w-4xl mx-auto mt-32 flex flex-col md:flex-row justify-between items-start border-t-2 border-black/10 pt-8 gap-8">
        
        {/* Left Side: Copyright */}
        <div className="flex-1">
          <p className="text-sm font-bold text-black/60">
            Designed & Built by Samuel Menino Fernandes &copy; {new Date().getFullYear()}
          </p>
        </div>

        {/* Right Side: Privacy Block */}
        <div className="flex flex-col gap-2 md:text-right flex-1 md:items-end">
          <h4 className="text-sm font-bold text-black/60">
            Privacy
          </h4>
          <p className="text-xs font-medium text-black/50 max-w-sm leading-relaxed">
            This is a personal portfolio. I don't sell your data. I use basic web analytics to see how many people visit the site.
          </p>
        </div>

      </div>
    </section>
  )
}