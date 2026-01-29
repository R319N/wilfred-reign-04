"use client";
import Logo from '@/components/Logo'
import NavigationDrawer from '@/components/navigation-components/NavigationDrawer';
import NavigationMenu from '@/components/navigation-components/NavigationMenu';
import { styles } from '@/styles/styles';
import { AppBar, AppBarProps, Box, Divider, Drawer, IconButton, SvgIcon, Toolbar, useScrollTrigger } from '@mui/material'
import React, { useId, useState } from 'react'

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

const NavigationBar: React.FC<DashBoardNavigationProps> = ({
    window,
    ...rest
}) => {
    const [open, setOpen] = useState(false);
    const gradientId = useId();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const container = window !== undefined ? () => window().document.body : undefined;
    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };



    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <Box>
            <Box
                position="fixed"
                sx={{
                    zIndex: 90,
                    width: "100%",
                    px:{xs:0 , lg:"2rem"}
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
                            p: { xs: "0.5rem 1rem", lg: "0" },
                        }}
                    >
                        <Toolbar
                            sx={{
                                ...styles.between_flex,
                                position: "relative",
                                maxWidth: "100vw",
                                minHeight: "40px",
                                width: "100%",
                             
                                m: 0,
                            }}
                        >
                            <Logo fontSize='32px' />

                            <IconButton
                                onClick={handleDrawerToggle}
                                aria-label="open drawer"
                                sx={{
                                    ...styles.iconHover,
                                    borderRadius: "8px",
                                    border: "1px solid #D0A5C055",
                                    height: "42px", width: "42px",
                                    "&:hover": { backgroundColor: "transparent" },
                                }}
                            >
                                <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 32 }}>
                                    <defs>
                                        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#3772FF" />
                                            <stop offset="100%" stopColor="#7E78D2" />
                                        </linearGradient>
                                    </defs>
                                    {mobileOpen ? (
                                        <path
                                            fill={`url(#${gradientId})`}
                                            d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L12 13.41l-6.29 6.3-1.42-1.42L10.59 12 4.29 5.71 5.7 4.29 12 10.59l6.29-6.3z"
                                        />
                                    ) : (
                                        <path
                                            fill={`url(#${gradientId})`}
                                            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                                        />
                                    )}
                                </SvgIcon>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                   
                </ElevationScroll>
                 <Divider/>
            </Box>
            <Drawer
                {...rest}
                anchor='top'
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    zIndex: 89,
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: "100%",
                        height: "100dvh",
                        // overflow: "hidden",
                        p: { xs: "0.5rem 1rem", lg: "2rem 4rem" },
                        backgroundColor: "white",
                        transition: "transform 0.3s ease-in-out",
                    },
                }}
            >
                <NavigationDrawer
                    open={open}
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    handleDrawerToggle={handleDrawerToggle}
                />
            </Drawer>
        </Box>
    )
}

export default NavigationBar