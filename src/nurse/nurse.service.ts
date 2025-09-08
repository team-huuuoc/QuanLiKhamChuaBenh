import { Injectable } from '@nestjs/common';
import { CreateNurseDto } from './dto/create-nurse.dto';
import { UpdateNurseDto } from './dto/update-nurse.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NurseService {
  constructor(private readonly prismaService: PrismaService){

  }
  create(createNurseDto: CreateNurseDto) {
    return 'This action adds a new nurse';
  }

  public async findAll(page?: number, limit?: number) {
    if (page && limit) {
      const skip = (page - 1) * limit;
  
      const [data, total] = await Promise.all([
        this.prismaService.nurse.findMany({
          skip,
          take: limit,
          orderBy: { id: 'desc' },
        }),
        this.prismaService.nurse.count(),
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
  
    return await this.prismaService.nurse.findMany({
      orderBy: { id: 'desc' },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} nurse`;
  }

  update(id: number, updateNurseDto: UpdateNurseDto) {
    return `This action updates a #${id} nurse`;
  }

  remove(id: number) {
    return `This action removes a #${id} nurse`;
  }
}
