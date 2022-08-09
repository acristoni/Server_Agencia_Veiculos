import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { CarsService } from './cars.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cadastrarCarroDto, vendaCarroDto } from '../models/dto/carro.dto';
import { Carro } from '../models/entity/carro.entity';
import validacaoMarca from '../models/validacao/validacaoMarca';
import validacaoModelo from '../models/validacao/validacaoModelo';
import validacaoCor from '../models/validacao/validacaoCor';
import validacaoChassi from '../models/validacao/validacaoChassi';
import validacaoAnoDeFabricao from '../models/validacao/validacaoAnoDeFabricacao';
import validacaoPlaca from '../models/validacao/validacaoPlaca';

@Controller()
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  // CADASTRA NOVO CARRO NA AGENCIA
  @Post('/cadastro')
  async create(@Body() cadastrarCarroDto: cadastrarCarroDto) {
    if (validacaoModelo(cadastrarCarroDto.modelo)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Você deve digitar um modelo válido',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (validacaoMarca(cadastrarCarroDto.marca)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Você deve digitar uma marca',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (validacaoAnoDeFabricao(cadastrarCarroDto.anodefabricação)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Digite um ano  de fabricação válido para compra',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (validacaoPlaca(cadastrarCarroDto.placa)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Digite uma placa de veículo válida',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (validacaoCor(cadastrarCarroDto.cor)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Você deve digitar a cor do veículo',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    if (validacaoChassi(cadastrarCarroDto.chassi)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Você deve digitar um chassi válido',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

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
