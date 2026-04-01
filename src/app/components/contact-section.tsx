import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { toast, Toaster } from "sonner";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-accent/30">
      <Toaster position="top-center" richColors />
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-center text-foreground mb-2">Get In Touch</h2>
          <p className="text-center text-muted-foreground mb-12 text-[0.9rem]">
            I'd love to hear from you about internship opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-foreground mb-4">Let's Connect</h3>
            <p className="text-muted-foreground text-[0.9rem] mb-8 leading-relaxed">
              Whether you have an internship opening, a project idea, or just want to say hi - feel free to reach out.
              I'm always open to learning opportunities and collaborations.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: "nitinsharma9144063@email.com" },
                { icon: Phone, label: "+91 8287442431" },
                { icon: MapPin, label: "Delhi, India" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-500">
                    <Icon size={18} />
                  </div>
                  <span className="text-foreground text-[0.9rem]">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/nitin9144" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/nitin-sharma-417b94382" },
                { icon: Twitter, href: "https://twitter.com/yourusername" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <label className="text-[0.85rem] text-muted-foreground mb-1.5 block">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-foreground focus:border-violet-500 focus:outline-none transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="text-[0.85rem] text-muted-foreground mb-1.5 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-foreground focus:border-violet-500 focus:outline-none transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-[0.85rem] text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-card border border-border text-foreground focus:border-violet-500 focus:outline-none transition resize-none"
                placeholder="Tell me about the opportunity..."
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
