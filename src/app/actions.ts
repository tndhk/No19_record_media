'use server'

import { revalidatePath } from 'next/cache'
import { createMediaRecord, deleteMediaRecord } from '@/dal/media'
import type { CreateMediaRecordInput } from '@/dal/media'
import { validateMediaRecord } from '@/lib/utils/validation/media'

export async function createMedia(formData: CreateMediaRecordInput) {
  // バリデーション
  const errors = validateMediaRecord(formData)
  if (errors.length > 0) {
    return { success: false, errors }
  }

  try {
    // データベースに保存
    await createMediaRecord(formData)
    
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
  try {
    // データベースから削除
    await deleteMediaRecord(id)
    
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