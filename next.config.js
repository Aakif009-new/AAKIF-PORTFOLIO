const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: {
    unoptimized: true,
  },
  // outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
