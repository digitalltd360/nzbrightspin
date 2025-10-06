"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Avatar,
  Paper,
  Divider,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  PlayArrow,
  Close,
  Star,
  People,
  Timer,
  Security,
  Speed,
  EmojiEvents,
  VideogameAsset,
  SportsEsports,
  Public,
  Shield,
  Phone,
  Warning,
  Psychology,
} from "@mui/icons-material";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const TheSaviorsGangPage = () => {
  const { t } = useLanguage();
  const [openDialog, setOpenDialog] = useState(false);

  const handlePlayNow = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const features = [
    {
      icon: <Warning />,
      title: t("saviors.features.traps.title"),
      description: t("saviors.features.traps.description"),
      color: "#dc3545",
    },
    {
      icon: <Phone />,
      title: t("saviors.features.phone.title"),
      description: t("saviors.features.phone.description"),
      color: "#007bff",
    },
    {
      icon: <Psychology />,
      title: t("saviors.features.physics.title"),
      description: t("saviors.features.physics.description"),
      color: "#ffc107",
    },
    {
      icon: <EmojiEvents />,
      title: t("saviors.features.satire.title"),
      description: t("saviors.features.satire.description"),
      color: "#28a745",
    },
  ];

  const characters = [
    {
      name: t("saviors.characters.savior"),
      description: t("saviors.characters.savior_desc"),
      color: "#007bff",
    },
    {
      name: t("saviors.characters.father"),
      description: t("saviors.characters.father_desc"),
      color: "#ffc107",
    },
    {
      name: t("saviors.characters.stan"),
      description: t("saviors.characters.stan_desc"),
      color: "#dc3545",
    },
    {
      name: t("saviors.characters.worshipers"),
      description: t("saviors.characters.worshipers_desc"),
      color: "#28a745",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 20% 80%, rgba(220, 53, 69, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(40, 167, 69, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)
        `,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mb: 4,
                  background: "linear-gradient(135deg, #dc3545, #ffc107)",
                  boxShadow: "0 20px 40px rgba(220, 53, 69, 0.4)",
                }}
              >
                <VideogameAsset sx={{ fontSize: 60, color: "white" }} />
              </Avatar>
            </motion.div>

            <Typography
              variant="h1"
              fontWeight={900}
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                background:
                  "linear-gradient(135deg, #dc3545, #ffc107, #28a745)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              {t("saviors.title")}
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "rgba(255,255,255,0.9)",
                mb: 4,
                fontWeight: 600,
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                lineHeight: 1.3,
              }}
            >
              {t("saviors.subtitle")}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.8)",
                mb: 6,
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              {t("saviors.description")}
            </Typography>

            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              sx={{ mb: 6 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={handlePlayNow}
                startIcon={<PlayArrow />}
                sx={{
                  background: "linear-gradient(135deg, #dc3545, #ffc107)",
                  borderRadius: "25px",
                  px: 6,
                  py: 2,
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  boxShadow: "0 12px 40px rgba(220, 53, 69, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #ffc107, #dc3545)",
                    boxShadow: "0 16px 48px rgba(255, 193, 7, 0.6)",
                    transform: "translateY(-3px) scale(1.05)",
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {t("saviors.play_now")}
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/games"
                sx={{
                  border: "2px solid #ffc107",
                  color: "#ffc107",
                  borderRadius: "25px",
                  px: 6,
                  py: 2,
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  "&:hover": {
                    border: "2px solid #ffc107",
                    background: "rgba(255, 193, 7, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {t("saviors.back_to_platform")}
              </Button>
            </Stack>

            {/* Stats */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {[
                { number: "20+", label: t("saviors.stats.deaths") },
                { number: "∞", label: t("saviors.stats.traps") },
                { number: "3D", label: t("saviors.stats.graphics") },
                { number: "100%", label: t("saviors.stats.humor") },
              ].map((stat, index) => (
                <Grid size={{ xs: 6, sm: 3 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  >
                    <Paper
                      sx={{
                        p: 3,
                        textAlign: "center",
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "16px",
                        "&:hover": {
                          background: "rgba(255,255,255,0.1)",
                          transform: "translateY(-5px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight={900}
                        sx={{
                          color: "#ffc107",
                          mb: 1,
                          textShadow: "0 0 20px rgba(255, 193, 7, 0.5)",
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                textAlign: "center",
                mb: 6,
                background: "linear-gradient(135deg, #dc3545, #ffc107)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              {t("saviors.features.title")}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      "&:hover": {
                        background: "rgba(255,255,255,0.1)",
                        transform: "translateY(-10px)",
                        boxShadow: `0 20px 40px ${feature.color}20`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 3,
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: feature.color,
                            mr: 2,
                            width: 60,
                            height: 60,
                          }}
                        >
                          {feature.icon}
                        </Avatar>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          sx={{
                            color: "white",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                          }}
                        >
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Characters Section */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                textAlign: "center",
                mb: 6,
                background: "linear-gradient(135deg, #28a745, #ffc107)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              {t("saviors.characters.title")}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {characters.map((character, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: "center",
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "16px",
                      "&:hover": {
                        background: "rgba(255,255,255,0.1)",
                        transform: "translateY(-5px) scale(1.02)",
                        boxShadow: `0 20px 40px ${character.color}20`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        color: character.color,
                        mb: 2,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {character.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.5,
                      }}
                    >
                      {character.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Gameplay Section */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                textAlign: "center",
                mb: 6,
                background: "linear-gradient(135deg, #6f42c1, #e83e8c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              {t("saviors.gameplay.title")}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {[
              {
                title: t("saviors.gameplay.protection.title"),
                description: t("saviors.gameplay.protection.description"),
                icon: <Shield />,
                color: "#007bff",
              },
              {
                title: t("saviors.gameplay.distraction.title"),
                description: t("saviors.gameplay.distraction.description"),
                icon: <Phone />,
                color: "#ffc107",
              },
              {
                title: t("saviors.gameplay.physics.title"),
                description: t("saviors.gameplay.physics.description"),
                icon: <Psychology />,
                color: "#dc3545",
              },
            ].map((gameplay, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      "&:hover": {
                        background: "rgba(255,255,255,0.1)",
                        transform: "translateY(-10px)",
                        boxShadow: `0 20px 40px ${gameplay.color}20`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: "center" }}>
                      <Avatar
                        sx={{
                          bgcolor: gameplay.color,
                          mx: "auto",
                          mb: 3,
                          width: 80,
                          height: 80,
                        }}
                      >
                        {gameplay.icon}
                      </Avatar>
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        sx={{
                          color: "white",
                          mb: 2,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {gameplay.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          lineHeight: 1.6,
                        }}
                      >
                        {gameplay.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: "center",
              p: 6,
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
            }}
          >
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{
                mb: 3,
                background: "linear-gradient(135deg, #dc3545, #ffc107)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("saviors.cta.title")}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.8)",
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              {t("saviors.cta.description")}
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handlePlayNow}
              startIcon={<PlayArrow />}
              sx={{
                background: "linear-gradient(135deg, #dc3545, #ffc107)",
                borderRadius: "25px",
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "2px",
                boxShadow: "0 12px 40px rgba(220, 53, 69, 0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #ffc107, #dc3545)",
                  boxShadow: "0 16px 48px rgba(255, 193, 7, 0.6)",
                  transform: "translateY(-3px) scale(1.05)",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {t("saviors.play_now")}
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* Game Demo Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: "rgba(15, 15, 35, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "24px",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            pb: 2,
          }}
        >
          <Typography variant="h4" fontWeight={900}>
            {t("saviors.demo.title")}
          </Typography>
          <IconButton onClick={handleCloseDialog} sx={{ color: "white" }}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.8)",
                mb: 4,
              }}
            >
              {t("saviors.demo.description")}
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayArrow />}
              sx={{
                background: "linear-gradient(135deg, #dc3545, #ffc107)",
                borderRadius: "25px",
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "2px",
                boxShadow: "0 12px 40px rgba(220, 53, 69, 0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #ffc107, #dc3545)",
                  boxShadow: "0 16px 48px rgba(255, 193, 7, 0.6)",
                  transform: "translateY(-3px) scale(1.05)",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {t("saviors.demo.play")}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default TheSaviorsGangPage;
