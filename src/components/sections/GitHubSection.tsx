"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

const highlights = [
  {
    title: "Open Source Projects",
    description: "Building React apps, habit trackers, e-commerce demos, and more on GitHub.",
  },
  {
    title: "Active Development",
    description: "Regular commits across personal projects and coursework implementations.",
  },
  {
    title: "Collaboration Ready",
    description: "Comfortable with Git workflows, pull requests, and team-based development.",
  },
];

export function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref} id="github">
      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Open <span className="text-gradient">Source</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my code, projects, and development activity on GitHub
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 glow-hover"
            >
              <div className="p-2.5 rounded-xl bg-accent w-fit mb-4">
                <FiCode className="text-indigo-400" size={18} />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="glass-card p-8 sm:p-10 text-center max-w-2xl mx-auto"
        >
          <FiGithub className="mx-auto text-muted-foreground mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">@{personalInfo.social.github.split("/").pop()}</h3>
          <p className="text-sm text-muted-foreground mb-6">
            View repositories, contributions, and project source code on my GitHub profile.
          </p>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiExternalLink size={16} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
