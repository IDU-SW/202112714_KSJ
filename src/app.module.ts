import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongController } from './song/song.controller';
import { SongModule } from './song/song.module';

@Module({
  imports: [SongModule],
  controllers: [AppController, SongController],
  providers: [AppService],
})
export class AppModule {}
