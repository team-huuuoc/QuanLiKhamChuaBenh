import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { TestSpecimenService } from './test-specimen.service';
import { StandardResponse } from 'src/response/StandardResponse';
import { AppMessage } from 'src/response/AppMessage';

@Controller('test-specimens')
export class TestSpecimenController {
  constructor(private readonly testSpecimenService: TestSpecimenService) {}

  @Get()
  public async findAll() {
    const data = await this.testSpecimenService.findAll();
    const response: StandardResponse = {
      success: true,
      code: HttpStatus.OK,
      data,
      message: AppMessage.SUCCESS_RESPONSE
    }
    return response
  }
}
