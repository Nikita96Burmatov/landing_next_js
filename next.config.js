/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join("./src/scss", "styles")],
  },
};

module.exports = nextConfig;
