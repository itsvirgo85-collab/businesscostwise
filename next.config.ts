import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  compress: true,
  // Serve images in modern formats (AVIF first, WebP fallback) and let
  // next/image generate responsive sizes; SVGs below are vector and tiny.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "getllccostcalculator.com" }],
        destination: "https://www.getllccostcalculator.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Immutable cache for versioned/static assets: images and icons are
        // fingerprinted by content, so a year-long cache is safe and makes
        // repeat visits effectively free.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
