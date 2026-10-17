import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/Fun2', // Contoh: /my-nextjs-app
  assetPrefix: '/Fun2/',
  allowedDevOrigins: ["192.168.100.152"],
};

export default nextConfig;
