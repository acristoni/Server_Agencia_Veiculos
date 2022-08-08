import { Test } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { cadastrarCarroDto, vendaCarroDto } from '../dto/carro.dto';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Carro } from '../entity/carro.entity';
describe('CarArController', () => {
  let carsController: CarsController;
  let carsService: CarsService;
  const CarroMock = {
    uuid: 123,
    modelo: 'TESTE',
    marca: 'TESTE',
    anodefabricação: 1999,
    placa: 'TESTE',
    cor: 'TESTE',
    chassi: 'TESTE',
    valordecompra: 123,
    valordavenda: 321,
    vendido: true,
    datadacompra: '',
    datadavenda: '',
  };
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [
        CarsService,
        {
          provide: getRepositoryToken(Carro),
          useValue: {
            create: jest.fn(),
            venda: jest.fn(),
            todos: jest.fn(),
            disponiveis: jest.fn(),
            vendidos: jest.fn(),
          },
        },
      ],
    }).compile();

    carsController = moduleRef.get<CarsController>(CarsController);
    carsService = moduleRef.get<CarsService>(CarsService);
  });

  describe('endpoint to buy a new car', () => {
    it('should add a new car on DB', async () => {
      const testeCarro: cadastrarCarroDto = {
        modelo: 'TESTE',
        marca: 'TESTE',
        anodefabricação: 1999,
        placa: 'TESTE',
        cor: 'TESTE',
        chassi: 'TESTE',
        valordecompra: 123,
      };
      jest.spyOn(carsService, 'create').mockImplementation();
      await carsController.create(testeCarro);
    });
  });
  describe('endpoint to sell a car', () => {
    it('should update a car on DB', async () => {
      const testeCarro: vendaCarroDto = {
        uuid: 1,
        valordavenda: 1,
      };
      jest.spyOn(carsService, 'venda').mockImplementation();
      await carsController.update(testeCarro);
    });
  });
  describe('test list all cars endpoint', () => {
    it('should return an array of cars', async () => {
      const result = [CarroMock];
      jest.spyOn(carsService, 'todos').mockImplementation(async () => result);
      expect(await carsController.todos()).toBe(result);
    });
  });

  describe('test list available for sale cars endpoint', () => {
    it('should return an array of cars', async () => {
      const result = [CarroMock];
      jest
        .spyOn(carsService, 'disponiveis')
        .mockImplementation(async () => result);
      expect(await carsController.disponiveis()).toBe(result);
    });
  });

  describe('test list sold cars endpoint', () => {
    it('should return an array of cars', async () => {
      const result = [CarroMock];
      jest
        .spyOn(carsService, 'vendidos')
        .mockImplementation(async () => result);
      expect(await carsController.vendidos()).toBe(result);
    });
  });
});
