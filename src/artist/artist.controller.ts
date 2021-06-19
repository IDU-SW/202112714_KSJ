import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistInput } from './dto/create-artist.dto';
import { DeleteArtistParam } from './dto/delete-album.dto';
import { ReadArtistParam } from './dto/read-artist.dto';
import { updateArtistInput } from './dto/update-artist.dto';

@Controller('artist')
export class ArtistController {
    constructor(private readonly artistService: ArtistService){}

    @Get('')
    hello(){
        let result = 
        `
        <h1>🎙Artist Routes Examples🎙</h1>
            <li>아티스트 전체보기 : /artist/read</li>
            <li>아티스트별 곡 보기 : /artist/read/1</li>
            <li>아티스트 생성 : /artist/create</li>
            <li>아티스트 수정 : /artist/update</li>
            <li>아티스트 삭제 : /artist/delete/3</li>
        `
        return result;
    }

    @Get('read')
    getArtists() {
        return this.artistService.getArtists();
    }

    @Get('read/:id')
    getArtist(@Param() param: ReadArtistParam){
        return this.artistService.getArtist(param.id);
    }

    @Post("create")
    createArtist(@Body() body : CreateArtistInput){
        return this.artistService.createArtist(body);
    }

    @Put("update")
    updateArtist(@Body() body: updateArtistInput){
        return this.artistService.updateArtist(body);
    }

    @Delete("delete/:id")
    deleteArtist(@Param() param: DeleteArtistParam){
        return this.artistService.deleteArtist(param.id);
    }


}
