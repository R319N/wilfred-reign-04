'use client'
import HeadingText2 from '@/components/headers/HeadingText2'
import MyWork from '@/components/MyWork'
import { useGSAP } from '@gsap/react'
import { Box } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
// import HeadingText2 from '@/components/headers/HeadingText2'
// import MyWork from '@/components/MyWork'
// import { useGSAP } from '@gsap/react'
// import gsap, { ScrollTrigger } from 'gsap/all'
// import React from 'react'

// gsap.registerPlugin(ScrollTrigger)

// const MyPortfolio = () => {
//   const sectionRef = React.useRef<HTMLDivElement>(null)
//   const outerHeaderRef = React.useRef<HTMLDivElement>(null)
//   const innerHeaderRef = React.useRef<HTMLDivElement>(null) // new ref

//  useGSAP(() => {
//   if (!outerHeaderRef.current || !innerHeaderRef.current || !sectionRef.current) return

//   const sectionHeight = sectionRef.current.offsetHeight

//   gsap.timeline({
//     scrollTrigger: {
//       trigger: sectionRef.current,
//       start: 'top top',
//       end: `+=${sectionHeight}`, // pin for the whole section
//       scrub: true,
//       pin: outerHeaderRef.current,
//       pinSpacing: true,
//       anticipatePin: 1,
//       markers: true,
//     },
//   })
//   .to(innerHeaderRef.current, {
//     scale: 0.6, // shrink
//     y: 0,       // stick top
//     transformOrigin: '50% 0%',
//     ease: 'power2.out',
//   })
// })


//   return (
//     <div ref={sectionRef}>
//       {/* Outer header container pinned */}
//       <div ref={outerHeaderRef}>
//         <HeadingText2 ref={innerHeaderRef} /> {/* inner header ref */}
//       </div>

//       <div style={{ height: '300vh' }}>
//         <MyWork />
//       </div>
//     </div>
//   )
// }

// export default MyPortfolio
// MyPortfolio.tsx
import React, { use } from 'react'
gsap.registerPlugin(ScrollTrigger)

const MyPortfolio = () => {
    const headerRef = React.useRef<HTMLDivElement>(null)
    const mainRef = React.useRef<HTMLDivElement>(null)
    useGSAP(() => {
        if (!headerRef.current || !mainRef.current) return
         gsap.to(mainRef.current, {
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top=+100",
                end: "bottom+=2000",
                pin: true,
                scrub: true,
                markers: true
            }

        })

    }, []
    )

    return (
        <Box sx={{
            position: "relative",
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

        }}>
            <Box
                ref={headerRef}

                sx={{

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100% "
                }}>
                <HeadingText2 />
            </Box>


            <div ref={mainRef} style={{ height: '300vh', width:"100%" }}>
                <MyWork />
            </div>

        </Box>
    )
}

export default MyPortfolio