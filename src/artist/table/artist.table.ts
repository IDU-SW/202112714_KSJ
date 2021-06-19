import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Song } from "src/song/table/song.table";


@Table({})
export class Artist extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
    })
    id: number;

    @HasMany(()=>Song)
    songs:Song[];

    @Column({
        type:DataType.STRING(100),
    })
    name: string;
}