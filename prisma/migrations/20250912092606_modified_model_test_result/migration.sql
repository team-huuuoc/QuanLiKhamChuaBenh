/*
  Warnings:

  - You are about to drop the `TestResult` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Interpretation" AS ENUM ('NORMAL', 'ABNORMAL_LOW', 'ABNORMAL_HIGH', 'CRITICAL', 'PENDING');

-- CreateEnum
CREATE TYPE "TestResultStatus" AS ENUM ('SAMPLE_COLLECTED', 'IN_PROGRESS', 'COMPLETED', 'REJECTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "SampleQuality" AS ENUM ('GOOD', 'ACCEPTABLE', 'POOR', 'REJECTED');

-- DropForeignKey
ALTER TABLE "TestResult" DROP CONSTRAINT "TestResult_medicalRecordId_fkey";

-- DropTable
DROP TABLE "TestResult";

-- CreateTable
CREATE TABLE "test_categories" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_types" (
    "id" BIGSERIAL NOT NULL,
    "categoryId" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "description" TEXT,
    "referenceRange" TEXT,
    "unit" TEXT,
    "normalValues" TEXT,
    "specimenType" TEXT,
    "processingTimeHours" INTEGER NOT NULL DEFAULT 24,
    "cost" DECIMAL(10,2),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_specimens" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "collection_instructions" TEXT,
    "storage_requirements" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_specimens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_results" (
    "id" BIGSERIAL NOT NULL,
    "medical_record_id" INTEGER,
    "test_type_id" BIGINT NOT NULL,
    "specimen_id" BIGINT,
    "sample_date" TIMESTAMP(3) NOT NULL,
    "sample_time" TEXT,
    "sample_collected_by" TEXT,
    "result_date" TIMESTAMP(3),
    "result_time" TEXT,
    "result_value" TEXT,
    "result_unit" VARCHAR(50),
    "reference_range" TEXT,
    "interpretation" "Interpretation" NOT NULL DEFAULT 'PENDING',
    "clinical_significance" TEXT,
    "status" "TestResultStatus" NOT NULL DEFAULT 'SAMPLE_COLLECTED',
    "technician_id" INTEGER,
    "reviewed_by_id" INTEGER,
    "approved_by_id" INTEGER,
    "notes" TEXT,
    "attachments" JSONB,
    "sample_quality" "SampleQuality" NOT NULL DEFAULT 'GOOD',
    "rejection_reason" TEXT,

    CONSTRAINT "test_results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "test_types_code_key" ON "test_types"("code");

-- AddForeignKey
ALTER TABLE "test_types" ADD CONSTRAINT "test_types_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "test_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_medical_record_id_fkey" FOREIGN KEY ("medical_record_id") REFERENCES "MedicalRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_test_type_id_fkey" FOREIGN KEY ("test_type_id") REFERENCES "test_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_specimen_id_fkey" FOREIGN KEY ("specimen_id") REFERENCES "test_specimens"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_reviewed_by_id_fkey" FOREIGN KEY ("reviewed_by_id") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_results" ADD CONSTRAINT "test_results_approved_by_id_fkey" FOREIGN KEY ("approved_by_id") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
