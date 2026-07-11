import { motion } from "motion/react";
import ScrollFloat from './ScrollFloat';
import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const categories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React", color: "#61DAFB", icon: (
          <svg viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" /><ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 20 20)" /><ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 20 20)" /><circle cx="20" cy="20" r="3" fill="#61DAFB" /></svg>
        )
      },
      {
        name: "JavaScript", color: "#F7DF1E", icon: (
          <svg viewBox="0 0 40 40" fill="none"><rect x="4" y="4" width="32" height="32" rx="4" fill="#F7DF1E" /><text x="20" y="30" textAnchor="middle" fill="#323330" fontSize="18" fontWeight="bold" fontFamily="monospace">JS</text></svg>
        )
      },
      {
        name: "TypeScript", color: "#3178C6", icon: (
          <svg viewBox="0 0 40 40" fill="none"><rect x="4" y="4" width="32" height="32" rx="4" fill="#3178C6" /><text x="20" y="30" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="monospace">TS</text></svg>
        )
      },
      {
        name: "HTML5", color: "#E34F26", icon: (
          <svg viewBox="0 0 40 40" fill="none"><path d="M8 4l2.5 28L20 36l9.5-4L32 4H8z" fill="#E34F26" /><path d="M20 7v26l7.5-3.2L29.5 7H20z" fill="#EF652A" /><path d="M14 13h12l-.4 4H17.5l.3 4h7.8l-.6 7-5 1.5-5-1.5-.3-4h3.5l.2 2 1.6.5 1.6-.5.2-2.5H14.4L13.8 13z" fill="white" /></svg>
        )
      },
      {
        name: "CSS3", color: "#1572B6", icon: (
          <svg viewBox="0 0 40 40" fill="none"><path d="M8 4l2.5 28L20 36l9.5-4L32 4H8z" fill="#1572B6" /><path d="M20 7v26l7.5-3.2L29.5 7H20z" fill="#33A9DC" /><path d="M26 13H14l.3 4h8.2l-.4 4.5-2.1.7-2.1-.7-.1-2h-3.5l.3 4.5 5.4 1.5 5.4-1.5.8-7H17.8l-.3-3.5h9z" fill="white" /></svg>
        )
      },
      {
        name: "Tailwind", color: "#06B6D4", icon: (
          <svg viewBox="0 0 40 40" fill="none"><path d="M12 16c1.5-6 5.5-8 10-8 6.5 0 7.5 5 10.5 6 2 .7 4-.3 5.5-2.5-1.5 6-5.5 8-10 8-6.5 0-7.5-5-10.5-6-2-.7-4 .3-5.5 2.5z" fill="#06B6D4" transform="translate(-5,2) scale(0.85)" /><path d="M7 26c1.5-6 5.5-8 10-8 6.5 0 7.5 5 10.5 6 2 .7 4-.3 5.5-2.5-1.5 6-5.5 8-10 8-6.5 0-7.5-5-10.5-6-2-.7-4 .3-5.5 2.5z" fill="#06B6D4" transform="translate(-2,2) scale(0.85)" /></svg>
        )
      },
      {
        name: "Next.js", color: "#ffffff", icon: (
          <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" fill="white" /><path d="M16 13v14l10.5-14" fill="black" /><circle cx="27" cy="14" r="2" fill="black" /></svg>
        )
      },

    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js", color: "#339933", icon: (
          <svg viewBox="0 0 40 40" fill="none"><path d="M20 4l14 8v16l-14 8-14-8V12l14-8z" fill="#339933" opacity="0.15" /><text x="20" y="26" textAnchor="middle" fill="#339933" fontSize="14" fontWeight="bold" fontFamily="monospace">JS</text></svg>
        )
      },
      {
        name: "Express", color: "#888888", icon: (
          <svg viewBox="0 0 40 40" fill="none"><text x="20" y="26" textAnchor="middle" fill="currentColor" fontSize="15" fontFamily="sans-serif">ex</text></svg>
        )
      },
      {
        name: "MongoDB", color: "#47A248", icon: (
          <svg viewBox="0 0 40 40" fill="none"><path d="M20 4c0 0-1 4-1 8s2 8 2 12c0 4-1 12-1 12s2-4 2-12c0-4-3-8-3-12S20 4 20 4z" fill="#47A248" /><ellipse cx="20" cy="34" rx="3" ry="2" fill="#47A248" opacity="0.4" /></svg>
        )
      },
      {
        name: "PostgreSQL", color: "#336791", icon: (
          <svg viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="14" rx="10" ry="6" stroke="#336791" strokeWidth="2" fill="none" /><path d="M10 14v12c0 3.3 4.5 6 10 6s10-2.7 10-6V14" stroke="#336791" strokeWidth="2" fill="none" /><ellipse cx="20" cy="22" rx="10" ry="6" stroke="#336791" strokeWidth="1" fill="none" opacity="0.3" /></svg>
        )
      },
      {
        name: "Python", color: "#3776AB", icon: (
          <svg viewBox="0 0 40 40" fill="none"><rect x="10" y="8" width="20" height="12" rx="3" fill="#3776AB" /><rect x="10" y="20" width="20" height="12" rx="3" fill="#FFD43B" /><circle cx="16" cy="13" r="1.5" fill="white" /><circle cx="24" cy="27" r="1.5" fill="#3776AB" /></svg>
        )
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git", color: "#F05032", icon: (
          <svg viewBox="0 0 40 40" fill="none"><path d="M36.2 18.6L21.4 3.8a1.9 1.9 0 00-2.8 0l-3 3 3.8 3.8a2.3 2.3 0 012.9 2.9l3.6 3.6a2.3 2.3 0 11-1.4 1.3l-3.4-3.4v8.9a2.3 2.3 0 11-2.4-.1V15.6a2.3 2.3 0 01-1.2-3L14 9.1l-10.2 10a1.9 1.9 0 000 2.8l14.8 14.8a1.9 1.9 0 002.8 0l14.8-14.8a1.9 1.9 0 000-2.8z" fill="#F05032" transform="scale(0.8) translate(5,5)" /></svg>
        )
      },
      {
        name: "VS Code", color: "#007ACC", icon: (
          <svg viewBox="0 0 40 40" fill="none"><path d="M28 6l-16 14 16 14 4-2V8l-4-2z" fill="#007ACC" /><path d="M12 20L28 6 8 14v12l20 8" fill="#007ACC" opacity="0.7" /></svg>
        )
      },
      {
        name: "Figma", color: "#F24E1E", icon: (
          <svg viewBox="0 0 40 40" fill="none"><rect x="12" y="6" width="8" height="8" rx="4" fill="#F24E1E" /><rect x="20" y="6" width="8" height="8" rx="4" fill="#FF7262" /><rect x="12" y="14" width="8" height="8" rx="4" fill="#A259FF" /><circle cx="24" cy="18" r="4" fill="#1ABCFE" /><rect x="12" y="22" width="8" height="12" rx="4" fill="#0ACF83" /></svg>
        )
      },
      {
        name: "Docker", color: "#2496ED", icon: (
          <svg viewBox="0 0 40 40" fill="none"><rect x="8" y="18" width="5" height="4" rx="0.5" fill="#2496ED" /><rect x="14" y="18" width="5" height="4" rx="0.5" fill="#2496ED" /><rect x="20" y="18" width="5" height="4" rx="0.5" fill="#2496ED" /><rect x="14" y="13" width="5" height="4" rx="0.5" fill="#2496ED" /><rect x="20" y="13" width="5" height="4" rx="0.5" fill="#2496ED" /><rect x="26" y="18" width="5" height="4" rx="0.5" fill="#2496ED" /><rect x="20" y="8" width="5" height="4" rx="0.5" fill="#2496ED" /><path d="M4 24c2-4 6-4 8-3s4 1 7 0 6-1 9 0 6 2 8 4c-1 6-4 10-12 10S4 30 4 24z" fill="#2496ED" opacity="0.2" /></svg>
        )
      },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-accent/30">
      <div className="max-w-5xl mx-auto">
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
              Technical Skills
            </ScrollFloat></h2>
          <p className="text-center text-muted-foreground mb-14 text-[0.9rem]">Technologies I work with</p>
        </motion.div>
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Technology partners"
          />
        </div>

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h3 className="text-muted-foreground mb-6 pb-2 border-b border-border">{cat.title}</h3>
              <div className="flex flex-wrap gap-x-10 gap-y-8">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-center gap-2 w-16 cursor-default"
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-muted-foreground text-[0.78rem] text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
