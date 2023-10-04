/** @type {import('next').NextConfig} */
const nextConfig = {
  styledComponents: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  assetPrefix: "/nextjs13.3",
};

module.exports = nextConfig;
