import { ID } from "src/common/types/type";
import { User } from "../entities/user.entity";


export interface IUserRepository {
    create(userData: User): Promise<User>
    findAll(): Promise<Array<User>>
    findById(id: ID): Promise<User>
    findByPhoneNumber(phoneNumber: string): Promise<User>
    update(userData: User): Promise<User>
    remove(id: ID): Promise<User>
}