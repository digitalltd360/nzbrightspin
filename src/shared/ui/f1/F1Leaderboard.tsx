"use client";
import React from "react";
import { Box, Typography, Avatar, Chip, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";

interface Driver {
  position: number;
  name: string;
  team: string;
  points: number;
  avatar: string;
  country: string;
  isCurrentUser?: boolean;
}

interface F1LeaderboardProps {
  drivers: Driver[];
  title?: string;
  maxPoints?: number;
}

export const F1Leaderboard: React.FC<F1LeaderboardProps> = ({
  drivers,
  title = "Kuljettajien Sijoitukset",
  maxPoints = 100,
}) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.95))",
        borderRadius: 3,
        border: "1px solid rgba(255, 0, 0, 0.3)",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(45deg, #ff0000, #cc0000)",
          p: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ p: 2 }}>
        {drivers.map((driver, index) => (
          <motion.div
            key={driver.position}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                mb: 1,
                borderRadius: 2,
                background: driver.isCurrentUser
                  ? "linear-gradient(45deg, rgba(255, 0, 0, 0.2), rgba(255, 100, 100, 0.1))"
                  : "rgba(255, 255, 255, 0.05)",
                border: driver.isCurrentUser
                  ? "2px solid #ff0000"
                  : "1px solid transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 0, 0, 0.1)",
                  transform: "translateX(8px)",
                },
              }}
            >
              {/* Position */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background:
                    driver.position <= 3
                      ? "linear-gradient(45deg, #ffd700, #ffed4e)"
                      : "linear-gradient(45deg, #666, #999)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  fontWeight: 900,
                  color: driver.position <= 3 ? "#000" : "#fff",
                  fontSize: "1.2rem",
                }}
              >
                {driver.position}
              </Box>

              {/* Avatar */}
              <Avatar
                src={driver.avatar}
                sx={{
                  width: 50,
                  height: 50,
                  mr: 2,
                  border: "2px solid #ff0000",
                }}
              />

              {/* Driver Info */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    mb: 0.5,
                  }}
                >
                  {driver.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    mb: 1,
                  }}
                >
                  {driver.team} • {driver.country}
                </Typography>

                {/* Points Progress */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={(driver.points / maxPoints) * 100}
                    sx={{
                      flex: 1,
                      height: 6,
                      borderRadius: 3,
                      background: "rgba(255, 255, 255, 0.1)",
                      "& .MuiLinearProgress-bar": {
                        background: "linear-gradient(45deg, #ff0000, #ff6666)",
                        borderRadius: 3,
                      },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#ff0000",
                      fontWeight: 900,
                      fontFamily: "monospace",
                      minWidth: 60,
                      textAlign: "right",
                    }}
                  >
                    {driver.points}
                  </Typography>
                </Box>
              </Box>

              {/* Podium Indicator */}
              {driver.position <= 3 && (
                <Chip
                  label={
                    driver.position === 1
                      ? "🥇"
                      : driver.position === 2
                      ? "🥈"
                      : "🥉"
                  }
                  sx={{
                    background: "linear-gradient(45deg, #ffd700, #ffed4e)",
                    color: "#000",
                    fontWeight: 900,
                    fontSize: "1.2rem",
                  }}
                />
              )}
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};
