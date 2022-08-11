import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { cadastrarCarroDto } from 'src/models/dto/carro.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Adiciona um carro ao BD', () => {
    const testeCarro: cadastrarCarroDto = {
      modelo: 'TESTE',
      marca: 'TESTE',
      anodefabricação: 1999,
      placa: 'VIX-2020',
      cor: 'TESTE',
      chassi: '9BG116GW04C400001',
      valordecompra: 123,
    };

    return request(app.getHttpServer())
      .post('/cadastro')
      .send(testeCarro)
      .expect(201);
  });

  it('Mostra todos os carros da agencia', () => {
    return request(app.getHttpServer()).get('/todos').expect(200);
  });

  it('Mostra os carros vendidos da agencia', () => {
    return request(app.getHttpServer()).get('/vendidos').expect(200);
  });

  it('Mostra os carros disponiveis da agencia', () => {
    return request(app.getHttpServer()).get('/disponiveis').expect(200);
  });
});
