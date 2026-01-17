import HorizontalScrollSection from '@/components/HorizontalScroll'
import { Box } from '@mui/material'
import React from 'react'

const MyServices = () => {
    return (
        <HorizontalScrollSection height={100}>
            {[1, 2, 3, 4, 5].map((item) => (
                <Box
                    key={item}
                    sx={{
                        minWidth: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "4rem",
                        backgroundColor: item % 2 ? "#111" : "#222",
                        color: "white",
                    }}
                >
                    Section {item}
                </Box>
            ))}
        </HorizontalScrollSection>

    )
}

export default MyServices