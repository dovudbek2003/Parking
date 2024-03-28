import { InjectRepository } from "@nestjs/typeorm";
import { IParkRepository } from "./interfaces/park.repository";
import { Park } from "./entities/park.entity";
import { Repository } from "typeorm";

export class ParkRepository implements IParkRepository {
    constructor(@InjectRepository(Park) private readonly repository: Repository<Park>) { }

    // CREATE
    async create(parkData: Park): Promise<Park> {
        return await this.repository.save(parkData)
    }

    // READE
    async findAll(): Promise<Park[]> {
        return await this.repository.find()
    }
    async findById(id: number): Promise<Park> {
        return await this.repository.findOneBy({ id })
    }
    async findByName(name: string): Promise<Park> {
        return await this.repository.findOneBy({ name })
    }

    // UPDATE
    async update(parkData: Park): Promise<Park> {
        return await this.repository.save(parkData)
    }

    // DELETE
    async remove(id: number): Promise<Park> {
        const foundPark = await this.findById(id)
        await this.repository.delete(id)
        return foundPark
    }
}