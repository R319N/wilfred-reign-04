import { styles } from '@/styles/styles'
import { Box, Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'
import pxToRem from '../theme/functions/pxToRem'
import { useGSAP } from '@gsap/react';
import { Title } from '@mui/icons-material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
// import { AldrichWrapper } from '@/ui/font-wrapper';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';

interface HeadingTextProps {
    title: string;
    subtitle: string;
}

gsap.registerPlugin(ScrollTrigger, useGSAP, ScrambleTextPlugin);

const HeadingText: React.FC<HeadingTextProps> = ({ title, subtitle }) => {
    const textWrapperRef = useRef<HTMLDivElement>(null);
    const sectionWrapperRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);



    useGSAP(() => {
        if (!subtitleRef.current || !titleRef.current) return;

        gsap.timeline({
            scrollTrigger: {
                trigger: subtitleRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
            }
        })
            .fromTo(
                subtitleRef.current,
                {
                    scrambleText: {
                        text: subtitle,
                        chars: "░▒▓█",
                        revealDelay: 0.2
                    }
                },
                {
                    scrambleText: {
                        text: subtitle,
                        chars: "░▒▓█"
                    }
                }
            )
            .fromTo(
                titleRef.current,
                {
                    scrambleText: {
                        text: title,
                        chars: "░▒▓█",
                        revealDelay: 0.2
                    }
                },
                {
                    scrambleText: {
                        text: title,
                        chars: "░▒▓█"
                    }
                },
                "<"
            );
    }, []);


    useGSAP(() => {
        if (!textWrapperRef.current) return;

        gsap.fromTo(
            textWrapperRef.current, {
            y: 0,
            // opacity: 0
        },
            {
                // opacity: 1,
                duration: 2,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: textWrapperRef.current,
                    start: "top",
                    end: "bottom+=300vh",
                    pin: true,
                    scrub: true,
                    markers: true,

                }
            }
        )
    }, []);


    return (
        <Stack
            ref={textWrapperRef}
            sx={{
                ...styles.center_flex,
                height: "100vh",
                position: "sticky",
                top: "0",
            }}
        >
            <Box
                sx={{
                    position: "fixed",
                    inset: 0,
                    width: "100%",
                    height: "100vh",
                    zIndex: -2,
                    opacity: 0.3,
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                    <source src="/videos/neon-city.mp4" type="video/mp4" />
                </video>
            </Box>

            {/* <AldrichWrapper> */}
                <Typography variant='h1'
                    ref={subtitleRef}
                    sx={{
                        textTransform: "capitalize",
                        fontWeight: "medium",
                        fontSize: pxToRem(64),
                        textAlign: "center"
                    }}
                >
                    {subtitle}
                </Typography>
            {/* </AldrichWrapper> */}

            <Typography
                ref={titleRef}
                variant='h2'
                sx={{ textTransform: "capitalize", fontWeight: "regular", fontSize: pxToRem(18) }}
            >
                {title}
            </Typography>
            <div className='gradient-02' />
        </Stack>

    )
}

export default HeadingText