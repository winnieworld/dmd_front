/** @type {import('next').NextConfig} */
const nextConfig = {
  styledComponents: true,
  reactStrictMode: false,

  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  output: "export",
};

module.exports = nextConfig;
