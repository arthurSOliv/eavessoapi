import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661298544708 implements MigrationInterface {
    name = 'default1661298544708'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_ee0839cba07cb0c52602021ad4b"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_3573ed298f466a8ba663579e077"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_6c85dcb05050721fa20a9996c56"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "permission"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "subject_id"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "workload"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "franchise_id"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "cnpj"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "contact"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "franchise_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "cnpj" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "contact" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "subject_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "workload" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "city" character varying`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "permission" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_6c85dcb05050721fa20a9996c56" FOREIGN KEY ("franchise_id") REFERENCES "franchises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_3573ed298f466a8ba663579e077" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_ee0839cba07cb0c52602021ad4b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_ee0839cba07cb0c52602021ad4b"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_3573ed298f466a8ba663579e077"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_6c85dcb05050721fa20a9996c56"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "permission"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "workload"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "subject_id"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "contact"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "cnpj"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "franchise_id"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "role" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "contact" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "cnpj" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "franchise_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "workload" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "subject_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "permission" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_6c85dcb05050721fa20a9996c56" FOREIGN KEY ("franchise_id") REFERENCES "franchises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_3573ed298f466a8ba663579e077" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_ee0839cba07cb0c52602021ad4b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
