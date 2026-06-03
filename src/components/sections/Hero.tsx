"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "@/components/ui/TypeAnimation";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  } as const;

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/25 to-background pointer-events-none z-[1]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center text-center"
      >
        <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
          <ProfileAvatar size="hero" priority showGlow />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-2 rounded-full glass border-glass px-4 py-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
            <span className="relative h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
              <span className="absolute inset-0 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-3 max-w-4xl text-3xl font-bold leading-[1.05] tracking-tight sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="text-gradient block sm:inline">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-4 text-sm font-medium text-muted-foreground sm:mb-5 sm:text-base"
        >
          {personalInfo.role}
          <span className="mx-2 text-border">·</span>
          {personalInfo.subtitle.split("|")[0]?.trim()}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-6 flex min-h-[2.5rem] items-center justify-center sm:mb-8 sm:min-h-[3rem]"
        >
          <span className="text-lg font-medium sm:text-2xl md:text-3xl">
            <TypeAnimation
              strings={[
                "Full Stack Developer",
                "BCA Student",
                "Problem Solver",
                "UI/UX Enthusiast",
              ]}
            />
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-base md:text-lg"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:mb-10 sm:gap-4"
        >
          <a href="#projects" className="btn-primary group">
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>
          <a href={personalInfo.resumeUrl} className="btn-glass flex items-center gap-2">
            <HiDownload size={16} />
            Resume
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3"
        >
          {[
            { icon: FiGithub, href: personalInfo.social.github, label: "GitHub" },
            { icon: FiLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
            { icon: FiMail, href: personalInfo.social.email, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full glass border-glass p-3 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-foreground"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() =>
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full glass border-glass p-3 text-muted-foreground transition-all duration-300 hover:text-foreground motion-safe:animate-bounce sm:bottom-8"
        aria-label="Scroll to about section"
      >
        <HiArrowDown size={20} />
      </motion.button>
    </section>
  );
}
