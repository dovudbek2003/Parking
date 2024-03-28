import { Module } from '@nestjs/common';
import { ParkService } from './park.service';
import { ParkController } from './park.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Park } from './entities/park.entity';
import { ParkRepository } from './park.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Park])],
  controllers: [ParkController],
  providers: [
    { provide: 'IParkService', useClass: ParkService },
    { provide: 'IParkRepository', useClass: ParkRepository }
  ],
})
export class ParkModule { }
