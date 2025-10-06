"use client";

import React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  Chip,
  Avatar,
  Rating,
  Container,
  IconButton,
  LinearProgress,
  Badge,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import {
  SportsEsports,
  PlayArrow,
  Star,
  EmojiEvents,
  TrendingUp,
  Speed,
  Security,
  Group,
  Timeline,
  LocationOn,
  Email,
  Phone,
  Casino,
  Visibility,
  VideogameAsset,
  Code,
  PhoneAndroid,
  Publish,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Support,
  Group as GroupIcon,
  Timeline as TimelineIcon,
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Casino as CasinoIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PlayNowPage() {
  const {} = useLanguage();
  // const [fadeIn, setFadeIn] = useState(false);
  // const [activeUsers, setActiveUsers] = useState(1247);

  // useEffect(() => {
  //   setFadeIn(true);
  //   const interval = setInterval(() => {
  //     setActiveUsers((prev) => prev + Math.floor(Math.random() * 3) - 1);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  const handleQuickPlay = () => {
    window.location.href = "/games";
  };

  return (
    <>
      <NextSeo
        title="Play Now – Real Gaming Deals"
        description="Experience the ultimate gaming experience! High-speed action, epic wins, and non-stop excitement!"
      />
      <Box
        sx={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)
          `,
          minHeight: "100vh",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" sx={{ py: 8 }}>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h1"
                fontWeight={900}
                sx={{
                  fontSize: { xs: "3rem", md: "4.5rem", lg: "5.5rem" },
                  background:
                    "linear-gradient(135deg, #007bff, #ffc107, #dc3545)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 30px rgba(0, 123, 255, 0.5)",
                  mb: 3,
                  animation: "gradientShift 3s ease-in-out infinite",
                  lineHeight: 1.1,
                }}
              >
                🎮 PLAY NOW 🎮
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#ffc107",
                  mb: 4,
                  textShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
                  fontWeight: 600,
                }}
              >
                Experience the Ultimate Gaming Experience! 🚀
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  mb: 6,
                  maxWidth: "800px",
                  mx: "auto",
                }}
              >
                High-speed action, epic wins, and non-stop excitement! ⚡
              </Typography>
            </Box>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{
                  color: "#007bff",
                  mb: 4,
                  textShadow: "0 0 20px rgba(0, 123, 255, 0.8)",
                }}
              >
                🏆 GAMING CHAMPIONS 🏆
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                {[
                  {
                    number: "2.5M+",
                    label: "CHAMPIONS",
                    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
                    color: "#ffc107",
                  },
                  {
                    number: "50M+",
                    label: "GAMES WON",
                    icon: <TrendingUp sx={{ fontSize: 40 }} />,
                    color: "#28a745",
                  },
                  {
                    number: "5.0 / 5",
                    label: "LEGENDARY RATING",
                    icon: <Star sx={{ fontSize: 40 }} />,
                    color: "#dc3545",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  >
                    <Card
                      sx={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                        border: `2px solid ${stat.color}`,
                        borderRadius: 3,
                        p: 3,
                        minWidth: 200,
                        textAlign: "center",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: `0 20px 40px ${stat.color}40`,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Box sx={{ color: stat.color, mb: 2 }}>{stat.icon}</Box>
                      <Typography
                        variant="h4"
                        fontWeight={900}
                        sx={{ color: stat.color, mb: 1 }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "rgba(255,255,255,0.8)" }}
                      >
                        {stat.label}
                      </Typography>
                    </Card>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{
                  color: "#ffc107",
                  mb: 4,
                  textShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
                }}
              >
                🚀 WHY CHOOSE Real Gaming Deals? 🚀
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  mb: 6,
                  maxWidth: "800px",
                  mx: "auto",
                }}
              >
                The ultimate gaming destination for thrill-seekers! ⚡
              </Typography>
            </Box>
          </motion.div>

          <Stack spacing={4} sx={{ maxWidth: "1000px", mx: "auto" }}>
            {[
              {
                icon: <SpeedIcon sx={{ fontSize: 40 }} />,
                title: "LIGHTNING SPEED",
                description:
                  "Ultra-fast gameplay with instant responses and zero lag!",
                color: "#007bff",
              },
              {
                icon: <EmojiEvents sx={{ fontSize: 40 }} />,
                title: "EPIC REWARDS",
                description:
                  "Massive jackpots and incredible prizes await the brave!",
                color: "#ffc107",
              },
              {
                icon: <VideogameAsset sx={{ fontSize: 40 }} />,
                title: "NEXT-GEN GAMES",
                description: "Cutting-edge games with stunning graphics!",
                color: "#28a745",
              },
              {
                icon: <PhoneAndroid sx={{ fontSize: 40 }} />,
                title: "CROSS-PLATFORM",
                description: "Play anywhere, anytime on any device!",
                color: "#6f42c1",
              },
              {
                icon: <SecurityIcon sx={{ fontSize: 40 }} />,
                title: "SECURE GAMING",
                description: "Bank-level security with fair play guaranteed!",
                color: "#dc3545",
              },
              {
                icon: <GroupIcon sx={{ fontSize: 40 }} />,
                title: "GLOBAL COMMUNITY",
                description: "Join millions of players worldwide!",
                color: "#20c997",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <Card
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    border: `2px solid ${feature.color}`,
                    borderRadius: 3,
                    p: 4,
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: `0 20px 40px ${feature.color}40`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Box sx={{ color: feature.color }}>{feature.icon}</Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        sx={{ color: feature.color, mb: 1 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "rgba(255,255,255,0.8)" }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </motion.div>
            ))}
          </Stack>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Box sx={{ textAlign: "center", mt: 8 }}>
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{
                  color: "#007bff",
                  mb: 4,
                  textShadow: "0 0 20px rgba(0, 123, 255, 0.8)",
                }}
              >
                🎮 READY TO PLAY? 🎮
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
                  onClick={handleQuickPlay}
                  sx={{
                    background: "linear-gradient(135deg, #007bff, #ffc107)",
                    borderRadius: "12px",
                    py: 2,
                    px: 4,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontSize: "1.1rem",
                    "&:hover": {
                      background: "linear-gradient(135deg, #ffc107, #007bff)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Start Playing Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<VideogameAsset />}
                  href="/games"
                  sx={{
                    borderColor: "#007bff",
                    color: "#007bff",
                    borderRadius: "12px",
                    py: 2,
                    px: 4,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontSize: "1.1rem",
                    "&:hover": {
                      borderColor: "#ffc107",
                      color: "#ffc107",
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
    </>
  );
}
