import { DATE } from "sequelize";
import { Table, Model, Column, DataType } from "sequelize-typescript";
import { Col } from "sequelize/types/lib/utils";

@Table({})
export class Song extends Model {
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
    })
    id: number;

    @Column({ defaultValue: 0 })
    album_id: number;

    @Column({ defaultValue: 0})
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

