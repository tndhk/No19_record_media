import { getAllMediaRecords } from '@/dal/media'
import { MediaList } from '@/components/features/media/MediaList'
import { cookies } from 'next/headers'
import { Button } from '@/components/common/buttons/Button'
import Link from 'next/link'

export default async function Home() {
  // Cookieからユーザー情報を取得（await追加）
  const cookieStore = await cookies()
  const userId = cookieStore.get('user_id')?.value
  
  // ユーザーIDに紐づくメディアの一覧を取得
  const mediaRecords = await getAllMediaRecords(userId || undefined)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">メディア一覧</h2>
        </div>
        
        {userId ? (
          <MediaList initialMediaRecords={mediaRecords} />
        ) : (
          <div className="border rounded-lg p-8 text-center space-y-4">
            <h3 className="text-xl font-medium">ログインが必要です</h3>
            <p className="text-muted-foreground">
              メディアを記録・管理するにはログインしてください。
            </p>
            <Button asChild>
              <Link href="/sign-in">ログイン</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
