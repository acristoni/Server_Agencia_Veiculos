import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cadastrarCarroDto, vendaCarroDto } from './../dto/carro.dto';
import { Carro } from './../entity/carro.entity';

@Controller()
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  // CADASTRA NOVO CARRO NA AGENCIA
  @Post('/cadastro')
  async create(@Body() cadastrarCarroDto: cadastrarCarroDto) {
    await this.carsService.create(cadastrarCarroDto);
    return `novo carro modelo ${cadastrarCarroDto.modelo} cadastrado`;
  }

  // ATUALIZAÇÃO VEICULO NA VENDA
  @Put('/venda')
  async update(@Body() vendaCarroDto: vendaCarroDto) {
    await this.carsService.venda(vendaCarroDto);
    return `carro, ID numero ${vendaCarroDto.uuid}, vendido!`;
  }

  // IMPRIME TODOS OS VEICULOS, VENDIDOS E DISPONIVEIS
  @Get('/todos')
  async todos(): Promise<Carro[]> {
    return this.carsService.todos();
  }

  // IMPRIME TODOS OS VEICULOS DISPONIVEIS PARA VENDA
  @Get('/disponiveis')
  async disponiveis(): Promise<Carro[]> {
    return this.carsService.disponiveis();
  }

  // IMPRIME TODOS OS VEICULOS VENDIDOS
  @Get('/vendidos')
  async vendidos(): Promise<Carro[]> {
    return this.carsService.vendidos();
  }
}
