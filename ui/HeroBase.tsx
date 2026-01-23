import pxToRem from '@/assets/theme/functions/pxToRem'
import { styles } from '@/styles/styles'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import background from '@/public/images/canvas-bg.jpg'
import ScrollIndicator from '@/components/ScrollIndicator'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const professions = ["web developer", "UI/UX designer"];

const HeroBase = () => {
    const headerRef = useRef<HTMLHeadingElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)
    const indexRef = useRef(0);

    useEffect(() => {
        const el = textRef.current
        if (!sectionRef.current) return;

        const textTL = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=40%',
                scrub: true,
                pin: '.pin-wrapper',
                // markers:true
            },
        })
        tl.to(headerRef.current, {
            y: -120,
            opacity: 0,
            ease: 'none',
        }, 0)

        tl.to(imageRef.current, {
            // x: '20vw',
            // y: '10vh',
            // scale: 0.9,
            ease: 'none',
        }, 0)
        tl.to(".background", {
            // x: '20vw',
            // y: '10vh',
            opacity: 0,
            ease: 'none',
        }, 0)
        tl.to(heroRef.current, {
            opacity: 0,
            ease: 'none',
        }, 0.25)

        professions.forEach((job, i) => {
            textTL.to(el, {
                duration: 2,
                opacity: 0,
                y: -5,
                ease: "power2.inOut",
                onComplete: () => {
                    indexRef.current = i;
                    if (el) {
                        el.textContent = professions[indexRef.current];

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

    }, [])

    return (
        <section ref={sectionRef} style={{ height: '100vh' }}>
            <Box
                className="pin-wrapper"
                sx={{
                    height: "200vh",
                    overflow: "hidden"
                }}
            >
                <Box
                    ref={heroRef}
                    sx={{
                        ...styles.between_flex,
                        position: "relative",
                        overflow: "hidden",
                        alignItems: "center",
                        height: "100vh"
                    }}>               
                    <Box
                        className="background"
                        sx={{
                            position: "absolute",
                            background: `url(${background.src}) center/cover no-repeat`,
                            height: "100vh",
                            width: "100%",
                            top: "0",
                            zIndex: 0
                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            background: "#0e1116fc",
                            height: "100vh",
                            width: "100%",
                            top: "0",
                            zIndex: 0
                        }}
                    />
                      <div className="gradient-04" style={{ zIndex: 0 }} />
                    <Box
                        ref={headerRef}
                        sx={{ position: "relative", display: "flex", alignItems: "flex-end", height: "100%", }}
                        p="20vh 10% ">
                        <Typography

                            className='font-bold text-nowrap'
                            sx={{
                                position: "absolute",
                                textTransform: "uppercase",
                                fontSize: pxToRem(100),
                                lineHeight: "1.8",
                                background: "linear-gradient(45deg,#7E78D2 , 70%, #00CCFF )",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundClip: 'text',
                                color: 'transparent !important',
                            }}
                        >
                            wilfred reign
                        </Typography>
                        <Typography
                            ref={textRef}
                            sx=
                            {{
                                fontSize: pxToRem(24),
                                textIndent: "60px",
                                textTransform: "capitalize",
                                fontWeight: "medium",
                                textWrap: "nowrap"
                            }}>
                            {professions}
                        </Typography>
                    </Box>
                    <Box
                        ref={imageRef}
                        sx={{
                            width: "40%",
                            height: "100vh",
                            position: "relative",
                            display: { xs: "none", sm: "block" }
                        }}>

                        <Image
                            src="/images/creator1.png"
                            alt="developer"
                            width={400}
                            height={100}
                            style={{
                                position: "absolute", width: "100%", height: "100%", opacity: "1", zIndex: 1
                            }}
                        />
                    </Box>
                    <Box sx={{
                        position: "absolute",
                        left: '50%',
                        bottom: 0,
                        zIndex: 10
                    }}>
                        <ScrollIndicator />
                    </Box>
                </Box>
              
            </Box>
        </section>
    )
}

export default HeroBase