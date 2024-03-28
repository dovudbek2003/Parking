import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUserRepository } from './interfaces/user.repository';
import { User } from './entities/user.entity';
import { IUserService } from './interfaces/user.service';
import { ResponseData } from 'src/lib/response-data';
import { ID } from 'src/common/types/type';
import { UserAlreadyExist, UserNotFound } from './exception/user.exception';
import { hash } from 'src/lib/bcrypt';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject('IUserRepository') private readonly repository: IUserRepository
  ) { }

  // CREATE
  async create(createUserDto: CreateUserDto): Promise<ResponseData<User>> {
    const foundUser = await this.findByPhoneNumber(createUserDto.phoneNumber)
    if (foundUser) {
      throw new UserAlreadyExist()
    }

    let newUser = new User()
    newUser = Object.assign(newUser, createUserDto)
    newUser.password = await hash(newUser.password)

    const resData = await this.repository.create(newUser)
    return new ResponseData<User>('create', 201, resData)
  }

  // READE
  async findAll(): Promise<ResponseData<User[]>> {
    const users = await this.repository.findAll()
    return new ResponseData<Array<User>>('get all', 200, users)
  }

  async findOne(id: ID): Promise<ResponseData<User>> {
    const foundUser = await this.repository.findById(id)
    if (!foundUser) {
      throw new UserNotFound()
    }

    return new ResponseData<User>('get one', 200, foundUser)
  }

  async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
    const foundUser = await this.repository.findByPhoneNumber(phoneNumber)
    return foundUser
  }

  // UPDATE
  async update(id: ID, updateUserDto: UpdateUserDto): Promise<ResponseData<User>> {
    const { data: foundUser } = await this.findOne(id)
    const newUser = Object.assign(foundUser, updateUserDto)

    const resData = await this.repository.update(newUser)
    return new ResponseData<User>('update', 200, resData)
  }

  // DELETE
  async remove(id: ID): Promise<ResponseData<User>> {
    await this.findOne(id)
    const resData = await this.repository.remove(id)
    return new ResponseData<User>('delete', 200, resData)
  }
}
