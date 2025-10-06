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
  Divider,
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

const MetamorphosisVRPage = () => {
  const features = [
    {
      title: "A WORLD REIMAGINED",
      description:
        "Explore massive environments where everyday objects become monumental.",
      icon: <Psychology />,
      color: "#007bff",
    },
    {
      title: "CONQUER NEW HEIGHTS",
      description:
        "Climb towering landscapes—your new abilities are your key to survival.",
      icon: <Build />,
      color: "#ffc107",
    },
    {
      title: "HIDDEN WORLDS",
      description:
        "Sneak through the depths of a desk, every drawer hides a new discovery, and even hidden collectibles.",
      icon: <Security />,
      color: "#dc3545",
    },
    {
      title: "THE FINAL STAND",
      description:
        "Conquer the Tower in a dramatic showdown. Will you destroy it and reclaim your humanity?",
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
                  WAKE UP AS GREGOR, A BOY TURNED INTO A COCKROACH!
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
                  METAMORPHOSIS VR
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
                  Metamorphosis VR (Ovid Works, Black Sun Productions) is an
                  adventure set in a surrealist world where your newfound
                  abilities are your last and only hope for redemption. Wake up
                  as Gregor, a boy turned into a cockroach, and explore huge
                  environments, solve puzzles, and uncover the mystery of a
                  strange tower.
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
              Black Sun Productions entrusted Catness Game Studios with the
              considerable task of converting the existing PC version of
              Metamorphosis into a VR edition for Meta Quest. To achieve this,
              the Catness Games team thoroughly examined the existing game
              system, focusing on the key elements that could benefit from a
              first-person perspective via a VR headset. Our goal was to adapt
              and design the behavior of both existing and new mechanics that
              would make a correct and intuitive use of the Quest motion
              controllers.
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="rgba(26,26,46,0.8)"
              sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
            >
              Once these core gameplay foundations were established, the team
              faced the challenging task of bringing the large and detailed
              world from the PC version to a significantly less powerful system,
              one that also needed to render the game on two 1832×1920 displays
              at a stable 90 frames per second, crucial for preventing motion
              sickness and preserving player immersion.
            </Typography>
            <br />
            <Typography
              variant="body1"
              color="rgba(26,26,46,0.8)"
              sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}
            >
              To accomplish this, the developers focused on optimizing polygon
              counts and texture sizes while preserving as much visual fidelity
              as possible. They also revised the lighting and shader systems to
              ensure they performed smoothly at a consistently high frame rate.
              In parallel, the team also fine-tuned collision boxes,
              environmental scales, and hand-controller interactions to
              guarantee a natural and intuitive gameplay experience.
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

export default MetamorphosisVRPage;
