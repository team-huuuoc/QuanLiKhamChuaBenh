import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DoctorService {
  constructor(private readonly prismaService: PrismaService){

  }
  create(createDoctorDto: CreateDoctorDto) {
    return 'This action adds a new doctor';
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

  findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
