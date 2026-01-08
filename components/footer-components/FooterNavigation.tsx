import navigation from '@/constants/navigation_Links'
import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const FooterNavigation = () => {
    const footerLink = navigation.filter((item) => item.isTab);
    return (
        <List sx={{ display: "flex" }}>
            {footerLink.map((link, index) => (
                <ListItem key={index}>
                    <ListItemText sx={{ textTransform: "capitalize", mx: "1rem" }}>
                        {link.name}
                    </ListItemText>
                </ListItem>
            )
            )}
        </List>
    )
}

export default FooterNavigation