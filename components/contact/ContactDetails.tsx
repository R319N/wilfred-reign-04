// this component was coded by wilfred reign for portfolio presentation
// website:  www.wilfredreign.netlify.app
// facebook: wilfred reign
// contact : +27 61 202 3165
// whatsapp: +27 61 202 3165

// *** MUI5 imports ***
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Typography from "@mui/material/Typography";
import { styles } from "@/styles/styles";
// import SocialContacts from "./socialContact";
import contactDetailsdata from "@/constants/contact_detailsData";
import Link from '@mui/material/Link';

export default function ContactDetails() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                // height: "100%",
            }}
            gap={6}
        >
            <List
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    width: "100",
                    p: "0",
                    m: "0",
                }}
            >
                {contactDetailsdata.map((item, index) => (
                    <Box
                        sx={{ ...styles.center_flex, textTransform: "capitalize" }}
                        key={index}
                    >
                        <MenuItem component={Link} href={item.link} color="secondary" sx={{ width: "100%" }}>
                            <IconButton sx={{ color: "textPrimary" }}>{item.icon}</IconButton>
                            <ListItemText>
                                <Typography
                                    textTransform="lowercase"
                                //  primary={item.name}
                                // secondary={item.details}
                                // color="secondary"
                                sx={{ mx: "2rem", align: "left" }}
                                >
                                    {item.details}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    </Box>
                ))}
            </List>
            {/* <Box>
                <SocialContacts />
            </Box> */}
        </Box>
    );
}

