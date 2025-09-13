import { Injectable } from '@nestjs/common';
import { CreateTestCategoryDto } from './dto/create-test-category.dto';
import { UpdateTestCategoryDto } from './dto/update-test-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TestCategoryService {
  constructor(private readonly prismaService: PrismaService){

  }
  create(createTestCategoryDto: CreateTestCategoryDto) {
    return 'This action adds a new testCategory';
  }

  public async findAll() {
    return await this.prismaService.testCategory.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} testCategory`;
  }

  update(id: number, updateTestCategoryDto: UpdateTestCategoryDto) {
    return `This action updates a #${id} testCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} testCategory`;
  }
}
