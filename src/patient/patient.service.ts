import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleDate } from 'src/libs/handleDate/handle.date';
import { ErrorCode } from 'src/response/ErrorCode';
import { ConflictError } from 'src/response/HttpErrors';
import { CreateMedicalRecordDto } from 'src/medical-record/dto/create-medical-record.dto';

@Injectable()
export class PatientService {
  constructor(private readonly prismaService: PrismaService){

  }
  public async create(createPatientDto: CreatePatientDto) {
   await this.checkIdNumber(createPatientDto.idNumber)
    const user = await this.prismaService.patient.create({
      data:{
        ...createPatientDto,
        dateOfBirth: handleDate(createPatientDto.dateOfBirth)} 
    })
    return user
  }

  public async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    this.prismaService.patient.findMany({
      skip,
      orderBy: { id: 'desc' },
      take: limit,
      include: {
        doctor: true,
        nurse: true,
      },
    }),
    this.prismaService.patient.count(),
  ]);

  return {
    data,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
  }

  public async update(id: number, updatePatientDto: UpdatePatientDto) {
    return await this.prismaService.patient.update({
      where: {id},
      data: {...updatePatientDto}
    })
  }

  public async getStatusSummary(){
    const result = await this.prismaService.patient.groupBy({
      by: ['status'],
      _count: {status: true}
    });
    // Tổng số bản ghi
    const total = result.reduce((sum, r)=> sum + r._count.status, 0);
    const byStatus = result.reduce((acc, r)=>{
      acc[r.status] = r._count.status;
      return acc;
    }, {} as Record<string, number>);
    return {
      data: {
        total,
        byStatus
      }
    }
  }

  private async checkIdNumber(idNumber: string){
    const patient = await this.prismaService.patient.findUnique({
      where: {idNumber}
    })
    if(patient) throw new ConflictError(ErrorCode.ID_NUMBER_IS_EXIST)
    return patient
  }
}
