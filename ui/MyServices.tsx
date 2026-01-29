'use client'
import RareCard from '@/components/RareCard'
import { Box, Container, Stack, Typography } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef, useState } from 'react'
import webdev from '@/public/images/webdev.jpg'
import uiux from '@/public/images/design.jpg'
import ourServices from '@/constants/our_services-data'
import pxToRem from '@/assets/theme/functions/pxToRem'
import { Saira_Stencil_One } from 'next/font/google'
import rgba from '@/assets/theme/functions/rgba'
import { styles } from '@/styles/styles'
import HeadingText3 from '@/components/headers/HeadingText3'

gsap.registerPlugin(ScrollTrigger)

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})

const MyServices = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState(0)
    const slides = ourServices

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".track", {
                xPercent: -100 * (slides.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".pinned-section",
                    pin: true,
                    scrub: 1,
                    anticipatePin: -1, // 👈 small visual improvement
                    snap: {
                        snapTo: 1 / (slides.length - 1),
                        duration: 0.05,
                        ease: "power2.out",
                    },
                    end: () => "+=" + window.innerWidth * slides.length,
                },
            })

        })

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        ScrollTrigger.create({
            trigger: ".pin-wrapper",
            start: "top-+100%",
            end: "bottom",
            onUpdate: (self) => {
                const index = Math.round(self.progress * (slides.length - 1))
                setActive(index)
            },
        })
    }, [])


    return (

        <Container className="pin-wrapper" sx={{}}>

            <Stack className="pinned-section" sx={{ position: "relative", height: "100vh", overflow: "visible" }} gap={10}>
                <div className='gradient-06' />
             <Box sx={{ position:  "relative", height:"100vh", pt: "12vh", ...styles.column_flex, justifyContent: "center", alignItems: "center" }}>

                    <HeadingText3
                    header='my services'
                    subHeader='what i do'
                    />
                </Box>
                <Box
                    className="track"
                    sx={{
                        display: "flex",
                        width: '100%',
                        height: "100%"
                    }}
                >
                    {slides.map((slide, i) => (
                        <Box key={i} sx={{ width: "100%", flexShrink: 0, position: "relative" }}>
                            <RareCard
                                textColor={slide.color}
                                stroke="2px #7E78D2"
                                imgSrc={slide.imgURL}
                                firstWord={slide.firstWord}
                                secondWord1={slide.secondWord1}
                                secondWord2={slide.secondWord2}
                            // {...slide}
                            />
                        </Box>
                    ))}
                </Box>

                <Box
                    sx={{
                        position: "relative",
                        bottom: 0,
                        display: "flex",
                        // transform: "translate(-10%, -80%)",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        gap: 1,
                        zIndex: 1000,
                        width: "100%",
                       pb:"16vh"
                    }}
                >
                    {slides.map((_, i) => (
                        <Box
                            key={i}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end", // 👈 pushes dot right
                                width: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    width: active === i ? 46 : 24, // 👈 fixed width
                                    height: 8,
                                    borderRadius: 999,
                                    transition: "width 0.25s ease, background-color 0.25s ease",
                                    backgroundColor: active === i ? "#7E78D2" : rgba("#7E78D2", 0.2),
                                }}
                            />
                        </Box>
                    ))}
                </Box>

            </Stack>
        </Container>



    )
}

export default MyServices