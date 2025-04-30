import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// 公開ルート（認証不要）
const isPublicRoute = createRouteMatcher([
  // '/', // ホームページも保護する場合はコメントアウト
  '/login(.*)',
  '/sign-up(.*)',
  '/api/webhooks/clerk', // Clerk Webhook用（後で作成）
]);

export default clerkMiddleware(async (auth, req) => {
  // サインイン状態とサインインリダイレクト関数を取得
  const { userId, redirectToSignIn } = await auth();

  // 認証されていないユーザーが公開ルート以外にアクセスした場合、サインインページにリダイレクト
  if (!isPublicRoute(req) && !userId) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }
});

export const config = {
  // ミドルウェアを適用するルートを指定
  // 静的ファイル (_next/static, _next/image, favicon.ico) を除外
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}; 