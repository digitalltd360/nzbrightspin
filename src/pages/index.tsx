"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  Stack,
  Grid,
  Chip,
  CardMedia,
  CardContent,
  Rating,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Star,
  PlayArrow,
  ArrowForward,
  SportsEsports,
  LocalShipping,
  Support,
  TrendingUp,
  ShoppingCart,
  Favorite,
  Share,
  Gamepad,
} from "@mui/icons-material";
import Link from "next/link";

const HomePage = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  // Featured games data
  const featuredGames = [
    {
      id: 1,
      title: "Cosmic Adventure",
      image:
        "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=600&fit=crop",
      price: "89 AED",
      originalPrice: "129 AED",
      rating: 4.9,
      category: "Digital",
      isNew: true,
      isOnSale: true,
    },
    {
      id: 2,
      title: "Neon Warriors",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop",
      price: "79 AED",
      originalPrice: "99 AED",
      rating: 4.8,
      category: "Digital",
      isOnSale: true,
    },
    {
      id: 3,
      title: "Mystic Realms",
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=600&fit=crop",
      price: "69 AED",
      rating: 4.7,
      category: "Digital",
      isNew: true,
    },
    {
      id: 4,
      title: "Cyber Legends",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
      price: "59 AED",
      rating: 4.6,
      category: "Digital",
    },
  ];

  const categories = [
    t("home.categories.all"),
    t("home.categories.modern"),
    t("home.categories.premium"),
    t("home.categories.classic"),
  ];

  const stats = [
    { label: t("home.stats.games"), value: "2000+", icon: <SportsEsports /> },
    { label: t("home.stats.players"), value: "50K+", icon: <Star /> },
    { label: t("home.stats.cities"), value: "6", icon: <LocalShipping /> },
    { label: t("home.stats.experience"), value: "10+", icon: <TrendingUp /> },
  ];

  return (
    <Box sx={{ minHeight: "100vh", background: "#0a0a0a" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 0, 128, 0.08) 0%, transparent 50%)
            `,
            zIndex: 1,
            animation: "backgroundPulse 8s ease-in-out infinite",
            "@keyframes backgroundPulse": {
              "0%, 100%": {
                background: `
                  radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 40% 40%, rgba(255, 0, 128, 0.08) 0%, transparent 50%)
                `,
              },
              "50%": {
                background: `
                  radial-gradient(circle at 80% 20%, rgba(0, 255, 136, 0.2) 0%, transparent 50%),
                  radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.2) 0%, transparent 50%),
                  radial-gradient(circle at 60% 60%, rgba(255, 0, 128, 0.12) 0%, transparent 50%)
                `,
              },
            },
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: `rgba(${
                Math.random() > 0.5 ? "0, 255, 136" : "0, 212, 255"
              }, ${Math.random() * 0.5 + 0.2})`,
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 1,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -100, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Typography
                    variant="h1"
                    fontWeight={900}
                    sx={{
                      fontSize: { xs: "3rem", md: "4.5rem", lg: "5.5rem" },
                      background:
                        "linear-gradient(135deg, #ffffff, #00ff88, #00d4ff, #ff0080)",
                      backgroundSize: "300% 300%",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      mb: 3,
                      lineHeight: 1.1,
                      textShadow: "0 0 40px rgba(0, 255, 136, 0.5)",
                      animation: "gradientShift 4s ease-in-out infinite",
                      "@keyframes gradientShift": {
                        "0%, 100%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                      },
                    }}
                  >
                    {t("home.title")}
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "rgba(255, 255, 255, 0.95)",
                      mb: 4,
                      fontWeight: 600,
                      textShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
                    }}
                  >
                    {t("home.subtitle")}
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(255, 255, 255, 0.85)",
                      mb: 6,
                      lineHeight: 1.6,
                      fontSize: "1.2rem",
                    }}
                  >
                    {t("home.description")}
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{ flexWrap: "wrap", gap: 2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        component={Link}
                        href="/games"
                        endIcon={<ArrowForward />}
                        sx={{
                          background:
                            "linear-gradient(135deg, #00ff88, #00d4ff)",
                          color: "#0a0a0a",
                          borderRadius: "16px",
                          px: 5,
                          py: 2.5,
                          fontWeight: 700,
                          textTransform: "none",
                          fontSize: "1.2rem",
                          boxShadow: "0 8px 32px rgba(0, 255, 136, 0.3)",
                          position: "relative",
                          overflow: "hidden",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #00d4ff, #00ff88)",
                            boxShadow: "0 16px 64px rgba(0, 255, 136, 0.5)",
                          },
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: "-100%",
                            width: "100%",
                            height: "100%",
                            background:
                              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                            transition: "left 0.5s",
                          },
                          "&:hover::before": {
                            left: "100%",
                          },
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {t("home.cta.start")}
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outlined"
                        size="large"
                        component={Link}
                        href="/games"
                        startIcon={<PlayArrow />}
                        sx={{
                          borderColor: "#00ff88",
                          color: "#00ff88",
                          borderRadius: "16px",
                          px: 5,
                          py: 2.5,
                          fontWeight: 700,
                          textTransform: "none",
                          fontSize: "1.2rem",
                          borderWidth: "2px",
                          position: "relative",
                          overflow: "hidden",
                          "&:hover": {
                            borderColor: "#00d4ff",
                            background: "rgba(0, 255, 136, 0.1)",
                            color: "#00d4ff",
                            boxShadow: "0 8px 32px rgba(0, 212, 255, 0.3)",
                          },
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: "-100%",
                            width: "100%",
                            height: "100%",
                            background:
                              "linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.1), transparent)",
                            transition: "left 0.5s",
                          },
                          "&:hover::before": {
                            left: "100%",
                          },
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {t("home.cta.explore")}
                      </Button>
                    </motion.div>
                  </Stack>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 100, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 400,
                  }}
                >
                  {/* Main Game Controller */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Box
                      sx={{
                        width: 320,
                        height: 320,
                        background: "rgba(0, 255, 136, 0.1)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backdropFilter: "blur(20px)",
                        border: "3px solid rgba(0, 255, 136, 0.4)",
                        boxShadow: "0 0 80px rgba(0, 255, 136, 0.3)",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: -10,
                          left: -10,
                          right: -10,
                          bottom: -10,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(45deg, #00ff88, #00d4ff, #ff0080, #00ff88)",
                          backgroundSize: "400% 400%",
                          animation: "gradientRotate 4s linear infinite",
                          zIndex: -1,
                          "@keyframes gradientRotate": {
                            "0%": { backgroundPosition: "0% 50%" },
                            "100%": { backgroundPosition: "400% 50%" },
                          },
                        },
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Gamepad sx={{ fontSize: 140, color: "#00ff88" }} />
                      </motion.div>
                    </Box>
                  </motion.div>

                  {/* Floating Elements */}
                  {[
                    {
                      icon: <SportsEsports />,
                      position: { top: "5%", right: "5%" },
                      color: "#00ff88",
                      delay: 1.2,
                    },
                    {
                      icon: <LocalShipping />,
                      position: { bottom: "15%", left: "0%" },
                      color: "#00d4ff",
                      delay: 1.4,
                    },
                    {
                      icon: <Support />,
                      position: { top: "55%", right: "0%" },
                      color: "#ff0080",
                      delay: 1.6,
                    },
                    {
                      icon: <TrendingUp />,
                      position: { bottom: "5%", right: "15%" },
                      color: "#ffaa00",
                      delay: 1.8,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: item.delay }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      style={{
                        position: "absolute",
                        ...item.position,
                      }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 3 + index * 0.5,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 70,
                            height: 70,
                            background: `rgba(${
                              item.color === "#00ff88"
                                ? "0, 255, 136"
                                : item.color === "#00d4ff"
                                ? "0, 212, 255"
                                : item.color === "#ff0080"
                                ? "255, 0, 128"
                                : "255, 170, 0"
                            }, 0.15)`,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backdropFilter: "blur(15px)",
                            border: `2px solid ${item.color}`,
                            color: item.color,
                            boxShadow: `0 8px 32px ${item.color}40`,
                          }}
                        >
                          {item.icon}
                        </Box>
                      </motion.div>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, background: "#0a0a0a" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: "linear-gradient(135deg, #00ff88, #00d4ff)",
                      borderRadius: "16px",
                      p: 3,
                      textAlign: "center",
                      border: "1px solid rgba(0, 255, 136, 0.3)",
                      boxShadow: "0 8px 32px rgba(0, 255, 136, 0.2)",
                    }}
                  >
                    <Box sx={{ color: "#0a0a0a", mb: 2 }}>{stat.icon}</Box>
                    <Typography
                      variant="h3"
                      fontWeight={900}
                      sx={{ color: "#0a0a0a", mb: 1 }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "rgba(10, 10, 10, 0.8)" }}
                    >
                      {stat.label}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Games Section */}
      <Box sx={{ py: 12, background: "#0a0a0a" }}>
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
                {t("home.featured.title")}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                {t("home.featured.subtitle")}
              </Typography>
            </Box>

            {/* Filter Buttons */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mb: 6 }}
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "contained" : "outlined"}
                  onClick={() => setActiveFilter(category)}
                  sx={{
                    borderRadius: "25px",
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    textTransform: "none",
                    ...(activeFilter === category
                      ? {
                          background:
                            "linear-gradient(135deg, #00ff88, #00d4ff)",
                          color: "#0a0a0a",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #00d4ff, #00ff88)",
                          },
                        }
                      : {
                          borderColor: "rgba(0, 255, 136, 0.3)",
                          color: "rgba(0, 255, 136, 0.8)",
                          "&:hover": {
                            borderColor: "#00ff88",
                            color: "#00ff88",
                          },
                        }),
                  }}
                >
                  {category}
                </Button>
              ))}
            </Stack>

            {/* Games Grid */}
            <Grid container spacing={4}>
              {featuredGames
                .filter(
                  (game) =>
                    activeFilter === "All" || game.category === activeFilter
                )
                .map((game, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={game.id}>
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
                          overflow: "hidden",
                          border: "1px solid rgba(0, 255, 136, 0.2)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 20px 40px rgba(0, 255, 136, 0.3)",
                            border: "1px solid rgba(0, 255, 136, 0.5)",
                          },
                        }}
                      >
                        <Box sx={{ position: "relative" }}>
                          <CardMedia
                            component="img"
                            height="300"
                            image={game.image}
                            alt={game.title}
                            sx={{ objectFit: "cover" }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              top: 12,
                              left: 12,
                              display: "flex",
                              gap: 1,
                            }}
                          >
                            {game.isNew && (
                              <Chip
                                label="NEW"
                                size="small"
                                sx={{
                                  background: "#00ff88",
                                  color: "#0a0a0a",
                                  fontWeight: 700,
                                }}
                              />
                            )}
                            {game.isOnSale && (
                              <Chip
                                label="SALE"
                                size="small"
                                sx={{
                                  background: "#ff0080",
                                  color: "#ffffff",
                                  fontWeight: 700,
                                }}
                              />
                            )}
                          </Box>
                          <Box
                            sx={{
                              position: "absolute",
                              top: 12,
                              right: 12,
                              display: "flex",
                              gap: 1,
                            }}
                          >
                            <IconButton
                              size="small"
                              sx={{
                                background: "rgba(0, 0, 0, 0.5)",
                                color: "#ffffff",
                                "&:hover": {
                                  background: "rgba(0, 0, 0, 0.7)",
                                },
                              }}
                            >
                              <Favorite />
                            </IconButton>
                            <IconButton
                              size="small"
                              sx={{
                                background: "rgba(0, 0, 0, 0.5)",
                                color: "#ffffff",
                                "&:hover": {
                                  background: "rgba(0, 0, 0, 0.7)",
                                },
                              }}
                            >
                              <Share />
                            </IconButton>
                          </Box>
                        </Box>
                        <CardContent sx={{ p: 3 }}>
                          <Typography
                            variant="h6"
                            fontWeight={700}
                            sx={{ color: "#ffffff", mb: 1 }}
                          >
                            {game.title}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 2,
                            }}
                          >
                            <Rating
                              value={game.rating}
                              precision={0.1}
                              readOnly
                              size="small"
                              sx={{
                                "& .MuiRating-iconFilled": {
                                  color: "#00ff88",
                                },
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ color: "rgba(255, 255, 255, 0.6)", ml: 1 }}
                            >
                              {game.rating}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              mb: 3,
                            }}
                          >
                            <Typography
                              variant="h6"
                              fontWeight={700}
                              sx={{ color: "#00ff88" }}
                            >
                              {game.price}
                            </Typography>
                            {game.originalPrice && (
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "rgba(255, 255, 255, 0.5)",
                                  textDecoration: "line-through",
                                }}
                              >
                                {game.originalPrice}
                              </Typography>
                            )}
                          </Box>
                          <Button
                            variant="contained"
                            fullWidth
                            startIcon={<ShoppingCart />}
                            sx={{
                              background:
                                "linear-gradient(135deg, #00ff88, #00d4ff)",
                              borderRadius: "8px",
                              py: 1.5,
                              fontWeight: 700,
                              textTransform: "none",
                              color: "#0a0a0a",
                              "&:hover": {
                                background:
                                  "linear-gradient(135deg, #00d4ff, #00ff88)",
                              },
                            }}
                          >
                            Add to Cart
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 12, background: "#0a0a0a" }}>
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
                {t("home.why.title")}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                {t("home.why.subtitle")}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {[
                {
                  icon: (
                    <SportsEsports sx={{ fontSize: 60, color: "#00ff88" }} />
                  ),
                  title: t("home.why.tech.title"),
                  description: t("home.why.tech.desc"),
                },
                {
                  icon: (
                    <LocalShipping sx={{ fontSize: 60, color: "#00d4ff" }} />
                  ),
                  title: t("home.why.support.title"),
                  description: t("home.why.support.desc"),
                },
                {
                  icon: <Support sx={{ fontSize: 60, color: "#ff0080" }} />,
                  title: t("home.why.security.title"),
                  description: t("home.why.security.desc"),
                },
              ].map((feature, index) => (
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
                        border: "1px solid rgba(0, 255, 136, 0.2)",
                        height: "100%",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 40px rgba(0, 255, 136, 0.2)",
                          border: "1px solid rgba(0, 255, 136, 0.4)",
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
          background: "linear-gradient(135deg, #00ff88, #00d4ff, #ff0080)",
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
                {t("home.cta.final.title")}
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
                {t("home.cta.final.subtitle")}
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={Link}
                href="/games"
                endIcon={<ArrowForward />}
                sx={{
                  background: "#0a0a0a",
                  color: "#00ff88",
                  borderRadius: "12px",
                  px: 6,
                  py: 2,
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "1.2rem",
                  "&:hover": {
                    background: "#1a1a1a",
                    color: "#00d4ff",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 48px rgba(0, 255, 136, 0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {t("home.cta.final.button")}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
