import { ID } from "src/common/types/type"
import { Car } from "../entities/car.entity"

export interface ICarRepository {
    create(carData: Car): Promise<Car>
    findAll(): Promise<Array<Car>>
    findById(id: ID): Promise<Car>
    update(carData: Car): Promise<Car>
    remove(id: ID): Promise<Car>
}