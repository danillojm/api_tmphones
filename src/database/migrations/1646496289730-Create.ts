import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Create1646496289730 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "client",
            columns: [

                {
                    name: "id",
                    type: "integer",
                    isPrimary: true
                },

                {
                    name: "insertion_date",
                    type: "timestamp",
                    default: "now()"
                }
                ,
                {
                    name: "update_date",
                    type: "timestamp",
                    isNullable: true
                },
                {
                    name: "name",
                    type: "varchar",

                },
                {
                    name: "phone_number",
                    type: "varchar",

                }
                ,
                {
                    name: "email",
                    type: "varchar",
                    isNullable: true,
                }
                ,
                {
                    name: "cpf",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "observation",
                    type: "varchar",
                    isNullable: true,
                }

            ],

        }));

        await queryRunner.createTable(
            new Table({
                name: "category",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true
                    },

                    {
                        name: "insertion_date",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "update_date",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true
                    }

                ]
            })
        )

        await queryRunner.createTable(new Table(
            {
                name: "product",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true
                    },
                    {
                        name: "insertion_date",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "update_date",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "code",
                        type: "varchar",
                    },

                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "category_id",
                        type: "integer",
                    },
                    {
                        name: "brand",
                        type: "varchar",
                    },
                    {
                        name: " sale_price",
                        type: "varchar",
                        isNullable: true
                    },

                    {
                        name: "observation",
                        type: "varchar",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_product_category",
                        columnNames: ["category_id"],
                        referencedTableName: "category",
                        referencedColumnNames: ["id"]
                    }]
            }
        ))

        await queryRunner.createTable(new Table(
            {
                name: "address",
                columns: [

                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true
                    },
                    {
                        name: "insertion_date",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "update_date",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "zip_code",
                        type: "varchar",
                        isNullable: true
                    }
                    ,
                    {
                        name: "city",
                        type: "varchar"
                    },
                    {
                        name: "uf",
                        type: "varchar"
                    }

                ]
            }
        ));

        await queryRunner.createTable(new Table(
            {
                name: "platformpurchase",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true
                    },
                    {
                        name: "insertion_date",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "update_date",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "url",
                        type: "varchar"
                    },
                    {
                        name: "logo_img",
                        type: "varchar"
                    },
                    {
                        name: "total_value",
                        type: "numeric"
                    },
                ]
            }));

        await queryRunner.createTable(new Table(
            {
                name: "purchase",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true
                    },
                    {
                        name: "insertion_date",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "update_date",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "purchase_date",
                        type: "timestamp",
                    },
                    {
                        name: "platformpurchase_id",
                        type: "integer",
                    },
                    {
                        name: "store_name",
                        type: "varchar",
                    },
                    {
                        name: "order_id",
                        type: "varchar",
                    },


                    {
                        name: "product_id",
                        type: "integer",
                    },

                    {
                        name: "quantity",
                        type: "numeric",
                    },

                    {
                        name: "unit_price",
                        type: "numeric",
                    },

                    {
                        name: "total_price",
                        type: "numeric",
                    },

                    {
                        name: "tracking_code",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "color",
                        type: "varchar",
                    },
                    {
                        name: "observation",
                        type: "varchar",
                        isNullable: true
                    },

                    {
                        name: "status",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "product_arrived",
                        type: "boolean",
                        default: "false"
                    },


                ],
                foreignKeys: [
                    {
                        name: "fk_purchase_platformpurchase",
                        columnNames: ["platformpurchase_id"],
                        referencedTableName: "platformpurchase",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_purchase_product",
                        columnNames: ["product_id"],
                        referencedTableName: "product",
                        referencedColumnNames: ["id"]
                    }
                ]
            }));

        await queryRunner.createTable(new Table({
            name: "stock",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true
                },
                {
                    name: "insertion_date",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "update_date",
                    type: "timestamp",
                    isNullable: true
                },
                {
                    name: "product_id",
                    type: "integer"

                },

                {
                    name: "quantity",
                    type: "numeric"

                }
                ,
                {
                    name: "unit_price",
                    type: "numeric"

                },
                {
                    name: "total_price",
                    type: "numeric"

                },
                {
                    name: "color",
                    type: "varchar",
                    isNullable: true
                }
                ,
                {
                    name: "brand",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "purchase_id",
                    type: "integer",
                    isNullable: true
                }
            ],
            foreignKeys: [
                {
                    name: "fk_stock_purchase",
                    columnNames: ["purchase_id"],
                    referencedTableName: "purchase",
                    referencedColumnNames: ["id"]
                },
                {
                    name: "fk_stock_product",
                    columnNames: ["product_id"],
                    referencedTableName: "product",
                    referencedColumnNames: ["id"]
                }
            ]

        }))

        await queryRunner.createTable(new Table({
            name: 'systemuser',
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true
                },
                {
                    name: "insertion_date",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "update_date",
                    type: "timestamp",
                    isNullable: true
                },

                {
                    name: "name",
                    type: "varchar",

                }, {
                    name: "login",
                    type: "varchar",

                },
                {
                    name: "email",
                    type: "varchar",
                    isNullable: true
                }, {
                    name: "active",
                    type: "boolean",
                    default: true
                },
                {
                    name: "password",
                    type: "varchar",

                },
                {
                    name: "phone_number",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "access_profile",
                    type: "varchar",

                }, {
                    name: "observation",
                    type: "varchar",
                    isNullable: true
                },


            ]
        }))




        await queryRunner.query(" CREATE SEQUENCE IF NOT EXISTS public.seq_client INCREMENT 1 START 1 MINVALUE 1  MAXVALUE 9223372036854775807 CACHE 1; ");
        await queryRunner.query(" CREATE SEQUENCE IF NOT EXISTS public.seq_product INCREMENT 1 START 1 MINVALUE 1  MAXVALUE 9223372036854775807 CACHE 1; ");
        await queryRunner.query(" CREATE SEQUENCE IF NOT EXISTS public.seq_category INCREMENT 1 START 1 MINVALUE 1  MAXVALUE 9223372036854775807 CACHE 1; ");
        await queryRunner.query(" CREATE SEQUENCE IF NOT EXISTS public.seq_purchase INCREMENT 1 START 1 MINVALUE 1  MAXVALUE 9223372036854775807 CACHE 1; ");
        await queryRunner.query(" CREATE SEQUENCE IF NOT EXISTS public.seq_address INCREMENT 1 START 1 MINVALUE 1  MAXVALUE 9223372036854775807 CACHE 1; ");
        await queryRunner.query(" CREATE SEQUENCE IF NOT EXISTS public.seq_platform_purchase INCREMENT 1 START 1 MINVALUE 1  MAXVALUE 9223372036854775807 CACHE 1; ");
        await queryRunner.query(" CREATE SEQUENCE IF NOT EXISTS public.seq_stock INCREMENT 1 START 1 MINVALUE 1  MAXVALUE 9223372036854775807 CACHE 1; ");
        await queryRunner.query(" CREATE SEQUENCE IF NOT EXISTS public.seq_system_user INCREMENT 1 START 1 MINVALUE 1  MAXVALUE 9223372036854775807 CACHE 1; ");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.dropTable("client")
        await queryRunner.dropTable("address")
        await queryRunner.dropTable("product")
        await queryRunner.dropTable("category")
        await queryRunner.dropTable("platformpurchase")
    }


}
