import { NextResponse, NextRequest } from 'next/server';
import { verifyWebhook } from '@clerk/nextjs/webhooks';

export async function POST(request: NextRequest) {
  try {
    // Clerk Webhook の検証
    const evt = await verifyWebhook(request, { signingSecret: process.env.CLERK_WEBHOOK_SECRET! });
    console.log('Received Clerk webhook:', evt);
    // TODO: イベント種別に応じた処理を実装
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Webhook handler error:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }
} 