/*
  Warnings:

  - You are about to alter the column `publishedAt` on the `post` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `publishedAt` on the `post_comment` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `publishedAt` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `post_comment` MODIFY `publishedAt` DATETIME NOT NULL;
