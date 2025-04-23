'use client'

import { useState, useTransition, useCallback, memo } from 'react'
import { Input } from '@/components/common/forms/Input'
import { Textarea } from '@/components/common/forms/Textarea'
import { Button } from '@/components/common/buttons/Button'
import { RadioGroup } from '@/components/common/forms/RadioGroup'
import { StarRating } from '@/components/common/forms/StarRating'
import { MEDIA_TYPE_OPTIONS } from '@/lib/constants/media'
import type { CreateMediaRecordInput } from '@/dal/media'
import type { ValidationError } from '@/lib/utils/validation/media'

type MediaFormProps = {
  onSubmit: (data: CreateMediaRecordInput) => Promise<void>
  onCancel: () => void
}

const MediaFormComponent = ({ onSubmit, onCancel }: MediaFormProps) => {
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<CreateMediaRecordInput>({
    mediaType: '',
    title: '',
    rating: 0,
    comment: ''
  })

  // フィールド変更ハンドラをメモ化
  const handleChange = useCallback((
    field: keyof CreateMediaRecordInput,
    value: string | number
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // エラーメッセージをクリア
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }, [errors])

  // バリデーション関数をメモ化
  const validate = useCallback((): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = 'タイトルは必須です'
    }

    if (!formData.mediaType) {
      newErrors.mediaType = 'メディアタイプは必須です'
    }

    if (!formData.rating) {
      newErrors.rating = '評価は必須です'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  // フォーム送信ハンドラをメモ化
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    startTransition(async () => {
      try {
        await onSubmit(formData)
      } catch (error) {
        console.error('保存中にエラーが発生しました:', error)
      }
    })
  }, [formData, onSubmit, validate])

  // メディアタイプ変更ハンドラ
  const handleMediaTypeChange = useCallback((value: string) => {
    handleChange('mediaType', value)
  }, [handleChange])

  // タイトル変更ハンドラ
  const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange('title', e.target.value)
  }, [handleChange])

  // 評価変更ハンドラ
  const handleRatingChange = useCallback((rating: number) => {
    handleChange('rating', rating)
  }, [handleChange])

  // コメント変更ハンドラ
  const handleCommentChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange('comment', e.target.value)
  }, [handleChange])

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium leading-none mb-2 block">
            メディアタイプ
          </label>
          <RadioGroup
            name="mediaType"
            options={MEDIA_TYPE_OPTIONS}
            onChange={handleMediaTypeChange}
            error={errors.mediaType}
          />
        </div>

        <div>
          <label htmlFor="title" className="text-sm font-medium leading-none mb-2 block">
            タイトル
          </label>
          <Input
            id="title"
            placeholder="タイトルを入力"
            value={formData.title}
            onChange={handleTitleChange}
            error={errors.title}
          />
        </div>

        <div>
          <label className="text-sm font-medium leading-none mb-2 block">
            評価
          </label>
          <StarRating
            onChange={handleRatingChange}
            error={errors.rating}
          />
        </div>

        <div>
          <label htmlFor="comment" className="text-sm font-medium leading-none mb-2 block">
            コメント (任意)
          </label>
          <Textarea
            id="comment"
            placeholder="コメントを入力"
            value={formData.comment || ''}
            onChange={handleCommentChange}
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          キャンセル
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending ? '保存中...' : '保存'}
        </Button>
      </div>
    </form>
  )
}

// memoでコンポーネントをラップして不要な再レンダリングを防止
export const MediaForm = memo(MediaFormComponent) 