"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin, FiCheck } from "react-icons/fi";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "opening" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("opening");
    const subject = encodeURIComponent(`Portfolio contact from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus("done");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass = (field: string) =>
    `input-field w-full px-4 py-3.5 rounded-xl text-sm placeholder:text-muted-foreground ${
      errors[field] ? "border-red-500/50" : ""
    }`;

  return (
    <section className="section-padding relative" ref={ref} id="contact">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s build something amazing together
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-2">Send a Message</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Opens your email client with a pre-filled message.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass("name")}
                    autoComplete="name"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass("email")}
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
                </div>
                <motion.button
                  whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                  type="submit"
                  disabled={status !== "idle"}
                  className={`w-full px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    status === "done"
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                      : "bg-primary text-primary-foreground hover:opacity-90 hover:shadow-lg hover:shadow-primary/20"
                  }`}
                >
                  {status === "opening" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                      Opening email...
                    </>
                  ) : status === "done" ? (
                    <>
                      <FiCheck size={16} />
                      Email client opened
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-8">Let&apos;s Connect</h3>
              <div className="space-y-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-accent group-hover:bg-indigo-500/15 transition-all duration-300">
                    <FiMail className="text-indigo-400" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                    <p className="text-sm font-medium group-hover:text-gradient transition-all duration-300">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-accent">
                    <FiMapPin className="text-indigo-400" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                    <p className="text-sm font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-glass">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {[
                    { icon: FiGithub, href: personalInfo.social.github, label: "GitHub" },
                    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass border-glass text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
