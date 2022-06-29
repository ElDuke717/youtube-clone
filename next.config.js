/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'bootcamp-nick.s3.us-east-1.amazonaws.com',
      'bootcamp-nick.s3.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
