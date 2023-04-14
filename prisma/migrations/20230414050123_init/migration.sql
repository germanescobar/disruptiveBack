/*
  Warnings:

  - Changed the type of `type` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TypeUser" AS ENUM ('ADMIN', 'READER', 'CREATOR');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "type",
ADD COLUMN     "type" "TypeUser" NOT NULL;

-- DropEnum
DROP TYPE "typeUser";
