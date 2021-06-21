import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Song } from 'src/song/table/song.table';
import { CreateArtistInput } from './dto/create-artist.dto';
import { updateArtistInput } from './dto/update-artist.dto';
import { Artist } from './table/artist.table';

@Injectable()
export class ArtistService {
    constructor(
        @InjectModel(Song) private song:typeof Song,
        @InjectModel(Artist) private artist:typeof Artist,
    ){}

    async createArtist(body : CreateArtistInput){
        try{
            await this.artist.create({ ...body }, {raw: true});
            console.log("성공");    
        } catch (error){
            console.log(error);
        }
    }

    async getArtists(){
        try {
            const result = await this.artist.findAll({
                raw:true,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
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

    async getArtist(id: string){
        try{
            const result = await this.artist.findAll(
            {
                where: {id: id}, 
                include:{
                    model: Song,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },  
                }, 
                raw:true,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
            });
            console.log(result);
            return result;
        }catch{

        }
    }

    async updateArtist(body: updateArtistInput){
        try {
            const findArtist = await this.getArtist(body.id)
            if(!findArtist){
                return false
            } else {
                await this.artist.update({name: body.name},
                    {where: {id: body.id}}, 
                );
                console.log("성공");
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    async deleteArtist(id: string){
        try {
            const findArtist = await this.getArtist(id)
            if(!findArtist){
                return false
            } else {
                await this.artist.destroy({where: {id: id}} 
                );
                console.log("성공");
            }
            

        } catch (error) {
            console.log(error);
            
        }
    }
    





}
