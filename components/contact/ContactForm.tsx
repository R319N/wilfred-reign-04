"use client";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Send from "@mui/icons-material/Send";
import Check from "@mui/icons-material/Check";
import { styles } from "@/styles/styles";
import GlowingButton from "../buttons/glowingButton";
import emailjs from "@emailjs/browser";
// import GlowingButton from "@/ui/buttons/glowingButton";

const ContactForm = () => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    interface SendEmailEvent extends React.FormEvent<HTMLFormElement> {
        target: HTMLFormElement;
    }

    interface EmailJsResult {
        text: string;
    }

    interface EmailJsError {
        text: string;
    }

    const sendEmail = (e: SendEmailEvent): void => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_a06gldt", // Service ID
                "template_1vlkclz", // Template ID
                e.target,
                {
                    publicKey: "xFJhzQ3lJTLtNGmiN",
                }
            )
            .then(
                (result: EmailJsResult) => {
                    setSuccess(true);
                    setError(false); // Reset error state on success
                    console.log("SUCCESS!", result.text);
                },
                (error: EmailJsError) => {
                    setError(true);
                    setSuccess(false); // Reset success state on error
                    console.log("FAILED...", error.text);
                }
            );
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 3000);
        // Clear form fields after submission
        e.target.reset();
    };

    return (
        <Box
            sx={{
                ...styles.center_flex,
                ...styles.defaultBorder,
                borderRadius: "8px", // Add border radius for rounded corners
                backdropFilter: { xs: "none", lg: "blur(8px)" },
                background: { xs: "transparent", lg: "#1E1F4150" }, // Adjust transparency as needed
                flexDirection: "column",
                p: "2rem 2rem",
                height: "100%",
                width: "100%"
            }}
        >
            {loading ? (
                <CircularProgress sx={{ color: "textPrimary" }} />
            ) : success ? (
                <Box sx={{ ...styles.column_flex }} gap={3}>
                    <Avatar>
                        <Check color="success" />
                    </Avatar>
                    <Typography variant="body1" textTransform="uppercase">
                        Message sent successfully!
                    </Typography>
                </Box>
            ) : (
                <form
                    onSubmit={sendEmail}
                    id="contact_form"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent: "center",
                        // alignItems: "center",

                    }}
                >
                    {/* <Box sx={{ display: { xs: "block", lg: "none" } }} >
                        <Stack gap={4} py={"2rem"} alignItems="center" display="flex">
                            <Heading2
                                title="have any questions?"
                                subTitle="send us a message and we'll get back to you as soon as possible. fill out the form below to get started."
                            />
                            <ScrollIndicator />
                        </Stack>
                    </Box> */}

                    <Box sx={{ py: "1rem" }}>
                        <TextField
                            variant="standard"
                            margin="normal"
                            name="from_name"
                            placeholder="Name"
                            id="name"
                            required
                            fullWidth
                        // sx={{ width: "100%" }}
                        />
                    </Box>

                    <Box sx={{ py: "1rem" }}>
                        {/* <InputLabel htmlFor="email">email/phone</InputLabel> */}
                        <TextField
                            variant="standard"
                            type="text"
                            name="from_email"
                            id="email"
                            placeholder="Email"
                            required
                            fullWidth
                        // sx={{ width: "340px" }}
                        />
                    </Box>
                    <Box sx={{ py: "1rem" }}>
                        {/* <InputLabel htmlFor="email">email/phone</InputLabel> */}
                        <TextField
                            variant="standard"
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                            required
                            fullWidth
                        // sx={{ width: "340px" }}
                        />
                    </Box>
                    <Box sx={{ py: "1rem" }}>
                        {/* <InputLabel htmlFor="message">message</InputLabel> */}
                        <TextField
                            variant="standard"
                            type="text"
                            name="message"
                            id="message"
                            placeholder="Message"
                            multiline
                            rows={3}
                            // fullWidth
                            sx={{ width: { xs: "100%", lg: "320px" }, pt: "0.5rem" }}
                            required
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex ",
                            // flexDirection: "column",
                            justifyContent: "center",
                            // alignItems: "right",
                        }}
                    // alignSelf="right"
                    >
                        <GlowingButton
                            variant="contained"
                            type="submit"
                            sx={{ bgcolor:(theme)=>theme.palette.primary.main,my: "0.5rem", width: { xs: "100%", xl: "100%" }, align: "right" }}
                            endIcon={<Send />}
                        >
                            send Message
                        </GlowingButton>
                        {error && (
                            <Typography
                                variant="body2"
                                color="error"
                                sx={{ fontVariant: "all-small-caps" }}
                            >
                                Something went wrong. Please try again later.
                            </Typography>
                        )}
                    </Box>
                </form>
            )}
        </Box>
    );
};

export default ContactForm;
