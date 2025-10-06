"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  SportsEsports,
  LocalShipping,
  Support,
  CheckCircle,
  ArrowForward,
  Star,
  MonetizationOn,
  HeadsetMic,
  Gamepad,
  Security,
  Speed,
} from "@mui/icons-material";
import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      icon: <SportsEsports sx={{ fontSize: 60, color: "#003791" }} />,
      title: "Game Recommendations",
      description:
        "Get personalized game recommendations based on your gaming preferences and style.",
      features: [
        "Personalized suggestions",
        "Genre-based recommendations",
        "Age-appropriate content",
        "Budget-friendly options",
      ],
      price: "Free",
    },
    {
      icon: <LocalShipping sx={{ fontSize: 60, color: "#0070f3" }} />,
      title: "Fast Delivery",
      description:
        "Same-day delivery in Dubai, next-day delivery across UAE with tracking.",
      features: [
        "Same-day Dubai delivery",
        "Next-day UAE delivery",
        "Real-time tracking",
        "Free shipping over 200 AED",
      ],
      price: "From 15 AED",
    },
    {
      icon: <Support sx={{ fontSize: 60, color: "#ff6b35" }} />,
      title: "Technical Support",
      description:
        "24/7 technical support for all your PlayStation gaming needs.",
      features: [
        "24/7 availability",
        "Gaming experts",
        "Technical troubleshooting",
        "Setup assistance",
      ],
      price: "Free",
    },
    {
      icon: <Security sx={{ fontSize: 60, color: "#00d4aa" }} />,
      title: "Authentic Games",
      description:
        "100% authentic PlayStation games with official packaging and warranty.",
      features: [
        "Original packaging",
        "Official warranty",
        "Region compatibility",
        "No counterfeit games",
      ],
      price: "Market price",
    },
    {
      icon: <MonetizationOn sx={{ fontSize: 60, color: "#ff6b35" }} />,
      title: "Exclusive Deals",
      description:
        "Access to exclusive deals and early releases for our loyal customers.",
      features: [
        "Early access to new games",
        "Exclusive discounts",
        "Bundle offers",
        "Loyalty rewards",
      ],
      price: "Member exclusive",
    },
    {
      icon: <HeadsetMic sx={{ fontSize: 60, color: "#0070f3" }} />,
      title: "Gaming Consultation",
      description:
        "One-on-one consultation with gaming experts to enhance your experience.",
      features: [
        "Personal consultation",
        "Gaming strategy advice",
        "Equipment recommendations",
        "Community building",
      ],
      price: "50 AED/hour",
    },
  ];

  const coreValues = [
    {
      icon: <CheckCircle sx={{ color: "#00d4aa" }} />,
      title: "Authenticity",
      description:
        "We guarantee 100% authentic PlayStation games with official packaging.",
    },
    {
      icon: <Speed sx={{ color: "#0070f3" }} />,
      title: "Speed",
      description: "Fast delivery across UAE with same-day service in Dubai.",
    },
    {
      icon: <Support sx={{ color: "#ff6b35" }} />,
      title: "Support",
      description: "24/7 expert support from passionate gaming professionals.",
    },
    {
      icon: <Star sx={{ color: "#ff6b35" }} />,
      title: "Quality",
      description:
        "Premium gaming experience with top-quality products and service.",
    },
  ];

  return (
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
                Our PlayStation Services
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
                Enhance Your Gaming Experience with Our Premium Offerings
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                At Sub Tropic Evening Spin, we offer more than just games. We
                provide a suite of services designed to make your gaming journey
                seamless, enjoyable, and rewarding.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box sx={{ py: 8, background: "#1a1a1a" }}>
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
                Our Core Values
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                What makes us the leading PlayStation retailer in the UAE
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {coreValues.map((value, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        background: "#000000",
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
                      <Box sx={{ mb: 3 }}>{value.icon}</Box>
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        sx={{ color: "#ffffff", mb: 2 }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255, 255, 255, 0.8)",
                          lineHeight: 1.6,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Services Section */}
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
                Our Services
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Comprehensive gaming services to enhance your PlayStation
                experience
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
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
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 40px rgba(0, 55, 145, 0.3)",
                        },
                      }}
                    >
                      <Box sx={{ textAlign: "center", mb: 3 }}>
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        sx={{ color: "#ffffff", mb: 2, textAlign: "center" }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255, 255, 255, 0.8)",
                          mb: 3,
                          textAlign: "center",
                          flexGrow: 1,
                        }}
                      >
                        {service.description}
                      </Typography>
                      <List sx={{ mb: 3 }}>
                        {service.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircle
                                sx={{ color: "#00d4aa", fontSize: 20 }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              sx={{
                                "& .MuiListItemText-primary": {
                                  color: "rgba(255, 255, 255, 0.9)",
                                  fontSize: "0.9rem",
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                      <Box sx={{ textAlign: "center", mt: "auto" }}>
                        <Chip
                          label={service.price}
                          sx={{
                            background:
                              "linear-gradient(135deg, #003791, #0070f3)",
                            color: "#ffffff",
                            fontWeight: 700,
                            px: 2,
                          }}
                        />
                      </Box>
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
                Ready to Experience Premium Gaming?
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
                Contact us today to learn more about our services and how we can
                enhance your gaming experience
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="/contact"
                  endIcon={<ArrowForward />}
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
                  Contact Us
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/games"
                  startIcon={<Gamepad />}
                  sx={{
                    borderColor: "#ffffff",
                    color: "#ffffff",
                    borderRadius: "12px",
                    px: 6,
                    py: 2,
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1.2rem",
                    "&:hover": {
                      borderColor: "#ffffff",
                      background: "rgba(255, 255, 255, 0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Browse Games
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;
