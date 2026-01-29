'use client'
import React from "react";
import { styles } from "@/styles/styles";
import Box from '@mui/material/Box';
import OurTestimonialsComponent from "@/components/testimonials/OurTestimonialsComponent";

const Testimonials = () => {
  return (
    <section
      style={{
        position: "relative",
        ...styles.center_flex,
        width: "100%",
        flexDirection: "column",
      }}
      id="testimonials"
    >
      <Box sx={{ ...styles.center_flex }}>
        <OurTestimonialsComponent />
      </Box>
    </section>
  );
};

export default Testimonials;
