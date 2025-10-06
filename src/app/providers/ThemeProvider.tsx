"use client";
import { PropsWithChildren, useMemo } from "react";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

export default function AppThemeProvider({ children }: PropsWithChildren) {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          primary: { main: "#007bff" },
          secondary: { main: "#ffc107" },
          background: { default: "#ffffff" },
          text: {
            primary: "#1a1a2e",
            secondary: "#6c757d",
          },
        },
        typography: {
          fontFamily: [
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "Noto Sans",
            "Apple Color Emoji",
            "Segoe UI Emoji",
          ].join(","),
        },
        shape: { borderRadius: 12 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: { textTransform: "none", fontWeight: 600 },
            },
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
