-- DropTable (SQLiteからの既存のテーブルがあれば削除)
DROP TABLE IF EXISTS "MediaRecord";

-- CreateTable
CREATE TABLE "MediaRecord" (
  "id" SERIAL NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "mediaType" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "rating" INTEGER NOT NULL,
  "comment" TEXT,
  "userId" TEXT NOT NULL,
  
  CONSTRAINT "MediaRecord_pkey" PRIMARY KEY ("id")
); 