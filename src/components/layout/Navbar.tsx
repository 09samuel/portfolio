import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const getLinkStyles = (_sectionId?: string) => {
        return `block md:inline-block px-4 py-2 font-bold transition-all bg-transparent border-transparent hover:border-black text-left w-full md:w-auto`
    }

    return (
        <nav className="fixed top-0 z-50 w-full px-4 pt-4 md:px-12 md:pt-6 lg:px-20 backdrop-blur-md">
            <div className="relative w-full mx-auto max-w-4xl rounded-base border-2 border-border bg-main px-6 py-4 md:px-8 md:py-6 shadow-shadow">
                
                {/* Header Container */}
                <div className="flex items-center justify-between md:justify-center">
                    
                    {/* Branding*/}
                    <span className="font-bold text-sm tracking-tight md:hidden">samuelfernandes.dev</span>

                    {/* Links */}
                    <div  className={`
                        absolute md:relative top-full left-0 right-0 md:top-auto 
                        flex flex-col md:flex-row items-start md:items-center justify-center 
                        gap-2 lg:gap-6 mt-4 md:mt-0 p-6 md:p-0 
                        
                        bg-main border-2 md:border-0 border-black rounded-base md:rounded-none 
                        shadow-shadow md:shadow-none md:bg-transparent
                        
                        transition-all duration-300 ease-in-out origin-top
                        ${isOpen 
                            ? 'opacity-100 pointer-events-auto translate-y-0' 
                            : 'opacity-0 pointer-events-none -translate-y-4 md:opacity-100 md:pointer-events-auto md:translate-y-0'
                        }
                    `}
                    >
                        <a href="#home" onClick={() => setIsOpen(false)} className={getLinkStyles("home")}>Home</a>
                        <a href="#projects" onClick={() => setIsOpen(false)} className={getLinkStyles("projects")}>Projects</a>
                        <a href="#background" onClick={() => setIsOpen(false)} className={getLinkStyles("background")}>Background</a>
                        <a href="#skills" onClick={() => setIsOpen(false)} className={getLinkStyles("skills")}>Skills</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className={getLinkStyles("contact")}>Contact</a>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex md:hidden p-1 text-black transition-transform active:scale-95"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

            </div>
        </nav>
    )
}