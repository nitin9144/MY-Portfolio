import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, ChevronRight, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ScrollFloat from './ScrollFloat';
import ScrollStack, { ScrollStackItem } from './ScrollStack'


type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  github: string;
  live: string;
  category: "major" | "minor";
  highlights: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Faculty Availability Tracker For Students",
    description: "Realtime availability tracker of faculty in college for students",
    longDescription:
      "Students often waste time visiting faculty rooms only to find them unavailable — in meetings, on leave, or out of campus. There's no centralized system to check a faculty member's current status or schedule. This app solves that.",
    image:
      "/Faculty_Availability_Tracker.png",
    techStack: ["React", "Node.js", "Supabase", "Tailwind CSS", "Postgresql", "Figma"],
    github: "https://github.com/nitin9144/Faculty_Availability_Tracker-For-Students-.git",
    live: "https://faculty-availability-tracker-for-st.vercel.app/",
    category: "major",
    highlights: ["JWT Auth & Role-based access", "Supabase integration", "Only college students and faculty can use this app"],
  },
  {
    id: 2,
    title: "Trackly - Price Tracker",
    description: "Price tracker and alert system for e-commerce products.",
    longDescription:
      "Trackly is a simple yet powerful price tracker that allows users to monitor the prices of their favorite e-commerce products and receive alerts when the price drops.",
    image:
      "/Trackly/Home.png",
    techStack: ["Next.js", "Firecrawl", "Resend", "PostgreSQL", "Supabase", "Tailwind CSS"],
    github: "https://github.com/nitin9144/Trackly.git",
    live: "https://trackly-navy.vercel.app/",
    category: "major",
    highlights: ["Price monitoring and alerting", "Supabase integration", "User-friendly interface"],
  },
];

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >

      <div className="relative overflow-hidden aspect-video">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`px-2.5 py-1 rounded-full text-[0.7rem] ${project.category === "major"
              ? "bg-violet-500 text-white"
              : "bg-white/90 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              }`}
          >
            {project.category === "major" ? "Major Project" : "Minor Project"}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-foreground mb-1.5">{project.title}</h3>
        <p className="text-muted-foreground text-[0.85rem] mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-accent text-[0.75rem] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-[0.8rem] text-foreground hover:bg-accent transition"
            >
              <Github size={14} /> Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500 text-white text-[0.8rem] hover:bg-violet-600 transition"
            >
              <ExternalLink size={14} /> Live
            </a>
          </div>
          <ChevronRight size={16} className="text-muted-foreground group-hover:text-violet-500 transition" />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="aspect-video overflow-hidden rounded-t-2xl">
          <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`px-2.5 py-1 rounded-full text-[0.7rem] ${project.category === "major"
                ? "bg-violet-500 text-white"
                : "bg-accent text-muted-foreground"
                }`}
            >
              {project.category === "major" ? "Major Project" : "Minor Project"}
            </span>
          </div>
          <h2 className="text-foreground mb-3">{project.title}</h2>
          <p className="text-muted-foreground text-[0.9rem] mb-5 leading-relaxed">{project.longDescription}</p>

          <div className="mb-5">
            <p className="text-foreground text-[0.85rem] mb-2">Key Highlights</p>
            <ul className="space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-muted-foreground text-[0.85rem]">
                  <Star size={12} className="text-violet-500 shrink-0" /> {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-foreground text-[0.85rem] mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-violet-500/10 text-violet-500 text-[0.8rem]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-accent transition text-[0.875rem]"
            >
              <Github size={16} /> View Source Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition text-[0.875rem]"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "major" | "minor">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-foreground mb-2">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
            >
              My Projects
            </ScrollFloat></h2>
          <p className="text-center text-muted-foreground mb-8 text-[0.9rem]">
            Click on any project to explore more details
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-10">
          {(["all", "major", "minor"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-[0.85rem] transition ${filter === f
                ? "bg-violet-500 text-white"
                : "bg-accent text-muted-foreground hover:text-foreground"
                }`}
            >
              {f === "all" ? "All Projects" : f === "major" ? "Major" : "Minor"}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
}
