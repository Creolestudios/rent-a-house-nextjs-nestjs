import { MigrationInterface, QueryRunner } from "typeorm";

export class AddStateandCity1698835443607 implements MigrationInterface {
    name = 'AddStateandCity1698835443607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_details" ADD "state_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_details" ADD "city_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_details" ADD CONSTRAINT "FK_86f437c934ad28af35d5833c39c" FOREIGN KEY ("state_id") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_details" ADD CONSTRAINT "FK_d3dcb9e69077f13b9a5d43fa64b" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_details" DROP CONSTRAINT "FK_d3dcb9e69077f13b9a5d43fa64b"`);
        await queryRunner.query(`ALTER TABLE "user_details" DROP CONSTRAINT "FK_86f437c934ad28af35d5833c39c"`);
        await queryRunner.query(`ALTER TABLE "user_details" DROP COLUMN "city_id"`);
        await queryRunner.query(`ALTER TABLE "user_details" DROP COLUMN "state_id"`);
    }

}
