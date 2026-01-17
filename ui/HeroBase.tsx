import pxToRem from '@/assets/theme/functions/pxToRem'
import { styles } from '@/styles/styles'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import background from '@/public/images/canvas-bg.jpg'
import ScrollIndicator from '@/components/ScrollIndicator'

const HeroBase = () => {
    return (
        <section
            style={{
                minHeight: "100vh",
                height: "100%",
                background: `url(${background.src}) center/cover no-repeat`,
            }}>

            <Box sx={{ ...styles.between_flex, background: "#0e1116fc", alignItems: "center", height: "100vh" }}>
                {/* <div className='gradient-03' /> */}
                <Box
                    sx={{ position: "relative", display: "flex", alignItems: "flex-end", height: "100%", }}
                    p="20vh 10% ">
                    <Typography
                        className='font-bold text-nowrap'
                        sx={{
                            position: "absolute",
                            textTransform: "uppercase",
                            fontSize: pxToRem(100),
                            lineHeight: "1.8",
                            background: "linear-gradient(45deg,#7E78D2 , 70%, #00CCFF )",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",

                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundClip: 'text',
                            color: 'transparent !important',


                        }}
                    >
                        wilfred reign
                    </Typography>
                    <Typography
                        sx=
                        {{
                            fontSize: pxToRem(24),
                            textIndent: "60px",
                            textTransform: "capitalize",
                            fontWeight: "medium",
                            textWrap: "nowrap"


                        }}>
                        web developer .
                    </Typography>
                </Box>


                <Box
                    sx={{
                        width: "40%",
                        height: "100vh",
                        position: "relative",
                        display: { xs: "none", sm: "block" }
                    }}>
                    <div className="gradient-03" style={{ zIndex: 0 }} />
                    <Image
                        src="/images/creator1.png"
                        alt="developer"
                        width={400}
                        height={100}
                        style={{
                            position: "absolute", width: "100%", height: "100%", opacity: "1", zIndex: 1


                        }}
                    />

                </Box>

            </Box>
            <Box sx={{
                position: "absolute",
                //  bottom: '2rem',
                left: '50%',
                zIndex: 10
            }}>
               
                <ScrollIndicator />
            </Box>

        </section>
    )
}

export default HeroBase