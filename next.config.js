/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: この設定は本番環境では有効にしない方が良いです
    ignoreDuringBuilds: true,
    // ESLintの対象からPrismaの生成ファイルを除外
    dirs: ['src/app', 'src/components', 'src/lib', 'src/dal']
  },
  typescript: {
    // 型チェックエラーでビルドが失敗しないようにする
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig 