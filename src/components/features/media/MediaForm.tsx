'use client'

import { useState, useTransition } from 'react'
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

export function MediaForm({ onSubmit, onCancel }: MediaFormProps) {
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<CreateMediaRecordInput>({
    mediaType: '',
    title: '',
    rating: 0,
    comment: ''
  })

  const handleChange = (
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
  }

  const validate = (): boolean => {
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
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    startTransition(async () => {
      try {
        await onSubmit(formData)
      } catch (error) {
        console.error('保存中にエラーが発生しました:', error)
      }
    })
  }

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
            onChange={(value) => handleChange('mediaType', value)}
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
            onChange={(e) => handleChange('title', e.target.value)}
            error={errors.title}
          />
        </div>

        <div>
          <label className="text-sm font-medium leading-none mb-2 block">
            評価
          </label>
          <StarRating
            onChange={(rating) => handleChange('rating', rating)}
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
            onChange={(e) => handleChange('comment', e.target.value)}
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