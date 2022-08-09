import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carro } from '../models/entity/carro.entity';
import { cadastrarCarroDto, vendaCarroDto } from '../models/dto/carro.dto';
import {
  carroVendido,
  carroInterface,
} from '../models/interfaces/carro.interface';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Carro)
    private carsRepository: Repository<Carro>,
  ) {}

  async create(novoCarro: cadastrarCarroDto): Promise<carroInterface> {
    const now: string = new Date().toUTCString();
    const NovoCarro: carroInterface = {
      modelo: novoCarro.modelo,
      marca: novoCarro.marca,
      anodefabricação: novoCarro.anodefabricação,
      placa: novoCarro.placa,
      cor: novoCarro.cor,
      chassi: novoCarro.chassi,
      valordecompra: novoCarro.valordecompra,
      datadacompra: now,
    };
    await this.carsRepository.insert(NovoCarro);
    return NovoCarro;
  }

  async venda(carroVendido: vendaCarroDto): Promise<carroVendido> {
    const now: string = new Date().toUTCString();
    const CarroVendido: carroVendido = {
      uuid: carroVendido.uuid,
      valordavenda: carroVendido.valordavenda,
      vendido: true,
      datadavenda: now,
    };
    await this.carsRepository.update(CarroVendido.uuid, CarroVendido);
    return CarroVendido;
  }

  async todos(): Promise<Carro[]> {
    return this.carsRepository.find();
  }

  async disponiveis(): Promise<Carro[]> {
    return this.carsRepository.find({ where: { vendido: false } });
  }

  async vendidos(): Promise<Carro[]> {
    return this.carsRepository.find({ where: { vendido: true } });
  }
}
