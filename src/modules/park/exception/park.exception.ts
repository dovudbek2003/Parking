import { HttpException, HttpStatus } from "@nestjs/common";

export class ParkNotFound extends HttpException {
    constructor() {
        super('Park Not Found', HttpStatus.NOT_FOUND)
    }
}

export class ParkAlreadyExist extends HttpException {
    constructor() {
        super('Park Already Exist', HttpStatus.BAD_REQUEST)
    }
}