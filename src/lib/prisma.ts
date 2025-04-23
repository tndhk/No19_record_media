import { PrismaClient } from '../generated/prisma'

// PrismaClientのグローバルインスタンス
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// 開発環境での複数インスタンス生成を防ぐ
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma 