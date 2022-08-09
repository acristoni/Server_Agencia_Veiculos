import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Carro {
  @PrimaryGeneratedColumn('uuid')
  uuid: number;

  @Column('varchar')
  modelo: string;

  @Column('varchar')
  marca: string;

  @Column('int4')
  anodefabricação: number;

  @Column('varchar')
  placa: string;

  @Column('varchar')
  cor: string;

  @Column('varchar')
  chassi: string;

  @Column({ type: 'int4', default: 0 })
  valordecompra: number;

  @Column({ type: 'int4', default: 0 })
  valordavenda: number;

  @Column({ default: false })
  vendido: boolean;

  @Column({ type: 'varchar', default: '' })
  datadacompra: string;

  @Column({ type: 'varchar', default: '' })
  datadavenda: string;
}
