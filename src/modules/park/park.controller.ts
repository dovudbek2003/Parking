import { Controller, Get, Post, Body, Param, Delete, Inject, Put } from '@nestjs/common';
import { CreateParkDto } from './dto/create-park.dto';
import { UpdateParkDto } from './dto/update-park.dto';
import { IParkService } from './interfaces/park.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('parks')
@Controller('park')
export class ParkController {
  constructor(@Inject('IParkService') private readonly parkService: IParkService) { }

  @Post()
  async create(@Body() createParkDto: CreateParkDto) {
    return this.parkService.create(createParkDto);
  }

  @Get()
  async findAll() {
    return this.parkService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.parkService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateParkDto: UpdateParkDto) {
    return this.parkService.update(+id, updateParkDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.parkService.remove(+id);
  }
}
