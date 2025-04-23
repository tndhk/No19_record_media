'use client'

import { useState } from 'react'
import { Button } from '@/components/common/buttons/Button'
import { Input } from '@/components/common/forms/Input'
import { useRouter } from 'next/navigation'
import { signIn } from '@/lib/auth'
import { handleSignIn } from '@/app/actions'

export const SignInForm = () => {
  const [userId, setUserId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!userId.trim()) {
      setError('ユーザーIDを入力してください')
      return
    }
    
    setIsLoading(true)
    setError('')
    
    try {
      // サーバーサイドでCookieを設定
      const result = await handleSignIn(userId)
      
      if (result.success) {
        // クライアントサイドのストレージにも保存
        signIn(userId)
        router.push('/')
        router.refresh()
      } else {
        setError('ログインに失敗しました')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('エラーが発生しました')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="userId" className="block text-sm font-medium mb-1">
          ユーザーID
        </label>
        <Input
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="ユーザーIDを入力"
          disabled={isLoading}
          error={error}
        />
        <p className="mt-1 text-sm text-gray-500">
          任意のIDを入力してください。このデモでは実際の認証は行いません。
        </p>
      </div>
      
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'ログイン中...' : 'ログイン'}
      </Button>
    </form>
  )
} 