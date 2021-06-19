import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Song } from './song/table/song.table';
import { AlbumModule } from './album/album.module';
import { Album } from './album/table/album.table';

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
    models: [Song, Album],
  }), AlbumModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
