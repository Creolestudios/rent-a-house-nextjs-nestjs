import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPostalCode1698832324648 implements MigrationInterface {
  name = 'AddPostalCode1698832324648';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_details" ADD "pincode" character varying(20)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user_details" DROP COLUMN "pincode"`);
  }
}
