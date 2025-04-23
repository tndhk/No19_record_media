import { PrismaClient } from '@/generated/prisma'

declare global {
  var prisma: PrismaClient | undefined
}

// PrismaClientは開発中にホットリロードで複数のインスタンスが作成されるのを防ぐ
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma 