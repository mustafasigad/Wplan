/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Wplan',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/Wplan/',
}

module.exports = nextConfig;
