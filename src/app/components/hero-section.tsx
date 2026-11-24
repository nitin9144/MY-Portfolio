import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import RotatingText from "./heading";
import SoftAurora from './SoftAurora';
import { BackgroundPaths } from "./background_paths";
export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundPaths />
      </div>

      <div className="relative max-w-3xl z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >



          <h1 className="text-foreground transition-all duration-300 ease-in-out mb-4 flex items-center justify-center gap-2.5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Hi, I'm <span className="text-violet-500  transition-all duration-300 ease-in-out ">
              <RotatingText
                texts={['Nitin Sharma', 'AI Engineer','Software Engineer']}
                mainClassName="px-2 sm:px-2 md:transition-all duration-300 ease-in-out md:px-3 bg-violet-500 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />

            </span>
          </h1>

          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-[1.1rem]">
            A passionate <span className="text-foreground">Full Stack Web Developer</span> who builds modern,
            performant, and user-friendly web applications. Currently seeking internship opportunities to grow and contribute.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="https://github.com/nitin9144"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition text-[0.875rem]"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nitin-sharma-417b94382"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-accent transition text-[0.875rem]"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="mailto:nitinsharma9144063@email.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-accent transition text-[0.875rem]"
            >
              <Mail size={16} /> Email
            </a>
            <a
              href="/Nitin%20Sharma%20Resume.docx"
              target="_blank"
              rel="noreferrer"
              download="Nitin Sharma Resume.docx"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-accent transition text-[0.875rem]"
            >
              <FileText size={16} /> Resume
            </a>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-muted-foreground hover:text-foreground transition animate-bounce"
        >
          <ArrowDown size={24} />
        </motion.button>
      </div>
    </section>
  );
}