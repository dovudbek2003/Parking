import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CarModule } from './modules/car/car.module';
import { ParkModule } from './modules/park/park.module';
import { FileModule } from './modules/file/file.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './common/config';
import { User } from './modules/user/entities/user.entity';
import { Car } from './modules/car/entities/car.entity';
import { Park } from './modules/park/entities/park.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.dbHost,
      port: config.dbPort,
      username: config.dbUsername,
      password: config.dbPassword,
      database: config.dbName,
      entities: [User, Car, Park],
      synchronize: true,
    }),
    UserModule,
    CarModule,
    ParkModule,
    FileModule,
    TransactionModule
  ],
})
export class AppModule { }
