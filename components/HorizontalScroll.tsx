"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  height?: number; // vh
}

const HorizontalScrollSection: React.FC<HorizontalScrollSectionProps> = ({
  children,
  height = 100,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const scrollWidth = trackRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(trackRef.current, {
        x: -(scrollWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: `${height}vh`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        ref={trackRef}
        sx={{
          display: "flex",
          width: "max-content",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default HorizontalScrollSection;
