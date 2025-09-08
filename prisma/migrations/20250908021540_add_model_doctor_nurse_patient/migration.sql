/*
  Warnings:

  - The `status` column on the `Doctor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `Nurse` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "status",
ADD COLUMN     "status" "EmploymentStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Nurse" DROP COLUMN "status",
ADD COLUMN     "status" "EmploymentStatus" NOT NULL DEFAULT 'ACTIVE';
