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

let globalAudioCtx: AudioContext | null = null;

export function ClientShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyTheme(getStoredTheme());

    const playClick = () => {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextClass) return;

        if (!globalAudioCtx) {
          globalAudioCtx = new AudioContextClass();
        }
        const ctx = globalAudioCtx;
        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = "sine";
        // A clean, soft high-tech click pop
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.06, ctx.currentTime); // very subtle, pleasant volume
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.08);
      } catch {
        // Audio Context blocked or not supported
      }
    };

    const handleGlobalClick = () => {
      playClick();
    };

    window.addEventListener("click", handleGlobalClick, { capture: true, passive: true });
    return () => {
      window.removeEventListener("click", handleGlobalClick, { capture: true });
    };
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
