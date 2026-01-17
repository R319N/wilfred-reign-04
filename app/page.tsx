"use client"
import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import RootLayout from "./layout";
import { use, useState } from "react";
import { ThreePreloader } from "@/ui/ThreePreloader";
import { HeroSection } from "@/ui/HeroSection";
import NavigationBar from "@/ui/NavigationBar";
import FooterSection from "@/ui/footer-section";
import CustomCursor from "@/components/CustomCursor";
import MyServives from "@/ui/MyServices";
import MyPortfolio from "@/ui/MyPortfolio";
import MyServices from "@/ui/MyServices";
import ServicesCard from "@/components/ServicesCard";
import HeroBase from "@/ui/HeroBase";

export default function Home() {

  const [preloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <RootLayout>
      <Paper
        sx={{
          minHeight: "100vh",
          width: "100%",
          borderRadius: 0,
          margin: 0,
          p: 0,
          overflow: "hidden",
        }}

      >
        <NavigationBar />
        <HeroBase/>
        <ServicesCard/>
        {/* <MyServices /> */}
        {/* <MyPortfolio /> */}
        {/* <HeroSection />  */}
        {/* <FooterSection /> */}
      </Paper>
    </RootLayout>
  );
}
//  <div className="relative">
//           {/* Particle canvas - becomes the hero background */}
//           <ThreePreloader
//             particleCount={80000}
//             minimumLoadTime={2500}
//             onComplete={() => setPreloaderComplete(true)}
//           />

{/* Hero content overlaid on particle canvas */ }
{/* <div className={`relative transition-opacity duration-1000 ${preloaderComplete ? 'opacity-100' : 'opacity-0'
            }`} style={{ zIndex: 10 }}>
            <HeroSection /> */}

{/* Additional sections */ }
{/*  <section className="relative min-h-screen bg-neutral-900 flex items-center justify-center" style={{ zIndex: 20 }}>
              <div className="text-center text-white">
                <h2 className="text-4xl mb-4">Your Content Continues</h2>
                <p className="text-neutral-400">The particle image is now the hero background</p>
              </div>
            </section>
          </div>
        </div> */}