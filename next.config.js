/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Enable experimental features if needed
  experimental: {
    outputFileTracingIncludes: {
      '/': ['./src/content/**/*'],
    },
  },
}

module.exports = nextConfig
