'use client'
import pxToRem from '@/assets/theme/functions/pxToRem'
import { useGSAP } from '@gsap/react'
import { Box, Stack, Typography } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
// import { Box, Stack, Typography } from '@mui/material'
// import React, { useRef } from 'react'
import { Saira_Stencil_One } from 'next/font/google'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { SplitText, ScrollTrigger } from 'gsap/all'
// import pxToRem from '@/assets/theme/functions/pxToRem'

// gsap.registerPlugin(ScrollTrigger, SplitText)

// const sairaStencil = Saira_Stencil_One({
//     weight: ['400'],
//     subsets: ['latin'],
//     display: 'swap',
// })

// const HeadingText2 = React.forwardRef<HTMLDivElement>((_, ref) => {
//     const wrapperRef = useRef<HTMLDivElement>(null)
//     const headerRef = useRef<HTMLDivElement>(null)
//     const subtitleRef = useRef<HTMLParagraphElement>(null)

//     useGSAP(
//         () => {
//             if (!wrapperRef.current || !headerRef.current) return

//             gsap.fromTo(
//                 headerRef.current,
//                 {
//                     opacity: 0,
//                     scale: 1,
//                     yPercent: -50,
//                     transformOrigin: '50% 0%',
//                 },
//                 {
//                     opacity: 1,
//                     scale: 0.5,
//                     yPercent: 0,
//                     ease: 'power4.out',
//                     scrollTrigger: {
//                         trigger: wrapperRef.current,
//                         start: 'top bottom',
//                         end: 'top center',
//                         scrub: true,
//                         markers: true
//                     },
//                 }
//             )
//         },
//         { scope: wrapperRef }
//     )

//     return (
//         <Box>
//             <Stack sx={{ width: '100%' }}>
//                 <Box
//                     className="inner-header"
//                     ref={ref} // inner header ref
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         willChange: 'transform',
//                         transformOrigin: '50% 0%',
//                         opacity: 1,
//                     }}
//                 >
//                     <Typography
//                         ref={subtitleRef}
//                         className={sairaStencil.className}
//                         sx={{
//                             ...sairaStencil.style,
//                             fontSize: { xs: pxToRem(24), md: pxToRem(52) },
//                             textAlign: 'center',
//                             lineHeight: '120%',
//                             textTransform: 'capitalize',
//                             background: 'linear-gradient(90deg, #00CCFF, #7E78D2)',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                             overflow: 'hidden', // IMPORTANT for line animation
//                         }}
//                     >
//                         More than what I do — it’s <br /> why I do it.
//                     </Typography>
//                     <Typography sx={{ fontSize: pxToRem(24) }}>
//                         [&nbsp;About Me&nbsp;]
//                     </Typography>
//                 </Box>
//             </Stack>
//             <div className="header-gradient one" />
//             <div className="header-gradient two" />
//         </Box>
//     )
// })

// HeadingText2.displayName = 'HeadingText2'

// export default HeadingText2
// HeadingText2.tsx
// 'use client'

// import React from 'react'
// import { Box, Stack, Typography } from '@mui/material'

// const HeadingText2 = React.forwardRef<HTMLDivElement>((_props, ref) => {
//   return (
//     <Stack sx={{ width: '100%' }}>
//       {/* Inner header to animate */}
//       <Box
//         className="inner-header"
//         ref={ref}

//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           willChange: 'transform',
//           transformOrigin: '50% 0%',
//           opacity: 1, // always visible
//         }}
//       >
//         <Typography sx={{ fontSize: { xs: 24, md: 48 }, fontWeight: 'bold' }}>
//           My Portfolio
//         </Typography>
//         <Typography sx={{ fontSize: { xs: 16, md: 24 } }}>
//           Check my work below
//         </Typography>
//       </Box>
//     </Stack>
//   )
// })

// HeadingText2.displayName = 'HeadingText2'

// export default HeadingText2
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

    useGSAP(() => {
        if (!headerRef.current) return

        gsap.to(headerRef.current, {
            opacity: 1,
            scale: 0.5,
            y: -250,

            ease: "power2.easeOut",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top=+100",
                end: "bottom+=2500",
                pin: true,
                scrub: true,
                markers: true
            }
        })
    }, []
    )
    return (
        <Stack ref={headerRef} sx={{ width: '100%' }}>
            <Box
                className="inner-header"
                ref={headerRef} // inner header ref
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    willChange: 'transform',
                    transformOrigin: '50% 0%',
                    opacity: 1,
                }}
            >
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
                <Typography sx={{ fontSize: pxToRem(24) }}>
                    [&nbsp;About Me&nbsp;]
                </Typography>
            </Box>
        </Stack>

    )
}

export default HeadingText2