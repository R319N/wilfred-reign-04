// import { Box, Stack, Typography } from '@mui/material'
// import React from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Lenis from '@studio-freight/lenis'
// import SplitType from 'split-type'




// const AnimatedHeader = () => {
//     let lenis: any;
//     const textRef = React.useRef<HTMLDivElement>(null);
//     const splitRef = React.useRef<any>(null);

//     React.useEffect(() => {
//         if (!textRef.current) return;
//         const split = new SplitType(textRef.current);
//         return () => {
//             split.revert();
//         };
//     }, []);

//     const chars = splitRef.current?.chars || []

//     React.useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const initSmooth = () => {
//             lenis = new Lenis({
//                 lerp: 0.2,
//                 easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//                 smoothWheel: true,
//             });

//             lenis.on('scroll', () => ScrollTrigger.update());

//             const scrollFn = (time: number) => {
//                 lenis.raf(time);
//                 requestAnimationFrame(scrollFn);
//             }
//             requestAnimationFrame(scrollFn);

//         }
//         const scroll = () => {
//             gsap.fromTo(chars, {
//                 willChange: "transform, opacity",
//                 opacity: 0.2,
//                 z: -800
//             }, {
//                 ease: "back.out(1.2)",
//                 opacity: 1,
//                 z: 0,
//                 stagger: 0.04,
//                 scrollTrigger: {
//                     trigger: textRef.current,
//                     start: "top+=20% bottom",
//                     end: "bottom bottom",
//                     scrub: true,
//                     markers: true
//                 }
//             });
//         }
//         const init = () => {
//             initSmooth();
//             scroll();
//         }

//         init()
//     });
//     return (
//         <Box ref={textRef} height={"100vh"} zIndex={"10"} >
//             <Stack
//                 sx=
//                 {{
//                     marginTop: "300px", width: "100%",
//                     display: "flex", alignItems: "center",
//                     justifyContent: "center",
//                     flexDirection: "column",

//                 }} spacing={4} >
//                 <Typography
//                     ref={splitRef}
//                     sx={{
//                         textAlign: "center", display: "flex",
//                         flexDirection: "column", gap: "20px",
//                         fontSize: { xs: "40px", md: "60px" }, fontWeight: "700", color: "white"
//                     }}
//                 >
//                     what i have done
//                 </Typography>
//                 <Typography
//                     ref={splitRef}
//                     sx={{
//                         textAlign: "center", display: "flex",
//                         flexDirection: "column", gap: "20px",
//                         fontSize: { xs: "18px", md: "22px" }, fontWeight: "700", color: "white"
//                     }}>
//                     my portfolio
//                 </Typography>
//             </Stack>
//         </Box>
//     )
// }

// export default AnimatedHeader