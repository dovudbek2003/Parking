import { ResponseData } from "src/lib/response-data"
import { Car } from "../entities/car.entity"
import { CreateCarDto } from "../dto/create-car.dto"
import { UpdateCarDto } from "../dto/update-car.dto"
import { ID } from "src/common/types/type"

export interface ICarService{
    create(createCarDto: CreateCarDto): Promise<ResponseData<Car>>
    findAll(): Promise<ResponseData<Array<Car>>>
    findOne(id: ID): Promise<ResponseData<Car>>
    update(id: ID, updateCarDto: UpdateCarDto): Promise<ResponseData<Car>>
    remove(id: ID): Promise<ResponseData<Car>>
}