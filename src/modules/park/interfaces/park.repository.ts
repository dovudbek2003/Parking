import { ID } from "src/common/types/type"
import { Park } from "../entities/park.entity"

export interface IParkRepository {
    create(parkData: Park): Promise<Park>
    findAll(): Promise<Array<Park>>
    findById(id: ID): Promise<Park>
    findByName(name: string): Promise<Park>
    update(parkData: Park): Promise<Park>
    remove(id: ID): Promise<Park>
}