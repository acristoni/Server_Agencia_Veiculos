<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

##Run Docker-Compose for PostrgreSQL

<h4>Primeiro: verifique se a porta 5432 estádisponível!</h4>
<p>Se a aplicação não rodar por este motivo, PROVAVELMENTE o Postgres da sua máquina está ativo, para desabilita-lo siga o seguinte comando (Linux)</p>

Verificando se o postgres esta ativo:
```bash
$ service postgresql status

```
Se estiver ativo, pare, para que o docker possa usar a porta 5432:
```bash
$ service postgresql stop
```

FINALMENTE, o comando para rodar o BD no Docker:
```bash
$ docker-compose up -d
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Doc API Agencia de Veiculos

URL da API: [`http://localhost:5000`]

Todas as requisições devem ser feitas com a header Content-Type: application/json.
As respostas são codificadas em JSON.

### GET /todos

#### Lista de todos os carros que já passaram pela agencia

```bash
GET /todos
```

```bash
curl "http://localhost:5000/todos"\
```

### GET /disponiveis

#### Lista de todos os carros disponíveis para venda

```bash
GET /disponiveis
```

```bash
curl "http://localhost:5000/disponiveis"\
```
### GET /vendidos

#### Lista de todos os carros que já foram vendidos

```bash
GET /vendidos
```

```bash
curl "http://localhost:5000/vendidos"\
```

### POST /cadastro

#### Cadastro de compra de novo carro pela agencia

```bash
POST /cadastro
```

```bash
curl "http://localhost:5000/cadastro" \
-d '{
  	"modelo": "fusca",
	"marca": "VW",
  	"anodefabricação": 1967,
  	"placa": "VIX-2020",
  	"cor": "verde",
  	"chassi": "qualquercoisa123",
  	"valordecompra": 7500
    }'
```

### PUT /venda/:id

#### Cadastro de VENDA de carro pela agencia

```bash
POST /venda
```

```bash
curl "http://localhost:5000/venda" \
-d '{
	"uuid": 5,
  	"valordavenda": 15000,
    }'
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
