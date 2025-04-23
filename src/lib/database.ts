/**
 * データベース接続に関するヘルパー関数
 */

/**
 * 環境変数が設定されているかどうかをチェック
 */
export function isDBConfigured(): boolean {
  return !!process.env.DATABASE_URL
}

/**
 * Vercel環境かどうかを判定
 */
export function isVercelEnvironment(): boolean {
  return !!process.env.VERCEL
}

/**
 * 開発環境かどうかを判定
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development'
} 