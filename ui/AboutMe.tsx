'use client'
import pxToRem from '@/assets/theme/functions/pxToRem'
import HeadingText3 from '@/components/headers/HeadingText3'
import { styles } from '@/styles/styles'
import { useGSAP } from '@gsap/react'
import { Box, Typography } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Saira_Stencil_One } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
})

gsap.registerPlugin(ScrollTrigger)

// const AboutMe = () => {

//     const text = `
// I’m a passionate web developer with a strong IT background 
// and over four years of hands-on experience building modern, 
// user-focused digital solutions. I enjoy turning ideas into functional,
// well-crafted products, paying close attention to both performance 
// and design. Whether I’m working on complex applications or refining 
// small details, I’m driven by curiosity, problem-solving, and a constant
// desire to improve. I believe great work comes from clarity, consistency,
// and a genuine love for what you do.
// `
//     const sectionRef = useRef<HTMLDivElement | null>(null)
//     const textWrapperRef = useRef<HTMLDivElement | null>(null)
//     const pinRef = useRef<HTMLDivElement | null>(null)
//     const imageRef = useRef<HTMLDivElement | null>(null)
//     const introRef = useRef<HTMLDivElement | null>(null)
//     const contentRef = useRef<HTMLDivElement | null>(null)
//     const headerRef = useRef<HTMLHeadingElement>(null)
//     const textRef = useRef<HTMLParagraphElement | null>(null)


//     useEffect(() => {
//         if (!sectionRef.current || !pinRef.current || !headerRef.current || !textRef.current) return
//         const words = textRef.current.querySelectorAll('.word')

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: 'center',
//                 end: 'bottom',
//                 scrub: true,
//                 pin: true,
//                 pinSpacing: true,
//                 markers: true,
//             },
//         })

//         // // Appear
//         tl.fromTo(
//             imageRef.current,
//             {
//                 // opacity: 0,
//                 y: 200
//             },
//             {
//                 opacity: 1,
//                 y: 200,
//                 scale: 1,
//                 ease: 'none',
//                 duration: 5,
//             }
//         )


//         // //    tl.fromTo(
//         tl.fromTo(textWrapperRef.current,
//             {
//                 opacity: 1,
//                 y: 200
//             },
//             {
//                 duration: 5,
//                 y: -200,
//                 scale: 1,
//                 ease: 'sine.in',
//             }
//         )

//         // Slide INTO pinned position
//         tl.fromTo(headerRef.current, {
//             y: '-40vh',
//             letterSpacing: '0.15em',

//             scale:5,
//             opacity:0
//         },
//         {

//             scale:1,
//             opacity:1 ,
//                duration: 10,
//         }
//     )
//         tl.fromTo(
//             words,
//             { color: '#485670' },
//             {
//                 color: '#B4BECF',
//                 stagger: 1,
//                 // scrollTrigger: {
//                 //     trigger: textRef.current,
//                 //     start: 'top 80%',
//                 //     end: 'bottom 20%',
//                 //     scrub: true,
//                 //     // markers:true

//                 // },
//             }
//         )

//     }, [])


//     return (
//         <section ref={sectionRef} style={{ minHeight: '200vh' }}>

//             {/* HEADER ZONE */}
//             <Box
//                 ref={pinRef}
//                 sx={{
//                     height: '100vh',          // intro height
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     // background: '#0e1116',
//                     position: "sticky",
//                     top: 0
//                 }}

//             >
//                 <div className="gradient-04" style={{ zIndex: -1 }} />
//                 <Box ref={headerRef}>
//                     <HeadingText3 />
//                 </Box>
//             </Box>

//             {/* CONTENT BELOW */}
//             <Box ref={contentRef} sx={{ display: "flex", minHeight: '100vh', justifyContent: "space-between", alignItems: "end", width: "100%", flexDirection: { xs: 'column', lg: "row" }, }} >
//                 <Box ref={imageRef} sx={{ height: "80vh", width: "800px", position: "relative", }}>
//                     <Image src="/images/creator1.png" alt='creator' fill />
//                 </Box>
//                 <Box ref={textWrapperRef} sx={{ width: '100%', paddingX: '4rem', display: "flex", justifyContent: "center", alignItems: "end" }}>
//                     <Typography
//                         ref={textRef}
//                         textAlign={"left"}
//                         sx={{
//                             width: "50ch",
//                             fontSize: pxToRem(24),
//                             lineHeight: '160%',
//                             whiteSpace: "wrap"
//                         }}
//                     >
//                         {text.split(' ').map((word, index) => (
//                             <span
//                                 key={index}
//                                 className="word"
//                                 style={{
//                                     marginRight: '0.35rem',
//                                     display: 'inline-block',
//                                 }}
//                             >
//                                 {word}
//                             </span>
//                         ))}
//                     </Typography>
//                 </Box>
//             </Box>
//         </section>

//     )
// }

// export default AboutMe



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
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const textWrapperRef = useRef<HTMLDivElement | null>(null)
    const pinRef = useRef<HTMLDivElement | null>(null)
    const imageRef = useRef<HTMLDivElement | null>(null)
    const headerWrapperRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const headerRef = useRef<HTMLHeadingElement>(null)
    const textRef = useRef<HTMLParagraphElement | null>(null)

    useGSAP(() => {

        // Header intro
          gsap.fromTo(
            headerRef.current,
            { y: 100, opacity: 0, scale: 1.2 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              scrollTrigger: {
                trigger: headerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            }
          )

        // Pin image only
        // ScrollTrigger.create({
        //     trigger: sectionRef.current,
        //     start: 'top top',
        //     end: '+=1000',
        //     pin: imageRef.current, 
        //     pinSpacing:true,
        //     markers: true
        // })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contentRef.current,
                start: 'top top',
                end: 'bottom',
                scrub: true,
                pin: true,
                pinSpacing: true,
                // markers: true,
            },
        })
        tl.to(imageRef.current, {
            trigger: sectionRef.current,
            start: 'center center',
            end: '+=1000',
            pin: imageRef.current,
            pinSpacing: true,
            // markers: true
        })

        // Word color scroll
        const words = textRef.current!.querySelectorAll('.word')
        gsap.fromTo(
            words,
            { color: '#485670' },
            {
                color: '#B4BECF',
                stagger: 0.04,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',

                    scrub: true,
                },
            }
        )

    }, { scope: sectionRef })


    return (
        <section ref={sectionRef} style={{ minHeight: '300vh', height: "100%", width: "100%" }}>

            {/* HEADER */}
            <Box
                ref={headerRef}
                sx={{
                    position: 'sticky',
                    top: "4rem",
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'top',
                    justifyContent: 'center',
                    background: '#0e1116',
                }}
            >
                <HeadingText3 header='about me' subHeader='more than what i do'/>
            </Box>

            {/* CONTENT */}
            <Box ref={contentRef}
                sx={{
                    display: "flex",
                    minHeight: '100vh',
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    width: "100%",
                    flexDirection: { xs: 'column', lg: "row" },
                    zIndex: 10,
                }}
            >
                {/* PINNED IMAGE */}
                <Box ref={imageRef} sx={{ height: "80vh", width: "400px", position: "relative", }}>
                    <Image src="/images/creator1.png" alt='creator' fill />
                </Box>
                {/* SCROLLING TEXT */}
                <Box sx={{ ...styles.center_flex, width: '100%', position: "relative" }}>
                    <Typography
                        ref={textRef}
                        textAlign={"left"}
                        sx={{
                            width: "50ch",
                            fontSize: pxToRem(22),
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

        </section>


    )
}

export default AboutMe