"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";
import {
  History,
  Timeline as TimelineIcon,
  ExpandMore,
  VideogameAsset,
  Star,
  Code,
  Gamepad,
  SportsEsports,
  HistoryEdu,
  PlayArrow,
} from "@mui/icons-material";
import { NextSeo } from "next-seo";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GameHistoryPage() {
  const {} = useLanguage();
  // const [expanded, setExpanded] = useState<string | false>(false);

  // const handleChange =
  //   (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
  //     setExpanded(isExpanded ? panel : false);
  //   };

  const historyEvents = [
    {
      year: "1970s",
      title: "The Birth of Gaming",
      description:
        "The first commercial video games, like Pong, appeared and started the golden age of gaming.",
      icon: <HistoryEdu />,
      color: "#007bff",
      tags: ["Pong", "Golden Age", "Origin"],
    },
    {
      year: "1980s",
      title: "Arcade Revolution",
      description:
        "Pac-Man, Space Invaders, and Donkey Kong dominated arcades worldwide, creating a cultural phenomenon.",
      icon: <VideogameAsset />,
      color: "#ffc107",
      tags: ["Pac-Man", "Space Invaders", "Donkey Kong"],
    },
    {
      year: "1990s",
      title: "Console Wars",
      description:
        "Nintendo, Sega, and Sony battled for dominance, bringing gaming into every home.",
      icon: <Gamepad />,
      color: "#28a745",
      tags: ["Nintendo", "Sega", "PlayStation"],
    },
    {
      year: "2000s",
      title: "Online Gaming",
      description:
        "The internet revolutionized gaming with multiplayer experiences and digital distribution.",
      icon: <SportsEsports />,
      color: "#dc3545",
      tags: ["Online", "Multiplayer", "Digital"],
    },
    {
      year: "2010s",
      title: "Mobile Gaming",
      description:
        "Smartphones brought gaming to billions, with casual and hardcore games alike.",
      icon: <Code />,
      color: "#6f42c1",
      tags: ["Mobile", "Smartphones", "Casual"],
    },
    {
      year: "2020s",
      title: "Modern Era",
      description:
        "VR, cloud gaming, and AI are shaping the future of interactive entertainment.",
      icon: <Star />,
      color: "#20c997",
      tags: ["VR", "Cloud", "AI"],
    },
  ];

  const gameGenres = [
    {
      name: "Action",
      description:
        "Fast-paced games requiring quick reflexes and hand-eye coordination.",
      examples: ["Pac-Man", "Space Invaders", "Street Fighter"],
      color: "#dc3545",
    },
    {
      name: "Puzzle",
      description:
        "Games that challenge your problem-solving skills and logical thinking.",
      examples: ["Tetris", "Puzzle Bobble", "Bejeweled"],
      color: "#007bff",
    },
    {
      name: "Adventure",
      description:
        "Story-driven games that take you on epic journeys and quests.",
      examples: ["Zelda", "Mario", "Sonic"],
      color: "#28a745",
    },
    {
      name: "Racing",
      description:
        "High-speed games that test your driving skills and reflexes.",
      examples: ["Mario Kart", "Need for Speed", "Gran Turismo"],
      color: "#ffc107",
    },
  ];

  return (
    <>
      <NextSeo
        title="Game History – Real Gaming Deals"
        description="Explore the fascinating history of gaming from the 1970s to today. Learn about the evolution of games and their impact on culture."
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
              <Typography
                variant="h1"
                fontWeight={900}
                sx={{
                  fontSize: { xs: "3rem", md: "4.5rem", lg: "5.5rem" },
                  background: "linear-gradient(135deg, #007bff, #ffc107)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 4,
                  textShadow: "0 0 30px rgba(0, 123, 255, 0.5)",
                }}
              >
                🎮 GAME HISTORY 🎮
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#ffc107",
                  mb: 4,
                  textShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
                  fontWeight: 600,
                }}
              >
                The Evolution of Gaming Through the Decades! ⚡
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: "800px",
                  mx: "auto",
                }}
              >
                From simple pixels to virtual reality - discover how games have
                shaped our world!
              </Typography>
            </Box>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{
                  color: "#007bff",
                  textAlign: "center",
                  mb: 6,
                  textShadow: "0 0 20px rgba(0, 123, 255, 0.8)",
                }}
              >
                📅 TIMELINE OF GAMING 📅
              </Typography>

              <Timeline position="alternate">
                {historyEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  >
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot
                          sx={{
                            bgcolor: event.color,
                            width: 60,
                            height: 60,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {event.icon}
                        </TimelineDot>
                        {index < historyEvents.length - 1 && (
                          <TimelineConnector sx={{ bgcolor: event.color }} />
                        )}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Card
                          sx={{
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                            border: `2px solid ${event.color}`,
                            borderRadius: 3,
                            p: 3,
                            "&:hover": {
                              transform: "translateY(-5px)",
                              boxShadow: `0 20px 40px ${event.color}40`,
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Typography
                            variant="h4"
                            fontWeight={700}
                            sx={{ color: event.color, mb: 2 }}
                          >
                            {event.year} - {event.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: "rgba(255,255,255,0.8)", mb: 2 }}
                          >
                            {event.description}
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap">
                            {event.tags.map((tag, tagIndex) => (
                              <Chip
                                key={tagIndex}
                                label={tag}
                                size="small"
                                sx={{
                                  bgcolor: event.color,
                                  color: "white",
                                  fontWeight: 600,
                                }}
                              />
                            ))}
                          </Stack>
                        </Card>
                      </TimelineContent>
                    </TimelineItem>
                  </motion.div>
                ))}
              </Timeline>
            </Box>
          </motion.div>

          {/* Game Genres Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{
                  color: "#ffc107",
                  textAlign: "center",
                  mb: 6,
                  textShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
                }}
              >
                🎯 GAME GENRES 🎯
              </Typography>

              <Grid container spacing={4}>
                {gameGenres.map((genre, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    >
                      <Card
                        sx={{
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                          border: `2px solid ${genre.color}`,
                          borderRadius: 3,
                          p: 3,
                          height: "100%",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: `0 20px 40px ${genre.color}40`,
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          sx={{ color: genre.color, mb: 2 }}
                        >
                          {genre.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "rgba(255,255,255,0.8)", mb: 3 }}
                        >
                          {genre.description}
                        </Typography>
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          sx={{ color: genre.color, mb: 2 }}
                        >
                          Popular Examples:
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                          {genre.examples.map((example, exampleIndex) => (
                            <Chip
                              key={exampleIndex}
                              label={example}
                              size="small"
                              sx={{
                                bgcolor: `${genre.color}20`,
                                color: genre.color,
                                border: `1px solid ${genre.color}`,
                                fontWeight: 600,
                              }}
                            />
                          ))}
                        </Stack>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{
                  color: "#28a745",
                  mb: 4,
                  textShadow: "0 0 20px rgba(40, 167, 69, 0.8)",
                }}
              >
                🌟 GAMING&apos;S IMPACT 🌟
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
                Games have transformed entertainment, education, and even how we
                connect with others!
              </Typography>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<VideogameAsset />}
                  href="/games"
                  sx={{
                    background: "linear-gradient(135deg, #007bff, #ffc107)",
                    borderRadius: "12px",
                    py: 2,
                    px: 4,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    "&:hover": {
                      background: "linear-gradient(135deg, #ffc107, #007bff)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Explore Games
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrow />}
                  href="/play-now"
                  sx={{
                    borderColor: "#28a745",
                    color: "#28a745",
                    borderRadius: "12px",
                    py: 2,
                    px: 4,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    "&:hover": {
                      borderColor: "#ffc107",
                      color: "#ffc107",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Play Now
                </Button>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
