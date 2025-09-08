import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleDate } from 'src/libs/handleDate/handle.date';

@Injectable()
export class PatientService {
  constructor(private readonly prismaService: PrismaService){

  }
  public async create(createPatientDto: CreatePatientDto) {
    const user = await this.prismaService.patient.create({
      data:{...createPatientDto,
        dateOfBirth: handleDate(createPatientDto.dateOfBirth)} 
    })
    return user
  }

  findAll() {
    return `This action returns all patient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
