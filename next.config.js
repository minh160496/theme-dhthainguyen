/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eaof.vn",
      },
    ],
  },
};

module.exports = nextConfig;
