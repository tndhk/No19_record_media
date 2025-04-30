'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/common/buttons/Button'
import { signOut } from '@/lib/auth'
import { handleSignOut } from '@/app/actions'
import { useEffect, useState } from 'react'

export const Header = () => {
  const router = useRouter()
  const [userId, setUserId] = useState<string | null>(null)
  
  // クライアントサイドでのみlocalStorageにアクセス
  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id')
    setUserId(storedUserId)
  }, [])

  const onSignOut = async () => {
    // サーバーサイドでCookieを削除
    await handleSignOut()
    
    // クライアントサイドのストレージも削除
    signOut()
    
    // リロード
    router.push('/')
    router.refresh()
  }

  return (
    <header className="bg-background border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          メディア記録アプリ
        </Link>
        
        <div>
          {userId ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                ユーザー: {userId}
              </span>
              <Button variant="outline" size="sm" onClick={onSignOut}>
                ログアウト
              </Button>
            </div>
          ) : (
            <Button variant="default" size="sm" asChild>
              <Link href="/login">ログイン</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
} 