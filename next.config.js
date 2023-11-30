/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  transpilePackages: ['three'],
  sassOptions: {
    includePaths: [path.join("./src/scss", "styles")],
  },

};

module.exports = nextConfig;
