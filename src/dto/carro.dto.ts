export class cadastrarCarroDto {
  modelo: string;
  marca: string;
  anodefabricação: number;
  placa: string;
  cor: string;
  chassi: string;
  valordecompra: number;
}

export class vendaCarroDto {
  uuid: number;
  valordavenda: number;
}
