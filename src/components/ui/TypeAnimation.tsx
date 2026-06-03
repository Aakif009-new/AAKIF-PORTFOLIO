"use client";

import { useState, useEffect } from "react";

interface TypeAnimationProps {
  strings: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function TypeAnimation({
  strings,
  speed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
}: TypeAnimationProps) {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = strings[index];
    let timeout: NodeJS.Timeout;

    if (deleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(current.substring(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, deleteSpeed);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % strings.length);
      }
    } else {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setText(current.substring(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, strings, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-gradient-to-b from-blue-500 to-purple-500 ml-1 animate-pulse" />
    </span>
  );
}
