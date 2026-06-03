"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

const sections = [
  { id: "home", Component: Hero },
  { id: "about", Component: About },
  { id: "skills", Component: Skills },
  { id: "projects", Component: Projects },
  { id: "github", Component: GitHubSection },
  { id: "education", Component: Education },
  { id: "contact", Component: Contact },
];

export default function Home() {
  return (
    <div className="relative">
      {sections.map(({ id, Component }, i) => (
        <div key={id} id={id}>
          <Component />
          {i < sections.length - 1 && (
            <div className="section-divider max-width px-4 sm:px-6 lg:px-8" />
          )}
        </div>
      ))}
    </div>
  );
}
