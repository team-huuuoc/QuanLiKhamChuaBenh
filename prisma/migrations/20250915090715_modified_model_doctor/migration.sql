/*
  Warnings:

  - You are about to drop the column `medical_record_id` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `reference_range` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `result_date` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `result_time` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `result_unit` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `reviewed_by_id` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `sample_collected_by` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `sample_date` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `sample_time` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `specimen_id` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `technician_id` on the `test_results` table. All the data in the column will be lost.
  - You are about to drop the column `test_type_id` on the `test_results` table. All the data in the column will be lost.
  - Added the required column `sampleDate` to the `test_results` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testTypeId` to the `test_results` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "test_results" DROP CONSTRAINT "test_results_medical_record_id_fkey";

-- DropForeignKey
ALTER TABLE "test_results" DROP CONSTRAINT "test_results_reviewed_by_id_fkey";

-- DropForeignKey
ALTER TABLE "test_results" DROP CONSTRAINT "test_results_specimen_id_fkey";

-- DropForeignKey
ALTER TABLE "test_results" DROP CONSTRAINT "test_results_technician_id_fkey";

-- DropForeignKey
ALTER TABLE "test_results" DROP CONSTRAINT "test_results_test_type_id_fkey";

-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "address" TEXT,
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "certificate" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "positions" TEXT,
ADD COLUMN     "qualificationLevel" TEXT,
ADD COLUMN     "startDateOfWork" TIMESTAMP(3),
ALTER COLUMN "specialty" DROP NOT NULL,
ALTER COLUMN "department" DROP NOT NULL;

-- AlterTable
ALTER TABLE "test_results" DROP COLUMN "medical_record_id",
DROP COLUMN "reference_range",
DROP COLUMN "result_date",
DROP COLUMN "result_time",
DROP COLUMN "result_unit",
DROP COLUMN "reviewed_by_id",
DROP COLUMN "sample_collected_by",
DROP COLUMN "sample_date",
DROP COLUMN "sample_time",
DROP COLUMN "specimen_id",
DROP COLUMN "technician_id",
DROP COLUMN "test_type_id",
ADD COLUMN     "medicalRecordId" INTEGER,
ADD COLUMN     "referenceRange" TEXT,
ADD COLUMN     "resultDate" TIMESTAMP(3),
ADD COLUMN     "resultTime" TEXT,
ADD COLUMN     "resultUnit" TEXT,
ADD COLUMN     "sampleDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sampleTime" TEXT,
ADD COLUMN     "specimenId" INTEGER,
ADD COLUMN     "testTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_medicalRecordId_fkey" FOREIGN KEY ("medicalRecordId") REFERENCES "MedicalRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_testTypeId_fkey" FOREIGN KEY ("testTypeId") REFERENCES "test_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_specimenId_fkey" FOREIGN KEY ("specimenId") REFERENCES "test_specimens"("id") ON DELETE SET NULL ON UPDATE CASCADE;
