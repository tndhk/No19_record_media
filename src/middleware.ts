import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 認証処理はServer ComponentとServer Actionsで行います 

// 簡易的なミドルウェア実装
export function middleware(request: NextRequest) {
  // ここで認証チェックなどを行うことができますが、
  // 今回はServer ComponentとServer Actionsで認証を処理するため、
  // パスの変更なしでリクエストを続行させます
  return NextResponse.next()
}

// 必要に応じて適用するパスを指定（省略可能）
export const config = {
  matcher: [
    // 認証が必要なパスを指定する場合
    // '/((?!api|_next/static|_next/image|favicon.ico|sign-in).*)'
  ],
} 