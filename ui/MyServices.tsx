'use client'
import ServicesCard from '@/components/ServicesCard'
// import HorizontalScrollSection from '@/components/HorizontalScroll'
// import { Box } from '@mui/material'
// import React from 'react'

// const MyServices = () => {
//     return (
//         <Box sx={{height:"300vh"}}>


//             <HorizontalScrollSection height={300}>
//                 {[1, 2].map((item) => (
//                     <Box
//                         key={item}
//                         sx={{
//                             minWidth: "100vw",
//                             height: "100vh",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             fontSize: "4rem",
//                             backgroundColor: item % 2 ? "#111" : "#222",
//                             color: "white",
//                         }}
//                     >
//                         Section {item}
//                     </Box>
//                 ))}
//             </HorizontalScrollSection>
//         </Box>

//     )
// }

// export default MyServices


import { Box } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const MyServices = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        if (!sectionRef.current || !triggerRef.current) return;

        const pin = gsap.context(() => {
            const scrollWidth = triggerRef.current!.scrollWidth;
            const viewportWidth = window.innerWidth;

            gsap.fromTo(sectionRef.current, {

                translateX: 0
            }, {

                translateX: "-100vw",
                ease: "none",
                // duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top ",
                    end: () => `+=${scrollWidth}`,
                    scrub: 0.6,
                    anticipatePin: 2,
                    pin: true
                }
            })
        }, sectionRef)

        return () => {
            pin.kill()
        }
    }, [])

    return (
        <Box sx={{ overflow: "hidden" }}>
            <div ref={triggerRef}>
                <Box ref={sectionRef} sx={{
                    height: "100vh",
                    width: "200vw",
                    display: "flex",
                    position: "relative ",
                    opacity: 1
                }}>

                    <Box className="scroll-section" sx={{ width: "100vw" }}>
                        <ServicesCard />
                    </Box>
                    <Box className="scroll-section ">
                        <ServicesCard />
                    </Box>


                </Box>
            </div>
        </Box>
    )
}

export default MyServices