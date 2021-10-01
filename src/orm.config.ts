import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions={
    type: 'postgres',
    port: 5432,
    host: '127.0.0.1',
    database: 'healthypicks-db',
    username: 'postgres',
    password: 'healthypicks007',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
};