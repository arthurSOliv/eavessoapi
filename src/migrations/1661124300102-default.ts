import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661124300102 implements MigrationInterface {
    name = 'default1661124300102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_ee0839cba07cb0c52602021ad4b"`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "franchise_id" uuid NOT NULL, "name" character varying NOT NULL, "contents" character varying NOT NULL, "workload" character varying NOT NULL, "category" character varying NOT NULL, "type" character varying NOT NULL, "area" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "course_id" uuid NOT NULL, "name" character varying NOT NULL, "codename" character varying NOT NULL, "avatar" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "course_id" uuid NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courseAssigns" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "course_id" uuid NOT NULL, "class_id" character varying NOT NULL, "user_id" uuid NOT NULL, "role" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "couclass_idrse_id" uuid, CONSTRAINT "PK_7dd3dcbe428fb3a41d10980edb6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tutorials" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "franchise_id" uuid NOT NULL, "question" character varying NOT NULL, "answer" character varying NOT NULL, "category" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e9152ab79d78c6a5e4c7bd47f61" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "permission"`);
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
        await queryRunner.query(`ALTER TABLE "companies" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "permission" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_3a99535b4ba22b584833dddbda9" FOREIGN KEY ("franchise_id") REFERENCES "franchises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_bd4c6c725acd427f07264770ceb" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_6c85dcb05050721fa20a9996c56" FOREIGN KEY ("franchise_id") REFERENCES "franchises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_835122f9fd835b03ef36d817d60" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_3573ed298f466a8ba663579e077" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courseAssigns" ADD CONSTRAINT "FK_95ffcc14e8f94ed023cdba8c820" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courseAssigns" ADD CONSTRAINT "FK_592a55bcb2d77206febb8b81dfb" FOREIGN KEY ("couclass_idrse_id") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courseAssigns" ADD CONSTRAINT "FK_022e812a724e2457a2fab611307" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_ee0839cba07cb0c52602021ad4b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tutorials" ADD CONSTRAINT "FK_17ae1a21c18af597a688afb294d" FOREIGN KEY ("franchise_id") REFERENCES "franchises"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tutorials" DROP CONSTRAINT "FK_17ae1a21c18af597a688afb294d"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_ee0839cba07cb0c52602021ad4b"`);
        await queryRunner.query(`ALTER TABLE "courseAssigns" DROP CONSTRAINT "FK_022e812a724e2457a2fab611307"`);
        await queryRunner.query(`ALTER TABLE "courseAssigns" DROP CONSTRAINT "FK_592a55bcb2d77206febb8b81dfb"`);
        await queryRunner.query(`ALTER TABLE "courseAssigns" DROP CONSTRAINT "FK_95ffcc14e8f94ed023cdba8c820"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_3573ed298f466a8ba663579e077"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_835122f9fd835b03ef36d817d60"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_6c85dcb05050721fa20a9996c56"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_bd4c6c725acd427f07264770ceb"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_3a99535b4ba22b584833dddbda9"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "permission"`);
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "user_id"`);
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
        await queryRunner.query(`ALTER TABLE "companies" ADD "permission" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`DROP TABLE "tutorials"`);
        await queryRunner.query(`DROP TABLE "courseAssigns"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "classes"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_ee0839cba07cb0c52602021ad4b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
