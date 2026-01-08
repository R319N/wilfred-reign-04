import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

// *** style imports ***
import CreatorStamp from "./creatorStamp";

const Copyright = () => {
  return (
    <Box display={{ sm: "flex", m: "0rem", height:"100%" }} justifyContent="space-between">
      <CreatorStamp />
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "right" },
          alignItems: "center",
          py: { md: "0.5rem" },
        }}
      >
        <Typography
          variant="caption"
          textTransform="capitalize"
          color='#5C6584'
        >
          copyright &copy; 2022 - 2023 gene-20. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Copyright;
