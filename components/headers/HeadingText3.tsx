import pxToRem from '@/assets/theme/functions/pxToRem'
import { styles } from '@/styles/styles'
import { Box, Typography } from '@mui/material'
import gsap, { ScrollTrigger } from 'gsap/all'
import { Saira_Stencil_One } from 'next/font/google'
import React, { useEffect, useRef } from 'react'
const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})

gsap.registerPlugin(ScrollTrigger)

const HeadingText3 = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const textRef = useRef<HTMLParagraphElement | null>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const headerRef = useRef<HTMLHeadingElement>(null)

    // useEffect(() => {
    //     if (!wrapperRef.current || !headerRef.current) return
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: wrapperRef.current,
    //             start: 'center center',
    //             end: '+=80%',
    //             scrub: true,
    //             pin: true,
    //             // markers: true
    //         },
    //     })
    //     tl.fromTo(headerRef.current, {
    //         opacity: 0,
    //         ease: 'none',
    //         scale: 5
    //     }, { opacity: 1, scale:1 })
    //     return () => {
    //         tl.kill()
    //     }
    // }, [])


    return (
        // <Box
        //     ref={wrapperRef}
        //     sx={{
        //         ...styles.center_flex,
        //         // height: "100%"
        //     }}
        // >
            <Box ref={headerRef} sx={{}}>
                <Typography

                    sx={{
                        ...sairaStencil.style,
                        textTransform: "uppercase",
                        fontSize: pxToRem(32),
                        lineHeight: "1.8",
                        background: "linear-gradient(45deg,#7E78D2 , 70%, #00CCFF )",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundClip: 'text',
                        color: 'transparent !important',
                        textWrap: "noWrap",
                        textAlign: "center"
                    }}
                >
                    My Story
                </Typography>
            </Box>
        // </Box>
    )
}

export default HeadingText3