import * as dotenv from 'dotenv'
import { IConfig } from '../interfaces/interface'
dotenv.config()


export const config: IConfig = {
    port: Number(process.env.PORT),
    dbType: process.env.DB_TYPE,
    dbHost: process.env.DB_HOST,
    dbPort: Number(process.env.DB_PORT),
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASS,
    dbName: process.env.DB_NAME
}

