export interface carroInterface {
  modelo: string;
  marca: string;
  anodefabricação: number;
  placa: string;
  cor: string;
  chassi: string;
  valordecompra: number;
  datadacompra: string;
}

export interface carroVendido {
  uuid: number;
  valordavenda: number;
  vendido: boolean;
  datadavenda: string;
}
