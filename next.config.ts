import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    // Required for a styled 404 page: the site has one root layout per language (app/(pt), app/(en)).
    globalNotFound: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
