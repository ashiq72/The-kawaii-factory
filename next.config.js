/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
    domains: ["i.postimg.cc", "static.nike.com", "www.aarong.com"],
  },
};

module.exports = nextConfig;
