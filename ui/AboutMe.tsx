import pxToRem from '@/assets/theme/functions/pxToRem'
import { styles } from '@/styles/styles'
import { useGSAP } from '@gsap/react'
import { Box, Typography } from '@mui/material'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { Saira_Stencil_One } from 'next/font/google'
import Image from 'next/image'
import React, { useRef } from 'react'

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})
const AboutMe = () => {

    const text = `
I’m a passionate web developer with a strong IT background 
and over four years of hands-on experience building modern, 
user-focused digital solutions. I enjoy turning ideas into functional,
well-crafted products, paying close attention to both performance 
and design. Whether I’m working on complex applications or refining 
small details, I’m driven by curiosity, problem-solving, and a constant
desire to improve. I believe great work comes from clarity, consistency,
and a genuine love for what you do.
`
    const textRef = useRef<HTMLParagraphElement | null>(null)
    const componentWrapperRef = useRef<HTMLDivElement | null>(null)


    useGSAP(() => {
        if (!textRef.current || !componentWrapperRef.current) return
        const split = new SplitText(textRef.current, { type: "lines" });
        const words = textRef.current.querySelectorAll('.word')

        gsap.fromTo(
            componentWrapperRef.current,
            {
                y: 0
            },
            {
                y: 0,
                scrollTrigger: {
                    trigger: componentWrapperRef.current,
                    start: "top-=0%",
                    end: "bottom-=100%",
                    pin: true,
                    // markers: true

                }
            },
        )

        gsap.fromTo(
            words,
            { color: '#485670' },
            {
                color: '#B4BECF',
                stagger: 1,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: true,

                },
            }
        )
    }, [])


    return (
        <Box
            ref={componentWrapperRef}
            sx={{
position: "sticky", top:0,
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                flexDirection: "column",
                // background: `url(${webdev.src}) center/cover no-repeat`,
                // position: 'relative',
                // py: "10dvh",
                overflow: "hidden",
                width: "100%"
            }}
        >

            <Box sx={{
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: "column",
                py:"10dvh"
            }}>

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
                        textWrap: "wrap",
                        textAlign: "center"
                    }}
                >
                    More than what i do
                    <br /> -its why i do it
                </Typography>
                <Typography sx={{ fontSize: pxToRem(16) }}>
                    About Me
                </Typography>
            </Box>
            <Box sx={{  display: "flex", alignItems: "center", width: "100%", flexDirection: { xs: 'column', lg: "row" }, height: "80vh" }} >
                <Box sx={{ height: "100%", width: "800px",position: "relative", }}>
                    <Image src="/images/creator1.png" alt='creator' fill style={{  left: 0 }} />
                </Box>
                <Box sx={{ width: '100%', paddingX: '4rem', display: "flex", justifyContent: "center", alignItems: "end" }}>
                    <Typography
                        ref={textRef}
                        textAlign={"left"}
                        sx={{
                            width: "50ch",
                            fontSize: pxToRem(24),
                            lineHeight: '160%',
                            whiteSpace: "wrap"
                        }}
                    >
                        {text.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className="word"
                                style={{
                                    marginRight: '0.35rem',
                                    display: 'inline-block',
                                }}
                            >
                                {word}
                            </span>
                        ))}
                    </Typography>
                </Box>

            </Box>
              <div className="gradient-04" style={{zIndex:-1}} />
        </Box>
    )
}

export default AboutMe