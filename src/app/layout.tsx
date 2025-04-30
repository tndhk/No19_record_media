import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "メディアログ",
  description: "本、映画、ドラマの記録アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 環境変数がない場合はダミーの値を使用
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_dummy-key";
  
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <html lang="ja" suppressHydrationWarning>
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <header className="border-b">
              <div className="container mx-auto p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">メディアログ</h1>
                <UserButton afterSignOutUrl="/" />
              </div>
            </header>
            <main className="flex-1 container mx-auto p-4 md:p-6">
              {children}
            </main>
            <footer className="border-t py-4">
              <div className="container mx-auto p-4">
                <p className="text-sm text-center text-muted-foreground">
                  © {new Date().getFullYear()} メディアログ
                </p>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
