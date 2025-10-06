"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Stack,
  Avatar,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  PlayArrow,
  ArrowBack,
  VideogameAsset,
  Psychology,
  Build,
  Security,
  Speed,
  Cloud,
} from "@mui/icons-material";
import Link from "next/link";

const TheBridgeCursePage = () => {
  const features = [
    {
      title: "ATMOSPHERIC HORROR",
      description:
        "Experience a first-person atmospheric horror title that transports players to the haunting grounds of Tunghu University in Taiwan.",
      icon: <Psychology />,
      color: "#007bff",
    },
    {
      title: "REAL LEGEND",
      description:
        "Based on one of Taiwan's most notorious college horror tales, players will find themselves immersed in the terror that lurks around every corner of the campus.",
      icon: <Build />,
      color: "#ffc107",
    },
    {
      title: "MYSTERY UNFOLDS",
      description:
        "Not everything is as it seems, and uncovering the truth behind the curse may be just as harrowing as escaping it.",
      icon: <Security />,
      color: "#dc3545",
    },
    {
      title: "IMMERSIVE EXPERIENCE",
      description:
        "Navigate through the terrifying campus environment and discover the dark secrets that lie within the university walls.",
      icon: <Speed />,
      color: "#28a745",
    },
  ];

  const testimonials = [
    {
      name: "Mike Lamb",
      company: "Thunderful Games",
      text: "Catness have been a dream to work with, going above and beyond to assure that the ports they deliver are of the highest quality. We appreciate the way in which they have gone above and beyond to meet deadlines and help us solve any issues that have arisen.",
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Jordi Rovira",
      company: "Anticto Estudi Binari",
      text: "Our work with Catness for the port of Steamroll was smooth and free of hassles. They took care of everything from day one minimizing our workload and handling everything very professionally.",
      avatar: "/api/placeholder/60/60",
    },
    {
      name: "Joshua M. French",
      company: "Project Lead at Eastasiasoft Limited",
      text: "Catness has been and remains an invaluable development partner, providing dependable coding solutions and console porting for a wide variety of game projects.",
      avatar: "/api/placeholder/60/60",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        color: "#1a1a2e",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 123, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(220, 53, 69, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)
          `,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  fontWeight={900}
                  sx={{
                    fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                    background:
                      "linear-gradient(135deg, #007bff, #ffc107, #dc3545)",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 30px rgba(0, 123, 255, 0.3)",
                    mb: 3,
                    animation: "gradientShift 3s ease-in-out infinite",
                    lineHeight: 1.1,
                  }}
                >
                  THE BRIDGE CURSE: ROAD TO SALVATION
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    color: "rgba(26,26,46,0.9)",
                    fontWeight: 600,
                    mb: 4,
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    lineHeight: 1.3,
                  }}
                >
                  FIRST-PERSON ATMOSPHERIC HORROR
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(26,26,46,0.7)",
                    fontWeight: 400,
                    mb: 6,
                    maxWidth: "800px",
                    mx: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  The Bridge Curse Road to Salvation (Softstar Entertainment,
                  Eastasiasoft) is a first-person atmospheric horror title,
                  transporting players to the haunting grounds of Tunghu
                  University in Taiwan. Based on one of Taiwan&apos;s most
                  notorious college horror tales, players will find themselves
                  immersed in the terror that lurks around every corner of the
                  campus. But be wary! Not everything is as it seems, and
                  uncovering the truth behind the curse may be just as harrowing
                  as escaping it.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      background: "linear-gradient(135deg, #007bff, #ffc107)",
                      borderRadius: "50px",
                      px: 6,
                      py: 2,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      boxShadow: "0 8px 32px rgba(0, 123, 255, 0.3)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #ffc107, #007bff)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 12px 40px rgba(0, 123, 255, 0.4)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Play Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<ArrowBack />}
                    component={Link}
                    href="/games"
                    sx={{
                      border: "2px solid #007bff",
                      color: "#007bff",
                      borderRadius: "50px",
                      px: 6,
                      py: 2,
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      "&:hover": {
                        background: "#007bff",
                        color: "white",
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 32px rgba(0, 123, 255, 0.3)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Back to Games
                  </Button>
                </Stack>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Main Features Section */}
      <Box sx={{ py: 12, background: "#f8f9fa" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                fontWeight={900}
                sx={{
                  background: "linear-gradient(135deg, #007bff, #ffc107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 4,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                MAIN FEATURES
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={6}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(20px)",
                      border: `2px solid ${feature.color}40`,
                      borderRadius: "20px",
                      p: 4,
                      height: "100%",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 20px 40px ${feature.color}20`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Avatar
                        sx={{
                          background: `linear-gradient(135deg, ${feature.color}, ${feature.color}80)`,
                          width: 80,
                          height: 80,
                          mr: 3,
                          boxShadow: `0 8px 20px ${feature.color}40`,
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h5"
                          fontWeight={900}
                          sx={{
                            color: feature.color,
                            mb: 1,
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          {feature.title}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="body1"
                      color="rgba(26,26,46,0.8)"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Delivered Section */}
      <Box sx={{ py: 12, background: "#ffffff" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                fontWeight={900}
                sx={{
                  background: "linear-gradient(135deg, #dc3545, #28a745)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 4,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                VALUES DELIVERED
              </Typography>
            </Box>
          </motion.div>

          <Paper
            sx={{
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "20px",
              p: 6,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="body1"
              color="rgba(26,26,46,0.8)"
              sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
            >
              Softstar Entertainment and Eastasiasoft entrusted Catness Game
              Studios with the porting of The Bridge Curse: Road to Salvation, a
              complex horror title that required careful attention to
              atmospheric details and technical performance. Our team worked
              closely with the original developers to ensure that the
              game&apos;s terrifying atmosphere and immersive experience were
              preserved across all target platforms.
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="rgba(26,26,46,0.8)"
              sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
            >
              The porting process involved optimizing the game&apos;s complex
              lighting and shadow systems for different hardware configurations
              while maintaining the atmospheric horror that makes The Bridge
              Curse such a compelling experience. We focused on ensuring smooth
              performance and consistent frame rates across PC, PlayStation, and
              Xbox platforms.
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="rgba(26,26,46,0.8)"
              sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
            >
              Our expertise in Unreal Engine allowed us to implement
              platform-specific optimizations that enhanced the game&apos;s
              performance without compromising its atmospheric horror elements.
              The result is a seamless experience that brings the terror of
              Tunghu University to players worldwide.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box
        sx={{
          py: 12,
          background: "linear-gradient(135deg, #e9ecef 0%, #f8f9fa 100%)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h2"
                fontWeight={900}
                sx={{
                  background: "linear-gradient(135deg, #007bff, #ffc107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 4,
                }}
              >
                What They Say About Us
              </Typography>
              <Typography variant="h6" color="rgba(26,26,46,0.8)">
                Trusted by some of the main companies of the industry
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      background: "rgba(255,255,255,0.9)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: "20px",
                      height: "100%",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          color="#1a1a2e"
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography color="rgba(26,26,46,0.7)">
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      color="rgba(26,26,46,0.8)"
                      sx={{ lineHeight: 1.6 }}
                    >
                      &ldquo;{testimonial.text}&rdquo;
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default TheBridgeCursePage;
