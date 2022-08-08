import { MigrationInterface, QueryRunner } from 'typeorm';

export class carro1659848130374 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS estoque_carro (
        uuid uuid DEFAULT uuid_generate_v4(),
        modelo VARCHAR(20) NOT NULL, 
        marca VARCHAR(20) NOT NULL, 
        anodefabricacao INT NOT NULL,
        placa VARCHAR(8) NOT NULL,
        cor VARCHAR(20) NOT NULL,
        chassi VARCHAR(20) NOT NULL,
        valordecompra MONEY NOT NULL,
        valordevenda MONEY,
        vendido BOOLEAN DEFAULT FALSE,
        createdAt TIMESTAMP NOT NULL DEFAULT now(), 
        updatedAt TIMESTAMP NOT NULL DEFAULT now(),
        PRIMARY KEY ("uuid")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "blog"`);
  }
}
