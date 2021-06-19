import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Song } from 'src/song/table/song.table';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { Album } from './table/album.table';

@Module({
  imports: [SequelizeModule.forFeature([Song, Album])],
  controllers: [AlbumController],
  providers: [AlbumService]
})
export class AlbumModule {}
