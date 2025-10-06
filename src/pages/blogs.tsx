"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  Grid,
  IconButton,
  Stack,
  CardContent,
  Chip,
} from "@mui/material";
import { motion, useScroll } from "framer-motion";
import {
  Share,
  Bookmark,
  BookmarkBorder,
  ThumbUp,
  ThumbUpOutlined,
  Comment,
  Visibility,
  Schedule,
  Person,
  NewReleases,
  Analytics,
} from "@mui/icons-material";
// import Link from "next/link";

const Blogs = () => {
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const [liked, setLiked] = useState<number[]>([]);
  // const { scrollY } = useScroll();
  // const y = useTransform(scrollY, [0, 300], [0, -50]);

  const newsArticles = [
    {
      id: 1,
      title: "Uusi Pac-Man 3D-versio julkaistu",
      excerpt:
        "Klassinen Pac-Man peli saa uuden 3D-visualisoinnin, joka tuo pelin eloon kuin koskaan ennen.",
      content:
        "Real Gaming Deals on julkaissut uuden 3D-version klassikosta Pac-Man. Peli tarjoaa immersiivisen kokemuksen...",
      image: "/api/placeholder/600/400",
      category: "Uutiset",
      author: "Mika Virtanen",
      publishDate: "2024-01-15",
      readTime: "5 min",
      views: 12500,
      likes: 234,
      comments: 45,
      featured: true,
      tags: ["Pac-Man", "3D", "Klassikko", "Uusi"],
    },
    {
      id: 2,
      title: "Space Invaders saa uuden elämän",
      description:
        "Avaruusinvaderit tulevat takaisin uudella twistillä ja modernilla grafiikalla.",
      image: "/api/placeholder/600/400",
      category: "Pelinjulkaisu",
      author: "Anna Korhonen",
      publishDate: "2024-01-12",
      readTime: "3 min",
      views: 8900,
      likes: 156,
      comments: 23,
      featured: false,
      tags: ["Space Invaders", "Uusi", "Avaruus"],
    },
    {
      id: 3,
      title: "Tetris-mestaruuskilpailut alkaa",
      description:
        "Suomen suurin Tetris-kilpailu järjestetään tänä keväänä Helsingissä.",
      image: "/api/placeholder/600/400",
      category: "Kilpailut",
      author: "Jukka Nieminen",
      publishDate: "2024-01-10",
      readTime: "4 min",
      views: 15600,
      likes: 312,
      comments: 67,
      featured: true,
      tags: ["Tetris", "Kilpailu", "Helsinki"],
    },
    {
      id: 4,
      title: "Arkaadi pelien kultakausi palaa",
      description:
        "Nostalgia ja moderni teknologia kohtaavat uusissa arkaadi peleissä.",
      image: "/api/placeholder/600/400",
      category: "Analyysi",
      author: "Liisa Mäkelä",
      publishDate: "2024-01-08",
      readTime: "7 min",
      views: 22100,
      likes: 445,
      comments: 89,
      featured: false,
      tags: ["Nostalgia", "Teknologia", "Arkaadi"],
    },
    {
      id: 5,
      title: "Donkey Kong 3D-seikkailu julkaistu",
      description:
        "Klassinen Donkey Kong saa uuden 3D-perspektiivin ja modernit grafiikat.",
      image: "/api/placeholder/600/400",
      category: "Pelinjulkaisu",
      author: "Marko Koskinen",
      publishDate: "2024-01-05",
      readTime: "6 min",
      views: 18700,
      likes: 278,
      comments: 34,
      featured: false,
      tags: ["Donkey Kong", "3D", "Seikkailu"],
    },
    {
      id: 6,
      title: "Arkaadi pelien historia ja tulevaisuus",
      description:
        "Tutustu arkaadi pelien rikkaaseen historiaan ja mitä tulevaisuus tuo mukanaan.",
      image: "/api/placeholder/600/400",
      category: "Historia",
      author: "Sari Virtanen",
      publishDate: "2024-01-03",
      readTime: "8 min",
      views: 31200,
      likes: 567,
      comments: 123,
      featured: true,
      tags: ["Historia", "Tulevaisuus", "Arkaadi"],
    },
  ];

  const handleBookmark = (articleId: number) => {
    setBookmarked((prev) =>
      prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId]
    );
  };

  const handleLike = (articleId: number) => {
    setLiked((prev) =>
      prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId]
    );
  };

  const featuredArticles = newsArticles.filter((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <Box sx={{ minHeight: "100vh", background: "#ffffff" }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Box
          sx={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            background: `
              radial-gradient(circle at 20% 80%, rgba(0, 123, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(220, 53, 69, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #ffffff 100%)
            `,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
            <Box sx={{ textAlign: "center" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
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
                  Blogs
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    color: "rgba(26,26,46,0.9)",
                    fontWeight: 600,
                    mb: 4,
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    lineHeight: 1.3,
                  }}
                >
                  Pysy Ajan Tasalla Arkaadi Pelien Maailmassa
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
                  Tutustu uusimpiin uutisiin, pelijulkaisuihin ja tapahtumiin
                  arkaadi pelien maailmasta. Löydä mielenkiintoisia artikkeleita
                  ja pysy ajan tasalla.
                </Typography>
              </motion.div>
            </Box>
          </Container>
        </Box>
      </motion.div>

      {/* Featured Articles */}
      <Box sx={{ py: 8, background: "#f8f9fa" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 6 }}>
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
                Esitellyt Artikkelit
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {featuredArticles.map((article, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={article.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className="card hover-lift"
                    sx={{
                      background: `
                        linear-gradient(145deg, 
                          rgba(255,255,255,0.9) 0%, 
                          rgba(248,249,250,0.8) 100%)
                      `,
                      backdropFilter: "blur(20px)",
                      border: "2px solid #007bff",
                      borderRadius: "20px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Chip
                      label="Esitelty"
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        background: "linear-gradient(135deg, #007bff, #ffc107)",
                        color: "white",
                        fontWeight: 700,
                        zIndex: 1,
                      }}
                    />

                    <Box
                      sx={{
                        height: 300,
                        background: `linear-gradient(135deg, #007bff, #ffc107)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <NewReleases
                        sx={{ fontSize: 80, color: "white", opacity: 0.8 }}
                      />
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={article.category}
                          size="small"
                          sx={{
                            background: "rgba(0, 123, 255, 0.2)",
                            color: "#007bff",
                            border: "1px solid #007bff",
                            mb: 2,
                          }}
                        />
                      </Box>

                      <Typography
                        variant="h5"
                        fontWeight={900}
                        color="#1a1a2e"
                        mb={2}
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {article.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        color="rgba(26,26,46,0.8)"
                        mb={3}
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {article.excerpt || article.description}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 3,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Person
                            sx={{ fontSize: 16, color: "#007bff", mr: 1 }}
                          />
                          <Typography
                            variant="body2"
                            color="rgba(26,26,46,0.8)"
                          >
                            {article.author}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Schedule
                            sx={{ fontSize: 16, color: "#ffc107", mr: 1 }}
                          />
                          <Typography
                            variant="body2"
                            color="rgba(26,26,46,0.8)"
                          >
                            {article.publishDate}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            variant="body2"
                            color="rgba(26,26,46,0.8)"
                          >
                            {article.readTime}
                          </Typography>
                        </Box>
                      </Box>

                      <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
                        {article.tags.map((tag, tagIndex) => (
                          <Chip
                            key={tagIndex}
                            label={tag}
                            size="small"
                            sx={{
                              background: "rgba(255, 193, 7, 0.2)",
                              color: "#ffc107",
                              border: "1px solid #ffc107",
                              fontSize: "0.7rem",
                            }}
                          />
                        ))}
                      </Stack>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 2 }}>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Visibility
                              sx={{ fontSize: 16, color: "#007bff", mr: 0.5 }}
                            />
                            <Typography
                              variant="body2"
                              color="rgba(26,26,46,0.8)"
                            >
                              {article.views.toLocaleString()}
                            </Typography>
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <ThumbUp
                              sx={{ fontSize: 16, color: "#ffc107", mr: 0.5 }}
                            />
                            <Typography
                              variant="body2"
                              color="rgba(26,26,46,0.8)"
                            >
                              {article.likes}
                            </Typography>
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Comment
                              sx={{ fontSize: 16, color: "#dc3545", mr: 0.5 }}
                            />
                            <Typography
                              variant="body2"
                              color="rgba(26,26,46,0.8)"
                            >
                              {article.comments}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <IconButton
                            size="small"
                            onClick={() => handleBookmark(article.id)}
                            sx={{
                              color: bookmarked.includes(article.id)
                                ? "#ffc107"
                                : "rgba(255,255,255,0.8)",
                            }}
                          >
                            {bookmarked.includes(article.id) ? (
                              <Bookmark />
                            ) : (
                              <BookmarkBorder />
                            )}
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => handleLike(article.id)}
                            sx={{
                              color: liked.includes(article.id)
                                ? "#dc3545"
                                : "rgba(255,255,255,0.8)",
                            }}
                          >
                            {liked.includes(article.id) ? (
                              <ThumbUp />
                            ) : (
                              <ThumbUpOutlined />
                            )}
                          </IconButton>
                          <IconButton
                            size="small"
                            sx={{
                              color: "rgba(255,255,255,0.8)",
                            }}
                          >
                            <Share />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Regular Articles */}
      <Box sx={{ py: 8, background: "#e9ecef" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 6 }}>
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
                Viimeisimmät Artikkelit
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {regularArticles.map((article, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={article.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className="card hover-lift"
                    sx={{
                      background: `
                        linear-gradient(145deg, 
                          rgba(255,255,255,0.9) 0%, 
                          rgba(248,249,250,0.8) 100%)
                      `,
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: "20px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        height: 200,
                        background: `linear-gradient(135deg, #dc3545, #28a745)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <Analytics
                        sx={{ fontSize: 60, color: "white", opacity: 0.8 }}
                      />
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={article.category}
                          size="small"
                          sx={{
                            background: "rgba(220, 53, 69, 0.2)",
                            color: "#dc3545",
                            border: "1px solid #dc3545",
                            mb: 2,
                          }}
                        />
                      </Box>

                      <Typography
                        variant="h6"
                        fontWeight={900}
                        color="#1a1a2e"
                        mb={2}
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {article.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="rgba(26,26,46,0.8)"
                        mb={3}
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {article.description}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 2 }}>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Visibility
                              sx={{ fontSize: 16, color: "#dc3545", mr: 0.5 }}
                            />
                            <Typography
                              variant="body2"
                              color="rgba(26,26,46,0.8)"
                            >
                              {article.views.toLocaleString()}
                            </Typography>
                          </Box>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <ThumbUp
                              sx={{ fontSize: 16, color: "#28a745", mr: 0.5 }}
                            />
                            <Typography
                              variant="body2"
                              color="rgba(26,26,46,0.8)"
                            >
                              {article.likes}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <IconButton
                            size="small"
                            onClick={() => handleBookmark(article.id)}
                            sx={{
                              color: bookmarked.includes(article.id)
                                ? "#ffc107"
                                : "rgba(255,255,255,0.8)",
                            }}
                          >
                            {bookmarked.includes(article.id) ? (
                              <Bookmark />
                            ) : (
                              <BookmarkBorder />
                            )}
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => handleLike(article.id)}
                            sx={{
                              color: liked.includes(article.id)
                                ? "#dc3545"
                                : "rgba(255,255,255,0.8)",
                            }}
                          >
                            {liked.includes(article.id) ? (
                              <ThumbUp />
                            ) : (
                              <ThumbUpOutlined />
                            )}
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Blogs;
