import { Gender, PatientStatus } from "@prisma/client"
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  IsPhoneNumber,
  Length,
  Matches,
} from "class-validator"

export class CreatePatientDto {
  
  @IsNotEmpty()
  @IsString()
  identify:string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  @Length(9, 12) 
  idNumber: string

  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: "dateOfBirth phải có định dạng yyyy-MM-dd",
  })
  dateOfBirth: string; 

  @IsNotEmpty()
  @IsEnum(Gender) 
  gender: Gender

  @IsOptional()
  @IsString()
  insurance?: string

  @IsNotEmpty()
  @IsPhoneNumber('VN') 
  phone: string

  @IsNotEmpty()
  @IsString()
  emergencyContact: string

  @IsNotEmpty()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsEnum(PatientStatus) 
  status: PatientStatus
}
