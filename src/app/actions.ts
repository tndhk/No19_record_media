'use server'

import { revalidatePath } from 'next/cache'
import { createMediaRecord, deleteMediaRecord } from '@/dal/media'
import type { CreateMediaRecordInput } from '@/dal/media'
import { validateMediaRecord } from '@/lib/utils/validation/media'
import { auth } from '@clerk/nextjs/server'

export async function createMedia(formData: Omit<CreateMediaRecordInput, 'userId'>) {
  const { userId } = await auth()

  if (!userId) {
    return { success: false, errors: [{ field: 'auth', message: '認証が必要です。ログインしてください。' }] }
  }

  // バリデーション用データにuserIdを追加
  const dataToValidate = { ...formData, userId }
  const errors = validateMediaRecord(dataToValidate)
  if (errors.length > 0) {
    return { success: false, errors }
  }

  try {
    // データベースに保存 (userIdを含むデータを渡す)
    const newRecord = await createMediaRecord(dataToValidate)
    if (!newRecord) {
      throw new Error('データベースへの保存に失敗しました。')
    }

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
  const { userId } = await auth()

  if (!userId) {
    // 未認証ユーザーによる削除リクエストは明確に失敗させる
    return { success: false, message: '認証が必要です。ログインしてください。' }
  }

  try {
    // データベースから削除 (userIdを渡して所有権を確認)
    const result = await deleteMediaRecord(id, userId)

    // deleteMediaRecordがnullを返す場合 (存在しない or 権限なし)
    if (!result || result.count === 0) {
      return {
        success: false,
        message: '削除対象のレコードが見つからないか、削除する権限がありません。'
      }
    }

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