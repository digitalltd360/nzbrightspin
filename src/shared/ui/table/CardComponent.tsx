"use client";

import { useEffect, useState } from "react";
import { Deal } from "@/shared/types/deal";
import {
  Box,
  Typography,
  Button,
  Chip,
  LinearProgress,
  Card,
  CardContent,
  Stack,
  Avatar,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Star, TrendingUp, LocalShipping, Security } from "@mui/icons-material";

type Props = {
  data: Deal[];
};

export default function CardComponent(props: Props) {
  const { data } = props;
  const dataRated = [...data].sort((a, b) => b.casino_rate - a.casino_rate);
  const [gclid, setGclid] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const gclidParam = urlParams.get("gclid");
    setGclid(gclidParam);
  }, []);

  const getDealLink = (baseLink: string) => {
    if (!gclid) return baseLink;
    const separator = baseLink.includes("?") ? "&" : "?";
    const domain = window.location.hostname;
    return `${baseLink}${separator}gclid=${gclid}&sub2=${domain}`;
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.8) return "#00d4aa";
    if (rating >= 4.5) return "#ff6b35";
    return "#0070f3";
  };

  const getRatingLabel = (rating: number) => {
    if (rating >= 4.8) return "EXCELLENT";
    if (rating >= 4.5) return "GREAT";
    return "GOOD";
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {dataRated.map((deal, index) => (
        <motion.div
          key={deal.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card
            sx={{
              background: `
                linear-gradient(145deg, 
                  rgba(26, 26, 26, 0.8) 0%, 
                  rgba(45, 45, 45, 0.6) 50%, 
                  rgba(0, 0, 0, 0.8) 100%
                )
              `,
              backdropFilter: "blur(20px)",
              borderRadius: "20px",
              border: "1px solid rgba(0, 112, 243, 0.2)",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                border: "1px solid rgba(0, 112, 243, 0.4)",
                transform: "translateY(-4px)",
                boxShadow: "0 20px 40px rgba(0, 112, 243, 0.2)",
              },
              transition: "all 0.3s ease",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(90deg, ${getRatingColor(
                  deal.casino_rate
                )}, #0070f3)`,
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={3} alignItems="center">
                {/* Rating Badge */}
                <Grid size={{ xs: 12, sm: "auto" }}>
                  <Box sx={{ position: "relative", display: "inline-block" }}>
                    <Chip
                      label={getRatingLabel(deal.casino_rate)}
                      sx={{
                        background: getRatingColor(deal.casino_rate),
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        px: 2,
                        py: 1,
                        height: "auto",
                        "& .MuiChip-label": {
                          px: 2,
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: -8,
                        right: -8,
                        background: "#ff6b35",
                        borderRadius: "50%",
                        width: 24,
                        height: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #1a1a1a",
                      }}
                    >
                      <Star sx={{ fontSize: 12, color: "#ffffff" }} />
                    </Box>
                  </Box>
                </Grid>

                {/* Logo and Title */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <Stack direction="row" spacing={3} alignItems="center">
                    {deal.logo_img && (
                      <Avatar
                        src={deal.logo_img}
                        alt={deal.title}
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "12px",
                          border: "2px solid rgba(0, 112, 243, 0.3)",
                        }}
                      />
                    )}
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#ffffff",
                          fontWeight: 700,
                          mb: 1,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {deal.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "0.9rem",
                        }}
                      >
                        Gaming Platform
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

                {/* Rating */}
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: getRatingColor(deal.casino_rate),
                          fontWeight: 900,
                          mr: 2,
                        }}
                      >
                        {deal.casino_rate.toFixed(1)}
                      </Typography>
                      <Stack direction="row" spacing={0.5}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            sx={{
                              fontSize: 20,
                              color:
                                star <= Math.round(deal.casino_rate)
                                  ? "#ff6b35"
                                  : "rgba(255, 255, 255, 0.2)",
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={(deal.casino_rate / 5) * 100}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        "& .MuiLinearProgress-bar": {
                          background: `linear-gradient(90deg, ${getRatingColor(
                            deal.casino_rate
                          )}, #0070f3)`,
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                </Grid>

                {/* Action Button */}
                <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                  <Button
                    component="a"
                    href={getDealLink(deal.link)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      background: `linear-gradient(135deg, ${getRatingColor(
                        deal.casino_rate
                      )}, #0070f3)`,
                      borderRadius: "12px",
                      py: 2,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      fontSize: "1rem",
                      "&:hover": {
                        background: `linear-gradient(135deg, #0070f3, ${getRatingColor(
                          deal.casino_rate
                        )})`,
                        transform: "translateY(-2px)",
                        boxShadow: `0 12px 24px ${getRatingColor(
                          deal.casino_rate
                        )}40`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Play Now
                  </Button>
                </Grid>
              </Grid>

              {/* Features and Bonuses */}
              <Box
                sx={{
                  mt: 4,
                  pt: 3,
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Grid container spacing={3}>
                  {/* Bonuses */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#0070f3",
                          fontWeight: 700,
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <TrendingUp sx={{ fontSize: 20 }} />
                        Bonuses
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {deal.bonuses.map((bonus, index) => (
                          <Chip
                            key={index}
                            label={bonus.bonus}
                            size="small"
                            sx={{
                              background: "rgba(0, 112, 243, 0.2)",
                              color: "#0070f3",
                              border: "1px solid rgba(0, 112, 243, 0.3)",
                              fontWeight: 600,
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Grid>

                  {/* Features */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#ff6b35",
                          fontWeight: 700,
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Security sx={{ fontSize: 20 }} />
                        Features
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {deal.features.map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature.feature}
                            size="small"
                            sx={{
                              background: "rgba(255, 107, 53, 0.2)",
                              color: "#ff6b35",
                              border: "1px solid rgba(255, 107, 53, 0.3)",
                              fontWeight: 600,
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>

                {/* Payment Methods */}
                {deal.payments && deal.payments.length > 0 && (
                  <Box
                    sx={{
                      mt: 3,
                      pt: 3,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#00d4aa",
                        fontWeight: 700,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <LocalShipping sx={{ fontSize: 20 }} />
                      Payment Methods
                    </Typography>
                    <Stack direction="row" spacing={2} flexWrap="wrap">
                      {deal.payments.map((payment) => (
                        <Box
                          key={payment.id}
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "8px",
                            overflow: "hidden",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(255, 255, 255, 0.05)",
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={payment.payment_link}
                            alt={payment.payment}
                            title={payment.payment}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                            loading="lazy"
                          />
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  );
}
