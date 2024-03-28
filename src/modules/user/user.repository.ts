import { InjectRepository } from "@nestjs/typeorm";
import { IUserRepository } from "./interfaces/user.repository";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { ID } from "src/common/types/type";

export class UserRepository implements IUserRepository {
    constructor(@InjectRepository(User) private repository: Repository<User>) { }

    // CREATE
    async create(userData: User): Promise<User> {
        return await this.repository.save(userData)
    }

    // READE
    async findAll(): Promise<User[]> {
        return await this.repository.find()
    }
    async findById(id: ID): Promise<User> {
        return await this.repository.findOneBy({ id })
    }
    async findByPhoneNumber(phoneNumber: string): Promise<User> {
        return await this.repository.findOneBy({ phoneNumber })
    }

    // UPDATE
    async update(userData: User): Promise<User> {
        return await this.repository.save(userData)
    }

    // DELETE
    async remove(id: ID): Promise<User> {
        const foundUser = await this.findById(id)
        await this.repository.delete(id)
        return foundUser
    }
}