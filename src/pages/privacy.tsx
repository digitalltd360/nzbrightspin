"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ExpandMore,
  Security,
  Shield,
  Lock,
  Visibility,
  CheckCircle,
  ArrowForward,
} from "@mui/icons-material";
import { NextSeo } from "next-seo";
import Link from "next/link";

const PrivacyPage = () => {
  const privacySections = [
    {
      title: "Information We Collect",
      content:
        "We gather limited technical details such as browser type, screen resolution, and anonymized usage statistics to better understand how users interact with our platform. We do not store personal identifiers without your consent.",
      icon: <Visibility sx={{ color: "#003791" }} />,
    },
    {
      title: "Cookies & Tracking",
      content:
        "We use strictly necessary cookies to provide core functionality and remember your preferences (such as cookie consent). You can disable cookies in your browser at any time, though some features may not work properly.",
      icon: <Lock sx={{ color: "#0070f3" }} />,
    },
    {
      title: "Third‑Party Integrations",
      content:
        "We avoid third‑party trackers. If we embed third‑party content, their services may collect data under their own privacy policies.",
      icon: <Shield sx={{ color: "#ff6b35" }} />,
    },
    {
      title: "Data Storage & Retention",
      content:
        "We retain technical and usage data only for as long as necessary to monitor system performance and improve user experience. Afterwards, data is either deleted or anonymized.",
      icon: <Security sx={{ color: "#00d4aa" }} />,
    },
    {
      title: "Your Rights & Control",
      content:
        "You can request access to, or deletion of, any data we may hold that's linked to your device or session. To do so, please reach out through our contact form.",
      icon: <CheckCircle sx={{ color: "#00d4aa" }} />,
    },
  ];

  const externalResources = [
    {
      title: "PlayStation Privacy Policy",
      url: "https://www.playstation.com/en-us/legal/privacy-policy/",
      description:
        "Official PlayStation privacy policy and data handling practices",
    },
    {
      title: "PlayStation Terms of Service",
      url: "https://www.playstation.com/en-us/legal/terms-of-service/",
      description: "PlayStation terms of service and user agreements",
    },
    {
      title: "PlayStation Support",
      url: "https://www.playstation.com/en-us/support/",
      description: "Get help with PlayStation account and privacy settings",
    },
  ];

  return (
    <>
      <NextSeo
        title="Privacy Policy – Sub Tropic Evening Spin"
        description="How Sub Tropic Evening Spin collects, uses and protects your data."
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
                  Privacy Policy
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
                  Your Privacy is Our Priority
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: "600px",
                    mx: "auto",
                  }}
                >
                  We are committed to protecting your privacy and ensuring the
                  security of your personal information while providing you with
                  the best gaming experience.
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Introduction Section */}
        <Box sx={{ py: 8, background: "#1a1a1a" }}>
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  background: "#000000",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  p: 6,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ color: "#ffffff", mb: 3 }}
                >
                  Your Privacy Matters
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  This page explains what we collect, why we collect it, and how
                  you can control your information. We believe in transparency
                  and giving you control over your data.
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  href="/contact"
                  endIcon={<ArrowForward />}
                  sx={{
                    background: "linear-gradient(135deg, #003791, #0070f3)",
                    borderRadius: "12px",
                    px: 4,
                    py: 2,
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    "&:hover": {
                      background: "linear-gradient(135deg, #0070f3, #003791)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Have Questions? Contact Us
                </Button>
              </Card>
            </motion.div>
          </Container>
        </Box>

        {/* Privacy Sections */}
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
                  Privacy Information
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: "600px",
                    mx: "auto",
                  }}
                >
                  Learn about how we handle your data and protect your privacy
                </Typography>
              </Box>

              <Stack spacing={3}>
                {privacySections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Accordion
                      sx={{
                        background: "#1a1a1a",
                        borderRadius: "16px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        "&:before": {
                          display: "none",
                        },
                        "&.Mui-expanded": {
                          margin: 0,
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMore sx={{ color: "#ffffff" }} />}
                        sx={{
                          "& .MuiAccordionSummary-content": {
                            alignItems: "center",
                          },
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          {section.icon}
                          <Typography
                            variant="h6"
                            fontWeight={700}
                            sx={{ color: "#ffffff" }}
                          >
                            {section.title}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            lineHeight: 1.6,
                          }}
                        >
                          {section.content}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Container>
        </Box>

        {/* External Resources Section */}
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
                  External Resources
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    maxWidth: "600px",
                    mx: "auto",
                  }}
                >
                  For PlayStation gaming privacy and security, consider visiting
                  these official resources
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {externalResources.map((resource, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={index}>
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
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          p: 4,
                          height: "100%",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 20px 40px rgba(0, 55, 145, 0.2)",
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          sx={{ color: "#ffffff", mb: 2 }}
                        >
                          {resource.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            mb: 3,
                            lineHeight: 1.6,
                          }}
                        >
                          {resource.description}
                        </Typography>
                        <Button
                          variant="outlined"
                          component="a"
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            borderColor: "#0070f3",
                            color: "#0070f3",
                            borderRadius: "8px",
                            textTransform: "none",
                            "&:hover": {
                              borderColor: "#0070f3",
                              background: "rgba(0, 112, 243, 0.1)",
                            },
                          }}
                        >
                          Visit Resource
                        </Button>
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
                  Questions About Privacy?
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
                  If you have any concerns or requests regarding your data,
                  we&apos;re here to help
                </Typography>
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
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default PrivacyPage;
