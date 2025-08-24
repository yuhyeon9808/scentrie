import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
      allowedOrigins: ["http://localhost:3000", "https://scentrie.vercel.app"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yzdbdljwdutbxtjuieln.supabase.co",
        pathname: "/storage/v1/object/public/perfume/**",
      },
    ],
  },
};

export default nextConfig;
