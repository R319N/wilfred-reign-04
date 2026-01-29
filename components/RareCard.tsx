import pxToRem from '@/assets/theme/functions/pxToRem'
import rgba from '@/assets/theme/functions/rgba'
import { styles } from '@/styles/styles'
import { Box, hexToRgb, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface RareCardProps {
    textColor: string,
    stroke: string | number
    imgSrc: string
    firstWord: string,
    secondWord1: string,
    secondWord2: string
}

const RareCard: React.FC<RareCardProps> = ({
    textColor, stroke, imgSrc, firstWord, secondWord1, secondWord2
}) => {
    return (
        <Box sx={{ ...styles.center_flex, }}>
            <Box
                sx={{
                    display: 'flex',
                    // width: "60vw",
                    height: "225px",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "inherit", // 👈 important
                    isolation: "isolate",    // 👈 VERY important               
                }}
            >
                <Box sx={{ position: "relative", zIndex: 1 }}>

                    <Typography
                        className='font-black uppercase text-nowrap'
                        color={textColor}
                        sx={{

                            fontSize: pxToRem(54),
                            lineHeight: "100%",
                            mixBlendMode: "difference",
                            letterSpacing: "4px"
                        }}
                    >
                        {firstWord}
                    </Typography>
                    <Typography
                        className='font-black uppercase text-nowrap'
                        sx={{
                            fontSize: pxToRem(54),
                            lineHeight: "100%",
                            mixBlendMode: "difference",
                            letterSpacing: "4px",
                            textIndent: "8%",
                            textAlign: "right"
                        }}
                    >
                        <span >
                            {secondWord1}
                        </span>

                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    ...styles.borderRadius,
                    position: "relative",
                    minHeight: "225px",
                    height: "100%",
                    width: "400px"
                }}>
                <Typography
                    className='font-black uppercase text-nowrap'
                    sx={{
                        color: rgba(textColor, 0.2),
                        WebkitTextStroke: `2px ${textColor}`,
                        position: "absolute",
                        transform: "translate(0%, 50%)",
                        zIndex: 1,
                        fontSize: pxToRem(54),
                        lineHeight: "100%",
                        mixBlendMode: "difference",
                        letterSpacing: "4px",
                        height: "100%"
                    }}>
                    {secondWord2}
                </Typography>

                <Image alt="image" src={imgSrc} fill style={{ filter: 'brightness(20%)' }} />
            </Box>
        </Box>
    )
}

export default RareCard