'use client'

import { useMemo, useState, memo } from 'react'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'
import { RATING_MAX } from '@/lib/constants/media'

type StarRatingProps = {
  defaultValue?: number
  onChange?: (rating: number) => void
  className?: string
  readOnly?: boolean
  error?: string
}

const StarRatingComponent = ({
  defaultValue = 0,
  onChange,
  className,
  readOnly = false,
  error
}: StarRatingProps) => {
  const [rating, setRating] = useState(defaultValue)
  const [hoverRating, setHoverRating] = useState(0)

  const handleRatingChange = (newRating: number) => {
    if (readOnly) return
    setRating(newRating)
    onChange?.(newRating)
  }

  // レンダリングのたびに配列を生成しないように、useMemoでメモ化
  const stars = useMemo(() => 
    Array.from({ length: RATING_MAX }, (_, i) => i + 1),
  [])

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex">
        {stars.map((star) => (
          <Star
            key={star}
            size={24}
            className={cn(
              'cursor-pointer transition-colors',
              (hoverRating || rating) >= star
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-transparent text-gray-300',
              readOnly && 'cursor-default'
            )}
            onClick={() => handleRatingChange(star)}
            onMouseEnter={() => !readOnly && setHoverRating(star)}
            onMouseLeave={() => !readOnly && setHoverRating(0)}
          />
        ))}
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  )
}

// memoでコンポーネントをラップして不要な再レンダリングを防止
export const StarRating = memo(StarRatingComponent) 