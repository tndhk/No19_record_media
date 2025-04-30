import { getAllMediaRecords } from '@/dal/media'
import { MediaList } from '@/components/features/media/MediaList'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { Button } from '@/components/common/buttons/Button'
import type { MediaRecord } from '@/generated/prisma'

export default async function Home() {
  // ログイン中のユーザーを取得
  const user = await currentUser()
  // 取得したメディア記録の配列を型注釈
  let mediaRecords: MediaRecord[] = []
  if (user) {
    // ユーザーIDでフィルタリングしてメディア一覧を取得
    mediaRecords = await getAllMediaRecords(user.id)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">メディア一覧</h2>
        {user && (
          <Button asChild>
            <Link href="/">新しく記録する</Link>
          </Button>
        )}
      </div>
      {user ? (
        <MediaList initialMediaRecords={mediaRecords} />
      ) : (
        <div className="text-center py-12">
          <p>メディアを記録・管理するにはログインしてください。</p>
          <Button asChild className="mt-4">
            <Link href="/login">ログイン / 新規登録</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
