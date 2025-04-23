'use client'

import { useState, useMemo, useCallback } from 'react'
import { MediaCard } from './MediaCard'
import { EmptyState } from './EmptyState'
import { MediaForm } from './MediaForm'
import { Button } from '@/components/common/buttons/Button'
import { PlusCircle, X } from 'lucide-react'
import { createMedia, deleteMedia } from '@/app/actions'
import type { MediaRecord } from '@/generated/prisma'
import type { MediaRecordData } from '@/lib/types/media'
import { MEDIA_TYPES } from '@/lib/constants/media'

type MediaListProps = {
  initialMediaRecords: MediaRecord[]
}

// Prismaの型をアプリの型に変換する関数
const convertToMediaRecordData = (record: MediaRecord): MediaRecordData => {
  return {
    ...record,
    mediaType: record.mediaType as any // 一時的な型アサーションで対応
  }
}

export function MediaList({ initialMediaRecords }: MediaListProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [mediaRecords, setMediaRecords] = useState<MediaRecord[]>(initialMediaRecords)

  // useCallbackでメモ化してコンポーネントの再レンダリング時に関数が再生成されるのを防ぐ
  const handleOpenForm = useCallback(() => {
    setIsFormOpen(true)
  }, [])

  const handleCloseForm = useCallback(() => {
    setIsFormOpen(false)
  }, [])

  const handleCreateMedia = useCallback(async (data: any) => {
    const result = await createMedia(data)
    if (result.success) {
      // 新しいデータを取得するためにページをリロード
      window.location.reload()
    }
    setIsFormOpen(false)
  }, [])

  const handleDeleteMedia = useCallback(async (id: number) => {
    const result = await deleteMedia(id)
    if (result.success) {
      // 削除成功時はクライアントサイドの状態も更新
      setMediaRecords(prevRecords => prevRecords.filter(record => record.id !== id))
    }
  }, [])

  // 変換されたメディアデータをメモ化
  const convertedMediaRecords = useMemo(() => 
    mediaRecords.map(record => convertToMediaRecordData(record)),
  [mediaRecords])

  // メディアが0件の場合は空の状態を表示
  if (mediaRecords.length === 0 && !isFormOpen) {
    return <EmptyState onClick={handleOpenForm} />
  }

  return (
    <div>
      {isFormOpen ? (
        <div className="bg-background border rounded-lg p-4 md:p-6 relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2"
            onClick={handleCloseForm}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">閉じる</span>
          </Button>
          <h3 className="text-lg font-semibold mb-4">新しいメディアを記録</h3>
          <MediaForm onSubmit={handleCreateMedia} onCancel={handleCloseForm} />
        </div>
      ) : (
        <>
          <Button onClick={handleOpenForm} className="gap-2 mb-4">
            <PlusCircle className="h-4 w-4" />
            <span>新しく記録する</span>
          </Button>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {convertedMediaRecords.map((media) => (
              <MediaCard 
                key={media.id} 
                media={media} 
                onDelete={handleDeleteMedia} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
} 