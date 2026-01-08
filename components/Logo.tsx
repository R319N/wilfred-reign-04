import { styles } from '@/styles/styles';
import { Box, Typography } from '@mui/material'
import { Silkscreen } from 'next/font/google';
import React from 'react'
import heroImage from '@/public/images/creator1.png';

const silkscreen = Silkscreen({
  weight: ["400",],
  subsets: ["latin"],
  display: "swap",
});

interface LogoProps {
  fontSize?: number | string;
}

const Logo = ({ fontSize }: LogoProps) => {
  return (
    <Box sx={{ ...styles.center_flex, height: "100%", position: "relative" }}>
      {/* Image Stroke */}
      <Typography
        sx={{
          ...silkscreen.style,
          fontSize: { fontSize },
          fontWeight: "bolder",
          position: "absolute",
          backgroundImage: `url(${heroImage.src})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "8px transparent", // thickness
          filter: "blur(0)",
          backgroundSize: "30% auto",
        }}
      >
        w
      </Typography>


      <Typography
        sx={{
          ...silkscreen.style,
          fontSize: { fontSize },
          fontWeight: "bolder",
          position: "absolute",
          backgroundImage: `linear-gradient(90deg, #3772FF,#0022ff ,#7E78D2, #7D2EB2)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "8px transparent", // thickness
          filter: "blur(0)",
          opacity: 0.6,
        }}
      >
        w
      </Typography>
      {/* Main Text */}
      <Typography
        sx={{
          ...silkscreen.style,
          fontSize: { fontSize },
          fontWeight: "bold",
          position: "relative",
          color: "#0e1116cc", // hollow center
          WebkitTextStroke: "1.5px transparent",
          // scaleX:"1.4"
        }}
      >
        w
      </Typography>
    </Box>

  )
}

export default Logo