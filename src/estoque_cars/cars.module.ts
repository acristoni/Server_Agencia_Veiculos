import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Carro } from '../models/entity/carro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carro])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
