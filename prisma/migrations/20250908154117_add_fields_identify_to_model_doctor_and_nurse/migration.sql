/*
  Warnings:

  - The primary key for the `Doctor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Doctor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Nurse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Nurse` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `doctorId` column on the `Patient` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `nurseId` column on the `Patient` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `identify` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identify` to the `Nurse` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_nurseId_fkey";

-- AlterTable
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_pkey",
ADD COLUMN     "identify" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Nurse" DROP CONSTRAINT "Nurse_pkey",
ADD COLUMN     "identify" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Nurse_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "doctorId",
ADD COLUMN     "doctorId" INTEGER,
DROP COLUMN "nurseId",
ADD COLUMN     "nurseId" INTEGER;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_id_fkey" FOREIGN KEY ("id") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_nurseId_fkey" FOREIGN KEY ("nurseId") REFERENCES "Nurse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
