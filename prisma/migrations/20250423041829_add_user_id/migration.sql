/*
  Warnings:

  - Added the required column `userId` to the `MediaRecord` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MediaRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "mediaType" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "userId" TEXT NOT NULL DEFAULT 'anonymous_user'
);
INSERT INTO "new_MediaRecord" ("comment", "createdAt", "id", "mediaType", "rating", "title", "updatedAt") SELECT "comment", "createdAt", "id", "mediaType", "rating", "title", "updatedAt" FROM "MediaRecord";
DROP TABLE "MediaRecord";
ALTER TABLE "new_MediaRecord" RENAME TO "MediaRecord";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
