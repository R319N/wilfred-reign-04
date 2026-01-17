import { styles } from '@/styles/styles'
import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React, { forwardRef } from 'react'
import GlowingButton from '../buttons/glowingButton'
import pxToRem from '@/assets/theme/functions/pxToRem'

interface Props {
    title: string
    description: string
    imgUrl: string
}

const PortfolioCard: React.FC<Props> = ({ title, description, imgUrl }) => {
    return (

        <Grid container
            sx={{
                ...styles.alignRight,
                height: "100%",
            }} spacing={1}>
            <Grid size={{ xs: 12, lg: 6 }}>
                <Box
                    sx={{
                        position: "relative",
                        height: { xs: "100%" },
                        width: "100%",
                        borderRadius: pxToRem(10),
                        overflow: "hidden"
                    }}>
                    <Image
                        src={imgUrl}
                        alt="Smart Academy Project"
                        fill
                    />
                </Box>
            </Grid>
            <Grid
                size={{ xs: 12, lg: 6 }}
            >
                <Box sx={{
                    ...styles.between_flex,
                    alignItems:"right",
                    height: "100%",
                    p: 2,
                    flexDirection: "column",
                    color: "black"
                }}
                gap={2}
                >
                    <Stack gap={2}>

                        <Typography
                            variant="h4"
                            sx={{
                                textTransform: "capitalize",
                                fontWeight: "regular",
                                textAlign: "right"
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                textAlign: "right",
                                textTransform: "capitalize",
                            }}
                        >
                            {description}
                        </Typography>
                    </Stack>
                    <Box sx={{ ...styles.alignRight, }}>
                        <GlowingButton >
                            visit site
                        </GlowingButton>
                    </Box>

                </Box>
            </Grid>

            {/* <Grid size={{ xs: 12, lg: 12 }}

                sx={{ ...styles.alignRight }}>
               
            </Grid> */}
        </Grid>
    )
}


PortfolioCard.displayName = 'PortfolioCard'
export default PortfolioCard
