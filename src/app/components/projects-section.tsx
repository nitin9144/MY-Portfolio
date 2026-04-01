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
    title: "ShopFlow - E-Commerce Platform",
    description: "A full-stack e-commerce application with cart, payments, and admin dashboard.",
    longDescription:
      "Built a complete e-commerce solution with user auth, product catalog, cart management, Stripe payments, and a comprehensive admin dashboard for managing inventory and orders.",
    image:
      "https://images.unsplash.com/photo-1642132652860-471b4228023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NDI3NzQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/shopflow",
    live: "https://shopflow-demo.vercel.app",
    category: "major",
    highlights: ["JWT Auth & Role-based access", "Payment integration with Stripe", "Admin dashboard with analytics"],
  },
  {
    id: 2,
    title: "ChatVerse - Real-time Chat App",
    description: "Real-time messaging application with rooms, typing indicators, and file sharing.",
    longDescription:
      "A feature-rich real-time chat application using WebSockets. Supports private messaging, group rooms, typing indicators, read receipts, and file/image sharing with preview.",
    image:
      "https://images.unsplash.com/photo-1762340277380-04c2c30d0ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0MzY3NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "TypeScript"],
    github: "https://github.com/yourusername/chatverse",
    live: "https://chatverse-demo.vercel.app",
    category: "major",
    highlights: ["WebSocket real-time communication", "File sharing with preview", "Online status & typing indicators"],
  },
  {
    id: 3,
    title: "TaskBoard - Project Management",
    description: "A Kanban-style task management tool with drag-and-drop and team collaboration.",
    longDescription:
      "Kanban board inspired by Trello, featuring drag-and-drop task management, team collaboration with real-time updates, labels, due dates, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1758876202468-5ffe0ee61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGthbmJhbiUyMGJvYXJkfGVufDF8fHx8MTc3NDM2NzU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["React", "Firebase", "React DnD", "Tailwind CSS"],
    github: "https://github.com/yourusername/taskboard",
    live: "https://taskboard-demo.vercel.app",
    category: "major",
    highlights: ["Drag & drop interface", "Real-time collaboration", "Labels, due dates & filters"],
  },
  {
    id: 4,
    title: "WeatherNow",
    description: "A beautiful weather app with 5-day forecasts and location-based data.",
    longDescription: "Clean weather application fetching real-time data from OpenWeatherMap API with geo-location support, 5-day forecasts, and animated weather icons.",
    image:
      "https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwJTIwbW9iaWxlfGVufDF8fHx8MTc3NDM2NzU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["React", "OpenWeather API", "CSS Modules"],
    github: "https://github.com/yourusername/weathernow",
    live: "https://weathernow-demo.vercel.app",
    category: "minor",
    highlights: ["Geolocation support", "5-day forecast view"],
  },
  {
    id: 5,
    title: "DevBlog",
    description: "A Markdown-powered blog platform with syntax highlighting and SEO.",
    longDescription: "Personal blogging platform with Markdown rendering, code syntax highlighting, SEO optimization, and a clean reading experience.",
    image:
      "https://images.unsplash.com/photo-1638342863994-ae4eee256688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwcGxhdGZvcm0lMjB3ZWJzaXRlfGVufDF8fHx8MTc3NDM2NzU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com/yourusername/devblog",
    live: "https://devblog-demo.vercel.app",
    category: "minor",
    highlights: ["Markdown support", "Code syntax highlighting"],
  },
  {
    id: 6,
    title: "CalcMaster",
    description: "A scientific calculator with history, unit converter, and keyboard shortcuts.",
    longDescription: "Feature-rich calculator with scientific functions, history tracking, unit conversions, and full keyboard shortcut support.",
    image:
      "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwYXBwJTIwbWluaW1hbHxlbnwxfHx8fDE3NzQzNjc1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/calcmaster",
    live: "https://calcmaster-demo.vercel.app",
    category: "minor",
    highlights: ["Scientific functions", "Keyboard shortcuts"],
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
