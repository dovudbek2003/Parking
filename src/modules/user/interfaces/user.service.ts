import { ID } from "src/common/types/type"
import { CreateUserDto } from "../dto/create-user.dto"
import { UpdateUserDto } from "../dto/update-user.dto"
import { ResponseData } from "src/lib/response-data"
import { User } from "../entities/user.entity"

export interface IUserService {
    create(createUserDto: CreateUserDto): Promise<ResponseData<User>>

    findAll(): Promise<ResponseData<Array<User>>>

    findOne(id: ID): Promise<ResponseData<User>>

    findByPhoneNumber(phoneNumber: string): Promise<User | null>

    update(id: ID, updateUserDto: UpdateUserDto): Promise<ResponseData<User>>

    remove(id: ID): Promise<ResponseData<User>>
}