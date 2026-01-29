import { styles } from '@/styles/styles'
// import HeadingText2 from '@/ui/headers/HeadingText2'
import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'
import ContactDetails from './ContactDetails'
// import pxToRem from '@/ui/theme/functions/pxToRem'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import ContactForm from './ContactForm'
import pxToRem from '@/assets/theme/functions/pxToRem'
import { Saira_Stencil_One } from 'next/font/google'

gsap.registerPlugin(ScrollTrigger, SplitText)
const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})
const GetInTouch = () => {

    const textRef = useRef<HTMLParagraphElement | null>(null)
    const componentWrapperRef = useRef<HTMLDivElement | null>(null)


    useGSAP(() => {
        if (!textRef.current || !componentWrapperRef.current) return
        const split = new SplitText(textRef.current, {
            type: "words",
        });
        gsap.from(split.words, {
            // yPercent: 100,
            opacity: 0,
            color: '#485670',
            duration: 1,
            ease: 'power4.out',
            stagger: 0.08,
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top 40%',
                end: 'bottom-=40%',
                scrub: true,
                // markers: true
            },
        })

        // Pin section (your logic, cleaned)
        ScrollTrigger.create({
            trigger: componentWrapperRef.current,
            start: 'top-=10%',
            end: 'bottom-=80%',
            pin: true,
            // markers: true
        })

        return () => {
            split.revert()
        }
    }, [])

    return (
        <Box ref={componentWrapperRef} sx={{ height: "300vh" }}>
            {/* <Box sx={{ ...styles.center_flex, height: "10vh" }}>
                <Typography
                    ref={textRef}
                    align='center'
                    sx={{ fontSize: { xs: pxToRem(20) }, fontWeight: "regular" }}>
                    Have a project in mind or need a developer to <br />
                    bring your ideas to life? Let’s connect and <br />
                    build something great together—share your <br />
                    idea, and I’ll help turn it into a scalable, fast, <br />
                   and engaging web experience.
                </Typography>
            </Box> */}
            <Container sx={{ ...styles.between_flex, alignItems: "center", minHeight:"100vh" }}>
                <div className='gradient-02' />
                <Stack gap={4} sx={{minHeight:"200vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                    <Typography
                        sx={{ 
                            ...sairaStencil.style, 
                        fontSize: "72px",
                         textTransform: "capitalize",
                         lineHeight:"1.2",
                          background: "linear-gradient(45deg,#7E78D2 , 70%, #00CCFF )",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                          }}>
                        get in<br /> touch <br /> with me
                    </Typography>
                    <ContactDetails />
                </Stack>
                <Box>
                    <ContactForm />
                </Box>
            </Container>

        </Box>
    )
}

export default GetInTouch