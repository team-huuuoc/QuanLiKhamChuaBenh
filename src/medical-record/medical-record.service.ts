import { Injectable } from '@nestjs/common';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleDate } from 'src/libs/handleDate/handle.date';

@Injectable()
export class MedicalRecordService {
  constructor(private readonly prismaService: PrismaService){}
  
  public async create(dto: CreateMedicalRecordDto) {
    const { date, ...rest } = dto;    
    const handledDate = handleDate(date);
    return await this.prismaService.medicalRecord.create({
      data: {
        ...rest,
        date: handledDate, 
      },
    });
  }
  public async getByPatientId(id: number) {
    return await this.prismaService.medicalRecord.findMany({
      where: { patientId: id },
      orderBy: { date: 'desc' },
    });
  }
  findAll() {
    return `This action returns all medicalRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalRecord`;
  }

  update(id: number, updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return `This action updates a #${id} medicalRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalRecord`;
  }
}
