import { MigrationInterface, QueryRunner } from "typeorm";

export class usertransaction1700544950432 implements MigrationInterface {
    name = 'usertransaction1700544950432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usertransaction" ("id" SERIAL NOT NULL, "user_id" integer NOT NULL, "content" json NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "REL_5e11644ca4cb6ad05f9838676a" UNIQUE ("user_id"), CONSTRAINT "PK_651268b49eb98a76e4e50cf3849" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TYPE "public"."bookings_status_enum" RENAME TO "bookings_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."bookings_status_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6')`);
        await queryRunner.query(`ALTER TABLE "bookings" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "bookings" ALTER COLUMN "status" TYPE "public"."bookings_status_enum" USING "status"::"text"::"public"."bookings_status_enum"`);
        await queryRunner.query(`ALTER TABLE "bookings" ALTER COLUMN "status" SET DEFAULT '0'`);
        await queryRunner.query(`DROP TYPE "public"."bookings_status_enum_old"`);
        await queryRunner.query(`COMMENT ON COLUMN "bookings"."status" IS '0-> inquiry  1-> request 2-> accept 3-> confirm 4-> reject, 5-> check-in confirm 6-> check-in reject '`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TYPE "public"."messages_status_enum" RENAME TO "messages_status_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."messages_status_enum" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7', '8')`);
        await queryRunner.query(`ALTER TABLE "messages" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "messages" ALTER COLUMN "status" TYPE "public"."messages_status_enum" USING "status"::"text"::"public"."messages_status_enum"`);
        await queryRunner.query(`ALTER TABLE "messages" ALTER COLUMN "status" SET DEFAULT '0'`);
        await queryRunner.query(`DROP TYPE "public"."messages_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "usertransaction" ADD CONSTRAINT "FK_5e11644ca4cb6ad05f9838676a9" FOREIGN KEY ("user_id") REFERENCES "user_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usertransaction" DROP CONSTRAINT "FK_5e11644ca4cb6ad05f9838676a9"`);
        await queryRunner.query(`CREATE TYPE "public"."messages_status_enum_old" AS ENUM('0', '1', '2', '3', '4', '5', '6', '7')`);
        await queryRunner.query(`ALTER TABLE "messages" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "messages" ALTER COLUMN "status" TYPE "public"."messages_status_enum_old" USING "status"::"text"::"public"."messages_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "messages" ALTER COLUMN "status" SET DEFAULT '0'`);
        await queryRunner.query(`DROP TYPE "public"."messages_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."messages_status_enum_old" RENAME TO "messages_status_enum"`);
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "bookings"."status" IS '0-> inquiry  1-> request 2-> accept 3-> confirm 4-> reject'`);
        await queryRunner.query(`CREATE TYPE "public"."bookings_status_enum_old" AS ENUM('0', '1', '2', '3', '4')`);
        await queryRunner.query(`ALTER TABLE "bookings" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "bookings" ALTER COLUMN "status" TYPE "public"."bookings_status_enum_old" USING "status"::"text"::"public"."bookings_status_enum_old"`);
        await queryRunner.query(`ALTER TABLE "bookings" ALTER COLUMN "status" SET DEFAULT '0'`);
        await queryRunner.query(`DROP TYPE "public"."bookings_status_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."bookings_status_enum_old" RENAME TO "bookings_status_enum"`);
        await queryRunner.query(`DROP TABLE "usertransaction"`);
    }

}
