import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import { Tab } from "@mui/material";
import navigation from "@/constants/navigation_Links";

const NavTabs = () => {
  const [pageTab, setPageTab] = useState(0);
  const tabItems = navigation.filter((item) => item.isTab);
  return (
    <Container sx={{ my: "0.5rem", overflow: "hidden" }}>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        value={pageTab}
        onChange={(e, newValue) => setPageTab(newValue)}
        sx={{
          "& .MuiTabs-indicator": {
            background: "transparent", // Customizing the tab indicator line
          },
        }}
      >
        {tabItems.map((nav, index) => (
          <Tab
            key={index}
            label={
              <>
                {nav.name}
              </>
            }
            value={index}
            href={nav.url}
            sx={{
              width: "100px",
              color:
                pageTab === index
                  ? (theme) => theme.palette.secondary.dark
                  : (theme) => theme.palette.text.primary,
              fontWeight: pageTab === index ? "bolder" : "regular ",
            }}
          />

          // <LinkTab label={nav.name} href={nav.url} key={nav.url} />
        ))}
      </Tabs>
    </Container>
  );
};

export default NavTabs;

NavTabs.displayName = "NavTabs";
