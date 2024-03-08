import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1700546272207 implements MigrationInterface {
    name = 'Migrations1700546272207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usertransaction" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "content" json NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "REL_5e11644ca4cb6ad05f9838676a" UNIQUE ("user_id"), CONSTRAINT "PK_651268b49eb98a76e4e50cf3849" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "account_id"`);
        await queryRunner.query(`ALTER TABLE "user_details" ADD "state_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_details" ADD "city_id" integer`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "card" ALTER COLUMN "customer_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "card" ALTER COLUMN "source_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ADD CONSTRAINT "FK_86f437c934ad28af35d5833c39c" FOREIGN KEY ("state_id") REFERENCES "state"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_details" ADD CONSTRAINT "FK_d3dcb9e69077f13b9a5d43fa64b" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "usertransaction" ADD CONSTRAINT "FK_5e11644ca4cb6ad05f9838676a9" FOREIGN KEY ("user_id") REFERENCES "user_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usertransaction" DROP CONSTRAINT "FK_5e11644ca4cb6ad05f9838676a9"`);
        await queryRunner.query(`ALTER TABLE "user_details" DROP CONSTRAINT "FK_d3dcb9e69077f13b9a5d43fa64b"`);
        await queryRunner.query(`ALTER TABLE "user_details" DROP CONSTRAINT "FK_86f437c934ad28af35d5833c39c"`);
        await queryRunner.query(`ALTER TABLE "card" ALTER COLUMN "source_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "card" ALTER COLUMN "customer_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_details" DROP COLUMN "city_id"`);
        await queryRunner.query(`ALTER TABLE "user_details" DROP COLUMN "state_id"`);
        await queryRunner.query(`ALTER TABLE "card" ADD "account_id" character varying`);
        await queryRunner.query(`DROP TABLE "usertransaction"`);
    }

}
