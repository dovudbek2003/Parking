import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiTags } from '@nestjs/swagger';
import { ICarService } from './interfaces/car.service';

@ApiTags('cars')
@Controller('car')
export class CarController {
  constructor(@Inject('ICarService') private readonly carService: ICarService) { }

  @Post()
  async create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  async findAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.carService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.carService.remove(+id);
  }
}
