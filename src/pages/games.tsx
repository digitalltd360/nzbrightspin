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
  TextField,
  InputAdornment,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ArrowForward,
  SportsEsports,
  LocalShipping,
  Support,
  ShoppingCart,
  Favorite,
  Share,
  Search,
} from "@mui/icons-material";
import Link from "next/link";

const GamesPage = () => {
  useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = ["All", "PS5", "PS4", "Classic"];

  const games = [
    {
      id: 1,
      title: "Spider-Man 2",
      description:
        "Experience the next chapter in the Spider-Man saga with enhanced web-slinging and combat.",
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=600&fit=crop",
      category: "PS5",
      rating: 4.9,
      price: "299 AED",
      originalPrice: "349 AED",
      tags: ["Action", "Adventure", "Superhero"],
      href: "/games/spider-man-2",
      isNew: true,
      isOnSale: true,
    },
    {
      id: 2,
      title: "God of War Ragnarök",
      description:
        "Join Kratos and Atreus on their journey through the Nine Realms in this epic adventure.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=600&fit=crop",
      category: "PS5",
      rating: 4.8,
      price: "249 AED",
      originalPrice: "299 AED",
      tags: ["Action", "Adventure", "Mythology"],
      href: "/games/god-of-war-ragnarok",
      isOnSale: true,
    },
    {
      id: 3,
      title: "The Last of Us Part I",
      description:
        "Experience the emotional journey of Joel and Ellie in this remastered masterpiece.",
      image:
        "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=600&fit=crop",
      category: "PS5",
      rating: 4.7,
      price: "199 AED",
      tags: ["Action", "Adventure", "Survival"],
      href: "/games/last-of-us-part-1",
      isNew: true,
    },
    {
      id: 4,
      title: "Horizon Forbidden West",
      description:
        "Explore a beautiful post-apocalyptic world as Aloy in this stunning open-world adventure.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
      category: "PS5",
      rating: 4.6,
      price: "179 AED",
      tags: ["Action", "RPG", "Open World"],
      href: "/games/horizon-forbidden-west",
    },
    {
      id: 5,
      title: "Ghost of Tsushima",
      description:
        "Become a legendary samurai in this beautiful open-world adventure set in feudal Japan.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      category: "PS4",
      rating: 4.8,
      price: "159 AED",
      tags: ["Action", "Adventure", "Samurai"],
      href: "/games/ghost-of-tsushima",
    },
    {
      id: 6,
      title: "Uncharted 4: A Thief's End",
      description:
        "Join Nathan Drake on his final adventure in this thrilling action-adventure game.",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=600&fit=crop",
      category: "PS4",
      rating: 4.7,
      price: "139 AED",
      tags: ["Action", "Adventure", "Treasure"],
      href: "/games/uncharted-4",
    },
    {
      id: 7,
      title: "Bloodborne",
      description:
        "Face your fears in this challenging action RPG set in a gothic horror world.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
      category: "PS4",
      rating: 4.9,
      price: "119 AED",
      tags: ["Action", "RPG", "Horror"],
      href: "/games/bloodborne",
    },
    {
      id: 8,
      title: "Shadow of the Colossus",
      description:
        "Experience this timeless classic remastered for modern consoles.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      category: "Classic",
      rating: 4.8,
      price: "99 AED",
      tags: ["Adventure", "Puzzle", "Classic"],
      href: "/games/shadow-of-the-colossus",
    },
  ];

  const filteredGames = games.filter((game) => {
    const matchesFilter =
      activeFilter === "All" || game.category === activeFilter;
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

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
                PlayStation Games Collection
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
                Discover our extensive collection of authentic PlayStation games
                for PS5, PS4, and classic consoles. From the latest blockbusters
                to timeless classics, we have the perfect game for every gamer
                in the UAE.
              </Typography>
            </Box>

            {/* Search and Filter Bar */}
            <Box sx={{ maxWidth: "800px", mx: "auto", mb: 6 }}>
              <TextField
                fullWidth
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    color: "#ffffff",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ffffff",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                }}
              />
            </Box>

            {/* Filter Buttons */}
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              flexWrap="wrap"
              sx={{ gap: 2 }}
            >
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "contained" : "outlined"}
                  onClick={() => setActiveFilter(filter)}
                  sx={{
                    borderRadius: "25px",
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                    textTransform: "none",
                    ...(activeFilter === filter
                      ? {
                          background: "#ffffff",
                          color: "#003791",
                          "&:hover": {
                            background: "rgba(255, 255, 255, 0.9)",
                          },
                        }
                      : {
                          borderColor: "rgba(255, 255, 255, 0.3)",
                          color: "rgba(255, 255, 255, 0.8)",
                          "&:hover": {
                            borderColor: "#ffffff",
                            color: "#ffffff",
                          },
                        }),
                  }}
                >
                  {filter}
                </Button>
              ))}
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Games Grid */}
      <Box sx={{ py: 8, background: "#000000" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {filteredGames.map((game, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={game.id}>
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
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "all 0.3s ease",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0, 55, 145, 0.3)",
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
                              background: "#ff6b35",
                              color: "#ffffff",
                              fontWeight: 700,
                            }}
                          />
                        )}
                        {game.isOnSale && (
                          <Chip
                            label="SALE"
                            size="small"
                            sx={{
                              background: "#00d4aa",
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
                    <CardContent
                      sx={{
                        p: 3,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ color: "#ffffff", mb: 1 }}
                      >
                        {game.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          mb: 2,
                          flexGrow: 1,
                        }}
                      >
                        {game.description}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Rating
                          value={game.rating}
                          precision={0.1}
                          readOnly
                          size="small"
                          sx={{
                            "& .MuiRating-iconFilled": {
                              color: "#ff6b35",
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
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        {game.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Chip
                            key={tagIndex}
                            label={tag}
                            size="small"
                            sx={{
                              background: "rgba(0, 55, 145, 0.2)",
                              color: "#0070f3",
                              border: "1px solid #0070f3",
                              fontSize: "0.7rem",
                            }}
                          />
                        ))}
                      </Stack>
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
                          sx={{ color: "#00d4aa" }}
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
                            "linear-gradient(135deg, #003791, #0070f3)",
                          borderRadius: "8px",
                          py: 1.5,
                          fontWeight: 700,
                          textTransform: "none",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, #0070f3, #003791)",
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

          {filteredGames.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography
                variant="h5"
                sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 2 }}
              >
                No games found
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "rgba(255, 255, 255, 0.5)" }}
              >
                Try adjusting your search or filter criteria
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* Why Choose Us Section */}
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
                Why Choose Sub Tropic Evening Spin?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "800px",
                  mx: "auto",
                }}
              >
                We are the leading PlayStation game retailer in the UAE,
                offering authentic games, fast delivery, and exceptional
                customer service. Our team of gaming experts is dedicated to
                providing you with the best gaming experience possible.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {[
                {
                  icon: (
                    <SportsEsports sx={{ fontSize: 60, color: "#003791" }} />
                  ),
                  title: "Authentic Games",
                  description:
                    "100% original PlayStation games with official packaging and warranty. No pirated or counterfeit games.",
                },
                {
                  icon: (
                    <LocalShipping sx={{ fontSize: 60, color: "#0070f3" }} />
                  ),
                  title: "Fast Delivery",
                  description:
                    "Same-day delivery in Dubai, next-day delivery across UAE. Free shipping on orders over 200 AED.",
                },
                {
                  icon: <Support sx={{ fontSize: 60, color: "#ff6b35" }} />,
                  title: "Expert Support",
                  description:
                    "24/7 customer support with gaming experts ready to help you choose the perfect games and resolve any issues.",
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
                        background: "#000000",
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
                Can&apos;t Find What You&apos;re Looking For?
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
                Contact our gaming experts for personalized recommendations and
                special orders
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
  );
};

export default GamesPage;
