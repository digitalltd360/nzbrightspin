import {
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NextSeo } from "next-seo";

export default function TermsPage() {
  return (
    <>
      <NextSeo
        title="Terms & Conditions – Win Pokies"
        description="Understand the rules and responsibilities for using Win Pokies."
      />
      <Stack spacing={4}>
        {/* Заголовок */}
        <Typography
          variant="h2"
          fontWeight={900}
          sx={{
            background: "linear-gradient(135deg, #007bff, #ffc107, #dc3545)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(0, 123, 255, 0.3)",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          📋 TERMS & CONDITIONS 📋
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#007bff",
            textShadow: "0 0 20px rgba(0, 123, 255, 0.3)",
            fontWeight: 600,
          }}
        >
          Game rules and guidelines! ⚖️
        </Typography>

        {/* Введение */}
        <Typography sx={{ color: "#1a1a2e" }}>
          By using Win Pokies, you agree to these terms. Please review them
          carefully to understand your rights and responsibilities.
        </Typography>

        {/* Разделы условий */}
        <TermsSection title="Who can use Win Pokies">
          The service is available to users of all ages. Win Pokies is a safe
          technology platform that provides innovative solutions for everyone.
        </TermsSection>

        <TermsSection title="About the platform">
          Win Pokies is a safe technology experience. We offer AI, Blockchain,
          and Cloud solutions for business purposes.
        </TermsSection>

        <TermsSection title="Your responsibilities">
          <List dense>
            <ListItem>
              <ListItemText primary="Use the platform respectfully and responsibly." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Do not attempt to interfere with service functionality." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Do not upload offensive or unlawful content." />
            </ListItem>
          </List>
        </TermsSection>

        <TermsSection title="Accounts">
          If user accounts are available, Win Pokies reserves the right to
          remove or restrict access to users who violate these terms or
          applicable law.
        </TermsSection>

        <TermsSection title="Content updates & service availability">
          The service may change, update, or be temporarily unavailable without
          notice. We are not liable for loss of access, data, or features due to
          these changes.
        </TermsSection>

        <TermsSection title="Contact us">
          If you have questions about these terms or need assistance, please
          reach out via our{" "}
          <Typography component="span" color="secondary">
            <Link
              href="/contact"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              Contact page
            </Link>
          </Typography>
          .
        </TermsSection>
      </Stack>
    </>
  );
}

// 👇 Универсальный компонент аккордеона для условий
function TermsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Accordion
      disableGutters
      square={false}
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(0,123,255,0.05), rgba(255,193,7,0.05))",
        border: "1px solid rgba(0,0,0,0.1)",
        "& .MuiAccordionSummary-root": { bgcolor: "#ffffff" },
        "& .MuiAccordionDetails-root": { bgcolor: "#ffffff" },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#1a1a2e" }} />}
      >
        <Typography sx={{ color: "#1a1a2e", fontWeight: 600 }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ color: "#1a1a2e" }}>{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
