import { prisma } from '@/lib/prisma'
import type { MediaRecord } from '@/generated/prisma'
import { isDBConfigured } from '@/lib/database'
import { Prisma } from '@/generated/prisma'

export type CreateMediaRecordInput = {
  mediaType: string
  title: string
  rating: number
  comment?: string | null
  userId: string
}

// モックデータ (データベース接続がない場合のフォールバック)
const mockMediaRecords: MediaRecord[] = [
  {
    id: 1,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
    mediaType: 'Book',
    title: 'サンプルブック',
    rating: 4,
    comment: 'これはサンプルデータです',
    userId: 'anonymous_user'
  }
]

// すべてのメディア記録を取得（最新順）
export async function getAllMediaRecords(userId: string): Promise<MediaRecord[]> {
  if (!isDBConfigured()) {
    console.warn('DATABASE_URL is not configured. Cannot fetch media records.')
    return []
  }

  try {
    return await prisma.mediaRecord.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error(`Failed to fetch media records for user ${userId}:`, error)
    return []
  }
}

// 特定のメディア記録を取得
export async function getMediaRecord(id: number, userId: string): Promise<MediaRecord | null> {
  if (!isDBConfigured()) {
    console.warn('DATABASE_URL is not configured. Cannot fetch media record.')
    return null
  }

  try {
    return await prisma.mediaRecord.findFirst({
      where: { id, userId }
    })
  } catch (error) {
    console.error(`Failed to fetch media record with id ${id} for user ${userId}:`, error)
    return null
  }
}

// 新しいメディア記録を作成
export async function createMediaRecord(data: CreateMediaRecordInput): Promise<MediaRecord | null> {
  if (!isDBConfigured()) {
    console.warn('Cannot create media record: DATABASE_URL is not configured')
    return null
  }

  try {
    return await prisma.mediaRecord.create({
      data
    })
  } catch (error) {
    console.error('Failed to create media record:', error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error(`Prisma Error Code: ${error.code}`);
    }
    return null
  }
}

// メディア記録を削除
export async function deleteMediaRecord(id: number, userId: string): Promise<{ count: number } | null> {
  if (!isDBConfigured()) {
    console.warn(`Cannot delete media record with id ${id}: DATABASE_URL is not configured`)
    return null
  }

  try {
    const deleteResult = await prisma.mediaRecord.deleteMany({
      where: { id, userId }
    })

    if (deleteResult.count === 0) {
        console.warn(`Record with id ${id} not found or user ${userId} does not have permission to delete.`)
        return { count: 0 };
    }

    return deleteResult
  } catch (error) {
    console.error(`Failed to delete media record with id ${id} for user ${userId}:`, error)
    return null
  }
}

// メディア記録の総数を取得
export async function getMediaRecordsCount(userId: string): Promise<number> {
  if (!isDBConfigured()) {
    console.warn('DATABASE_URL is not configured. Cannot count media records.')
    return 0
  }

  try {
    return await prisma.mediaRecord.count({
      where: { userId }
    })
  } catch (error) {
    console.error(`Failed to count media records for user ${userId}:`, error)
    return 0
  }
} 