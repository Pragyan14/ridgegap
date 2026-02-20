/*
  Warnings:

  - You are about to drop the column `title` on the `product_pages` table. All the data in the column will be lost.
  - Made the column `h2` on table `product_pages` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "product_pages" DROP COLUMN "title",
ALTER COLUMN "h2" SET NOT NULL;
