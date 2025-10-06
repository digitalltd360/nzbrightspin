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
} from "@mui/icons-material";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const HiveAltenumWarsPage = () => {
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
      icon: <Public />,
      title: t("hive.features.gravity.title"),
      description: t("hive.features.gravity.description"),
      color: "#007bff",
    },
    {
      icon: <People />,
      title: t("hive.features.heroes.title"),
      description: t("hive.features.heroes.description"),
      color: "#ffc107",
    },
    {
      icon: <SportsEsports />,
      title: t("hive.features.modes.title"),
      description: t("hive.features.modes.description"),
      color: "#dc3545",
    },
    {
      icon: <EmojiEvents />,
      title: t("hive.features.war.title"),
      description: t("hive.features.war.description"),
      color: "#28a745",
    },
  ];

  const races = [
    {
      name: t("hive.races.ufg"),
      description: t("hive.races.ufg_desc"),
      color: "#007bff",
    },
    {
      name: t("hive.races.nhc"),
      description: t("hive.races.nhc_desc"),
      color: "#ffc107",
    },
    {
      name: t("hive.races.evo"),
      description: t("hive.races.evo_desc"),
      color: "#dc3545",
    },
    {
      name: t("hive.races.yill"),
      description: t("hive.races.yill_desc"),
      color: "#28a745",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 20% 80%, rgba(0, 123, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(220, 53, 69, 0.05) 0%, transparent 50%),
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
                  background: "linear-gradient(135deg, #007bff, #ffc107)",
                  boxShadow: "0 20px 40px rgba(0, 123, 255, 0.4)",
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
                  "linear-gradient(135deg, #007bff, #ffc107, #dc3545)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              {t("hive.title")}
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
              {t("hive.subtitle")}
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
              {t("hive.description")}
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
                  background: "linear-gradient(135deg, #007bff, #ffc107)",
                  borderRadius: "25px",
                  px: 6,
                  py: 2,
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  boxShadow: "0 12px 40px rgba(0, 123, 255, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #ffc107, #007bff)",
                    boxShadow: "0 16px 48px rgba(255, 193, 7, 0.6)",
                    transform: "translateY(-3px) scale(1.05)",
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {t("hive.play_now")}
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
                {t("hive.back_to_platform")}
              </Button>
            </Stack>

            {/* Stats */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {[
                { number: "10", label: t("hive.stats.players") },
                { number: "4", label: t("hive.stats.races") },
                { number: "3", label: t("hive.stats.modes") },
                { number: "2.5D", label: t("hive.stats.graphics") },
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
                background: "linear-gradient(135deg, #007bff, #ffc107)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              {t("hive.features.title")}
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

        {/* Races Section */}
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
                background: "linear-gradient(135deg, #dc3545, #28a745)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              {t("hive.races.title")}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {races.map((race, index) => (
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
                        boxShadow: `0 20px 40px ${race.color}20`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        color: race.color,
                        mb: 2,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      {race.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.5,
                      }}
                    >
                      {race.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Game Modes Section */}
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
              {t("hive.modes.title")}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {[
              {
                title: t("hive.modes.deathmatch.title"),
                description: t("hive.modes.deathmatch.description"),
                icon: <EmojiEvents />,
                color: "#007bff",
              },
              {
                title: t("hive.modes.king.title"),
                description: t("hive.modes.king.description"),
                icon: <Security />,
                color: "#ffc107",
              },
              {
                title: t("hive.modes.survival.title"),
                description: t("hive.modes.survival.description"),
                icon: <Shield />,
                color: "#dc3545",
              },
            ].map((mode, index) => (
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
                        boxShadow: `0 20px 40px ${mode.color}20`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: "center" }}>
                      <Avatar
                        sx={{
                          bgcolor: mode.color,
                          mx: "auto",
                          mb: 3,
                          width: 80,
                          height: 80,
                        }}
                      >
                        {mode.icon}
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
                        {mode.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          lineHeight: 1.6,
                        }}
                      >
                        {mode.description}
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
                background: "linear-gradient(135deg, #007bff, #ffc107)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("hive.cta.title")}
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
              {t("hive.cta.description")}
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handlePlayNow}
              startIcon={<PlayArrow />}
              sx={{
                background: "linear-gradient(135deg, #007bff, #ffc107)",
                borderRadius: "25px",
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "2px",
                boxShadow: "0 12px 40px rgba(0, 123, 255, 0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #ffc107, #007bff)",
                  boxShadow: "0 16px 48px rgba(255, 193, 7, 0.6)",
                  transform: "translateY(-3px) scale(1.05)",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {t("hive.play_now")}
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
            {t("hive.demo.title")}
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
              {t("hive.demo.description")}
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayArrow />}
              sx={{
                background: "linear-gradient(135deg, #007bff, #ffc107)",
                borderRadius: "25px",
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "2px",
                boxShadow: "0 12px 40px rgba(0, 123, 255, 0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #ffc107, #007bff)",
                  boxShadow: "0 16px 48px rgba(255, 193, 7, 0.6)",
                  transform: "translateY(-3px) scale(1.05)",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {t("hive.demo.play")}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default HiveAltenumWarsPage;
