/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: この設定は本番環境では有効にしない方が良いです
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 