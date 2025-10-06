"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  SportsEsports,
  LocalShipping,
  Support,
  Star,
  CheckCircle,
  ArrowForward,
} from "@mui/icons-material";
import Link from "next/link";

const AboutPage = () => {
  const team = [
    {
      name: "Ahmed Al-Rashid",
      role: "Founder & CEO",
      image: "/api/placeholder/200/200",
      bio: "Gaming enthusiast with 10+ years of experience in the UAE gaming industry. Passionate about bringing authentic PlayStation games to gamers across the region.",
      skills: [
        "Business Strategy",
        "Gaming Industry",
        "Customer Relations",
        "Team Leadership",
      ],
    },
    {
      name: "Sarah Johnson",
      role: "Gaming Expert",
      image: "/api/placeholder/200/200",
      bio: "PlayStation specialist with deep knowledge of gaming trends and customer preferences. Helps customers find the perfect games for their gaming style.",
      skills: [
        "Game Recommendations",
        "Customer Support",
        "Gaming Trends",
        "Product Knowledge",
      ],
    },
    {
      name: "Mohammed Hassan",
      role: "Operations Manager",
      image: "/api/placeholder/200/200",
      bio: "Ensures smooth operations and fast delivery across the UAE. Manages our logistics network to provide the best service to our customers.",
      skills: [
        "Operations Management",
        "Logistics",
        "Supply Chain",
        "Quality Control",
      ],
    },
    {
      name: "Fatima Al-Zahra",
      role: "Customer Experience Lead",
      image: "/api/placeholder/200/200",
      bio: "Dedicated to providing exceptional customer service and building lasting relationships with our gaming community.",
      skills: [
        "Customer Service",
        "Community Building",
        "Support",
        "Relationships",
      ],
    },
  ];

  const values = [
    {
      title: "Authenticity",
      description:
        "We guarantee 100% authentic PlayStation games with official packaging and warranty.",
      icon: <CheckCircle sx={{ color: "#00d4aa" }} />,
    },
    {
      title: "Fast Delivery",
      description:
        "Same-day delivery in Dubai, next-day delivery across UAE with real-time tracking.",
      icon: <LocalShipping sx={{ color: "#0070f3" }} />,
    },
    {
      title: "Expert Support",
      description:
        "24/7 customer support from passionate gaming professionals who understand your needs.",
      icon: <Support sx={{ color: "#ff6b35" }} />,
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your gaming experience is our priority. We go above and beyond to ensure your satisfaction.",
      icon: <Star sx={{ color: "#ff6b35" }} />,
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Founded",
      description:
        "Started as a small gaming store in Dubai with a passion for authentic PlayStation games.",
    },
    {
      year: "2019",
      title: "First Store",
      description:
        "Opened our first physical store in Dubai Mall, expanding our reach to local gamers.",
    },
    {
      year: "2020",
      title: "Online Launch",
      description:
        "Launched our online platform to serve gamers across the UAE during the pandemic.",
    },
    {
      year: "2022",
      title: "Happy Customers",
      description: "Reached 5,000+ happy customers with 99% satisfaction rate.",
    },
    {
      year: "2024",
      title: "Leading Gaming Retailer",
      description:
        "Became the leading PlayStation game retailer in the UAE with 500+ games in stock.",
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
                About Sub Tropic Evening Spin
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  mb: 4,
                  maxWidth: "800px",
                  mx: "auto",
                }}
              >
                UAE&apos;s Premier PlayStation Gaming Destination
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                We are passionate gamers dedicated to bringing you the best
                PlayStation gaming experience in the UAE with authentic games,
                fast delivery, and exceptional service.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box sx={{ py: 12, background: "#1a1a1a" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={8} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h2"
                  fontWeight={900}
                  sx={{
                    color: "#ffffff",
                    mb: 4,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  variant="h6"
                  color="rgba(255, 255, 255, 0.9)"
                  sx={{ mb: 4, lineHeight: 1.8 }}
                >
                  Founded in 2018, Sub Tropic Evening Spin began with a simple
                  mission: to bring authentic PlayStation games to gamers across
                  the UAE. What started as a small gaming store has grown into
                  the leading PlayStation retailer in the region.
                </Typography>
                <Typography
                  variant="h6"
                  color="rgba(255, 255, 255, 0.8)"
                  sx={{ mb: 4, lineHeight: 1.8 }}
                >
                  We specialize in authentic PlayStation games for PS5, PS4, and
                  classic consoles. From the latest blockbusters to timeless
                  classics, we&apos;ve helped thousands of gamers find their
                  perfect games with fast delivery and expert support.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="/games"
                  endIcon={<ArrowForward />}
                  sx={{
                    background: "linear-gradient(135deg, #003791, #0070f3)",
                    borderRadius: "16px",
                    px: 4,
                    py: 2,
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    "&:hover": {
                      boxShadow: "0 12px 48px rgba(0, 55, 145, 0.6)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Shop Now
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    height: 400,
                    background: "linear-gradient(135deg, #003791, #ff6b35)",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 200,
                      height: 200,
                      background:
                        "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SportsEsports
                      sx={{ fontSize: 80, color: "white", opacity: 0.8 }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Values Section */}
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
                Our Values
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                The principles that guide everything we do
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
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

      {/* Team Section */}
      <Box sx={{ py: 12, background: "#1a1a1a" }}>
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
                Meet Our Team
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Passionate gaming experts dedicated to your gaming experience
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {team.map((member, index) => (
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
                          boxShadow: "0 20px 40px rgba(0, 55, 145, 0.3)",
                        },
                      }}
                    >
                      <Avatar
                        src={member.image}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: "auto",
                          mb: 3,
                          background:
                            "linear-gradient(135deg, #003791, #0070f3)",
                        }}
                      />
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        sx={{ color: "#ffffff", mb: 1 }}
                      >
                        {member.name}
                      </Typography>
                      <Typography variant="h6" sx={{ color: "#0070f3", mb: 2 }}>
                        {member.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.8)",
                          mb: 3,
                          lineHeight: 1.6,
                        }}
                      >
                        {member.bio}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        justifyContent="center"
                      >
                        {member.skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            size="small"
                            sx={{
                              background: "rgba(0, 55, 145, 0.2)",
                              color: "#0070f3",
                              border: "1px solid #0070f3",
                              fontSize: "0.7rem",
                              mb: 1,
                            }}
                          />
                        ))}
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Milestones Section */}
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
                Our Journey
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                From a small gaming store to the leading PlayStation retailer in
                the UAE
              </Typography>
            </Box>

            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background:
                    "linear-gradient(180deg, #003791, #0070f3, #ff6b35)",
                  transform: "translateX(-50%)",
                  display: { xs: "none", md: "block" },
                }}
              />
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 6,
                      flexDirection: {
                        xs: "column",
                        md: index % 2 === 0 ? "row" : "row-reverse",
                      },
                      textAlign: {
                        xs: "center",
                        md: index % 2 === 0 ? "right" : "left",
                      },
                    }}
                  >
                    <Box sx={{ flex: 1, px: 4 }}>
                      <Card
                        sx={{
                          background: "#1a1a1a",
                          borderRadius: "16px",
                          p: 4,
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 12px 24px rgba(0, 55, 145, 0.2)",
                          },
                        }}
                      >
                        <Typography
                          variant="h3"
                          fontWeight={900}
                          sx={{ color: "#0070f3", mb: 1 }}
                        >
                          {milestone.year}
                        </Typography>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          sx={{ color: "#ffffff", mb: 2 }}
                        >
                          {milestone.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            lineHeight: 1.6,
                          }}
                        >
                          {milestone.description}
                        </Typography>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        background: "linear-gradient(135deg, #003791, #0070f3)",
                        borderRadius: "50%",
                        border: "4px solid #000000",
                        zIndex: 1,
                        display: { xs: "none", md: "block" },
                      }}
                    />
                    <Box sx={{ flex: 1 }} />
                  </Box>
                </motion.div>
              ))}
            </Box>
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
                Ready to Join Our Gaming Community?
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
                Experience the difference of authentic PlayStation games with
                exceptional service
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
                  href="/games"
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
                  Browse Games
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/contact"
                  startIcon={<Support />}
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
                  Contact Us
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
