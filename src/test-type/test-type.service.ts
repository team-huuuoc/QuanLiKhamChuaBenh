import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TestTypeService {
  constructor(private readonly prismaService: PrismaService){}

  public async findAll() {
    return await this.prismaService.testType.findMany()
  }
  public async getByCategoryId(id: number){
    return await this.prismaService.testType.findMany({
      where: {
        categoryId: id
      }
    })
  }
  
}
