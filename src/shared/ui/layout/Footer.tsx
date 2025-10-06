"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Chip,
  Slide,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  SportsEsports,
  Email as EmailIcon,
  PhoneIphone as PhoneIphoneIcon,
  LocationOn as LocationIcon,
  Copyright as CopyrightIcon,
  Security,
  Send,
  Description,
} from "@mui/icons-material";

export default function Footer() {
  const [fadeIn, setFadeIn] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Box
        component="footer"
        sx={{
          background: `
            linear-gradient(180deg, 
              #000000 0%, 
              #1a0a2e 30%, 
              #16213e 70%,
              #0a0a0a 100%
            )
          `,
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
          borderTop: "2px solid rgba(138, 43, 226, 0.4)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 20%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 20, 147, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(0, 191, 255, 0.05) 0%, transparent 50%)
            `,
            zIndex: 0,
          },
        }}
      >
        {/* Animated Background elements */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: 400,
              height: 400,
              background:
                "linear-gradient(45deg, rgba(138, 43, 226, 0.2), rgba(255, 20, 147, 0.2))",
              borderRadius: "50%",
              filter: "blur(80px)",
            }}
          />
        </motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: "10%",
              width: 300,
              height: 300,
              background:
                "linear-gradient(45deg, rgba(255, 20, 147, 0.2), rgba(0, 191, 255, 0.2))",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "20%",
              left: "30%",
              width: 250,
              height: 250,
              background:
                "linear-gradient(45deg, rgba(0, 191, 255, 0.15), rgba(138, 43, 226, 0.15))",
              borderRadius: "50%",
              filter: "blur(50px)",
            }}
          />
        </motion.div>

        {/* Main Content */}
        <Box sx={{ py: 8, position: "relative", zIndex: 1 }}>
          <Container maxWidth="xl">
            <Grid container spacing={6}>
              {/* Brand Section */}
              <Grid size={{ xs: 12, md: 4 }}>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 3 }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            background:
                              "linear-gradient(135deg, #8a2be2, #ff1493, #00bfff)",
                            borderRadius: "25px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            mr: 3,
                            boxShadow:
                              "0 16px 48px rgba(138, 43, 226, 0.5), 0 0 30px rgba(255, 20, 147, 0.3)",
                            border: "3px solid rgba(138, 43, 226, 0.6)",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: -4,
                              left: -4,
                              right: -4,
                              bottom: -4,
                              background:
                                "linear-gradient(45deg, #8a2be2, #ff1493, #00bfff, #8a2be2)",
                              borderRadius: "29px",
                              zIndex: -1,
                              animation: "gradientRotate 4s linear infinite",
                              "@keyframes gradientRotate": {
                                "0%": { transform: "rotate(0deg)" },
                                "100%": { transform: "rotate(360deg)" },
                              },
                            },
                          }}
                        >
                          <SportsEsports
                            sx={{ fontSize: 40, color: "#ffffff" }}
                          />
                        </Box>
                        <Box>
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                          >
                            <Chip
                              label="Bright Spin"
                              size="small"
                              sx={{
                                background:
                                  "linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(255, 20, 147, 0.2))",
                                color: "#ff1493",
                                mt: 1,
                                border: "1px solid rgba(255, 20, 147, 0.5)",
                                fontWeight: 700,
                                fontSize: "0.9rem",
                                height: 32,
                                boxShadow: "0 6px 20px rgba(138, 43, 226, 0.3)",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                              }}
                            />
                          </motion.div>
                        </Box>
                      </Box>
                    </motion.div>
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.85)",
                          lineHeight: 1.8,
                          mb: 4,
                          fontSize: "1.1rem",
                        }}
                      >
                        {t("home.subtitle")}. نحن نقدم تجارب لعب مبتكرة مع أحدث
                        التقنيات وضمان الجودة العالية لجميع عملائنا.
                      </Typography>
                    </motion.div>
                  </Box>
                </motion.div>
              </Grid>

              {/* Services */}
              <Grid size={{ xs: 12, md: 2 }}>
                <Slide direction="up" in={fadeIn} timeout={1400}>
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={900}
                      sx={{
                        color: "#0070f3",
                        mb: 3,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                      }}
                    >
                      قانوني
                    </Typography>
                    <Stack spacing={2}>
                      {[
                        {
                          href: "/privacy",
                          label: "سياسة الخصوصية",
                          icon: <Security />,
                        },
                        {
                          href: "/terms",
                          label: "شروط الخدمة",
                          icon: <Description />,
                        },
                      ].map((link) => (
                        <Button
                          key={link.href}
                          component={Link}
                          href={link.href}
                          startIcon={link.icon}
                          sx={{
                            color: "rgba(255,255,255,0.8)",
                            textTransform: "none",
                            fontWeight: 600,
                            justifyContent: "flex-start",
                            px: 2,
                            py: 1,
                            borderRadius: "8px",
                            "&:hover": {
                              color: "#00ff88",
                              background: "rgba(0, 255, 136, 0.1)",
                              transform: "translateX(8px)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </Stack>
                  </Box>
                </Slide>
              </Grid>

              {/* Company */}
              <Grid size={{ xs: 12, md: 2 }}>
                <Slide direction="up" in={fadeIn} timeout={1600}>
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={900}
                      sx={{
                        color: "#ff0080",
                        mb: 3,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                      }}
                    >
                      Company
                    </Typography>
                    <Stack spacing={2}>
                      {[
                        { href: "/about", label: "About Us" },
                        { href: "/games", label: "Games" },
                        { href: "/services", label: "Services" },
                      ].map((link) => (
                        <Button
                          key={link.href}
                          component={Link}
                          href={link.href}
                          sx={{
                            color: "rgba(255,255,255,0.8)",
                            textTransform: "none",
                            fontWeight: 600,
                            justifyContent: "flex-start",
                            px: 2,
                            py: 1,
                            borderRadius: "8px",
                            "&:hover": {
                              color: "#ff0080",
                              background: "rgba(255, 0, 128, 0.1)",
                              transform: "translateX(8px)",
                            },
                            transition: "all 0.3s ease",
                          }}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </Stack>
                  </Box>
                </Slide>
              </Grid>

              {/* Newsletter */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Slide direction="up" in={fadeIn} timeout={1800}>
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={900}
                      sx={{
                        color: "#00d4ff",
                        mb: 3,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                      }}
                    >
                      Newsletter
                    </Typography>
                    <Typography
                      variant="body2"
                      color="rgba(255,255,255,0.8)"
                      mb={3}
                    >
                      Stay updated with the latest digital games and exclusive
                      deals!
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                      <TextField
                        placeholder="Enter your email"
                        size="small"
                        sx={{
                          flex: 1,
                          "& .MuiOutlinedInput-root": {
                            color: "#ffffff",
                            "& fieldset": {
                              borderColor: "rgba(255,255,255,0.2)",
                            },
                            "&:hover fieldset": {
                              borderColor: "#00d4ff",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#00d4ff",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "rgba(255,255,255,0.7)",
                            "&.Mui-focused": {
                              color: "#00d4ff",
                            },
                          },
                        }}
                      />
                      <Button
                        variant="contained"
                        startIcon={<Send />}
                        sx={{
                          background:
                            "linear-gradient(135deg, #00d4ff, #00ff88)",
                          borderRadius: "8px",
                          px: 3,
                          "&:hover": {
                            boxShadow: "0 8px 20px rgba(0, 212, 255, 0.4)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        Subscribe
                      </Button>
                    </Box>

                    {/* Contact Info */}
                    <Box sx={{ mt: 4 }}>
                      <Typography
                        variant="body2"
                        color="rgba(255,255,255,0.7)"
                        mb={2}
                      >
                        تواصل معنا
                      </Typography>
                      <Stack spacing={1}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <EmailIcon
                            sx={{ color: "#00ff88", mr: 1, fontSize: 16 }}
                          />
                          <Typography
                            variant="body2"
                            color="rgba(255,255,255,0.8)"
                          >
                            info@nzbrightspin.com
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <PhoneIphoneIcon
                            sx={{ color: "#ff0080", mr: 1, fontSize: 16 }}
                          />
                          <Typography
                            variant="body2"
                            color="rgba(255,255,255,0.8)"
                          >
                            +971 5 859 1195
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <LocationIcon
                            sx={{ color: "#00d4ff", mr: 1, fontSize: 16 }}
                          />
                          <Typography
                            variant="body2"
                            color="rgba(255,255,255,0.8)"
                          >
                            برج خليفة، دبي، دولة الإمارات العربية المتحدة
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Slide>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Section */}
        <Box sx={{ py: 4, position: "relative", zIndex: 1 }}>
          <Container maxWidth="xl">
            <Slide direction="up" in={fadeIn} timeout={2000}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <CopyrightIcon
                    sx={{ color: "#00ff88", mr: 1, fontSize: "1.2rem" }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#ffffff",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                    }}
                  >
                    {new Date().getFullYear()} Bright Spin
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    display: "block",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  جميع الحقوق محفوظة. وجهتك الأولى للألعاب الرقمية في دولة
                  الإمارات العربية المتحدة.
                </Typography>
              </Box>
            </Slide>
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
}
