
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/Fun2',
  assetPrefix: '/Fun2/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
