import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("")

    //observer watches the page to see which section is currently in view and updates the activeSection state accordingly
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, { threshold: 0.5 })

        const sections = ["about", "projects", "skills", "contact"]
        sections.forEach((section) => {
            const element = document.getElementById(section)

            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()  
    }, [])


    const getLinkStyles = (sectionId: string) => {
        const isActive = activeSection === sectionId
        return `px-4 py-2 font-base transition-all ${
            isActive 
                ? "bg-black text-white border-black shadow-shadow translate-y-0" // Active state
                : "bg-transparent border-transparent hover:border-black hover:-translate-y-0.5" // Inactive/Hover state
        }`
    }

    return (
        <nav className="w-full px-6 pt-6 md:px-12 lg:px-20">
            <div className="flex items-center justify-between rounded-base border-2 border-border bg-main px-6 py-4 shadow-shadow">
                
                {/* Logo */}
                <a href="/" className="font-heading text-xl hover:opacity-80 transition-opacity">
                samuelfernandes.dev
                </a>
                
                {/* Links */}
                <div className="hidden md:flex items-center gap-2 lg:gap-6">
                    <a href="#about" className={getLinkStyles("about")}>
                        About
                    </a>
                    <a href="#projects"  className={getLinkStyles("projects")}>
                        Projects
                    </a>
                    <a href="#skills" className={getLinkStyles("skills")}>
                        Skills
                    </a>
                    <a href="#contact" className={getLinkStyles("contact")}>
                        Contact
                    </a>
                </div>

                {/* Action Button */}
                <Button variant="neutral" className="font-bold cursor-pointer hover:bg-neutral-100 transition-colors">
                    RESUME
                </Button>

            </div>
        </nav>
    )
}