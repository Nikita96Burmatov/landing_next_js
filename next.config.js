/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  transpilePackages: ['three'],
  sassOptions: {
    includePaths: [path.join("./src/scss", "styles")],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/3d/', // URL-путь для доступа к файлам
            outputPath: 'static/3d/', // Путь, куда файлы будут скопированы при сборке
            emitFile: !isServer, // Не создавать файлы на сервере
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
