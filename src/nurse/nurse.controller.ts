import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { NurseService } from './nurse.service';
import { CreateNurseDto } from './dto/create-nurse.dto';
import { UpdateNurseDto } from './dto/update-nurse.dto';
import { StandardResponse } from 'src/response/StandardResponse';
import { AppMessage } from 'src/response/AppMessage';

@Controller('nurses')
export class NurseController {
  constructor(private readonly nurseService: NurseService) {}

  @Post()
  create(@Body() createNurseDto: CreateNurseDto) {
    return this.nurseService.create(createNurseDto);
  }

  @Get()
  public async findAll(@Query('page') page?: string , @Query('limit') limit? : string ) {
    const pageNum = page ? parseInt(page, 10) : undefined;
    const limitNum = limit ? parseInt(limit, 10) : undefined;
  
    const data = await this.nurseService.findAll(pageNum, limitNum);
    const response: StandardResponse = {
      success: true,
      code: HttpStatus.OK,
      data,
      message: AppMessage.TAI_DU_LIEU_THANH_CONG
    }
    return response
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nurseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNurseDto: UpdateNurseDto) {
    return this.nurseService.update(+id, updateNurseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nurseService.remove(+id);
  }
}
