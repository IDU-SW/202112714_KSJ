import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Song } from 'src/song/table/song.table';
import { CreateAlbumInput } from './dto/create-album.dto';
import { updateAlbumInput } from './dto/update-album.dto';
import { Album } from './table/album.table';

@Injectable()
export class AlbumService {
    constructor(@InjectModel(Song) private song:typeof Song,
    @InjectModel(Album) private album:typeof Album,
    ){}

    async createAlbum(body : CreateAlbumInput){
        try{
            await this.album.create({ ...body }, {raw: true});
            console.log("성공");    
        } catch (error){
            console.log(error);
        }
    }

    async getAlbums(){
        try {
            const result = await this.album.findAll({
                raw:true,
            });
            //const test = Object.assign([],result);
            console.log(result);
            console.log("성공");
            return result;

        } catch (error) {
            console.log(error);
            
        }
    }

    async getAlbum(id: string){
        try{
            const result = await this.album.findAll(
                {where: {id: id}, 
                include:{model: Song}, 
                raw:true,});
            console.log(result);
            return result;
        }catch{

        }
    }

    async updateAlbum(body: updateAlbumInput){
        try {
            const findAlbum = await this.getAlbum(body.id)
            if(!findAlbum){
                return false
            } else {
                await this.album.update({title: body.title},
                    {where: {id: body.id}}, 
                );
                console.log("성공");
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteAlbum(id: string){
        try {
            const findAlbum = await this.getAlbum(id)
            if(!findAlbum){
                return false
            } else {
                await this.album.destroy({where: {id: id}} 
                );
                console.log("성공");
            }
            

        } catch (error) {
            console.log(error);
            
        }
    }



}
