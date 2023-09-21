/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nologin.dhthainguyen.edu.vn",
      },
    ],
  },
};

module.exports = nextConfig;
