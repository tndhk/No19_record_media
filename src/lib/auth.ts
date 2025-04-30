'use client'

import { redirect } from 'next/navigation'

// シンプルな認証機能（Clerkの代わり）
const USER_ID_KEY = 'user_id'

// 認証情報を取得
export function auth() {
  // クライアントサイドの場合のみlocal storageにアクセス
  const userId = typeof window !== 'undefined' 
    ? localStorage.getItem(USER_ID_KEY)
    : null

  return {
    userId,
    isSignedIn: !!userId
  }
}

// サインイン
export function signIn(userId: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(USER_ID_KEY, userId)
  }
}

// サインアウト
export function signOut() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(USER_ID_KEY)
  }
}

// 認証が必要なルートの保護
export function requireAuth() {
  const { userId } = auth()
  if (!userId) {
    redirect('/login')
  }
  return userId
}

// 認証済みユーザーはリダイレクト
export function redirectIfAuthenticated(redirectTo = '/') {
  const { isSignedIn } = auth()
  if (isSignedIn) {
    redirect(redirectTo)
  }
} 