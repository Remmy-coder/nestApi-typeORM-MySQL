import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('brand')
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    description : string;
}
