import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layouts/Header";

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
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
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
  );
}
