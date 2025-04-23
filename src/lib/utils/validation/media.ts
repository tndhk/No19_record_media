import { MEDIA_TYPES, RATING_MAX, RATING_MIN } from '@/lib/constants/media'
import type { CreateMediaRecordInput } from '@/dal/media'

export type ValidationError = {
  field: string
  message: string
}

export function validateMediaRecord(data: Partial<CreateMediaRecordInput>): ValidationError[] {
  const errors: ValidationError[] = []

  // タイトルのバリデーション
  if (!data.title?.trim()) {
    errors.push({ field: 'title', message: 'タイトルは必須です' })
  }

  // メディアタイプのバリデーション
  if (!data.mediaType) {
    errors.push({ field: 'mediaType', message: 'メディアタイプは必須です' })
  } else if (!Object.values(MEDIA_TYPES).includes(data.mediaType as any)) {
    errors.push({ field: 'mediaType', message: '無効なメディアタイプです' })
  }

  // 評価のバリデーション
  if (data.rating === undefined) {
    errors.push({ field: 'rating', message: '評価は必須です' })
  } else if (data.rating < RATING_MIN || data.rating > RATING_MAX) {
    errors.push({ 
      field: 'rating', 
      message: `評価は${RATING_MIN}から${RATING_MAX}の間で選択してください` 
    })
  }

  return errors
} 