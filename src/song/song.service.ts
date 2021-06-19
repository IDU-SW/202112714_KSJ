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
            return result;

        } catch (error) {
            console.log(error);
            
        }
    }

    async getSong(id: string){
        try {
            return await this.song.findOne({where: {id: id}, raw:true });
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
                await this.song.update({title: body.title, genre: body.genre},
                    {where: {id: body.id}}, 
                );
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
            }

        } catch (error) {
            console.log(error);
            
        }
    }
}
