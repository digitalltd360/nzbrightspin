"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
// import { dataRequest } from "@/shared/utilits/dataRequest";
import CardComponent from "@/shared/ui/table/CardComponent";
import { Deal } from "@/shared/types/deal";
import {
  Box,
  Container,
  Typography,
  Paper,
  CircularProgress,
  Fade,
} from "@mui/material";
import { motion } from "framer-motion";
import { SportsEsports, Star, TrendingUp } from "@mui/icons-material";

export default function TablePage() {
  const [data] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        // const d = await dataRequest();
        if (mounted) {
          //  setData(Array.isArray(d?.data) ? d.data : []);
          setLoading(false);
        }
      } catch {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Box
        sx={{
          minHeight: "100vh",
          background: `
            linear-gradient(135deg, 
              #1a1a1a 0%, 
              #2d2d2d 25%, 
              #1a1a1a 50%, 
              #000000 75%, 
              #1a1a1a 100%
            )
          `,
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
              radial-gradient(circle at 20% 20%, rgba(0, 55, 145, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(0, 112, 243, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(255, 107, 53, 0.05) 0%, transparent 50%)
            `,
            zIndex: 0,
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ position: "relative", zIndex: 1, py: 8 }}
        >
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <SportsEsports
                    sx={{
                      fontSize: 80,
                      color: "#0070f3",
                      filter: "drop-shadow(0 0 20px rgba(0, 112, 243, 0.5))",
                    }}
                  />
                </motion.div>
              </Box>

              <Typography
                variant="h1"
                fontWeight={900}
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                  background:
                    "linear-gradient(135deg, #003791, #0070f3, #ff6b35)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 30px rgba(0, 55, 145, 0.5)",
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                {/*   TOP CASINOS IN UAE IN 2025 */}
              </Typography>

              {/* Floating Elements */}
              <Box sx={{ position: "relative", mt: 6 }}>
                {[
                  { icon: <Star />, position: { top: "10%", left: "10%" } },
                  {
                    icon: <TrendingUp />,
                    position: { top: "20%", right: "15%" },
                  },
                  {
                    icon: <SportsEsports />,
                    position: { bottom: "30%", left: "5%" },
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    style={{
                      position: "absolute",
                      ...item.position,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#0070f3",
                        opacity: 0.3,
                        fontSize: "2rem",
                        filter: "drop-shadow(0 0 10px rgba(0, 112, 243, 0.3))",
                      }}
                    >
                      {item.icon}
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* Content Section */}
          <Fade in={!loading} timeout={1000}>
            <Box>
              {data && data.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Paper
                    elevation={24}
                    sx={{
                      background: `
                        linear-gradient(145deg, 
                          rgba(26, 26, 26, 0.9) 0%, 
                          rgba(45, 45, 45, 0.8) 50%, 
                          rgba(0, 0, 0, 0.9) 100%
                        )
                      `,
                      backdropFilter: "blur(20px)",
                      borderRadius: "24px",
                      border: "1px solid rgba(0, 112, 243, 0.2)",
                      p: { xs: 3, md: 6 },
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background:
                          "linear-gradient(90deg, #003791, #0070f3, #ff6b35)",
                      },
                    }}
                  >
                    <CardComponent data={data} />
                  </Paper>
                </motion.div>
              ) : loading ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 12,
                  }}
                >
                  <CircularProgress
                    size={60}
                    sx={{
                      color: "#0070f3",
                      mb: 3,
                      "& .MuiCircularProgress-circle": {
                        strokeLinecap: "round",
                      },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontWeight: 600,
                    }}
                  >
                    Loading gaming deals...
                  </Typography>
                </Box>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Paper
                    elevation={12}
                    sx={{
                      background: `
                        linear-gradient(145deg, 
                          rgba(26, 26, 26, 0.8) 0%, 
                          rgba(45, 45, 45, 0.6) 100%
                        )
                      `,
                      backdropFilter: "blur(10px)",
                      borderRadius: "20px",
                      border: "1px solid rgba(255, 107, 53, 0.2)",
                      p: 6,
                      textAlign: "center",
                    }}
                  >
                    <SportsEsports
                      sx={{
                        fontSize: 80,
                        color: "rgba(255, 107, 53, 0.5)",
                        mb: 3,
                      }}
                    />
                    <Typography
                      variant="h4"
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        mb: 2,
                        fontWeight: 700,
                      }}
                    >
                      No Deals Available
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontWeight: 400,
                      }}
                    >
                      Check back soon for exclusive gaming offers!
                    </Typography>
                  </Paper>
                </motion.div>
              )}
            </Box>
          </Fade>
        </Container>
      </Box>
    </>
  );
}
