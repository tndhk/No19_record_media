import { getAllMediaRecords } from '@/dal/media'
import { MediaList } from '@/components/features/media/MediaList'

export default async function Home() {
  // メディアの一覧を取得
  const mediaRecords = await getAllMediaRecords()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">メディア一覧</h2>
      </div>
      <MediaList initialMediaRecords={mediaRecords} />
    </div>
  )
}
