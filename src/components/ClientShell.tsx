"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { applyTheme, getStoredTheme } from "@/lib/theme";
import { useEffect, type ReactNode } from "react";

const Cursor = dynamic(() => import("@/components/ui/Cursor").then((m) => m.Cursor), {
  ssr: false,
});

export function ClientShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyTheme(getStoredTheme());
  }, []);

  return (
    <ThemeProvider>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="relative z-[1]">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <CommandPalette />
    </ThemeProvider>
  );
}
