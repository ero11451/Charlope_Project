import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    domains: ['nextjs.charifund.wowtheme7.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextjs.charifund.wowtheme7.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
