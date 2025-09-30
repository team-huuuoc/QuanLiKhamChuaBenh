/*
  Warnings:

  - You are about to drop the column `avatar` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_phoneNumber_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "avatar",
DROP COLUMN "dateOfBirth",
DROP COLUMN "gender",
DROP COLUMN "phoneNumber",
ADD COLUMN     "department" TEXT,
ADD COLUMN     "lastLogin" TEXT,
ADD COLUMN     "status" "EmploymentStatus" NOT NULL DEFAULT 'ACTIVE';
