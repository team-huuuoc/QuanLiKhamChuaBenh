import { TreatmentStatus } from '@prisma/client';
import { IsInt, IsNotEmpty, IsOptional, IsString, IsDateString } from 'class-validator';
export class CreateMedicalRecordDto {
  @IsInt()
  patientId: number;

  @IsInt()
  doctorId: number;

  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  diagnosis: string;

  @IsString()
  @IsNotEmpty()
  treatment: string;

  @IsString()
  @IsNotEmpty()
  symptoms: string;

  @IsString()
  status: TreatmentStatus

  @IsOptional()
  @IsString()
  notes?: string;
}