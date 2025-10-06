"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Email,
  Phone,
  LocationOn,
  Send,
  Support,
  Business,
  Schedule,
  CheckCircle,
} from "@mui/icons-material";
import { NextSeo } from "next-seo";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <LocationOn sx={{ fontSize: 40, color: "#003791" }} />,
      title: "Address",
      details: ["Dubai Mall, Level 2", "Dubai, UAE"],
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: "#0070f3" }} />,
      title: "Phone",
      details: ["", "+971 5 859 1195"],
    },
    {
      icon: <Email sx={{ fontSize: 40, color: "#ff6b35" }} />,
      title: "Email",
      details: ["", "info@nzbrightspin.com"],
    },
    {
      icon: <Schedule sx={{ fontSize: 40, color: "#00d4aa" }} />,
      title: "Hours",
      details: ["Mon-Sat: 10AM-10PM", "Sun: 12PM-8PM"],
    },
  ];

  const features = [
    {
      icon: <Support sx={{ color: "#003791" }} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your gaming needs",
    },
    {
      icon: <Business sx={{ color: "#0070f3" }} />,
      title: "Expert Advice",
      description: "Get recommendations from our gaming experts",
    },
    {
      icon: <CheckCircle sx={{ color: "#00d4aa" }} />,
      title: "Quick Response",
      description: "We respond to all inquiries within 2 hours",
    },
  ];

  return (
    <>
      <NextSeo
        title="Contact Support – Sub Tropic Evening Spin"
        description="Get in touch with Sub Tropic Evening Spin – we're here to help with your gaming needs!"
      />
      <Box sx={{ minHeight: "100vh", background: "#000000" }}>
        {/* Hero Section */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #003791 0%, #0070f3 50%, #ff6b35 100%)",
            py: 12,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography
                  variant="h1"
                  fontWeight={900}
                  sx={{
                    color: "#ffffff",
                    mb: 3,
                    fontSize: { xs: "3rem", md: "4.5rem" },
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "rgba(255, 255, 255, 0.9)",
                    mb: 4,
                    maxWidth: "800px",
                    mx: "auto",
                  }}
                >
                  Get in Touch with Our Gaming Experts
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: "600px",
                    mx: "auto",
                  }}
                >
                  Need help with your PlayStation games? Our gaming experts are
                  here 24/7 to assist you with any questions or concerns.
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Contact Form & Info Section */}
        <Box sx={{ py: 12, background: "#1a1a1a" }}>
          <Container maxWidth="xl">
            <Grid container spacing={8}>
              {/* Contact Form */}
              <Grid size={{ xs: 12, lg: 8 }}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: "#000000",
                      borderRadius: "20px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        background: "linear-gradient(135deg, #003791, #0070f3)",
                        p: 4,
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h4"
                        fontWeight={700}
                        sx={{ color: "#ffffff", mb: 2 }}
                      >
                        Send us a Message
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                      >
                        We&apos;ll get back to you within 2-3 business days
                      </Typography>
                    </Box>
                    <CardContent sx={{ p: 4 }}>
                      <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              fullWidth
                              label="Your Name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  background: "#1a1a1a",
                                  borderRadius: "12px",
                                  "& fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.2)",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.4)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "#0070f3",
                                  },
                                },
                                "& .MuiInputLabel-root": {
                                  color: "rgba(255, 255, 255, 0.7)",
                                },
                                "& .MuiInputBase-input": {
                                  color: "#ffffff",
                                },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              fullWidth
                              label="Your Email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  background: "#1a1a1a",
                                  borderRadius: "12px",
                                  "& fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.2)",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.4)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "#0070f3",
                                  },
                                },
                                "& .MuiInputLabel-root": {
                                  color: "rgba(255, 255, 255, 0.7)",
                                },
                                "& .MuiInputBase-input": {
                                  color: "#ffffff",
                                },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12 }}>
                            <TextField
                              fullWidth
                              label="Subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  background: "#1a1a1a",
                                  borderRadius: "12px",
                                  "& fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.2)",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.4)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "#0070f3",
                                  },
                                },
                                "& .MuiInputLabel-root": {
                                  color: "rgba(255, 255, 255, 0.7)",
                                },
                                "& .MuiInputBase-input": {
                                  color: "#ffffff",
                                },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12 }}>
                            <TextField
                              fullWidth
                              label="Your Message"
                              name="message"
                              multiline
                              rows={6}
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              sx={{
                                "& .MuiOutlinedInput-root": {
                                  background: "#1a1a1a",
                                  borderRadius: "12px",
                                  "& fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.2)",
                                  },
                                  "&:hover fieldset": {
                                    borderColor: "rgba(255, 255, 255, 0.4)",
                                  },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "#0070f3",
                                  },
                                },
                                "& .MuiInputLabel-root": {
                                  color: "rgba(255, 255, 255, 0.7)",
                                },
                                "& .MuiInputBase-input": {
                                  color: "#ffffff",
                                },
                              }}
                            />
                          </Grid>
                          <Grid size={{ xs: 12 }}>
                            <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              startIcon={<Send />}
                              sx={{
                                background:
                                  "linear-gradient(135deg, #003791, #0070f3)",
                                borderRadius: "12px",
                                px: 6,
                                py: 2,
                                fontWeight: 700,
                                textTransform: "none",
                                fontSize: "1.1rem",
                                "&:hover": {
                                  background:
                                    "linear-gradient(135deg, #0070f3, #003791)",
                                  transform: "translateY(-2px)",
                                  boxShadow:
                                    "0 12px 24px rgba(0, 55, 145, 0.4)",
                                },
                                transition: "all 0.3s ease",
                              }}
                            >
                              Send Message
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              {/* Contact Information */}
              <Grid size={{ xs: 12, lg: 4 }}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <Stack spacing={4}>
                    {contactInfo.map((info, index) => (
                      <Card
                        key={index}
                        sx={{
                          background: "#000000",
                          borderRadius: "16px",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 12px 24px rgba(0, 55, 145, 0.2)",
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                            }}
                          >
                            {info.icon}
                            <Typography
                              variant="h6"
                              fontWeight={700}
                              sx={{ color: "#ffffff", ml: 2 }}
                            >
                              {info.title}
                            </Typography>
                          </Box>
                          {info.details.map((detail, detailIndex) => (
                            <Typography
                              key={detailIndex}
                              variant="body1"
                              sx={{
                                color: "rgba(255, 255, 255, 0.8)",
                                mb: 0.5,
                              }}
                            >
                              {detail}
                            </Typography>
                          ))}
                        </CardContent>
                      </Card>
                    ))}
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 12, background: "#000000" }}>
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography
                  variant="h2"
                  fontWeight={900}
                  sx={{
                    color: "#ffffff",
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                  }}
                >
                  Why Choose Our Support?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: "600px",
                    mx: "auto",
                  }}
                >
                  We provide exceptional customer service to ensure your gaming
                  experience is perfect
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {features.map((feature, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        sx={{
                          background: "#1a1a1a",
                          borderRadius: "16px",
                          p: 4,
                          textAlign: "center",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          height: "100%",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 20px 40px rgba(0, 55, 145, 0.2)",
                          },
                        }}
                      >
                        <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          sx={{ color: "#ffffff", mb: 2 }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            lineHeight: 1.6,
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            py: 12,
            background: "linear-gradient(135deg, #003791, #0070f3, #ff6b35)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h2"
                  fontWeight={900}
                  sx={{
                    color: "#ffffff",
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                  }}
                >
                  Ready to Get Started?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255, 255, 255, 0.9)",
                    mb: 6,
                    maxWidth: "600px",
                    mx: "auto",
                  }}
                >
                  Browse our collection of authentic PlayStation games and start
                  your gaming journey today
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "#ffffff",
                    color: "#003791",
                    borderRadius: "12px",
                    px: 6,
                    py: 2,
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1.2rem",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.9)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 48px rgba(255, 255, 255, 0.3)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Browse Games
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
