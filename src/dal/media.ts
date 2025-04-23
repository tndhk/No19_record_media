import { prisma } from '@/lib/prisma'
import type { MediaRecord } from '@/generated/prisma'
import { isDBConfigured } from '@/lib/database'

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

// すべてのメディア記録を取得（最新順・ユーザーID指定）
export async function getAllMediaRecords(userId?: string) {
  try {
    // データベース設定がない場合はモックデータを返す
    if (!isDBConfigured()) {
      console.warn('DATABASE_URL is not configured, using mock data')
      return userId 
        ? mockMediaRecords.filter(record => record.userId === userId)
        : mockMediaRecords
    }
    
    // 通常のデータベースクエリ
    return await prisma.mediaRecord.findMany({
      where: userId ? { userId } : undefined,
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error('Failed to fetch media records:', error)
    // エラー時はモックデータを返す
    return userId 
      ? mockMediaRecords.filter(record => record.userId === userId)
      : mockMediaRecords
  }
}

// 特定のメディア記録を取得（ユーザーIDによる制限付き）
export async function getMediaRecord(id: number, userId?: string) {
  if (!isDBConfigured()) {
    const record = mockMediaRecords.find(record => record.id === id)
    if (!record || (userId && record.userId !== userId)) return null
    return record
  }

  try {
    return await prisma.mediaRecord.findFirst({
      where: { 
        id,
        ...(userId ? { userId } : {})
      }
    })
  } catch (error) {
    console.error(`Failed to fetch media record with id ${id}:`, error)
    return null
  }
}

// 新しいメディア記録を作成
export async function createMediaRecord(data: CreateMediaRecordInput) {
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
    return null
  }
}

// メディア記録を削除（ユーザーIDによる所有権チェック付き）
export async function deleteMediaRecord(id: number, userId?: string) {
  if (!isDBConfigured()) {
    console.warn(`Cannot delete media record with id ${id}: DATABASE_URL is not configured`)
    return null
  }

  try {
    // 所有権チェック
    if (userId) {
      const record = await prisma.mediaRecord.findFirst({
        where: { id, userId }
      })
      if (!record) {
        console.warn(`User ${userId} does not have permission to delete record ${id}`)
        return null
      }
    }

    return await prisma.mediaRecord.delete({
      where: { id }
    })
  } catch (error) {
    console.error(`Failed to delete media record with id ${id}:`, error)
    return null
  }
}

// メディア記録の総数を取得（ユーザーIDでフィルタリング可能）
export async function getMediaRecordsCount(userId?: string) {
  if (!isDBConfigured()) {
    return userId 
      ? mockMediaRecords.filter(record => record.userId === userId).length
      : mockMediaRecords.length
  }

  try {
    return await prisma.mediaRecord.count({
      where: userId ? { userId } : undefined
    })
  } catch (error) {
    console.error('Failed to count media records:', error)
    return 0
  }
} 