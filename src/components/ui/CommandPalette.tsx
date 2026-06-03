"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch } from "react-icons/hi";
import { navLinks } from "@/lib/data";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filtered = navLinks.filter((l) =>
    l.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = useCallback((href: string) => {
    setOpen(false);
    setQuery("");
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm flex-center"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg mx-4 glass rounded-2xl border-glass overflow-hidden shadow-2xl"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
              <HiSearch className="text-muted-foreground shrink-0" size={18} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Navigate to section..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
              />
              <kbd className="hidden sm:inline-flex px-1.5 py-0.5 text-[10px] font-mono rounded-md bg-accent text-muted-foreground border border-border/50">
                ESC
              </kbd>
            </div>
            <div className="p-2 max-h-60 overflow-y-auto">
              {filtered.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No results found
                </p>
              )}
              {filtered.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleSelect(link.href)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl hover:bg-accent transition-colors text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
