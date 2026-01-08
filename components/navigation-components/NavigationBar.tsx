// this component was coded by wilfred reign and is a product of gene20 incoporations
// website:  www.wilfredreign.netlify.app
// facebook: wilfred reign
// contact : +27 61 202 3165
// whatsapp: +27 61 202 3165
"use client";
// *** react/next imports ***
import React, { useEffect, useRef, useState } from "react";

// *** MUI5 Component imports ***
import AppBar from "@mui/material/AppBar";
import type { AppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

// *** MUI5 Icon imports ***
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"

// *** style imports ***
import { styles } from "@/styles/styles";

// *** component imports ***
// import Gene20Logo from "../gene20Logo";
// import GlowingButtonOutlined from "../glowingButtonOutlined";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import NavTabs from "./NavTabs";
import NavigationMenu from "./NavigationMenu";
// import Logo from "../logo";
// import ContactBar from "../contactBar";
import { Link, Typography } from "@mui/material";
import ContactBar from "./contactBar";
import { Menu, ViewStream } from "@mui/icons-material";
import gsap from "gsap";
import { grey } from "@mui/material/colors";
import GlowingButton from "@/ui/buttons/glowingButton";
import GlowingButtonOutlined from "@/ui/buttons/glowingButtonOutlined";
// import  {Close as CloseIcon} from "@mui/icons-material";

interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement<AppBarProps>;
}


interface DashBoardNavigationProps {
  window?: () => Window;
  title?: string;
  children?: React.ReactNode;
}

function ElevationScroll({ children, window }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
  });
}

const professions = ["web developer", "UI/UX designer"];
const NavigationBar: React.FC<DashBoardNavigationProps> = ({
  window,
  ...rest
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const container = window !== undefined ? () => window().document.body : undefined;
  const textRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

    professions.forEach((job, i) => {
      tl.to(el, {
        duration: 2,
        opacity: 0,
        y: -5,
        ease: "power2.inOut",
        onComplete: () => {
          indexRef.current = i;
          el.textContent = professions[indexRef.current];

          // reset to starting position before animating back in
          gsap.set(el, { y: 1 });
        },
      })
        .to(el, {
          duration: 3,
          opacity: 1,
          y: 0,
          ease: "power3.out",
        });
    });
  }, []);

  return (
    <>
      <Box>
        <Box
          position="fixed"
          sx={{
            zIndex: 99,
            width: "100%",
          }}
        >
          <ElevationScroll>
            <AppBar
              position="static"
              sx={{
                ...styles.scrolledAppBar,
                backdropFilter: trigger ? "blur(10px)" : "none",
                overflow: "visible",
                boxShadow: "none",
              }}
            >
              <Toolbar
                sx={{
                  ...styles.between_flex,
                  borderBottom: trigger ? "1px solid #DEC5E350" : "none",
                  // borderRadius: (theme) => theme.shape.borderRadius,
                  position: "relative",
                  maxWidth: "100vw",
                  minHeight: "40px",
                  width: "100%",
                  p: "0.5rem 1rem",
                  m: 0,
                }}
              >
                <Box
                  sx={{
                    ...styles.between_flex,
                    width: "100%",
                  }}
                >
                  <Link href="/" >
                    <Typography
                      sx={{
                        textDecoration: "none",
                        textTransform: "capitalize",
                        fontWeight: "lighter",
                        fontSize: "10px",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <span > wilfred reign </span>
                      <span ref={textRef} style={{ color: "#444" }}>{professions[0]}</span>
                    </Typography>
                  </Link>

                  <Box display="flex" alignItems="center" gap={4}>
                    <IconButton
                      size="medium"
                      aria-label="open drawer"
                      onClick={handleDrawerToggle}
                      sx={{
                        ...styles.iconHover,
                        borderRadius: "8px",
                        height: "32px", width: "32px",
                        border: "1px solid #D0A5C055",
                        display: { xs: "flex", xl: "none" },
                      }}
                    >
                      {!mobileOpen ? <Menu sx={{ fontSize: "18px" }} /> : <CloseIcon />}
                    </IconButton>
                    {/* <Box sx={{ position: "relative" }}>
                   
                  </Box> */}

                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", xl: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <NavTabs />
                    <GlowingButtonOutlined>
                      contact
                    </GlowingButtonOutlined>
                  </Box>

                  {/* <Box
                    sx={{
                      display: { xs: "flex", sm: "none" },
                      alignItems: "center",
                    }}
                  >
                    <Stack gap={0.5} direction="row" alignItems="center">
                      <a href="/#contact">
                        <GlowingButtonOutlined
                          variant="outlined"
                          type="button"
                          size="small"
                        >
                          contact us
                        </GlowingButtonOutlined>
                      </a>
                    </Stack>
                  </Box> */}
                </Box>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </Box>
        <Drawer
          {...rest}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "flex", xl: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 260,
              pt: "1rem",
            },
          }}
        >
          {/* <NavigationMenu
            open={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            handleDrawerToggle={handleDrawerToggle}
          /> */}
        </Drawer>
      </Box>
    </>
  );
};

export default NavigationBar;
