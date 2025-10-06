"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Chip,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SportsEsports from "@mui/icons-material/SportsEsports";
import ContactSupport from "@mui/icons-material/ContactSupport";
import Close from "@mui/icons-material/Close";
import Home from "@mui/icons-material/Home";
import Business from "@mui/icons-material/Business";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Favorite from "@mui/icons-material/Favorite";
import Person from "@mui/icons-material/Person";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const nav = [
    { href: "/", label: t("nav.home"), icon: <Home /> },
    { href: "/games", label: t("nav.games"), icon: <SportsEsports /> },
    { href: "/services", label: t("nav.services"), icon: <Business /> },
    { href: "/about", label: t("nav.about"), icon: <ContactSupport /> },
    { href: "/contact", label: t("nav.contact"), icon: <ContactSupport /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 320,
        height: "100%",
        background:
          "linear-gradient(135deg, #000000 0%, #1a0a2e 50%, #16213e 100%)",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 20, 147, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 191, 255, 0.1) 0%, transparent 50%)
          `,
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(45deg, transparent, rgba(138, 43, 226, 0.05), transparent)",
          animation: "shimmer 4s ease-in-out infinite",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          p: 4,
          borderBottom: "1px solid rgba(138, 43, 226, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 2,
          background:
            "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 20, 147, 0.1))",
        }}
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  width: 55,
                  height: 55,
                  background:
                    "linear-gradient(135deg, #8a2be2, #ff1493, #00bfff)",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  boxShadow:
                    "0 12px 32px rgba(138, 43, 226, 0.5), 0 0 20px rgba(255, 20, 147, 0.3)",
                  border: "2px solid rgba(138, 43, 226, 0.6)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    background:
                      "linear-gradient(45deg, #8a2be2, #ff1493, #00bfff, #8a2be2)",
                    borderRadius: "21px",
                    zIndex: -1,
                    animation: "gradientRotate 3s linear infinite",
                  },
                }}
              >
                <SportsEsports sx={{ fontSize: 28, color: "#ffffff" }} />
              </Box>
            </motion.div>
            <Typography
              variant="h6"
              fontWeight={900}
              sx={{
                fontSize: "1.4rem",
                background:
                  "linear-gradient(135deg, #8a2be2, #ff1493, #00bfff, #8a2be2)",
                backgroundSize: "300% 300%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(138, 43, 226, 0.6)",
                animation: "gradientShift 3s ease-in-out infinite",
                "@keyframes gradientShift": {
                  "0%, 100%": { backgroundPosition: "0% 50%" },
                  "50%": { backgroundPosition: "100% 50%" },
                },
              }}
            >
              Bright Spin
            </Typography>
          </Box>
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: "#ffffff",
              p: 2,
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 20, 147, 0.1))",
              border: "1px solid rgba(138, 43, 226, 0.3)",
              "&:hover": {
                background:
                  "linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 20, 147, 0.3))",
                color: "#ff1493",
                boxShadow:
                  "0 12px 32px rgba(138, 43, 226, 0.4), 0 0 20px rgba(255, 20, 147, 0.3)",
                transform: "scale(1.1) rotate(90deg)",
                border: "1px solid rgba(255, 20, 147, 0.6)",
              },
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <Close />
          </IconButton>
        </motion.div>
      </Box>

      <List sx={{ flexGrow: 1, pt: 2, position: "relative", zIndex: 1 }}>
        {nav.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          >
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                mx: 3,
                mb: 2,
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, rgba(138, 43, 226, 0.05), rgba(255, 20, 147, 0.05))",
                border: "1px solid rgba(138, 43, 226, 0.2)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(255, 20, 147, 0.2))",
                  transform: "translateX(12px) scale(1.02)",
                  boxShadow:
                    "0 12px 32px rgba(138, 43, 226, 0.3), 0 0 20px rgba(255, 20, 147, 0.2)",
                  border: "1px solid rgba(255, 20, 147, 0.4)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 20, 147, 0.3), transparent)",
                  transition: "left 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                },
                "&:hover::before": {
                  left: "100%",
                },
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box sx={{ color: "#ff1493", fontSize: "1.5rem" }}>
                    {item.icon}
                  </Box>
                </motion.div>
                <ListItemText
                  primary={item.label}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    },
                  }}
                />
              </Box>
            </ListItemButton>
          </motion.div>
        ))}
      </List>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <Box
          sx={{
            p: 4,
            borderTop: "1px solid rgba(138, 43, 226, 0.3)",
            position: "relative",
            zIndex: 2,
            background:
              "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 20, 147, 0.1))",
          }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                mb: 2,
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              Ready to start your next gaming adventure?
            </Typography>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="contained"
              fullWidth
              component={Link}
              href="/games"
              sx={{
                background:
                  "linear-gradient(135deg, #8a2be2, #ff1493, #00bfff)",
                borderRadius: "25px",
                py: 2.5,
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#ffffff",
                fontSize: "1.2rem",
                letterSpacing: "1px",
                boxShadow:
                  "0 12px 32px rgba(138, 43, 226, 0.4), 0 0 20px rgba(255, 20, 147, 0.3)",
                border: "2px solid rgba(255, 20, 147, 0.3)",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #ff1493, #8a2be2, #00bfff)",
                  boxShadow:
                    "0 16px 48px rgba(138, 43, 226, 0.5), 0 0 30px rgba(255, 20, 147, 0.4)",
                  transform: "translateY(-3px) scale(1.02)",
                  border: "2px solid rgba(255, 20, 147, 0.6)",
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
                  transition: "left 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                },
                "&:hover::before": {
                  left: "100%",
                },
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {t("nav.browse")}
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AppBar
          position="fixed"
          sx={{
            background: scrolled
              ? "rgba(0, 0, 0, 0.9)"
              : "linear-gradient(135deg, #000000 0%, #1a0a2e 50%, #16213e 100%)",
            backdropFilter: scrolled ? "blur(25px)" : "none",
            borderBottom: scrolled
              ? "1px solid rgba(138, 43, 226, 0.4)"
              : "1px solid rgba(138, 43, 226, 0.2)",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: 1300,
            boxShadow: scrolled
              ? "0 12px 40px rgba(138, 43, 226, 0.3), 0 0 20px rgba(255, 20, 147, 0.2)"
              : "0 8px 24px rgba(138, 43, 226, 0.2)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.1), transparent)",
              animation: "shimmer 3s ease-in-out infinite",
              "@keyframes shimmer": {
                "0%, 100%": { transform: "translateX(-100%)" },
                "50%": { transform: "translateX(100%)" },
              },
            },
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ py: 1 }}>
              {/* Logo */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    flexGrow: 1,
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 360,
                      transition: { duration: 0.8 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        background:
                          "linear-gradient(135deg, #8a2be2, #ff1493, #00bfff)",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        boxShadow:
                          "0 12px 32px rgba(138, 43, 226, 0.5), 0 0 20px rgba(255, 20, 147, 0.3)",
                        border: "2px solid rgba(138, 43, 226, 0.6)",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: -2,
                          left: -2,
                          right: -2,
                          bottom: -2,
                          background:
                            "linear-gradient(45deg, #8a2be2, #ff1493, #00bfff, #8a2be2)",
                          borderRadius: "22px",
                          zIndex: -1,
                          animation: "gradientRotate 3s linear infinite",
                          "@keyframes gradientRotate": {
                            "0%": { transform: "rotate(0deg)" },
                            "100%": { transform: "rotate(360deg)" },
                          },
                        },
                      }}
                    >
                      <SportsEsports sx={{ fontSize: 32, color: "#ffffff" }} />
                    </Box>
                  </motion.div>
                  <Box>
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={900}
                        sx={{
                          fontSize: "1.8rem",
                          lineHeight: 1,
                          background:
                            "linear-gradient(135deg, #8a2be2, #ff1493, #00bfff, #8a2be2)",
                          backgroundSize: "300% 300%",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          textShadow: "0 0 30px rgba(138, 43, 226, 0.6)",
                          animation: "gradientShift 3s ease-in-out infinite",
                          "@keyframes gradientShift": {
                            "0%, 100%": { backgroundPosition: "0% 50%" },
                            "50%": { backgroundPosition: "100% 50%" },
                          },
                        }}
                      >
                        Bright Spin
                      </Typography>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {nav.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <Button
                        component={Link}
                        href={item.href}
                        sx={{
                          color: "#ffffff",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          px: 4,
                          py: 2,
                          borderRadius: "25px",
                          position: "relative",
                          overflow: "hidden",
                          fontSize: "0.9rem",
                          letterSpacing: "1px",
                          background:
                            "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 20, 147, 0.1))",
                          border: "1px solid rgba(138, 43, 226, 0.3)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 20, 147, 0.3))",
                            color: "#ff1493",
                            boxShadow:
                              "0 12px 32px rgba(138, 43, 226, 0.4), 0 0 20px rgba(255, 20, 147, 0.3)",
                            transform: "translateY(-3px) scale(1.05)",
                            border: "1px solid rgba(255, 20, 147, 0.6)",
                          },
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: "-100%",
                            width: "100%",
                            height: "100%",
                            background:
                              "linear-gradient(90deg, transparent, rgba(255, 20, 147, 0.3), transparent)",
                            transition:
                              "left 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                          },
                          "&:hover::before": {
                            left: "100%",
                          },
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    gap: 1,
                    ml: 3,
                  }}
                >
                  {[
                    { icon: <Favorite />, badge: 3, delay: 0.9 },
                    { icon: <ShoppingCart />, badge: 2, delay: 1.0 },
                    { icon: <Person />, badge: null, delay: 1.1 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        sx={{
                          color: "#ffffff",
                          borderRadius: "20px",
                          p: 2,
                          background:
                            "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 20, 147, 0.1))",
                          border: "1px solid rgba(138, 43, 226, 0.3)",
                          "&:hover": {
                            background:
                              "linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 20, 147, 0.3))",
                            color: "#ff1493",
                            boxShadow:
                              "0 12px 32px rgba(138, 43, 226, 0.4), 0 0 20px rgba(255, 20, 147, 0.3)",
                            transform: "scale(1.1) rotate(5deg)",
                            border: "1px solid rgba(255, 20, 147, 0.6)",
                          },
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {item.badge ? (
                          <Badge
                            badgeContent={item.badge}
                            sx={{
                              "& .MuiBadge-badge": {
                                background:
                                  "linear-gradient(135deg, #ff1493, #8a2be2)",
                                color: "#ffffff",
                                fontWeight: 700,
                                fontSize: "0.7rem",
                                minWidth: "20px",
                                height: "20px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 12px rgba(255, 20, 147, 0.4)",
                              },
                            }}
                          >
                            {item.icon}
                          </Badge>
                        ) : (
                          item.icon
                        )}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>

              {/* Language Toggle */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                <ToggleButtonGroup
                  value={language}
                  exclusive
                  onChange={(_, newLang) => newLang && setLanguage(newLang)}
                  size="small"
                  sx={{
                    ml: 2,
                    "& .MuiToggleButton-root": {
                      color: "#ffffff",
                      borderColor: "rgba(138, 43, 226, 0.4)",
                      borderRadius: "15px",
                      px: 3,
                      py: 1,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "0.8rem",
                      background:
                        "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 20, 147, 0.1))",
                      "&.Mui-selected": {
                        background:
                          "linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 20, 147, 0.3))",
                        color: "#ff1493",
                        borderColor: "#ff1493",
                        boxShadow: "0 8px 24px rgba(138, 43, 226, 0.3)",
                      },
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(255, 20, 147, 0.2))",
                        borderColor: "#ff1493",
                        transform: "scale(1.05)",
                      },
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    },
                  }}
                >
                  <ToggleButton value="en">EN</ToggleButton>
                  <ToggleButton value="ar">AR</ToggleButton>
                </ToggleButtonGroup>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    display: { md: "none" },
                    color: "#ffffff",
                    ml: 2,
                    p: 2,
                    borderRadius: "20px",
                    background:
                      "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 20, 147, 0.1))",
                    border: "1px solid rgba(138, 43, 226, 0.3)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 20, 147, 0.3))",
                      color: "#ff1493",
                      boxShadow:
                        "0 12px 32px rgba(138, 43, 226, 0.4), 0 0 20px rgba(255, 20, 147, 0.3)",
                      transform: "scale(1.1) rotate(90deg)",
                      border: "1px solid rgba(255, 20, 147, 0.6)",
                    },
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </motion.div>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: 280,
                  background: "transparent",
                },
              }}
            >
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {drawer}
              </motion.div>
            </Drawer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
