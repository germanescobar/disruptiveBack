/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Topic` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "topicName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Topic_name_key" ON "Topic"("name");
