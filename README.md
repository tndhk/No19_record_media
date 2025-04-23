# メディア記録アプリ

本、映画、ドラマなどのメディアを記録・管理できるアプリケーションです。

## 機能

- ユーザー認証（シンプルなIDベース）
- メディア記録の作成・閲覧・削除
- 個人ごとのデータ管理

## 技術スタック

- Next.js
- TypeScript
- Prisma ORM
- Tailwind CSS
- SQLite（開発環境）/ PostgreSQL（本番環境）

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone <repository-url>
cd record_media

# 依存パッケージのインストール
npm install

# 環境変数の設定
cp .env.example .env.local

# データベースのマイグレーション
npx prisma migrate dev

# 開発サーバーの起動
npm run dev
```

## Vercelへのデプロイ

### 環境変数の設定

Vercelのプロジェクト設定で以下の環境変数を設定してください：

- `DATABASE_PROVIDER`: `postgresql`
- `DATABASE_URL`: PostgreSQLデータベースの接続URL

### デプロイコマンド

```bash
vercel
```

または、GitHubリポジトリをVercelと連携して自動デプロイを設定することもできます。

### データベースのセットアップ

1. Vercel Postgresを使用する場合：
   - Vercelダッシュボードから新しいPostgresデータベースを作成
   - 作成されたデータベースの接続情報を環境変数に設定

2. 外部PostgreSQLを使用する場合：
   - 接続URLを`DATABASE_URL`環境変数に設定

### マイグレーションの実行

デプロイ後、以下のコマンドを実行してデータベースにマイグレーションを適用します：

```bash
vercel run npx prisma migrate deploy
```

## 注意事項

- 認証システムはシンプルなIDベースで、本番環境での使用は推奨されません
- 必要に応じて、Clerk, Auth0などの強固な認証システムへの移行を検討してください

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
