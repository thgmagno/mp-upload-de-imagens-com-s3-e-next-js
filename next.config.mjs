/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'mp-codante-foto-upload.s3.eu-north-1.amazonaws.com',
      },
    ],
  },
}

export default nextConfig
