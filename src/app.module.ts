import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: '3.34.148.155',
    port: 5432,
    username: 'dev',
    password: '1234',
    database: 'ksj',
    dialectOptions: { charset: 'utf8mb4', dateStrings: true, typeCast: true },
    synchronize: true,
    autoLoadModels: true,
    models: [],
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
