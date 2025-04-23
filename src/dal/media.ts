import { prisma } from '@/lib/prisma'
import type { MediaRecord } from '@/generated/prisma'

export type CreateMediaRecordInput = {
  mediaType: string
  title: string
  rating: number
  comment?: string | null
}

// すべてのメディア記録を取得（最新順）
export async function getAllMediaRecords() {
  return prisma.mediaRecord.findMany({
    orderBy: { createdAt: 'desc' }
  })
}

// 新しいメディア記録を作成
export async function createMediaRecord(data: CreateMediaRecordInput) {
  return prisma.mediaRecord.create({
    data
  })
}

// メディア記録を削除
export async function deleteMediaRecord(id: number) {
  return prisma.mediaRecord.delete({
    where: { id }
  })
}

// メディア記録の総数を取得
export async function getMediaRecordsCount() {
  return prisma.mediaRecord.count()
} 