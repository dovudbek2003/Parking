import { HttpException, HttpStatus } from "@nestjs/common";

export class CarNotFound extends HttpException {
    constructor() {
        super('Car Not Found', HttpStatus.NOT_FOUND)
    }
}