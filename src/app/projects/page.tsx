"use client";

import { Projects } from "@/components/sections/Projects";
import { GitHubSection } from "@/components/sections/GitHubSection";

export default function ProjectsPage() {
  return (
    <div className="relative">
      <Projects />
      <div className="section-divider max-width px-4 sm:px-6 lg:px-8" />
      <GitHubSection />
    </div>
  );
}
