"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(
  () => import("@/components/three/Scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null }
);

export function HeroSceneLazy() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;
    if (reduced || mobile) return;

    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(() => setShow(true), { timeout: 2000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(id);
  }, []);

  if (!show) return null;
  return <HeroScene />;
}
