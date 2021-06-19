import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Song } from 'src/song/table/song.table';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { Artist } from './table/artist.table';

@Module({
  imports: [SequelizeModule.forFeature([Song, Artist])],
  controllers: [ArtistController],
  providers: [ArtistService]
})
export class ArtistModule {}
