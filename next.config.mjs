// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Transform SVGs into React components
    });

    return config;
  },
};

export default nextConfig;
