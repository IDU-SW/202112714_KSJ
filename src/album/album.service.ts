import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Song } from 'src/song/table/song.table';
import { Album } from './table/album.table';

@Injectable()
export class AlbumService {
    constructor(@InjectModel(Song) private song:typeof Song,
    @InjectModel(Album) private album:typeof Album,
    ){}

    async getAlbum(){
        try{
            const result = await this.album.findAll(
                {where: {id:1}, 
                include:{model: Song}, 
                raw:true,});
            console.log(result);
            return result;
        }catch{

        }
    }



}
