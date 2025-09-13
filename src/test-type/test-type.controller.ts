import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { TestTypeService } from './test-type.service';
import { StandardResponse } from 'src/response/StandardResponse';
import { AppMessage } from 'src/response/AppMessage';

@Controller('test-types')
export class TestTypeController {
  constructor(private readonly testTypeService: TestTypeService) {}

  @Get()
  public async findAll() {
    const data = await this.testTypeService.findAll();
    const response: StandardResponse = {
      success: true,
      message: AppMessage.SUCCESS_RESPONSE,
      data,
      code: HttpStatus.OK
    }
    return response
  }
  @Get("/category/:id")
  public async getByCategory(@Param('id') id: string){
    const data = await this.testTypeService.getByCategoryId(Number(id));
    const response: StandardResponse = {
      success: true,
      code: HttpStatus.OK,
      data,
      message: AppMessage.SUCCESS_RESPONSE
    }
    return response
  }
}
