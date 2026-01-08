// import { Box, Container, Divider, Typography } from '@mui/material'
// import React from 'react'
// import Copyright from './copyright'
// import FooterNavigation from './FooterNavigation'
// import ContactBar from '../navigation-components/contactBar'
// import { styles } from '@/styles/styles'
// import Logo from '../Logo'

// const Footer = () => {
//     return (
//         <Box
//             sx={{
//                 position: "relative",
//                 height: "800px",
//                 width: "100%",
//             }}
//         >
//             <div style={{ position: "relative", height: "calc(100vh + 800px)", top: "100vh" }}>
//                 <div style={{ position: "sticky", top: "calc(100vh - 800px)", height: "800px" }}>
//                     <Container
//                         sx={{
//                             display: "flex",
//                             flexDirection: "column",
//                             justifyContent: "space-between",
//                             py: 4
//                         }}>
//                         <Logo />
//                         <Box
//                             sx={{ ...styles.between_flex, flexDirection: { xs: 'column', lg: "row" } }}
//                             gap={2}
//                         >
//                             <FooterNavigation />
//                             <Box sx={{ ...styles.center_flex, }} gap={2}>
//                                 <Typography textTransform={"capitalize"}>
//                                     stay in touch
//                                 </Typography>
//                                 <ContactBar />
//                             </Box>
//                         </Box>
//                         <Divider />
//                         <Copyright />
//                     </Container>
//                 </div>
//             </div>
//         </Box>
//     )
// }

// export default Footer

import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import Copyright from './copyright'
import FooterNavigation from './FooterNavigation'
import ContactBar from '../navigation-components/contactBar'
import { styles } from '@/styles/styles'
import Logo from '../Logo'

const Footer = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "800px",
                width: "100%",
            }}
        >
            <div >
                <div >
                    <Container
                        sx={{
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
                </div>
            </div>
        </Box>
    )
}

export default Footer