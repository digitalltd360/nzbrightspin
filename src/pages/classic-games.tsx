"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  Chip,
} from "@mui/material";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import {
  Speed,
  PlayArrow,
  FlashOn,
  Diamond,
  Flag,
  TrendingUp,
  EmojiEvents,
  TrackChanges,
} from "@mui/icons-material";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ClassicGamesPage() {
  const {} = useLanguage();

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2d2d2d 50%, #ff0000 75%, #cc0000 100%)",
        color: "#fff",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 100, 100, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
          `,
          zIndex: 0,
        },
      }}
    >
      <NextSeo
        title="Classic Games – Real Gaming Deals"
        description="Experience the best classic games with Real Gaming Deals. Play timeless favorites and enjoy nostalgic gaming."
      />

      <Box sx={{ position: "relative", zIndex: 1, p: 4 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            fontWeight={900}
            sx={{
              fontSize: { xs: "3rem", md: "4.5rem", lg: "5.5rem" },
              background: "linear-gradient(135deg, #ff0000, #ffff00, #00ff00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              mb: 3,
              textShadow: "0 0 30px rgba(255, 0, 0, 0.5)",
            }}
          >
            🎮 CLASSIC GAMES 🎮
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "#ffff00",
              textAlign: "center",
              mb: 4,
              textShadow: "0 0 20px rgba(255, 255, 0, 0.8)",
              fontWeight: 600,
            }}
          >
            Timeless Gaming Experience! ⚡
          </Typography>
        </motion.div>

        {/* Games Grid */}
        <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: "#00ff00",
                textAlign: "center",
                mb: 4,
                textShadow: "0 0 20px rgba(0, 255, 0, 0.8)",
              }}
            >
              🏆 LEGENDARY GAMES 🏆
            </Typography>
          </motion.div>

          <Stack spacing={4}>
            {/* Pac-Man */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 255, 0, 0.1))",
                  border: "2px solid #ff0000",
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(255, 0, 0, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        background: "linear-gradient(135deg, #ff0000, #ffff00)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                      }}
                    >
                      👻
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h4"
                        fontWeight={700}
                        color="#ff0000"
                        mb={1}
                      >
                        PAC-MAN
                      </Typography>
                      <Typography
                        variant="body1"
                        color="rgba(255,255,255,0.8)"
                        mb={2}
                      >
                        The legendary maze game that started it all! Guide
                        Pac-Man through the maze, collect dots, and avoid the
                        ghosts in this timeless classic.
                      </Typography>
                      <Stack direction="row" spacing={1} mb={2}>
                        <Chip
                          label="Maze"
                          size="small"
                          sx={{ bgcolor: "#ff0000", color: "white" }}
                        />
                        <Chip
                          label="Arcade"
                          size="small"
                          sx={{ bgcolor: "#ffff00", color: "black" }}
                        />
                        <Chip
                          label="Classic"
                          size="small"
                          sx={{ bgcolor: "#00ff00", color: "black" }}
                        />
                      </Stack>
                      <Button
                        variant="contained"
                        startIcon={<PlayArrow />}
                        href="/play-now"
                        sx={{
                          background:
                            "linear-gradient(135deg, #ff0000, #ffff00)",
                          color: "black",
                          fontWeight: 700,
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #ffff00, #ff0000)",
                          },
                        }}
                      >
                        Play Now
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>

            {/* Space Invaders */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(0, 0, 255, 0.1), rgba(255, 0, 255, 0.1))",
                  border: "2px solid #0000ff",
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 255, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        background: "linear-gradient(135deg, #0000ff, #ff00ff)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                      }}
                    >
                      🛸
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h4"
                        fontWeight={700}
                        color="#0000ff"
                        mb={1}
                      >
                        SPACE INVADERS
                      </Typography>
                      <Typography
                        variant="body1"
                        color="rgba(255,255,255,0.8)"
                        mb={2}
                      >
                        Defend Earth from alien invasion! Shoot down the
                        descending aliens before they reach the bottom in this
                        iconic arcade shooter.
                      </Typography>
                      <Stack direction="row" spacing={1} mb={2}>
                        <Chip
                          label="Shooter"
                          size="small"
                          sx={{ bgcolor: "#0000ff", color: "white" }}
                        />
                        <Chip
                          label="Arcade"
                          size="small"
                          sx={{ bgcolor: "#ff00ff", color: "white" }}
                        />
                        <Chip
                          label="Classic"
                          size="small"
                          sx={{ bgcolor: "#00ff00", color: "black" }}
                        />
                      </Stack>
                      <Button
                        variant="contained"
                        startIcon={<PlayArrow />}
                        href="/play-now"
                        sx={{
                          background:
                            "linear-gradient(135deg, #0000ff, #ff00ff)",
                          color: "white",
                          fontWeight: 700,
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #ff00ff, #0000ff)",
                          },
                        }}
                      >
                        Play Now
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tetris */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 255, 0.1))",
                  border: "2px solid #00ff00",
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0, 255, 0, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        background: "linear-gradient(135deg, #00ff00, #00ffff)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                      }}
                    >
                      🧩
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h4"
                        fontWeight={700}
                        color="#00ff00"
                        mb={1}
                      >
                        TETRIS
                      </Typography>
                      <Typography
                        variant="body1"
                        color="rgba(255,255,255,0.8)"
                        mb={2}
                      >
                        The ultimate puzzle game! Arrange falling blocks to
                        create complete lines and clear them in this addictive
                        and timeless classic.
                      </Typography>
                      <Stack direction="row" spacing={1} mb={2}>
                        <Chip
                          label="Puzzle"
                          size="small"
                          sx={{ bgcolor: "#00ff00", color: "black" }}
                        />
                        <Chip
                          label="Arcade"
                          size="small"
                          sx={{ bgcolor: "#00ffff", color: "black" }}
                        />
                        <Chip
                          label="Classic"
                          size="small"
                          sx={{ bgcolor: "#ff0000", color: "white" }}
                        />
                      </Stack>
                      <Button
                        variant="contained"
                        startIcon={<PlayArrow />}
                        href="/play-now"
                        sx={{
                          background:
                            "linear-gradient(135deg, #00ff00, #00ffff)",
                          color: "black",
                          fontWeight: 700,
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #00ffff, #00ff00)",
                          },
                        }}
                      >
                        Play Now
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Stack>
        </Box>

        {/* Features Section */}
        <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: "#ffff00",
                textAlign: "center",
                mb: 4,
                textShadow: "0 0 20px rgba(255, 255, 0, 0.8)",
              }}
            >
              ⚡ WHY CLASSIC GAMES? ⚡
            </Typography>
          </motion.div>

          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            {[
              {
                icon: <Speed sx={{ fontSize: 40 }} />,
                title: "Lightning Fast",
                description: "Instant loading and smooth gameplay",
                color: "#ff0000",
              },
              {
                icon: <FlashOn sx={{ fontSize: 40 }} />,
                title: "Pure Fun",
                description: "Simple yet addictive gameplay mechanics",
                color: "#ffff00",
              },
              {
                icon: <Diamond sx={{ fontSize: 40 }} />,
                title: "Timeless",
                description: "Games that never get old",
                color: "#00ff00",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              >
                <Card
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    border: `2px solid ${feature.color}`,
                    borderRadius: 3,
                    p: 3,
                    textAlign: "center",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: `0 20px 40px ${feature.color}40`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box sx={{ color: feature.color, mb: 2 }}>{feature.icon}</Box>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color={feature.color}
                    mb={1}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.8)">
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
