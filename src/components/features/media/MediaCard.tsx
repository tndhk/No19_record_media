'use client'

import { BookOpen, Trash, Film, Tv } from 'lucide-react'
import { StarRating } from '@/components/common/forms/StarRating'
import { formatDateCompact } from '@/lib/utils/date/format'
import { MEDIA_TYPES } from '@/lib/constants/media'
import type { MediaRecordData } from '@/lib/types/media'
import { Button } from '@/components/common/buttons/Button'
import { memo, useState } from 'react'

type MediaCardProps = {
  media: MediaRecordData
  onDelete: (id: number) => Promise<void>
}

// メディアタイプに応じたアイコンを表示する関数
const getMediaIcon = (mediaType: string) => {
  switch (mediaType) {
    case MEDIA_TYPES.BOOK:
      return <BookOpen className="h-5 w-5" />
    case MEDIA_TYPES.MOVIE:
      return <Film className="h-5 w-5" />
    case MEDIA_TYPES.DRAMA:
      return <Tv className="h-5 w-5" />
    default:
      return <BookOpen className="h-5 w-5" />
  }
}

const MediaCardComponent = ({ media, onDelete }: MediaCardProps) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    try {
      setIsDeleting(true)
      await onDelete(media.id)
    } catch (error) {
      console.error('削除中にエラーが発生しました:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  // メディアアイコンを事前に取得
  const mediaIcon = getMediaIcon(media.mediaType)

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {mediaIcon}
              <span className="text-sm font-medium">{media.mediaType}</span>
              <span className="text-sm text-muted-foreground">
                {formatDateCompact(media.createdAt)}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{media.title}</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            <Trash className="h-4 w-4 text-destructive" />
            <span className="sr-only">削除</span>
          </Button>
        </div>

        <div className="mt-3">
          <StarRating readOnly defaultValue={media.rating} />
        </div>

        {media.comment && (
          <p className="mt-3 text-sm text-muted-foreground">{media.comment}</p>
        )}
      </div>
    </div>
  )
}

// React.memoでコンポーネントをラップして不要な再レンダリングを防止
export const MediaCard = memo(MediaCardComponent) 