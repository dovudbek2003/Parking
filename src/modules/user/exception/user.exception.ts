import { HttpException, HttpStatus } from "@nestjs/common";

export class UserNotFound extends HttpException {
    constructor() {
        super('User Not Found', HttpStatus.NOT_FOUND)
    }
}

export class UserAlreadyExist extends HttpException {
    constructor() {
        super('User Already Exist', HttpStatus.BAD_REQUEST)
    }
}

export class LoginOrPasswordWrong extends HttpException {
    constructor() {
        super('Login Or Password Wrong', HttpStatus.BAD_REQUEST)
    }
}