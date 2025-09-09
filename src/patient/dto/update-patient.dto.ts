import { PatientStatus } from "@prisma/client";
import { IsNotEmpty, Length, IsString, IsOptional, IsPhoneNumber, IsNumber, IsEnum } from "class-validator";

export class UpdatePatientDto{
  
    @IsNotEmpty()
    @IsString   ()
    name: string
  
    @IsNotEmpty()
    @IsPhoneNumber('VN') 
    phone: string

    @IsNotEmpty()
    @IsString()
    @Length(9, 12) 
    idNumber: string
  
    @IsNotEmpty()
    @IsPhoneNumber('VN')
    emergencyContact: string

    @IsOptional()
    @IsString()
    insurance?: string  
    
    @IsNotEmpty()
    @IsString()
    address: string
  
    @IsNotEmpty()
    @IsEnum(PatientStatus) 
    status: PatientStatus

    @IsOptional()
    @IsString()
    roomNumber?: string

    @IsOptional()
    @IsNumber()
    doctorId?: number

    @IsOptional()
    @IsNumber()
    nurseId?: number
    
    @IsOptional()
    @IsString()
    notes?: string
}