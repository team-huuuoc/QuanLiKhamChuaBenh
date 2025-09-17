import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { handleDate } from 'src/libs/handleDate/handle.date';
import { ErrorCode } from 'src/response/ErrorCode';
import { ConflictError, NotFoundError } from 'src/response/HttpErrors';

@Injectable()
export class DoctorService {
  constructor(private readonly prismaService: PrismaService){

  }
  public async findAll(page?: number, limit?: number) {
    if (page && limit) {
      const skip = (page - 1) * limit;
  
      const [data, total] = await Promise.all([
        this.prismaService.doctor.findMany({
          skip,
          take: limit,
          orderBy: { id: 'desc' }
        }),
        this.prismaService.doctor.count(),
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
  
    return this.prismaService.doctor.findMany({
      orderBy: { id: 'desc' },
    });
  }
  public async create(dto: CreateDoctorDto) {
    const doctor = await this.getDoctorByEmail(dto.email)
    if(doctor) throw new ConflictError(ErrorCode.EMAIL_IS_EXISTS)
    return await this.prismaService.doctor.create({
      data: {
        ...dto,
      },
    });
  }
  public async remove(id: number) {
    return await this.prismaService.doctor.delete({
      where: {id}
    })
  }

  public async getDoctorByEmail(email: string){
    const doctor = await this.prismaService.doctor.findUnique({where: {email}})
    return doctor
  }
}
