"use client";
import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";

interface F1RaceTrackProps {
  circuitName: string;
  country: string;
  laps: number;
  distance: string;
  record: string;
  image: string;
  isActive?: boolean;
}

export const F1RaceTrack: React.FC<F1RaceTrackProps> = ({
  circuitName,
  country,
  laps,
  distance,
  record,
  image,
  isActive = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          background: `linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(0, 0, 0, 0.8))`,
          border: isActive
            ? "3px solid #ff0000"
            : "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: isActive
            ? "0 0 30px rgba(255, 0, 0, 0.5)"
            : "0 8px 32px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(255, 0, 0, 0.4)",
            borderColor: "#ff0000",
          },
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            height: 200,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(45deg, rgba(255, 0, 0, 0.3), rgba(0, 0, 0, 0.6))",
            },
          }}
        />

        {/* Content */}
        <Box sx={{ p: 3, position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  mb: 0.5,
                }}
              >
                {circuitName}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontWeight: 600,
                }}
              >
                {country}
              </Typography>
            </Box>

            {isActive && (
              <Chip
                label="LIVE"
                sx={{
                  background: "linear-gradient(45deg, #ff0000, #ff6666)",
                  color: "#fff",
                  fontWeight: 900,
                  animation: "pulse 2s ease-in-out",
                  "@keyframes pulse": {
                    "0%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                    "100%": { opacity: 1 },
                  },
                }}
              />
            )}
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              mb: 2,
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{ color: "rgba(255, 255, 255, 0.6)", display: "block" }}
              >
                Kierrokset
              </Typography>
              <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700 }}>
                {laps}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ color: "rgba(255, 255, 255, 0.6)", display: "block" }}
              >
                Matka
              </Typography>
              <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700 }}>
                {distance}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255, 255, 255, 0.6)", display: "block" }}
            >
              Rataennätys
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#ff0000",
                fontWeight: 600,
                fontFamily: "monospace",
              }}
            >
              {record}
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};
