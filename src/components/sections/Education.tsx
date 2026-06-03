"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { educationList, experienceList } from "@/lib/data";
import { FiBook, FiBriefcase, FiCalendar, FiHeart, FiChevronRight } from "react-icons/fi";

function TimelineIcon({ icon, color }: { icon: React.ReactNode; color: string }) {
  return (
    <div
      className="relative z-10 w-10 h-10 rounded-full flex-center text-sm shadow-lg"
      style={{
        background: `linear-gradient(135deg, ${color}20, ${color}05)`,
        border: `1px solid ${color}30`,
        color: color,
      }}
    >
      {icon}
    </div>
  );
}

function Badge({ label, variant }: { label: string; variant: "internship" | "extracurricular" }) {
  const colors =
    variant === "internship"
      ? { bg: "from-blue-500/20 to-blue-600/10", text: "text-blue-300", border: "border-blue-500/20", dot: "bg-blue-400" }
      : { bg: "from-emerald-500/20 to-emerald-600/10", text: "text-emerald-300", border: "border-emerald-500/20", dot: "bg-emerald-400" };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-gradient-to-r ${colors.bg} ${colors.text} border ${colors.border}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
      {label}
    </span>
  );
}

function EducationCard({
  item,
  index,
  isInView,
}: {
  item: (typeof educationList)[number];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="relative pl-14 pb-12 last:pb-0 group"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="absolute left-0 top-0"
      >
        <TimelineIcon icon={<FiBook size={14} />} color="#60a5fa" />
      </motion.div>

      <div className="glass-card rounded-2xl p-6 md:p-7 glow-hover group-hover:border-blue-500/20 transition-all duration-500">
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/10">
            <FiCalendar size={10} />
            {item.period}
          </span>
          {index === 0 && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-gradient-to-r from-purple-500/20 to-pink-500/10 text-purple-300 border border-purple-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Current
            </span>
          )}
        </div>

        <h3 className="text-base md:text-lg font-semibold mb-0.5 text-foreground group-hover:text-gradient transition-all duration-500">
          {item.degree}
        </h3>
        <p className="text-sm text-blue-400/80 mb-4">{item.institution}</p>

        {item.keySubjects.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.keySubjects.map((subject) => (
              <span
                key={subject}
                className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-accent/50 border border-glass text-muted-foreground"
              >
                {subject}
              </span>
            ))}
          </div>
        )}

        <ul className="space-y-1.5">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-xs text-muted-foreground/70 leading-relaxed">
              <FiChevronRight size={10} className="mt-0.5 text-blue-400/60 shrink-0" />
              {highlight.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                i % 2 === 1 ? <strong key={i} className="font-semibold text-foreground/80">{part}</strong> : part
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function ExperienceCard({
  item,
  index,
  isInView,
}: {
  item: (typeof experienceList)[number];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="relative pl-14 pb-12 last:pb-0 group"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="absolute left-0 top-0"
      >
        <TimelineIcon
          icon={item.type === "Internship" ? <FiBriefcase size={14} /> : <FiHeart size={14} />}
          color={item.type === "Internship" ? "#60a5fa" : "#34d399"}
        />
      </motion.div>

      <div className="glass-card rounded-2xl p-6 md:p-7 glow-hover group-hover:border-blue-500/20 transition-all duration-500">
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/10">
            <FiCalendar size={10} />
            {item.duration}
          </span>
          <Badge
            label={item.type === "Internship" ? "Internship" : "Extracurricular"}
            variant={item.type === "Internship" ? "internship" : "extracurricular"}
          />
        </div>

        <h3 className="text-base md:text-lg font-semibold mb-0.5 text-foreground group-hover:text-gradient transition-all duration-500">
          {item.role}
        </h3>
        <p className="text-sm text-blue-400/80 mb-4">{item.company}</p>

        <ul className="space-y-1.5">
          {item.responsibilities.map((resp) => (
            <li key={resp} className="flex items-start gap-2 text-xs text-muted-foreground/70 leading-relaxed">
              <FiChevronRight size={10} className="mt-0.5 text-emerald-400/60 shrink-0" />
              {resp.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                i % 2 === 1 ? <strong key={i} className="font-semibold text-foreground/80">{part}</strong> : part
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] via-transparent to-purple-500/[0.02] pointer-events-none" />

      <div className="max-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground/70 max-w-2xl mx-auto text-sm sm:text-base">
            My academic journey and professional growth
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/10">
                <FiBook className="text-blue-400" size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Education</h3>
                <p className="text-xs text-muted-foreground/50">Academic background</p>
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent" />
              {educationList.map((item, i) => (
                <EducationCard key={item.id} item={item} index={i} isInView={isInView} />
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/10">
                <FiBriefcase className="text-emerald-400" size={18} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Experience</h3>
                <p className="text-xs text-muted-foreground/50">Professional journey</p>
              </div>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-0 w-px bg-gradient-to-b from-emerald-500/30 via-emerald-500/10 to-transparent" />
              {experienceList.map((item, i) => (
                <ExperienceCard key={item.id} item={item} index={i} isInView={isInView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
