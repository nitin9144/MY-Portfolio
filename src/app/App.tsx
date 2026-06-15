import { ThemeProvider } from "./components/theme-context";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { Cursor } from "./components/ui/inverted-cursor";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <Cursor />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
