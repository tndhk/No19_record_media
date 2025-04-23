import { PrismaClient } from '@/generated/prisma'

// PrismaClientのインスタンスをグローバルに保持
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// 環境ごとの接続設定
const getPrismaClient = () => {
  const client = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
  
  return client
}

// PrismaClientは開発中にホットリロードで複数のインスタンスが作成されるのを防ぐ
export const prisma = global.prisma || getPrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma 