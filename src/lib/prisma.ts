import { PrismaClient, Prisma } from '@/generated/prisma'

// PrismaClientのインスタンスをグローバルに保持
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// 環境ごとの接続設定
const getPrismaClient = () => {
  // ログ設定を環境に応じて変更
  const logLevels: Prisma.LogLevel[] = process.env.NODE_ENV === 'development' 
    ? ['query', 'error', 'warn'] 
    : ['error']
    
  // クライアントの初期化
  const client = new PrismaClient({
    log: logLevels,
  })
  
  // デバッグ情報
  if (process.env.NODE_ENV === 'development') {
    console.log('データベース接続情報:')
    console.log(`- プロバイダ: ${process.env.DATABASE_PROVIDER || 'sqlite (デフォルト)'}`)
    console.log(`- 環境: ${process.env.NODE_ENV}`)
  }
  
  return client
}

// PrismaClientは開発中にホットリロードで複数のインスタンスが作成されるのを防ぐ
export const prisma = global.prisma || getPrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma 