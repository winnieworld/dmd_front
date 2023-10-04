/** @type {import('next').NextConfig} */
const nextConfig = {
  styledComponents: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  output: "export",
};

module.exports = nextConfig;
