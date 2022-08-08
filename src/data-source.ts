import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Carro } from './entity/carro.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admim',
  database: 'postgres',
  synchronize: true,
  entities: [Carro],
  migrations: ['src/migration/*.ts'],
});
