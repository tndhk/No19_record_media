'use server'

import { revalidatePath } from 'next/cache'
import { createMediaRecord, deleteMediaRecord } from '@/dal/media'
import type { CreateMediaRecordInput } from '@/dal/media'
import { validateMediaRecord } from '@/lib/utils/validation/media'
import { cookies } from 'next/headers'

const USER_ID_COOKIE = 'user_id'

// サーバーサイドで認証情報を取得
function getServerAuth() {
  const cookieStore = cookies()
  const userId = cookieStore.get(USER_ID_COOKIE)?.value

  return {
    userId: userId || null,
    isSignedIn: !!userId
  }
}

export async function createMedia(formData: Omit<CreateMediaRecordInput, 'userId'>) {
  // ユーザー認証チェック
  const { userId } = getServerAuth()
  if (!userId) {
    return { 
      success: false, 
      errors: [{ field: 'auth', message: '認証が必要です' }] 
    }
  }

  const dataWithUserId = { ...formData, userId }

  // バリデーション
  const errors = validateMediaRecord(dataWithUserId)
  if (errors.length > 0) {
    return { success: false, errors }
  }

  try {
    // データベースに保存
    await createMediaRecord(dataWithUserId)
    
    // キャッシュをクリア
    revalidatePath('/')
    
    return { success: true }
  } catch (error) {
    console.error('メディア作成エラー:', error)
    return { 
      success: false, 
      errors: [{ field: 'general', message: 'メディア情報の保存中にエラーが発生しました' }] 
    }
  }
}

export async function deleteMedia(id: number) {
  // ユーザー認証チェック
  const { userId } = getServerAuth()
  if (!userId) {
    return { 
      success: false, 
      message: '認証が必要です' 
    }
  }

  try {
    // データベースから削除 (ユーザーIDを含めて所有権チェック)
    const result = await deleteMediaRecord(id, userId)
    
    if (!result) {
      return {
        success: false,
        message: 'メディア情報の削除権限がないか、既に削除されています'
      }
    }
    
    // キャッシュをクリア
    revalidatePath('/')
    
    return { success: true }
  } catch (error) {
    console.error('メディア削除エラー:', error)
    return { 
      success: false, 
      message: 'メディア情報の削除中にエラーが発生しました' 
    }
  }
}

// サインイン処理
export async function handleSignIn(userId: string) {
  const cookieStore = cookies()
  cookieStore.set(USER_ID_COOKIE, userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30, // 30日
    path: '/'
  })
  
  revalidatePath('/')
  return { success: true, userId }
}

// サインアウト処理
export async function handleSignOut() {
  const cookieStore = cookies()
  cookieStore.delete(USER_ID_COOKIE)
  
  revalidatePath('/')
  return { success: true }
} 