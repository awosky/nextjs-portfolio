/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "src/styles/variables.module.scss";`,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
