'use client'
import React, { useRef } from 'react'
import Footer from '@/components/footer-components/Footer';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import Copyright from '@/components/footer-components/copyright';
import Logo from '@/components/Logo';
import { styles } from '@/styles/styles';
import FooterNavigation from '@/components/footer-components/FooterNavigation';
import ContactBar from '@/components/navigation-components/contactBar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const FooterSection = () => {
    const logoRef = useRef<HTMLDivElement | null>(null);
    const mottoRef = useRef<HTMLDivElement>(null)
    const motto = ["inspiring", "innovative", "elevating"];
    const indexRef = useRef(0);

    useGSAP(() => {
        const el = mottoRef.current
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
                const textTL = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
            // Logo rotation
            motto.forEach((job, i) => {
                textTL.to(el, {
                    duration: 2,
                    opacity: 0,
                    y: -5,
                    ease: "power2.inOut",
                    onComplete: () => {
                        indexRef.current = i;
                        if (el) {
                            el.textContent = motto[indexRef.current];

                            // reset to starting position before animating back in
                            gsap.set(el, { y: 1 });
                        }
                    },
                })
                .to(el, {
                    duration: 3,
                    opacity: 1,
                    y: 0,
                    ease: "power3.out",
                });
            });
            tl.fromTo(
                logoRef.current,
                { rotate: -90 },
                { rotate: 0, duration: 1, ease: "power3.out" }
            );

            // Infinite spin (starts after intro)


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
        <footer
            style={{
                position: 'relative',
                width: "100%",
                // height: "75vh"

            }}
        >

            <Container
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignContent: "end",
                }}>
                <Box sx={{
                    ...styles.center_flex,
                    flexDirection: "column",
                    height: "100%"
                }}
                    gap={2}
                >
                    <Stack gap={6}>
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
                            <Logo fontSize={"20rem"} />
                        </Box>

                        <Typography
                            ref={mottoRef}
                            sx={{
                                height: "100%",
                                fontSize: "28px",
                                textTransform: "uppercase",
                                width: "100%",
                                textAlign: "center",
                                fontWeight: "medium",
                                letterSpacing: "2px",
                                backgroundImage: `linear-gradient(90deg, #3772FF,#7E78D2, #7D2EB2)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",


                            }}>
                            . {motto} .
                        </Typography>
                    </Stack>

                </Box>
                <Stack>
                    <Box
                        sx={{ ...styles.between_flex, flexDirection: { xs: 'column', lg: "row" } }}
                        gap={2}
                    >
                        <FooterNavigation />
                        <Box sx={{ ...styles.center_flex, }} gap={2}>
                            <Typography textTransform={"capitalize"}>
                                stay in touch
                            </Typography>
                            <ContactBar />
                        </Box>

                    </Box>
                    <Divider />
                    <Copyright />
                </Stack>
            </Container>
            <div className='footer-gradient' />
        </footer>
    )
}

export default FooterSection
