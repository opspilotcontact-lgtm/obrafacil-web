import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/placas-decorativas-:city',
        destination: '/ciudad/:city',
      },
    ];
  },
};

export default nextConfig;
