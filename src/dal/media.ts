import { prisma } from '@/lib/prisma'
import type { MediaRecord } from '@/generated/prisma'
import { isDBConfigured } from '@/lib/database'

export type CreateMediaRecordInput = {
  mediaType: string
  title: string
  rating: number
  comment?: string | null
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
    comment: 'これはサンプルデータです'
  }
]

// すべてのメディア記録を取得（最新順）
export async function getAllMediaRecords() {
  try {
    // データベース設定がない場合はモックデータを返す
    if (!isDBConfigured()) {
      console.warn('DATABASE_URL is not configured, using mock data')
      return mockMediaRecords
    }
    
    // 通常のデータベースクエリ
    return await prisma.mediaRecord.findMany({
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error('Failed to fetch media records:', error)
    // エラー時はモックデータを返す
    return mockMediaRecords
  }
}

// 特定のメディア記録を取得
export async function getMediaRecord(id: number) {
  if (!isDBConfigured()) {
    return mockMediaRecords.find(record => record.id === id) || null
  }

  try {
    return await prisma.mediaRecord.findUnique({
      where: { id }
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

// メディア記録を削除
export async function deleteMediaRecord(id: number) {
  if (!isDBConfigured()) {
    console.warn(`Cannot delete media record with id ${id}: DATABASE_URL is not configured`)
    return null
  }

  try {
    return await prisma.mediaRecord.delete({
      where: { id }
    })
  } catch (error) {
    console.error(`Failed to delete media record with id ${id}:`, error)
    return null
  }
}

// メディア記録の総数を取得
export async function getMediaRecordsCount() {
  if (!isDBConfigured()) {
    return mockMediaRecords.length
  }

  try {
    return await prisma.mediaRecord.count()
  } catch (error) {
    console.error('Failed to count media records:', error)
    return 0
  }
} 