import React from "react";

// *** MUI5 imports ***
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";

import { styles } from "@/styles/styles";
import Image from "next/image";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
interface ReviewProps {
  author: string,
  testimonial: string,
  image: string,
  rating: number,
  position: string,
  company: string

}

const Review: React.FC<ReviewProps> = ({ author, testimonial, rating, company, position, image }) => {
  return (
    <Grid container spacing={0} sx={{ ...styles.between_flex }}>
      <Grid size={{ xs: 5, sm: 5 }} >
        <Box gap={2}>
          <Image
            src={image}
            height={80}
            width={80}
            alt="profile"
            style={{ borderRadius: "50%" }}
          />
          <Stack>
            <Typography
              variant="body1"
              textTransform="capitalize"
              fontWeight="lighter"
            >
              {author}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontVariant: "all-small-caps",
                fontWeight: "lighter",
                color: "grey",
              }}
            >
              {company}
            </Typography>

            <Typography
              variant="subtitle1"
              textTransform="capitalize"
              fontWeight="lighter"
            >
              {position}
            </Typography>
          </Stack>
        </Box>
      </Grid>

      <Grid

        size={{ xs: 7, sm: 7 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
        }}
      >
        <CardContent>
          <Box
            sx={{
              position: "relative",
              height: "100%",
              width: "100%",
              alignItems: "right",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body2"
              textTransform="capitalize"
              fontWeight="lighter"
              sx={{
                color: "textPrimary",
                mb: "1rem"
              }}
            >
              {testimonial}
            </Typography>
            <Rating name="read-only" value={rating} readOnly />
          </Box>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Review;
