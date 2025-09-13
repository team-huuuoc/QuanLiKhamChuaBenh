import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class TestSpecimenService {
  constructor(private readonly prismaService: PrismaService){}
  public async findAll() {
    return await this.prismaService.testSpecimen.findMany()
  }
}
