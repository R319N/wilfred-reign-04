"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if ("ontouchstart" in window) return;

    let mouseX = 0;
    let mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX - 14;
      mouseY = e.clientY - 14;
    };

    const tick = () => {
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    // Transparency handlers
    const transparentOn = () =>
      gsap.to(cursor, { opacity: 0, duration: 0.2 });

    const transparentOff = () =>
      gsap.to(cursor, { opacity: 1, duration: 0.2 });

    window.addEventListener("mousemove", move);
    gsap.ticker.add(tick);

    // Attach hover listeners
    const targets = document.querySelectorAll(
      "[data-cursor-transparent]"
    );

    targets.forEach(el => {
      el.addEventListener("mouseenter", transparentOn);
      el.addEventListener("mouseleave", transparentOff);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      gsap.ticker.remove(tick);
      targets.forEach(el => {
        el.removeEventListener("mouseenter", transparentOn);
        el.removeEventListener("mouseleave", transparentOff);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor-follower" />;
}
