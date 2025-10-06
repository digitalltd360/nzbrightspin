"use client";
import { PropsWithChildren } from "react";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import Header from "@/shared/ui/layout/Header";
import Footer from "@/shared/ui/layout/Footer";
import CookieBanner from "@/shared/ui/layout/CookieBanner";
import AgeGateDialog from "@/shared/ui/layout/AgeGateDialog";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 0, 128, 0.03) 0%, transparent 50%),
            linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)
          `,
          zIndex: 0,
          animation: "backgroundShift 20s ease-in-out infinite",
          "@keyframes backgroundShift": {
            "0%, 100%": {
              background: `
                radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255, 0, 128, 0.03) 0%, transparent 50%),
                linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)
              `,
            },
            "50%": {
              background: `
                radial-gradient(circle at 80% 80%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 60% 60%, rgba(255, 0, 128, 0.03) 0%, transparent 50%),
                linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)
              `,
            },
          },
        },
        "&::after": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='15' cy='15' r='0.5'/%3E%3Ccircle cx='45' cy='45' r='0.5'/%3E%3Ccircle cx='15' cy='45' r='0.3'/%3E%3Ccircle cx='45' cy='15' r='0.3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
          zIndex: 0,
          animation: "patternMove 30s linear infinite",
          "@keyframes patternMove": {
            "0%": { transform: "translate(0, 0)" },
            "100%": { transform: "translate(60px, 60px)" },
          },
        },
      }}
    >
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <main>
          <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </Container>
        </main>
        <Footer />
      </Box>
      <CookieBanner />
      <AgeGateDialog />
    </Box>
  );
}
