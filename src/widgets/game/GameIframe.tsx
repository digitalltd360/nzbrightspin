import { Box } from "@mui/material";

type Props = {
  src?: string;
  height?: number | string;
};

export default function GameIframe({
  src = "https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vswaysargonts&websiteUrl=https%3A%2F%2Fdemogamesfree.pragmaticplay.net&jurisdiction=99&lobby_url=https%3A%2F%2Fwww.pragmaticplay.com%2Fen%2F&lang=EN&cur=USD",
  height = "100%",
}: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "#000",
        border: "3px solid #ff0000",
        boxShadow: "0 0 30px rgba(255, 0, 0, 0.5)",
        "&:hover": {
          boxShadow: "0 0 50px rgba(255, 0, 0, 0.8)",
          transform: "scale(1.02)",
        },
        transition: "all 0.3s ease",
      }}
    >
      <Box
        component="iframe"
        src={src}
        title="Wrum Spin F1 Racing Game"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="autoplay; fullscreen; payment; microphone; camera"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height,
          border: "none",
        }}
      />
    </Box>
  );
}
