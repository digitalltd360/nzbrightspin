import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import AppThemeProvider from "@/app/providers/ThemeProvider";
import StoreProvider from "@/app/providers/StoreProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AppLayout from "@/shared/ui/layout/AppLayout";
import DirectionProvider from "@/components/DirectionProvider";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const nakedLayout = router.pathname === "/table";
  return (
    <LanguageProvider>
      <DirectionProvider>
        <StoreProvider>
          <AppThemeProvider>
            <DefaultSeo
              titleTemplate="%s | Bright Spin"
              defaultTitle="Bright Spin — منصة الألعاب الرقمية الرائدة في الخليج العربي"
              description="مرحباً بك في Bright Spin! اكتشف أحدث تجارب الألعاب والعروض الحصرية والترفيه المتميز في الخليج العربي. وجهتك المثلى للألعاب الرقمية!"
              openGraph={{
                type: "website",
                locale: "en_US",
                siteName: "Bright Spin",
                url: "https://digitaldramasstation.site",
                title:
                  "Bright Spin - منصة الألعاب الرقمية الرائدة في الخليج العربي",
                description:
                  "انضم إلى آلاف اللاعبين في الخليج العربي! أحدث الألعاب والعروض الحصرية وتجارب الألعاب المتميزة للجميع.",
                images: [
                  {
                    url: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1200&h=630&fit=crop&crop=center",
                    width: 1200,
                    height: 630,
                    alt: "Bright Spin - منصة الألعاب الرقمية",
                  },
                ],
              }}
              additionalMetaTags={[
                {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                },
                { name: "theme-color", content: "#003791" },
                {
                  name: "keywords",
                  content:
                    "ألعاب, ألعاب رقمية, PlayStation, PS5, PS4, الخليج العربي, دبي, أبوظبي, ألعاب فيديو, ألعاب كونسول, عروض حصرية, متجر ألعاب",
                },
                { name: "author", content: "Bright Spin" },
                { name: "robots", content: "index, follow" },
                { name: "language", content: "Arabic" },
                { name: "geo.region", content: "AE" },
                { name: "geo.country", content: "UAE" },
                { name: "geo.placename", content: "Dubai" },
              ]}
            />
            {nakedLayout ? (
              <Component {...pageProps} />
            ) : (
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            )}
          </AppThemeProvider>
        </StoreProvider>
      </DirectionProvider>
    </LanguageProvider>
  );
}
