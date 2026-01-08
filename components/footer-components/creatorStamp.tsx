'use client'
import React from 'react'
import Link from "next/link";
import FavoriteSharp from "@mui/icons-material/FavoriteSharp";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styles } from "@/styles/styles";


const CreatorStamp = () => {
  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="white"
        sx={{
          ...styles.center_flex,
          fontSize: "small",
        }}
        // my={1.5}
      >
        <Typography
          display="flex"
          variant="caption"
          textTransform="capitalize"
          // sx={{ m: "0", p: "0.2rem" }}
          color='#5C6584'
          fontWeight={(theme) => theme.typography.fontWeightLight}
        >
          created and mantained with &nbsp;
          <FavoriteSharp
            // mb={-0.5}
            // mx={0.25}
            sx={{ color: "red" }}
            fontSize="inherit"
          />
          &nbsp; by
        </Typography>
        <Link href="https://wilfredreign.vercel.app" target="_blank">
          <Typography
            variant="body1"
            fontWeight="medium"
            textTransform="uppercase"
          >
            &nbsp;<span style={{ color: "#449DD1" }}>gene</span>
            <span style={{ color: "#9A48D0" }}>20</span>&nbsp;
          </Typography>
        </Link>
      </Box>
  )
}

export default CreatorStamp
