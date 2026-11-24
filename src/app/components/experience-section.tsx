import { BriefcaseBusiness, Check } from "lucide-react";
import { motion } from "motion/react";

type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
  stack: string[];
};

const experience: Experience[] = [
  {
    role: "Web Development Intern",
    company: "InAmigos Foundation (IAF)",
    period: "Sep 2026 - Oct 2026",
    points: [
      "Contributed to web development tasks and projects.",
      "Collaborated with the team on website and application features.",
      "Applied front-end development concepts to improve web experiences.",
    ],
    stack: ["Front-End Development"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Tesselonix Private Limited",
    period: "Feb 2026 - Jul 2026",
    points: [
      "Contributed to responsive frontend features and user-facing interfaces.",
      "Collaborated with the team to turn requirements into maintainable components.",
      "Improved usability through testing, feedback, and iterative refinement.",
    ],
    stack: [
      "Full-Stack Development",
      "Front-End Design",
      "Front-end Coding",
      "Web Application Development",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-foreground mb-2">Experience</h2>
          <p className="text-center text-muted-foreground mb-12 text-[0.9rem]">
            My internship journey so far
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
          {experience.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={item.company} className="relative mb-10 last:mb-0 md:grid md:grid-cols-2">
                <div className="absolute left-5 top-7 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-violet-500 text-white md:left-1/2">
                  <BriefcaseBusiness size={16} aria-hidden="true" />
                </div>
                <motion.article
                  initial={{ opacity: 0, x: isLeft ? -24 : 24, y: 12 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`ml-12 rounded-xl border border-border bg-card p-5 sm:p-6 md:ml-0 ${
                    isLeft
                      ? "md:col-start-1 md:mr-12"
                      : "md:col-start-2 md:ml-12"
                  }`}
                >
                  <span className="mb-3 inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500">
                    {item.period}
                  </span>
                  <h3 className="mb-1 text-foreground">{item.role}</h3>
                  <p className="mb-4 text-sm font-medium text-violet-500">{item.company}</p>
                  <ul className="mb-5 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <Check size={16} className="mt-0.5 shrink-0 text-violet-500" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((technology) => (
                      <span key={technology} className="rounded-md bg-accent px-2.5 py-1 text-xs text-muted-foreground">
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
