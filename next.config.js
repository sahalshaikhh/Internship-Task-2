/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  poweredByHeader: false,
  swcMinify: true,
  compress: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["*"],
  },
};

module.exports = nextConfig;
