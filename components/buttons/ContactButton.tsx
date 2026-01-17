import IconButton from '@mui/material/IconButton';
import React from 'react'
import { WhatsApp } from '@mui/icons-material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
const ContactButton = () => {
    return (
        <Box sx={{ zIndex: 99, position: "fixed", right: { xs: "1rem", sm: "2rem" }, bottom: "4rem" }}>
            <IconButton
                href={`https://wa.me/${+27612023165}?text=Hie%20gene20`}
                sx={{
                    position: "static",
                    height: "3rem",
                    width: "3rem",
                    background: "#00000055",
                    "&:hover": { background: "#00000055", border: "1px solid #DEC5E355", transition: "1s", }
                }}>
                <WhatsApp sx={{
                    height: { xs: "2rem", sm: "2rem" },
                    width: { xs: "2rem", sm: "2rem" },
                    color: green[400]
                }} />
            </IconButton>
        </Box>

    )
}

export default ContactButton
