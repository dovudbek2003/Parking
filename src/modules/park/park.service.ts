import { Inject, Injectable } from '@nestjs/common';
import { CreateParkDto } from './dto/create-park.dto';
import { UpdateParkDto } from './dto/update-park.dto';
import { IParkService } from './interfaces/park.service';
import { IParkRepository } from './interfaces/park.repository';
import { ResponseData } from 'src/lib/response-data';
import { Park } from './entities/park.entity';
import { ParkAlreadyExist, ParkNotFound } from './exception/park.exception';

@Injectable()
export class ParkService implements IParkService {
  constructor(@Inject('IParkRepository') private readonly repository: IParkRepository) { }

  // CREATE
  async create(createParkDto: CreateParkDto): Promise<ResponseData<Park>> {
    const foundPark = await this.findByName(createParkDto.name)
    if (foundPark) {
      throw new ParkAlreadyExist()
    }

    let newPark = new Park()
    newPark = Object.assign(newPark, createParkDto)

    const resData = await this.repository.create(newPark)
    return new ResponseData<Park>('create', 201, resData)
  }

  // READE
  async findAll(): Promise<ResponseData<Park[]>> {
    const parks = await this.repository.findAll()
    return new ResponseData<Array<Park>>('get all', 200, parks)
  }
  async findOne(id: number): Promise<ResponseData<Park>> {
    const foundPark = await this.repository.findById(id)
    if (!foundPark) {
      throw new ParkNotFound()
    }

    return new ResponseData<Park>('get one', 200, foundPark)
  }
  async findByName(name: string): Promise<Park> {
    return await this.repository.findByName(name)
  }

  // UPDATE
  async update(id: number, updateParkDto: UpdateParkDto): Promise<ResponseData<Park>> {
    const { data: foundPark } = await this.findOne(id)
    const newPark = Object.assign(foundPark, updateParkDto)

    const resData = await this.repository.update(newPark)
    return new ResponseData<Park>('update', 200, resData)
  }

  // DELETE
  async remove(id: number): Promise<ResponseData<Park>> {
    await this.findOne(id)

    const resData = await this.repository.remove(id)
    return new ResponseData<Park>('delete', 200, resData)
  }
}
