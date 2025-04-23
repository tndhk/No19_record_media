'use client'

import { PlusCircle } from 'lucide-react'
import { Button } from '@/components/common/buttons/Button'

type EmptyStateProps = {
  onClick: () => void
}

export function EmptyState({ onClick }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center gap-6 min-h-[50vh]">
      <div className="space-y-3">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <PlusCircle className="h-10 w-10 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold">メディアの記録はありません</h3>
        <p className="text-muted-foreground">
          新しい本、映画、ドラマの記録を追加してください。
        </p>
      </div>
      <Button onClick={onClick} className="gap-2">
        <PlusCircle className="h-4 w-4" />
        <span>最初のエントリーを追加</span>
      </Button>
    </div>
  )
} 