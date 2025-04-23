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
    "userId" TEXT NOT NULL
);
INSERT INTO "new_MediaRecord" ("comment", "createdAt", "id", "mediaType", "rating", "title", "updatedAt", "userId") SELECT "comment", "createdAt", "id", "mediaType", "rating", "title", "updatedAt", "userId" FROM "MediaRecord";
DROP TABLE "MediaRecord";
ALTER TABLE "new_MediaRecord" RENAME TO "MediaRecord";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
