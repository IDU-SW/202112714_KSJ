import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { Album } from 'src/album/table/album.table';
import { CreateSongInput } from './dto/create-song.dto';
import { updateSongInput } from './dto/update-song-dto';
import { Song } from './table/song.table';

@Injectable()
export class SongService {
    constructor(@InjectModel(Song) private song:typeof Song){}

    async createSong(body : CreateSongInput){
        try{
            await this.song.create({ ...body }, {raw: true});
            console.log("성공");    
        } catch (error){
            console.log(error);
        }
    }

    async getSongs(){
        try {
            const result = await this.song.findAll({
                include: {model: Album}, 
                raw:true,
                attributes: {
                    include: [[Sequelize.literal('album.title'),"albumTitle"]],
                },
            });
            //const test = Object.assign([],result);
            console.log(result);
            console.log("성공");
            return result;

        } catch (error) {
            console.log(error);
            
        }
    }

    async getSong(id: string){
        try {
            const result = await this.song.findOne({
                where: {id: id}, 
                raw:true,
                include: {model: Album},
                attributes: {
                    include: [[Sequelize.literal('album.title'),"albumTitle"]],
                },
            });
            console.log(result);
            console.log("성공");
            return result;

        } catch (error) {
            console.log(error);
            
        }
    }

    async updateSong(body: updateSongInput){
        try {
            const findSong = await this.getSong(body.id)
            if(!findSong){
                return false
            } else {
                await this.song.update({title: body.title, genre: body.genre, relDate: body.relDate, 
                    album_id: body.album_id, artist_id: body.artist_id},
                    {where: {id: body.id}}, 
                );
                console.log("성공");
            }
            

        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteSong(id: string){
        try {
            const findSong = await this.getSong(id)
            if(!findSong){
                return false
            } else {
                await this.song.destroy({where: {id: id}} 
                );
                console.log("성공");
            }
            

        } catch (error) {
            console.log(error);
            
        }
    }
}
