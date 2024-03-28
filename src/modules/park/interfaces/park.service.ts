import { ID } from "src/common/types/type"
import { ResponseData } from "src/lib/response-data"
import { Park } from "../entities/park.entity"
import { CreateParkDto } from "../dto/create-park.dto"
import { UpdateParkDto } from "../dto/update-park.dto"

export interface IParkService {
    create(createParkDto: CreateParkDto): Promise<ResponseData<Park>>
    findAll(): Promise<ResponseData<Array<Park>>>
    findOne(id: ID): Promise<ResponseData<Park>>
    findByName(name: string): Promise<Park | null>
    update(id: ID, updateParkDto: UpdateParkDto): Promise<ResponseData<Park>>
    remove(id: ID): Promise<ResponseData<Park>>
}