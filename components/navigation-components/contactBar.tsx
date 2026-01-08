import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import { styles } from "@/styles/styles";
import { IconButton } from "@mui/material";
import FbIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { X } from "@mui/icons-material";

const contactIcons = [
  {
    name: "facebook",
    icon: <FbIcon sx={{ fontSize: "16px" }} />,
    link: "www.facebook.com"
  },
  {
    name: "instagram",
    icon: <InstagramIcon sx={{ fontSize: "16px" }} />,
    link: "www.facebook.com"
  },
  {
    name: "x",
    icon: <X sx={{ fontSize: "16px" }} />,
    link: "www.facebook.com"
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon sx={{ fontSize: "16px" }} />,
    link: "www.facebook.com"
  }
]

const ContactBar = () => {
  return (
    <Box sx={{}}>
      <Stack gap={1} direction="row" p="0.5rem">
        {
          contactIcons.map((item, index) => (
            <IconButton
              key={index}
              sx={{ ...styles.iconWrap, ...styles.iconHover, height: "24px", width: "24px", }}
              href={item.link}
            >
              {item.icon}
            </IconButton>

          ))
        }
      </Stack>
    </Box>
  );
};

export default ContactBar;
