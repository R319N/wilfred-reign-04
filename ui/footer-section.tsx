import React from 'react'
import Footer from '@/components/footer-components/Footer';
import { Box, Container, Divider, Typography } from '@mui/material';
import Copyright from '@/components/footer-components/copyright';
import Logo from '@/components/Logo';
import { styles } from '@/styles/styles';
import FooterNavigation from '@/components/footer-components/FooterNavigation';
import ContactBar from '@/components/navigation-components/contactBar';
const FooterSection = () => {
    return (
        <footer
            style={{
                position: 'relative',
                width: "100%",
               
            }}
        >
            <Container
                sx={{
                    //  height:"800px",
                    position:"sticky",
                    bottom:0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    py: 4
                }}>
                <Logo />
                <Box
                    sx={{ ...styles.between_flex, flexDirection: { xs: 'column', lg: "row" } }}
                    gap={2}
                >
                    <FooterNavigation />
                    <Box sx={{ ...styles.center_flex, }} gap={2}>
                        <Typography textTransform={"capitalize"}>
                            stay in touch
                        </Typography>
                        <ContactBar />
                    </Box>
                </Box>
                <Divider />
                <Copyright />
            </Container>
        </footer>
    )
}

export default FooterSection
