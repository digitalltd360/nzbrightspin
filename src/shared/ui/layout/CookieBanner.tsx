"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Stack,
  Avatar,
  Fade,
  Slide,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/store";
import {
  accept,
  decline,
} from "@/entities/cookieConsent/model/cookieConsentSlice";
import Cookie from "@mui/icons-material/Cookie";
import CloseIcon from "@mui/icons-material/Close";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CookieBanner() {
  const { t } = useLanguage();
  const dispatch = useAppDispatch();
  const { accepted, declined } = useAppSelector((s) => s.cookieConsent);
  const [show, setShow] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (!accepted && !declined) {
      setShow(true);
      setTimeout(() => setFadeIn(true), 100);
    }
  }, [accepted, declined]);

  const handleAccept = () => {
    dispatch(accept());
    setFadeIn(false);
    setTimeout(() => setShow(false), 300);
  };

  const handleDecline = () => {
    dispatch(decline());
    setFadeIn(false);
    setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;

  return (
    <Fade in={fadeIn} timeout={300}>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: 20,
          right: 20,
          zIndex: 1300,
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <Slide direction="up" in={fadeIn} timeout={500}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              background:
                "linear-gradient(135deg, #1a237e 0%, #3949ab 25%, #5c6bc0 50%, #7986cb 75%, #9c27b0 100%)",
              border: "3px solid #ffc107",
              boxShadow: "0 16px 48px rgba(255, 193, 7, 0.4)",
              backdropFilter: "blur(20px)",
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
                  radial-gradient(circle at 20% 50%, rgba(33, 150, 243, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(156, 39, 176, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)
                `,
                opacity: 0.8,
              },
            }}
          >
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Stack direction="row" alignItems="flex-start" spacing={2}>
                <Avatar
                  sx={{
                    bgcolor: "#ffc107",
                    width: 50,
                    height: 50,
                    boxShadow: "0 4px 16px rgba(255, 193, 7, 0.6)",
                    border: "2px solid #ffffff",
                  }}
                >
                  <Cookie sx={{ fontSize: 24, color: "#1a237e" }} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight={900}
                    sx={{
                      color: "#ffffff",
                      mb: 1,
                      textShadow: "0 2px 4px rgba(255, 193, 7, 0.5)",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {t("cookies.title")}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.9)",
                      lineHeight: 1.5,
                      mb: 2,
                      fontWeight: 500,
                    }}
                  >
                    {t("cookies.description")}
                  </Typography>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1}
                    sx={{ mt: 2 }}
                  >
                    <Button
                      onClick={handleAccept}
                      variant="contained"
                      size="small"
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: 900,
                        px: 3,
                        py: 1.5,
                        borderRadius: "20px",
                        background: "linear-gradient(45deg, #ffc107, #2196f3)",
                        boxShadow: "0 4px 16px rgba(255, 193, 7, 0.4)",
                        border: "2px solid #ffffff",
                        color: "#000",
                        letterSpacing: "1px",
                        "&:hover": {
                          background:
                            "linear-gradient(45deg, #2196f3, #ffc107)",
                          boxShadow: "0 6px 20px rgba(33, 150, 243, 0.6)",
                          transform: "translateY(-2px) scale(1.05)",
                        },
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {t("cookies.accept")}
                    </Button>
                    <Button
                      onClick={handleDecline}
                      variant="outlined"
                      size="small"
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: 900,
                        px: 3,
                        py: 1.5,
                        borderRadius: "20px",
                        color: "#ffffff",
                        borderColor: "#ffc107",
                        borderWidth: "2px",
                        letterSpacing: "1px",
                        background: "rgba(255, 193, 7, 0.1)",
                        "&:hover": {
                          borderColor: "#e91e63",
                          color: "#e91e63",
                          bgcolor: "rgba(233, 30, 99, 0.1)",
                          transform: "translateY(-2px) scale(1.05)",
                          boxShadow: "0 6px 20px rgba(233, 30, 99, 0.4)",
                        },
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {t("cookies.decline")}
                    </Button>
                  </Stack>
                </Box>
                <Button
                  onClick={handleDecline}
                  sx={{
                    minWidth: "auto",
                    p: 0.5,
                    color: "rgba(255,255,255,0.6)",
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.3)",
                    "&:hover": {
                      color: "#ffc107",
                      bgcolor: "rgba(255, 193, 7, 0.1)",
                      borderColor: "#ffc107",
                      transform: "scale(1.1)",
                    },
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <CloseIcon />
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Slide>
      </Box>
    </Fade>
  );
}
