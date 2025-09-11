import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { MedicalRecordService } from './medical-record.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';
import { StandardResponse } from 'src/response/StandardResponse';
import { AppMessage } from 'src/response/AppMessage';

@Controller('medical-records')
export class MedicalRecordController {
  constructor(private readonly medicalRecordService: MedicalRecordService) {}

  @Post()
  public async create(@Body() createMedicalRecordDto: CreateMedicalRecordDto) {
    const data = await this.medicalRecordService.create(createMedicalRecordDto);
    const response: StandardResponse = {
      success: true,
      message: AppMessage.ADDED_SUCCESSFULLY,
      data,
      code: HttpStatus.OK
    }
    return response
  }
  @Get('patient/:id')
  public async getByPatientId(@Param('id') id: number) {
    const data = await this.medicalRecordService.getByPatientId(+id);
    const response: StandardResponse = {
      success: true,
      message: AppMessage.SUCCESS_RESPONSE,
      data,
      code: HttpStatus.OK,
    };
    return response;
  }
  @Get()
  findAll() {
    return this.medicalRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalRecordDto: UpdateMedicalRecordDto) {
    return this.medicalRecordService.update(+id, updateMedicalRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalRecordService.remove(+id);
  }
}
