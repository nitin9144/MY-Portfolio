import { motion } from "motion/react";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ScrollFloat from './ScrollFloat';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <h2 className="text-center text-foreground  mb-2 text-extrabold">         
            <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            About Me
          </ScrollFloat></h2>
          <p className="text-center text-muted-foreground mb-12 text-[0.9rem]">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border aspect-square max-w-sm mx-auto">
              <ImageWithFallback
                src="/photo.jpg"
                alt="Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-muted-foreground mb-6 text-[0.95rem] leading-relaxed">
              I'm a driven web developer with a strong foundation in modern frontend and backend technologies.
              I love turning ideas into real, functional products with clean code and intuitive design.
              I'm actively looking for internship opportunities where I can apply my skills, learn from industry experts, and contribute to impactful projects.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500"><GraduationCap size={18} /></div>
                <div>
                  <p className="text-[0.85rem] text-muted-foreground">Education</p>
                  <p className="text-[0.95rem]">B.Tech in Computer Science, VIPS-TC</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500"><MapPin size={18} /></div>
                <div>
                  <p className="text-[0.85rem] text-muted-foreground">Location</p>
                  <p className="text-[0.95rem]">Delhi, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500"><Briefcase size={18} /></div>
                <div>
                  <p className="text-[0.85rem] text-muted-foreground">Status</p>
                  <p className="text-[0.95rem]">Actively seeking internships</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
