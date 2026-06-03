"use client";

import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full glass border-glass",
        "text-muted-foreground transition-colors duration-200 hover:text-foreground"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      {mounted ? (
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
        </motion.div>
      ) : (
        <HiMoon size={18} className="opacity-50" />
      )}
    </motion.button>
  );
}
