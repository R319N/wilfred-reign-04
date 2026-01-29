'use client'
import pxToRem from '@/assets/theme/functions/pxToRem'
import { useGSAP } from '@gsap/react'
import { Box, Stack, Typography } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Saira_Stencil_One } from 'next/font/google'
import React, { useRef } from 'react'

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})

gsap.registerPlugin(ScrollTrigger)

const HeadingText2 = () => {

    const headerRef = useRef<HTMLDivElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)

    // useGSAP(() => {
    //     if (!headerRef.current) return

    //     gsap.to(headerRef.current, {
    //         opacity: 1,
    //         scale: 0.5,
    //         y: -250,

    //         ease: "power2.easeOut",
    //         scrollTrigger: {
    //             trigger: headerRef.current,
    //             start: "top top",
    //             end: "+=30%",
    //             pin: true,
    //             scrub: true,
    //             markers: true
    //         }
    //     })
    // }, []
    // )
    return (
        <Stack ref={headerRef}
            sx={{
                width: '100%',
                height: "100vh",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: "center",
                willChange: 'transform',
                transformOrigin: '50% 0%',
                opacity: 1,
            }}
        >
            {/* <Box
                className="inner-header"
                ref={headerRef} 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    willChange: 'transform',
                    transformOrigin: '50% 0%',
                    opacity: 1,
                }}
            > */}
            <Typography
                ref={subtitleRef}
                className={sairaStencil.className}
                sx={{
                    ...sairaStencil.style,
                    fontSize: { xs: pxToRem(24), md: pxToRem(52) },
                    textAlign: 'center',
                    lineHeight: '120%',
                    textTransform: 'capitalize',
                    background: 'linear-gradient(90deg, #00CCFF, #7E78D2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    overflow: 'hidden', // IMPORTANT for line animation
                }}
            >
                More than what I do — it’s <br /> why I do it.
            </Typography>
            {/* </Box> */}
        </Stack>

    )
}

export default HeadingText2