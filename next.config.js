/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export para Netlify
  images: {
    unoptimized: true, // Necesario para static export
  },
  trailingSlash: true,
}

module.exports = nextConfig
