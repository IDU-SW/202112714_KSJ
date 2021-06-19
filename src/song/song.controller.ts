import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSongInput } from './dto/create-song.dto';
import { DeleteSongParam } from './dto/delete-song.dto';
import { ReadSongParam } from './dto/read-song.dto';
import { updateSongInput } from './dto/update-song-dto';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
    constructor( private readonly songService : SongService){}

    @Get('')
    hello(){
        return 'mainpage';
    }

    @Get('read')
    getSongs() {
        return this.songService.getSongs();
    }

    @Get('read/:id')
    getSong(@Param() param: ReadSongParam) {
        return this.songService.getSong(param.id);
    }

    @Post("create")
    createSong(@Body() body : CreateSongInput){
        return this.songService.createSong(body);
        
    }

    @Put("update")
    updateSong(@Body() body: updateSongInput){
        //console.log(body)
        return this.songService.updateSong(body);
        
    }

    @Delete("delete/:id")
    deleteSong(@Param() param: DeleteSongParam){
        return this.songService.deleteSong(param.id);
        
    }

    
}
