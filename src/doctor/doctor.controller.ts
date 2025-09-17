import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { StandardResponse } from 'src/response/StandardResponse';
import { AppMessage } from 'src/response/AppMessage';
import { CreateDoctorDto } from './dto/create-doctor.dto';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  public async findAll(@Query('page') page?:string , @Query('limit') limit? : string ) {
    const pageNum = page ? parseInt(page, 10) : undefined;
    const limitNum = limit ? parseInt(limit, 10) : undefined;
  
    const data =  await this.doctorService.findAll(pageNum, limitNum);
    const response: StandardResponse = {
      success: true,
      code: HttpStatus.OK,
      data,
      message: AppMessage.TAI_DU_LIEU_THANH_CONG
    }
    return response
  }

  @Post()
  public async create(@Body() dto: CreateDoctorDto){
    const data = await this.doctorService.create(dto)
    const response: StandardResponse = {
      success:true,
      message: AppMessage.ADDED_SUCCESSFULLY,
      data,
      code: HttpStatus.OK
    }
    return response
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return await  this.doctorService.remove(+id);
  }
}
