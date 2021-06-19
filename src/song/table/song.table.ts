import { DATE } from "sequelize";
import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Col } from "sequelize/types/lib/utils";
import { Album } from "src/album/table/album.table";
import { Artist } from "src/artist/table/artist.table";

@Table({})
export class Song extends Model {
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
    })
    id: number;

    //1 하나씩만.
    @BelongsTo(()=>Album)
    album:Album

    @Column({ defaultValue: 1})
    @ForeignKey(()=>Album)
    album_id: number;

    @BelongsTo(()=>Artist)
    artist:Artist

    @Column({ defaultValue: 1})
    @ForeignKey(()=>Artist)
    artist_id: number;

    @Column({
        type:DataType.STRING(100),
    })
    title: string;

    @Column({
        type:DataType.STRING(50),
    })
    genre: string;

    @Column({
        type:DataType.DATE,
    })
    relDate: Date;



}

