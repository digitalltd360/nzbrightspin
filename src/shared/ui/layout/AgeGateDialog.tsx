"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Divider,
  Avatar,
  Box,
  Fade,
  Slide,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { acceptAge } from "@/entities/ageGate/model/ageGateSlice";
import { accept as acceptCookies } from "@/entities/cookieConsent/model/cookieConsentSlice";
import Games from "@mui/icons-material/Games";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AgeGateDialog() {
  const { t } = useLanguage();
  const accepted = useAppSelector((s) => s.ageGate.accepted);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);
  const [cookiesChecked, setCookiesChecked] = useState(false);
  const [responsibilityChecked, setResponsibilityChecked] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? localStorage.getItem("age_gate_accepted")
        : null;
    if (!stored) {
      setOpen(true);
      setFadeIn(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("age_gate_accepted", "1");
    dispatch(acceptAge());
    if (cookiesChecked) {
      dispatch(acceptCookies());
    }
    setOpen(false);
  };

  if (accepted) return null;

  return (
    <Dialog
      open={open}
      disableEscapeKeyDown
      aria-labelledby="age-gate-title"
      fullWidth
      maxWidth="sm"
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #1a237e 0%, #3949ab 25%, #5c6bc0 50%, #7986cb 75%, #9c27b0 100%)",
          border: "3px solid #ffc107",
          boxShadow: "0 20px 60px rgba(255, 193, 7, 0.4)",
          position: "relative",
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
        },
      }}
      BackdropProps={{
        sx: {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0,0,0,0.6)",
        },
      }}
    >
      <Fade in={fadeIn} timeout={800}>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <DialogTitle
            id="age-gate-title"
            sx={{
              textAlign: "center",
              pb: 2,
              pt: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#ffc107",
                  width: 60,
                  height: 60,
                  mr: 2,
                  boxShadow: "0 8px 32px rgba(255, 193, 7, 0.6)",
                  border: "3px solid #ffffff",
                }}
              >
                <Games sx={{ fontSize: 30, color: "#1a237e" }} />
              </Avatar>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#ffffff",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {t("age_gate.title")}
                </Typography>
              </Box>
            </Box>
          </DialogTitle>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

          <DialogContent
            sx={{
              pt: 3,
              pb: 2,
              maxHeight: "70vh",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "linear-gradient(45deg, #ff00ff, #00ffff)",
                borderRadius: "4px",
                "&:hover": {
                  background: "linear-gradient(45deg, #00ffff, #ff00ff)",
                },
              },
            }}
          >
            <Slide direction="up" in={fadeIn} timeout={1000}>
              <Box>
                <Typography
                  paragraph
                  sx={{
                    color: "#ffffff",
                    textAlign: "center",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {t("age_gate.subtitle")}
                </Typography>
                <Typography
                  paragraph
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    textAlign: "center",
                    lineHeight: 1.6,
                    fontSize: "1rem",
                  }}
                >
                  {t("age_gate.description")}
                </Typography>

                <Button
                  onClick={handleAccept}
                  disabled={
                    !(ageChecked && cookiesChecked && responsibilityChecked)
                  }
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    borderRadius: "25px",
                    py: 2,
                    textTransform: "uppercase",
                    fontWeight: 900,
                    fontSize: "1.2rem",
                    letterSpacing: "2px",
                    background: "linear-gradient(45deg, #ffc107, #2196f3)",
                    boxShadow: "0 8px 32px rgba(255, 193, 7, 0.4)",
                    border: "2px solid #ffffff",
                    color: "#000",
                    "&:hover": {
                      background: "linear-gradient(45deg, #2196f3, #ffc107)",
                      boxShadow: "0 12px 40px rgba(33, 150, 243, 0.6)",
                      transform: "translateY(-3px) scale(1.05)",
                    },
                    "&:disabled": {
                      background: "rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.5)",
                      border: "2px solid rgba(255,255,255,0.3)",
                    },
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {t("age_gate.play_button")}
                </Button>
                <FormGroup sx={{ gap: 2, mt: 3 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "rgba(255,255,255,0.4)",
                          "&.Mui-checked": {
                            color: "#ffc107",
                            "& .MuiSvgIcon-root": {
                              filter: "drop-shadow(0 0 8px #ffc107)",
                            },
                          },
                        }}
                        checked={ageChecked}
                        onChange={(_, v) => setAgeChecked(v)}
                      />
                    }
                    label={t("age_gate.age_checkbox")}
                    sx={{
                      color: "#ffffff",
                      ".MuiFormControlLabel-label": {
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "rgba(255,255,255,0.4)",
                          "&.Mui-checked": {
                            color: "#2196f3",
                            "& .MuiSvgIcon-root": {
                              filter: "drop-shadow(0 0 8px #2196f3)",
                            },
                          },
                        }}
                        checked={cookiesChecked}
                        onChange={(_, v) => setCookiesChecked(v)}
                      />
                    }
                    label={t("age_gate.cookies_checkbox")}
                    sx={{
                      color: "#ffffff",
                      ".MuiFormControlLabel-label": {
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "rgba(255,255,255,0.4)",
                          "&.Mui-checked": {
                            color: "#e91e63",
                            "& .MuiSvgIcon-root": {
                              filter: "drop-shadow(0 0 8px #e91e63)",
                            },
                          },
                        }}
                        checked={responsibilityChecked}
                        onChange={(_, v) => setResponsibilityChecked(v)}
                      />
                    }
                    label={t("age_gate.responsibility_checkbox")}
                    sx={{
                      color: "#ffffff",
                      ".MuiFormControlLabel-label": {
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                </FormGroup>
              </Box>
            </Slide>
          </DialogContent>
        </Box>
      </Fade>
    </Dialog>
  );
}
