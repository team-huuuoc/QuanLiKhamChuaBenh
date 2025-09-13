import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { TestCategoryService } from './test-category.service';
import { CreateTestCategoryDto } from './dto/create-test-category.dto';
import { UpdateTestCategoryDto } from './dto/update-test-category.dto';
import { StandardResponse } from 'src/response/StandardResponse';
import { AppMessage } from 'src/response/AppMessage';

@Controller('test-categorys')
export class TestCategoryController {
  constructor(private readonly testCategoryService: TestCategoryService) {}

  @Post()
  create(@Body() createTestCategoryDto: CreateTestCategoryDto) {
    return this.testCategoryService.create(createTestCategoryDto);
  }

  @Get()
  public async findAll() {
    const data = await this.testCategoryService.findAll();
    const response : StandardResponse = {
      success: true,
      message: AppMessage.SUCCESS_RESPONSE,
      code: HttpStatus.OK,
      data
    }
    return response
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestCategoryDto: UpdateTestCategoryDto) {
    return this.testCategoryService.update(+id, updateTestCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testCategoryService.remove(+id);
  }
}
