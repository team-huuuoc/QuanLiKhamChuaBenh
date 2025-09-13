import { IsInt, IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateTestResultDto {
  @IsInt()
  @IsNotEmpty()
  medicalRecordId: number;

  @IsString()
  @IsNotEmpty()
  testType: string;

  @IsString()
  @IsNotEmpty()
  result: string;

  @IsOptional()
  @IsDateString()
  date?: string; 
}