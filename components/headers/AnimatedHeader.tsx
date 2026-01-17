

'use client'

import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { styles } from '@/styles/styles'

gsap.registerPlugin(ScrollTrigger)

const AnimatedHeader = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (!titleRef.current || !subtitleRef.current || !containerRef.current) return

        // Split text
        const titleSplit = new SplitType(titleRef.current, {
            types: 'words,chars',
        })
        const subtitleSplit = new SplitType(subtitleRef.current, {
            types: 'words,chars',
        })

        // perspective
        gsap.set(
            [...(titleSplit.words ?? []), ...(subtitleSplit.words ?? [])],
            {
                perspective: 800,
                transformStyle: 'preserve-3d',
            },

        )

        // Lenis smooth scroll
        const lenis = new Lenis({
            lerp: 0.15,
            smoothWheel: true,
        })

        lenis.on('scroll', ScrollTrigger.update)

        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // GSAP animation
        gsap.fromTo(
            [...(titleSplit.chars ?? []), ...(subtitleSplit.chars ?? [])],
            {
                opacity: 0,
                y: 40,
                rotationX: -90,
                z: -200,
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                z: 0,
                stagger: 0.04,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top+=40%',
                    end: 'bottom+=0%',
                    pin: true,
                    scrub: true,
                    // markers: true,
                },
            }
        )

        return () => {
            titleSplit.revert()
            subtitleSplit.revert()
            lenis.destroy()
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])

    return (
        <Box ref={containerRef} height={"300vh"} sx={{ ...styles.center_flex }}>
            <Box height="100vh" display="flex" alignItems="center">
                <Stack width="100%" alignItems="center" spacing={3} marginTop={"300px"}>
                    <Typography
                        ref={titleRef}
                        sx={{
                            fontSize: { xs: '40px', md: '60px' },
                            fontWeight: 700,
                            color: 'white',
                        }}
                    >
                        what i have done
                    </Typography>

                    <Typography
                        ref={subtitleRef}
                        sx={{
                            fontSize: { xs: '18px', md: '22px' },
                            fontWeight: 600,
                            color: 'white',
                        }}
                    >
                        my portfolio
                    </Typography>
                </Stack>
            </Box>
        </Box>
    )
}

export default AnimatedHeader
