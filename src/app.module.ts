import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Song } from './song/table/song.table';
import { AlbumModule } from './album/album.module';
import { Album } from './album/table/album.table';
import { SongModule } from './song/song.module';
import { ArtistModule } from './artist/artist.module';
import { Artist } from './artist/table/artist.table';
import 'dotenv/config';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialectOptions: { charset: 'utf8mb4', dateStrings: true, typeCast: true },
    synchronize: true,
    autoLoadModels: true,
    models: [Song, Album, Artist],
  }), 
  SongModule,
  AlbumModule,
  ArtistModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
