"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./MyCarousel.module.css";
import Review from "./reviews";
import testimonialReviewData from "@/constants/testimonial_reviewData";
// import { TitleText } from "../CustomTexts";
// import HeadingText from '../headerBanner'
interface ArrowProps {
    onClick?: () => void; // Make onClick optional since react-slick will assign it automatically
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <Box
            className={styles.nextArrow}
            onClick={onClick}
            sx={{
                background: "#00000055",
                padding: "0.2rem",
                borderRadius: "50%",
                height: "2rem",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                    background: "#000000",
                },
            }}
        >
            <ArrowForwardIosIcon
                sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    color: "#dec5e3",
                }}
            />
        </Box>
    );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <Box
            className={styles.prevArrow}
            onClick={onClick}
            sx={{
                background: "#00000055",
                paddingLeft: "0.55rem",
                borderRadius: "50%",
                height: "2rem",
                width: "2rem",
                m: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ArrowBackIosIcon sx={{ fontSize: "1.5rem", color: "#dec5e3" }} />
        </Box>
    );
};

const OurTestimonialsComponent = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [activeSlide, setActiveSlide] = useState(0);
    const headerText = "reviews from\nour clients";
    // const header = <TitleText title={headerText} />;
    const settings = {
        centerMode: true,
        centerPadding: isSmallScreen ? "0px" : "284px", // Increased centerPadding
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current: number, next: number) => setActiveSlide(next),
    };
    return (
        <Box
            sx={{ maxWidth: { xs: "85vw", md: "65vw" }, width: "100%", mt: "5rem" }}
        >
            {/* <HeadingText
                header={header}
                subHeader="check out some of the reviews and comments we got from our clients"
            /> */}
            <Box sx={{ maxWidth: "90vw", m: "4rem auto" }}>
                <Slider {...settings}>
                    {testimonialReviewData.map((review, index) => (
                        <Box
                            key={index}
                            sx={{
                                padding: { xs: "0", md: "0 0.5rem" },
                                boxSizing: "border-box",
                            }}
                        >
                            <Box
                                sx={{ borderRadius: "1px solid red" }}
                                className={`${styles.card} ${activeSlide === index ? styles.activeCard : ""}`}
                            >
                                <Box className={styles.cardContent}>
                                    <Review
                                        author={review.author}
                                        testimonial={review.testimonial}
                                        company={review.company}
                                        position={review.position}
                                        rating={review.rating}
                                        image={review.image}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    )
}

export default OurTestimonialsComponent

