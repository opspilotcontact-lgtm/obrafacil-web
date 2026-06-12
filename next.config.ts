import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/obrafacil-web',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
