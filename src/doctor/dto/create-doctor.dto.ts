import { IsInt, IsNotEmpty, IsString, IsEmail, Min, IsOptional } from 'class-validator';
import { EmploymentStatus, Gender } from '@prisma/client';

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  identify: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  gender: Gender

  @IsNotEmpty()
  dateOfBirth: string

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  address: string

  @IsString()
  @IsNotEmpty()
  specialty: string;

  @IsNotEmpty()
  @IsString()
  qualificationLevel: string

  @IsInt()
  @Min(0)
  experience: number;
  
  @IsNotEmpty()
  @IsString()
  certificateCode: string

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsNotEmpty()
  @IsString()
  positions:string
  
  @IsNotEmpty()
  startDateOfWork: string

  @IsOptional()
  @IsString()
  status?: EmploymentStatus;

  @IsOptional()
  @IsString()
  avatar: string

  @IsOptional()
  @IsString()
  certificate: string
}
