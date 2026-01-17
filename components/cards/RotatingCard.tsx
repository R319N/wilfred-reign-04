"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import { styles } from "@/styles/styles";

interface RotatingCardProps {
  children: ReactNode;
  href?: string; // Optional href for wrapping the card with a link
}

const RotatingCard: React.FC<RotatingCardProps> = ({ children, href }) => {
  const [rotate, setRotate] = useState(false);

  const rotate0 = () => setRotate(false);
  const rotate360 = () => setRotate(true);

  const cardContent = (
    <Box
      sx={{
        perspective: "30rem",
        background: "transparent",
        borderRadius: "50%",
        "&:hover": {
          background: "transparent",
        },
      }}
      onMouseEnter={rotate360}
      onMouseLeave={rotate0}
    >
      <IconButton
        sx={{
          ...styles.center_flex,
          boxShadow: "none",
          position: "relative",
          transform: rotate ? "rotateY(360deg)" : "rotateY(0)",
          transformStyle: "preserve-3d",
          transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
          width: 24,
          height: 24,
          p: "0.8rem",
        }}
      >
        {children}
      </IconButton>
    </Box>
  );

  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
};

export default RotatingCard;
