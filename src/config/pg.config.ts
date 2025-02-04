import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

const pgConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: process.env.PG_Host,
    port: 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_Databse,
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};

export default pgConfig;