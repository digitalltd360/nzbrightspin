import { GetStaticProps } from "next";

const Sitemap = () => null;

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://wrumspin.com";
  const staticPages = [
    { url: "", priority: "1.0", changefreq: "daily" },
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/games", priority: "0.9", changefreq: "weekly" },
    { url: "/play-now", priority: "0.9", changefreq: "daily" },
    { url: "/news", priority: "0.7", changefreq: "daily" },
    { url: "/game-history", priority: "0.7", changefreq: "monthly" },
    { url: "/contact", priority: "0.6", changefreq: "monthly" },
    { url: "/sisäänkirjautuminen", priority: "0.6", changefreq: "monthly" },
    { url: "/rekisteröinti", priority: "0.6", changefreq: "monthly" },
    { url: "/yksityisyyden-suojaus", priority: "0.5", changefreq: "yearly" },
    { url: "/palvelun-ehdot", priority: "0.5", changefreq: "yearly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n")}
</urlset>`;

  return {
    props: {
      sitemap,
    },
  };
};

export default Sitemap;
