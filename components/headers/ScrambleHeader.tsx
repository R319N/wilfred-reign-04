// import React from 'react'
// import {motion, useInView} from 'framer-motion'
// const scr

// const ScrambleHeader = () => {

//   return (
//     <div>ScrambleHeader</div>
//   )
// }

// export default ScrambleHeader
"use client"
import { Box, Typography, TypographyProps } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ScrambleHeaderProps {
    text: string;
    color?: string; // Optional href for wrapping the card with a link
}

const charset = "abcdefghijklmnoprstuvwxyz";

const getRandomChar = () => charset[Math.floor(Math.random() * charset.length)];

export const ScrambleHeader: React.FC<ScrambleHeaderProps> = ({ text, ...props }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% in view
    const [scrambledText, setScrambledText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const isInsideSafeZone = useInView(ref, {
        amount: "some",
        margin: "-50% 0px -50% 0px"
    })
    useEffect(() => {
        if (!isInsideSafeZone) {
            if (intervalRef.current) return;
            let iteration = 0

            intervalRef.current = setInterval(() => {
                setScrambledText(
                    text.split('').map((char, index) => {
                        if (char === " ") return "";
                        if (iteration < text.length) {
                            return iteration > index
                                ? text[index]
                                : getRandomChar()
                        }
                        return text[index];
                    }).join('')
                );
                iteration += 1
            }, 50);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                setScrambledText(text)
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        };
    }, [isInsideSafeZone, text]);

    return (
        <motion.div ref={ref} style={{ fontSize: "3rem", fontWeight: "bold", position: "relative", zIndex: 5 }}
        >
            <Box

                sx={{
                    position: "relative",
                    zIndex: 99,
                    width: "100%",
                }}
            >
                <Box>
                    <Typography variant="h1" zIndex={"99"} textAlign="center" {...props}>
                        {scrambledText}
                    </Typography>
                </Box>

            </Box>

        </motion.div>
    );
}

export default ScrambleHeader;
