const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Help Next.js find the correct workspace root when multiple lockfiles exist
  outputFileTracingRoot: process.cwd(),
} as unknown as import("next").NextConfig;

export default nextConfig;
