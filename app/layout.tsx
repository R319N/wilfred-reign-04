"use client";
import "./globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import React, { useEffect } from "react";
import uLwandleTheme from "@/assets/theme/uLwandleTheme";
import SmoothScrollProvider from "@/assets/providers/smooth-scroll-provider";
import CustomCursor from "@/components/CustomCursor";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body>
        <SmoothScrollProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={uLwandleTheme}>
              {/* <CustomCursor /> */}
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
