import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Song } from "src/song/table/song.table";


@Table({})
export class Album extends Model {
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
    })
    id: number;

    //1:n songs 리턴
    @HasMany(()=>Song) 
    songs:Song[];

    @Column({
        type:DataType.STRING(100),
    })
    title: string;

}