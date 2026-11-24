import { ThemeProvider } from "./components/theme-context";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectsSection } from "./components/projects-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { Chatbot } from "./components/Chatbot";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}
