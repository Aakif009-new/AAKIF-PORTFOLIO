"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const checkTouch = () => setIsTouchDevice(true);
    if ("ontouchstart" in window) setIsTouchDevice(true);
    window.addEventListener("touchstart", checkTouch, { once: true });

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchstart", checkTouch);
    };
  }, [cursorX, cursorY, visible]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99] mix-blend-difference hidden lg:block"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{
          scale: clicked ? 0.8 : 1,
          opacity: visible ? 1 : 0,
        }}
        className="w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </motion.div>
  );
}
