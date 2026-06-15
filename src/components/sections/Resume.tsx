"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, projects, educationList, experienceList } from "@/lib/data";
import {
  FiCode,
  FiFolder,
  FiDownload,
  FiExternalLink,
  FiMapPin,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiAward
} from "react-icons/fi";

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Filter out top items for display in the quick details card
  const topSkills = ["JavaScript", "TypeScript", "React", "Next.js", "SQL", "Java"];
  const topProjectsList = projects.slice(0, 3);

  return (
    <section id="resume" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.02] via-transparent to-blue-500/[0.02] pointer-events-none" />

      <div className="max-width relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground/70 max-w-2xl mx-auto text-sm sm:text-base">
            Download or view my latest resume
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Combined Dual-Column Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-card rounded-3xl border border-glass shadow-2xl p-6 md:p-10 lg:p-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            {/* Left Column: Realistic A4 Document Preview */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="relative group/container">
                {/* Visual Glow behind document */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover/container:opacity-100 transition duration-1000 group-hover/container:duration-200" />
                
                {/* The Mockup Paper Container */}
                <div className="relative w-full aspect-[1/1.4] bg-white text-slate-800 shadow-2xl rounded-2xl border border-slate-200/50 p-6 md:p-8 overflow-y-auto select-none scrollbar-thin hover:shadow-indigo-500/10 transition-all duration-300">
                  {/* Watermark / Decorative element */}
                  <div className="absolute top-2 right-3 text-[8px] font-mono text-slate-400 uppercase tracking-widest pointer-events-none">
                    Preview Mode
                  </div>

                  {/* Header */}
                  <div className="text-center mb-4">
                    <h3 className="text-base md:text-lg font-bold tracking-tight text-slate-900 mb-1">
                      {personalInfo.name}
                    </h3>
                    <p className="text-[9px] md:text-[10px] text-slate-500 flex flex-wrap justify-center gap-x-2 gap-y-0.5">
                      <span className="flex items-center gap-0.5"><FiMail size={8} /> {personalInfo.email}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5"><FiMapPin size={8} /> {personalInfo.location}</span>
                    </p>
                    <p className="text-[9px] md:text-[10px] text-slate-500 flex flex-wrap justify-center gap-x-2 gap-y-0.5 mt-0.5">
                      <span className="flex items-center gap-0.5"><FiGithub size={8} /> github.com/Aakif009-new</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5"><FiLinkedin size={8} /> linkedin.com/in/syed-mohammed-aakif</span>
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[0.5px] bg-slate-300 my-2.5" />

                  {/* Summary */}
                  <div className="mb-4">
                    <h4 className="text-[10px] md:text-xs font-bold text-slate-900 tracking-wider mb-1 uppercase">
                      Professional Summary
                    </h4>
                    <p className="text-[9px] md:text-[10px] text-slate-600 leading-relaxed">
                      {personalInfo.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[0.5px] bg-slate-300 my-2.5" />

                  {/* Experience */}
                  <div className="mb-4">
                    <h4 className="text-[10px] md:text-xs font-bold text-slate-900 tracking-wider mb-1.5 uppercase">
                      Experience
                    </h4>
                    <div className="space-y-2.5">
                      {experienceList.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between items-baseline text-[9px] md:text-[10px]">
                            <span className="font-bold text-slate-800">{exp.role}</span>
                            <span className="text-slate-500 font-medium text-[8px] md:text-[9px]">{exp.duration}</span>
                          </div>
                          <p className="text-[8.5px] md:text-[9px] text-indigo-600 font-semibold mb-1">{exp.company}</p>
                          <ul className="list-disc list-inside space-y-0.5 pl-1">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="text-[8px] md:text-[9px] text-slate-600 leading-normal">
                                {resp.replace(/\*\*/g, "")}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[0.5px] bg-slate-300 my-2.5" />

                  {/* Education */}
                  <div className="mb-4">
                    <h4 className="text-[10px] md:text-xs font-bold text-slate-900 tracking-wider mb-1.5 uppercase">
                      Education
                    </h4>
                    <div className="space-y-2.5">
                      {educationList.map((edu) => (
                        <div key={edu.id}>
                          <div className="flex justify-between items-baseline text-[9px] md:text-[10px]">
                            <span className="font-bold text-slate-800">{edu.degree}</span>
                            <span className="text-slate-500 font-medium text-[8px] md:text-[9px]">{edu.period}</span>
                          </div>
                          <p className="text-[8.5px] md:text-[9px] text-indigo-600 font-semibold mb-1">{edu.institution}</p>
                          {edu.highlights && edu.highlights.length > 0 && (
                            <ul className="list-disc list-inside space-y-0.5 pl-1">
                              {edu.highlights.slice(0, 2).map((hl, idx) => (
                                <li key={idx} className="text-[8px] md:text-[9px] text-slate-600 leading-normal">
                                  {hl.replace(/\*\*/g, "")}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[0.5px] bg-slate-300 my-2.5" />

                  {/* Skills */}
                  <div className="mb-2">
                    <h4 className="text-[10px] md:text-xs font-bold text-slate-900 tracking-wider mb-1.5 uppercase">
                      Technical Skills
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[8.5px] md:text-[9px] text-slate-600">
                      <div>
                        <strong className="text-slate-700">Languages:</strong> Java, C, JavaScript, TypeScript
                      </div>
                      <div>
                        <strong className="text-slate-700">Frontend:</strong> React, Next.js, HTML, CSS, Tailwind CSS
                      </div>
                      <div>
                        <strong className="text-slate-700">Backend:</strong> SQL, MySQL
                      </div>
                      <div>
                        <strong className="text-slate-700">Tools:</strong> Git, GitHub
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Details & Summary Dashboard */}
            <div className="lg:col-span-7 flex flex-col justify-between py-2">
              <div className="space-y-8">
                {/* Intro */}
                <div>
                  <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                    Latest CV
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mt-1.5 mb-2.5">
                    {personalInfo.name}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-xl">
                    {personalInfo.role} | {personalInfo.subtitle}
                  </p>
                </div>

                {/* Highlight Institution Card */}
                <div className="glass-card p-4 flex items-center gap-3.5 border border-glass/40 max-w-xl">
                  <div className="w-10 h-10 rounded-xl flex-center bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                    <FiAward size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Vellore Institute of Technology (VIT)
                    </h4>
                    <p className="text-xs text-muted-foreground/60 mt-0.5">
                      BCA Student (2024 – 2027) • Vellore, India
                    </p>
                  </div>
                </div>

                {/* Top Skills Tags */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground/80 mb-3 flex items-center gap-2">
                    <FiCode size={14} className="text-indigo-400" />
                    Top Skills
                  </h4>
                  <div className="flex flex-wrap gap-2 max-w-xl">
                    {topSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-accent border border-glass text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-accent/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Projects Tags */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground/80 mb-3 flex items-center gap-2">
                    <FiFolder size={14} className="text-indigo-400" />
                    Top Projects
                  </h4>
                  <div className="flex flex-wrap gap-2 max-w-xl">
                    {topProjectsList.map((project) => (
                      <span
                        key={project.id}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-accent border border-glass text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-accent/80"
                      >
                        {project.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Actions Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12 max-w-xl">
                <a
                  href={personalInfo.resumeUrl}
                  download="Mohammed_Aakif_Resume.pdf"
                  className="btn-primary flex-1 flex items-center justify-center cursor-pointer py-4 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-medium shadow-lg shadow-indigo-500/20 active:scale-[0.98] transition-transform"
                >
                  <FiDownload className="mr-2" size={16} />
                  Download CV
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass flex-1 flex items-center justify-center cursor-pointer py-4 text-foreground font-medium border border-glass hover:bg-accent/40 active:scale-[0.98] transition-transform"
                >
                  <FiExternalLink className="mr-2" size={16} />
                  View Full Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
