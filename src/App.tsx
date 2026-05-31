import Navbar from "@/components/layout/Navbar"
import HeroSection from "./components/sections/Hero"
import ProjectSection from "./components/sections/Projects"
import BackgroundSection from "./components/sections/Background"
import SkillsSection from "./components/sections/Skills"
import ContactSection from "./components/sections/Contact"

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectSection/>
      <BackgroundSection/>
      <SkillsSection/>
      <ContactSection/>
    </div>
  )
}

export default App