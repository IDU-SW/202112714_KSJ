import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumInput } from './dto/create-album.dto';
import { DeleteAlbumParam } from './dto/delete-album.dto';
import { ReadAlbumParam } from './dto/read-album.dto';
import { updateAlbumInput } from './dto/update-album.dto';

@Controller('album')
export class AlbumController {
    constructor(private readonly albumService: AlbumService){}
    
    @Get('')
    hello(){
        let result  = 
        `
        <h1>💿Album Routes Examples💿</h1>
            <li>앨범 전체보기 : /album/read</li>
            <li>앨범별 곡 보기 : /album/read/1</li>
            <li>앨범 생성 : /album/create</li>
            <li>앨범 수정 : /album/update</li>
            <li>앨범 삭제 : /album/delete/3</li>
        `
        return result;
    }

    @Get('read')
    getAlbums() {
        return this.albumService.getAlbums();
    }

    @Get('read/:id')
    getAlbum(@Param() param: ReadAlbumParam){
        return this.albumService.getAlbum(param.id);
    }

    @Post("create")
    createAlbum(@Body() body : CreateAlbumInput){
        return this.albumService.createAlbum(body);
        
    }

    @Put("update")
    updateAlbum(@Body() body: updateAlbumInput){
        //console.log(body)
        return this.albumService.updateAlbum(body);
        
    }

    @Delete("delete/:id")
    deleteAlbum(@Param() param: DeleteAlbumParam){
        return this.albumService.deleteAlbum(param.id);
        
    }


}
