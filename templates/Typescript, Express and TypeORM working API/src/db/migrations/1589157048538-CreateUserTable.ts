import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserTable1589157048538 implements MigrationInterface {

    table = new Table({
        name: "user",
        columns: [
            {
                name: "id",
                type: "integer",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment",
            },
            {
                name: "name",
                type: "varchar",
                length: "100",
                isNullable: false,
            },
            {
                name: "username",
                type: "varchar",
                length: "30",
                isNullable: false,
                isUnique: true,
            },
            {
                name: "password",
                type: "varchar",
                length: "255",
                isNullable: false,
            },
            {
                name: "created_at",
                type: "timestamp",
                default: "CURRENT_TIMESTAMP",
                isNullable: false,
            },
            {
                name: "updated_at",
                type: "timestamp",
                default: "CURRENT_TIMESTAMP",
                isNullable: false,
            }
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table);
    }

}
