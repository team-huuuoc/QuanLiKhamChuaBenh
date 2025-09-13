import { Injectable } from '@nestjs/common';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { UpdateTestResultDto } from './dto/update-test-result.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TestResultService {
  constructor(private readonly prismaService: PrismaService){}
  public async create(dto: CreateTestResultDto) {
    
  }

  findAll() {
    return `This action returns all testResult`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testResult`;
  }

  update(id: number, updateTestResultDto: UpdateTestResultDto) {
    return `This action updates a #${id} testResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} testResult`;
  }
}
