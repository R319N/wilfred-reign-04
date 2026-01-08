// import React from 'react'
// import Link from 'next/link'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemText from '@mui/material/ListItemText'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import navigation, { NavigationItem } from '@/constants/navigation_Links'
// import { Container } from '@mui/material'
// import Logo from '../Logo'

// interface NavigationDrawerProps {
//   open: boolean;
//   anchorEl: HTMLElement | null;
//   setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
//   handleDrawerToggle: () => void;
// }
// const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
//   handleDrawerToggle,
// }) => {
//   const tabItems = navigation.filter((item) => item.isTab);
//   return (
//     <Container
//       sx={{
//         position: "relative",
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         flexDirection: { xs: 'column', md: 'row' },
//         width: "100%",
//         height: "100%",
//         pt: "20vh"
//       }}>
//       <Box
//         sx={{
//           position: { xs: "absolute", md: "relative" },
//           opacity: { xs: 0.3, md: 1 }
//         }}
//       >
//         <Logo fontSize={420} />
//       </Box>

//       <List>
//         {tabItems.map((item, index) => (
//           <ListItem
//             onClick={handleDrawerToggle}
//           >
//             <ListItemButton
//               sx={{
//                 display: 'flex', justifyContent: 'space-evenly', py: '1rem', width: "200px"
//               }}
//             >
//               <ListItemText>
//                 <Link href={item.url}>
//                   <Typography
//                     textAlign={{ xs: "center", lg: "right" }}
//                     color="white"
//                     display='block'
//                     variant='h2'
//                     fontWeight='regular'
//                     textTransform='uppercase'
//                     sx={{ textWrap: "nowrap" }}
//                   >
//                     {item.name}
//                   </Typography>
//                 </Link>
//               </ListItemText>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   )
// }

// export default NavigationDrawer
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Container,
} from "@mui/material";
import navigation from "@/constants/navigation_Links";
import Logo from "../Logo";
import ContactBar from "./contactBar";

interface NavigationDrawerProps {
  handleDrawerToggle: () => void;
  open: boolean;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  handleDrawerToggle,
}) => {
  const tabItems = navigation.filter((item) => item.isTab);

  const logoRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const bounceIn = (el: HTMLElement) => {
    gsap.to(el, {
      y: -10,
      duration: 0.3,
      ease: "power3.out",
      yoyo: true,
      repeat: 1,
    });
  };

  const bounceOut = (el: HTMLElement) => {
    gsap.to(el, {
      y: 0,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      // Logo rotation
      tl.fromTo(
        logoRef.current,
        { rotate: -90 },
        { rotate: 0, duration: 1, ease: "power3.out" }
      );

      // Infinite spin (starts after intro)
     

      // List items falling
      tl.from(
        listRef.current?.children || [],
        {
          y: -60,
          opacity: 0,
          stagger: 0.2,
          // duration: 0.6,
        },
        "-=0.4"
      );
       tl.to(logoRef.current, {
        rotateY: "+=360",
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column-reverse", md: "row" },
        width: "100%",
        height: "100%",
        py: "20vh",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: "100%",
          perspective: 1200

        }}
      >
        <Box
          ref={logoRef}
          sx={{
            position: {
              xs: "absolute",
              md: "relative"
            },
            opacity: { xs: 0.3, md: 1 },
          }}
        >
          <Logo fontSize={200} />
        </Box>
        <ContactBar />
      </Box>


      {/* Navigation list */}
      <List ref={listRef}>
        {tabItems.map((item) => (
          <ListItem key={item.url} onClick={handleDrawerToggle}>

            <ListItemText
              onMouseEnter={(e) => bounceIn(e.currentTarget)}
              onMouseLeave={(e) => bounceOut(e.currentTarget)}
              sx={{
                // py: "1rem",
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <Link href={item.url} style={{ textDecoration: "none" }}>
                <Typography
                  textAlign={{ xs: "center", lg: "right" }}
                  variant="h2"
                  textTransform="uppercase"
                  sx={{
                    whiteSpace: "nowrap",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      color: "secondary.main",
                      transform: "scale(1.05)",

                    }
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            </ListItemText>
            {/* </ListItemButton> */}
          </ListItem>
        ))}
      </List>

    </Container>
  );
};

export default NavigationDrawer;
