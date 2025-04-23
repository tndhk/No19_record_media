import { WebhookEvent } from '@clerk/nextjs/server'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { Webhook } from 'svix'

export async function POST(req: Request) {
  // Webhookのシークレットを取得
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    console.error('CLERK_WEBHOOK_SECRET is not set')
    return new Response('Webhook secret not set', { status: 500 })
  }

  // リクエストボディを取得
  const payload = await req.json()
  const headersList = headers()
  const svix_id = headersList.get('svix-id')
  const svix_timestamp = headersList.get('svix-timestamp')
  const svix_signature = headersList.get('svix-signature')

  // ヘッダーが欠けている場合、エラーを返す
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 })
  }

  // ウェブフックを検証
  const wh = new Webhook(WEBHOOK_SECRET)
  let evt: WebhookEvent

  try {
    evt = wh.verify(JSON.stringify(payload), {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }

  // イベントタイプに基づいて処理
  const eventType = evt.type
  console.log(`Webhook received: ${eventType}`)

  // ユーザー作成イベントやその他のイベントを処理できます
  switch (eventType) {
    case 'user.created':
      // ユーザー作成時の処理
      console.log('User created:', evt.data)
      break
    
    case 'user.deleted':
      // ユーザー削除時の処理
      console.log('User deleted:', evt.data)
      break
      
    default:
      console.log('Unhandled webhook event type:', eventType)
  }

  return NextResponse.json({ success: true })
} 