"use client";

import { FiGithub, FiLinkedin, FiHeart, FiMail } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-glass bg-background/80 backdrop-blur-xl">
      <div className="max-width px-4 sm:px-6 py-8 sm:py-10 relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          <div>
            <button
              onClick={() => scrollTo("#home")}
              className="text-lg font-bold tracking-tight"
              aria-label="Go to home"
            >
              <span className="text-gradient">MA</span>
              <span className="text-muted-foreground">.</span>
            </button>
            <p className="text-xs text-muted-foreground mt-2 max-w-xs leading-relaxed">
              Full stack developer building modern web experiences.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold mb-3 tracking-wide uppercase text-foreground/80">
              Quick Links
            </h4>
            <div className="flex flex-wrap sm:flex-col gap-x-4 gap-y-1.5">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-xs font-semibold mb-3 tracking-wide uppercase text-foreground/80">
              Connect
            </h4>
            <div className="flex gap-2">
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
                  className="p-2 rounded-full glass border-glass text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-glass flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-muted-foreground">
          <p>&copy; {year} {personalInfo.name}</p>
          <p className="flex items-center gap-1">
            Made with <FiHeart className="text-rose-500 fill-rose-500" size={10} /> Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
