import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, ParseIntPipe, Query, Put } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { StandardResponse } from 'src/response/StandardResponse';
import { AppMessage } from 'src/response/AppMessage';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  public async create(@Body() createPatientDto: CreatePatientDto) {
    const data = await this.patientService.create(createPatientDto);
    const response: StandardResponse= {
      success: true,
      code: HttpStatus.CREATED,
      message: AppMessage.ADDED_SUCCESSFULLY,
      data,
    }
    return response;
  }

  @Get()
  public async findAll(@Query('page', ParseIntPipe) page:number = 1, @Query('limit', ParseIntPipe) limit : number = 10) {
    return await this.patientService.findAll(page, limit);
  }

  @Get('/summary')
  public async getSummary(){
    return await this.patientService.getStatusSummary()
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return await this.patientService.update(+id, updatePatientDto);
  }
  
  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.patientService.findOne(id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.patientService.remove(+id);
  // }
}
