"use client";
import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

interface F1SpeedometerProps {
  speed: number;
  maxSpeed: number;
  label?: string;
  size?: number;
  color?: string;
}

export const F1Speedometer: React.FC<F1SpeedometerProps> = ({
  speed,
  maxSpeed,
  label = "KM/H",
  size = 120,
  color = "#ff0000",
}) => {
  const percentage = (speed / maxSpeed) * 100;
  // const circumference = 2 * Math.PI * (size / 2 - 10);
  // const strokeDasharray = circumference;
  // const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Box sx={{ position: "relative" }}>
          {/* Background Circle */}
          <CircularProgress
            variant="determinate"
            value={100}
            size={size}
            thickness={8}
            sx={{
              color: "rgba(255, 255, 255, 0.1)",
              position: "absolute",
            }}
          />

          {/* Speed Circle */}
          <CircularProgress
            variant="determinate"
            value={percentage}
            size={size}
            thickness={8}
            sx={{
              color: color,
              position: "absolute",
              filter: "drop-shadow(0 0 10px currentColor)",
            }}
          />

          {/* Center Content */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 900,
                textShadow: "0 0 20px currentColor",
                fontFamily: "monospace",
              }}
            >
              {speed}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {label}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};
