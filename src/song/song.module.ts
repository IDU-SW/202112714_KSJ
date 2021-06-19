import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Album } from 'src/album/table/album.table';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { Song } from './table/song.table';

@Module({
  imports: [SequelizeModule.forFeature([Song, Album])],
  providers: [SongService],
  controllers: [SongController],
})
export class SongModule {}
