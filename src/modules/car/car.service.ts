import { Inject, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ICarService } from './interfaces/car.service';
import { ICarRepository } from './interfaces/car.repository';
import { ResponseData } from 'src/lib/response-data';
import { Car } from './entities/car.entity';
import { ID } from 'src/common/types/type';
import { CarNotFound } from './exception/car.exception';

@Injectable()
export class CarService implements ICarService {
  constructor(@Inject('ICarRepository') private readonly repository: ICarRepository) { }

  // CREATE
  async create(createCarDto: CreateCarDto): Promise<ResponseData<Car>> {
    let newCar = new Car()
    newCar = Object.assign(newCar, createCarDto)

    const resData = await this.repository.create(newCar)
    return new ResponseData<Car>('create', 201, resData)
  }

  // READE
  async findAll(): Promise<ResponseData<Car[]>> {
    const cars = await this.repository.findAll()
    return new ResponseData<Array<Car>>('get all', 200, cars)
  }
  async findOne(id: ID): Promise<ResponseData<Car>> {
    const foundCar = await this.repository.findById(id)
    if (!foundCar) {
      throw new CarNotFound()
    }

    return new ResponseData<Car>('get one', 200, foundCar)
  }

  // UPDATE
  async update(id: ID, updateCarDto: UpdateCarDto): Promise<ResponseData<Car>> {
    const { data: foundCar } = await this.findOne(id)
    const newCar = Object.assign(foundCar, updateCarDto)

    const resData = await this.repository.update(newCar)
    return new ResponseData<Car>('update', 200, resData)
  }

  // DELETE
  async remove(id: ID): Promise<ResponseData<Car>> {
    await this.findOne(id)
    const resData = await this.repository.remove(id)
    return new ResponseData<Car>('delete', 200, resData)
  }
}
