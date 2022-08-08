import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './estoque_cars/cars.module';
import { Carro } from './entity/carro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admim',
      database: 'postgres',
      synchronize: true,
      logging: false,
      entities: [Carro],
    }),
    CarsModule,
  ],
})
export class AppModule {}
