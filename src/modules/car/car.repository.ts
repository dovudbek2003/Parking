import { InjectRepository } from "@nestjs/typeorm";
import { ICarRepository } from "./interfaces/car.repository";
import { Car } from "./entities/car.entity";
import { Repository } from "typeorm";

export class CarRepository implements ICarRepository {
    constructor(@InjectRepository(Car) private readonly repository: Repository<Car>) { }

    // CREATE
    async create(carData: Car): Promise<Car> {
        return await this.repository.save(carData)
    }

    // READE
    async findAll(): Promise<Car[]> {
        return await this.repository.find()
    }
    async findById(id: number): Promise<Car> {
        return await this.repository.findOneBy({ id })
    }

    // UPDATE
    async update(carData: Car): Promise<Car> {
        return await this.repository.save(carData)
    }

    // DELETE
    async remove(id: number): Promise<Car> {
        const foundCar = await this.findById(id)
        await this.repository.delete(id)
        return foundCar
    }
}