"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, stats } from "@/lib/data";
import { ProfileCard } from "@/components/ui/ProfileAvatar";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

function StatCard({ label, value, index }: { label: string; value: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-2xl glass-card glow-hover p-6 text-center sm:p-8"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2, type: "spring", bounce: 0.5 }}
        className="mb-2 block text-3xl font-bold text-gradient sm:text-4xl"
      >
        {value}
      </motion.span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </motion.div>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
        </motion.div>

        <div className="mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <ProfileCard avatarSize="lg" className="lg:max-w-md" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col justify-center space-y-5 sm:space-y-6"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">
              Building digital experiences that{" "}
              <span className="text-gradient">matter</span>
            </h3>
            <p className="leading-relaxed text-muted-foreground">{personalInfo.description}</p>

            <div className="flex flex-wrap gap-2">
              {["Full Stack Development", "Java", "SQL", "React", "Next.js", "TypeScript"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full glass border-glass px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FiGithub size={16} />
                GitHub
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/20"
              >
                <FiDownload size={16} />
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
