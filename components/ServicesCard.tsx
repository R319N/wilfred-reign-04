// import { Box, Button, Container, Stack, Typography } from '@mui/material'
// import webdev from '@/public/images/design.jpg'
// import React from 'react'
// import pxToRem from '@/assets/theme/functions/pxToRem'
// 
// import { styles } from '@/styles/styles'

// const BackgroundOverlay = () => {
//   return (
//     <Box sx={{
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       backgroundColor: '#0e1116ee', // Semi-transparent overlay
//       zIndex: 1,
//     }} />
//   )
// }

// const ServicesCard = () => {



//   return (

//     <Box sx={{
//       minHeight: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       background: `url(${webdev.src}) center/cover no-repeat`,

//     }}>
//       <BackgroundOverlay />
//       <Container
//         sx={{

//           // display: 'flex',
//           // justifyContent: 'center',
//           // alignItems: 'center',
//           // flexDirection: "column",
//           // height: '100%',
//           zIndex: 2
//         }}
//       >
//         <Stack
//           sx={{
//             position: 'relative',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: "column",
//             height: '100%',
//           }}
//         >
//           <Stack sx={{ zIndex: 2, position: 'relative', display: "flex", justifyContent: "center" }}>
//             <Typography
//               sx={{
//                 fontSize: pxToRem(72),
//                 textTransform: "uppercase",
//                 fontWeight: "bolder",
//                 lineHeight: "100%",
//                 WebkitTextStroke: `2px #7E78D2`,
//                 WebkitTextFillColor: "transparent"

//               }}  >
//               web
//             </Typography>


//             <Box
//               sx={{
//                 position: "absolute",
//                 width: pxToRem(500),
//                 height: "240px",
//                 backgroundColor: '#7E78D222',
//                 borderRadius: pxToRem(20),
//                 backdropFilter: "blur(8px)",
//                 left: "30%",
//                 zIndex: -1,
//                 boxShadow: ` 0 8px 32px rgba(0,0,0,0.25), inset 0 0 30px rgba(255,255,255,0.05)`,
//                 // opacity: 0.4,
//               }}

//             />
//             <Box sx={{
//               position: 'relative',
//               overflow: 'hidden',
//               width: 'fit-content',
//             }}>
//               <Typography
//                 sx={{
//                   fontSize: pxToRem(72),
//                   // width: "5ch",
//                   overflow: "hidden",
//                   textTransform: "uppercase",
//                   fontWeight: "bolder",
//                   lineHeight: "100%",
//                   // textIndent: pxToRem(60),
//                   color: "secondary.main",
//                   whiteSpace: "nowrap"
//                 }}  >
//                 development
//               </Typography>

//               {/* <Box
//                 // component={Typography}
//                 sx={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   whiteSpace: 'nowrap',
//                   fontSize: pxToRem(92),
//                   fontWeight: 'bolder',
//                   textTransform: 'uppercase',
//                   backgroundImage: `url(${webdev.src})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   WebkitBackgroundClip: 'text',
//                   backgroundClip: 'text',
//                   color: 'transparent',
//                   pointerEvents: 'none',
//                   lineHeight: "100%",
//                 }}
//               >
//                 development
//               </Box> */}
//               <Box
//                 sx={{
//                   position: 'relative',
//                   width: pxToRem(600),
//                   height: pxToRem(300),
//                   overflow: 'hidden',
//                   borderRadius: pxToRem(20),
//                   backgroundColor: 'secondary.main',
//                 }}
//               >
//                 {/* IMAGE FILLED TEXT */}
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: 0,
//                     transform: 'translateY(-50%)',
//                     fontSize: pxToRem(92),
//                     fontWeight: 'bolder',
//                     textTransform: 'uppercase',
//                     whiteSpace: 'nowrap',
//                     backgroundImage: `url(${webdev.src})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     WebkitBackgroundClip: 'text',
//                     backgroundClip: 'text',
//                     color: 'transparent',
//                   }}
//                 >
//                   development
//                 </Box>
//               </Box>
//             </Box>

//           </Stack>
//         
//         </Stack>
//       </Container>
//     </Box>


//   )
// }

// export default ServicesCard

'use client'

import { Box, Container, Stack, Typography } from '@mui/material'
import webdev from '@/public/images/webdev.jpg'
import React, { useEffect, useRef } from 'react'
import DarkButton from './buttons/DarkButton'
import pxToRem from '@/assets/theme/functions/pxToRem'
import gsap from 'gsap'
import { styles } from '@/styles/styles'

const BackgroundOverlay = () => (
  <Box
    sx={{
      position: 'absolute',
      inset: 0,
      backgroundColor: '#0e1116ee',
      zIndex: 1,
    }}
  />
)

const ServicesCard = () => {
  const textRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   gsap.fromTo(
  //     textRef.current,
  //     {
  //       // xPercent: -120,
  //       color: 'secondary.main', // start visible
  //     },
  //     {
  //       xPercent: 0,
  //       color: 'transparent', // fade to transparent
  //       duration: 2,
  //       ease: 'power4.out',
  //     }
  //   )
  // }, [])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${webdev.src}) center/cover no-repeat`,
        position: 'relative',
        width:"100%"
      }}
    >
      <BackgroundOverlay />

      <Container
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'flex-end',
          flexDirection: "column",
          zIndex: 2
          // overflow: 'hidden',
        }}
      >
        <Box
        sx={{position:"absolute", left:"20%", transform: 'translateY(50%)',}}
        >
          <Stack
            sx={{
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* WEB */}
            <Typography
              className='font-black uppercase'

              sx={{
                fontSize: pxToRem(78),
                width: "100%",
                lineHeight: "100%",
                WebkitTextStroke: `2px #7E78D2`,
                WebkitTextFillColor: "transparent"
              }}
            >
              web
            </Typography>


            {/* DEVELOPMENT WRAPPER */}
            <Box
              sx={{
                position: 'relative',
                // overflow: 'hidden',
                width: 'fit-content',
                ml: "4rem",

              }}
            >
              {/* BASE TEXT */}
              <Typography
                className='font-black uppercase text-nowrap'
                sx={{
                  position: "absolute",
                  fontSize: pxToRem(78),
                  //  color:"#F26430",
                  lineHeight: "100%",

                }}
              >
                <span style={{ color: "#F26430" }}>
                  dev
                </span>
                <span style={{ color: "#0e1116" }}>
                  elopment
                </span>

                {/* development */}
              </Typography>
              {/* MASK BOX */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  mt: '0.5%',
                  ml: '32.2%',
                  pb: "4vh",
                  transform: 'translateY(-50%)',
                  height: "225px",
                  backgroundColor: '#7E78D277',
                  // background: "#F2643077",
                  borderRadius: pxToRem(20),
                  backdropFilter: "blur(8px)",
                  width: "100%",
                  opacity: 1,
                  pointerEvents: 'none',
                  zIndex: 10,
                  pr: "3rem",
                  mixBlendMode: 'screen',

                }}
              >
                <Typography
                  className='font-black uppercase text-nowrap'
                  sx={{

                    whiteSpace: 'nowrap',
                    fontSize: pxToRem(78),
                    textTransform: "uppercase",
                    fontWeight: "bolder",
                    lineHeight: "100%",
                    backgroundImage: `url(${webdev.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent !important',
                    pointerEvents: 'none',

                  }}
                >
                  elopment
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box sx={{
          // position: "absolute",
          // inset: 0,
          bottom: 0,
          left: 0,
          ...styles.flexEnd,
          alignItems: "end",
          width: "100%",
          paddingTop: "20vh"
        }} >
          <DarkButton>
            more info/ inquire
          </DarkButton>
        </Box>
      </Container>
    </Box>
  )
}

export default ServicesCard
