"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All" },
  { key: "language", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="max-width relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const count =
              cat.key === "all"
                ? skills.length
                : skills.filter((s) => s.category === cat.key).length;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "glass border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                {cat.label}
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded-full",
                    activeCategory === cat.key
                      ? "bg-white/20 text-white"
                      : "bg-accent text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} isInView={isInView} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-12"
          >
            No skills found in this category
          </motion.p>
        )}
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: (typeof skills)[number];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative p-6 rounded-2xl glass-card glow-hover cursor-default overflow-hidden"
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] to-purple-500/[0.08] pointer-events-none"
      />
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl pointer-events-none"
      />
      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        <motion.div
          animate={
            hovered
              ? { scale: 1.2, rotate: 360, y: -6 }
              : { scale: 1, rotate: 0, y: 0 }
          }
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          style={{ color: skill.color }}
          className="text-3xl sm:text-4xl"
        >
          <skill.icon />
        </motion.div>
        <span className="text-sm font-medium">{skill.name}</span>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
      />
    </motion.div>
  );
}
