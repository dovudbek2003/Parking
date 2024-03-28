import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('parks')
export class Park {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 64, unique: true, nullable: false })
    name: string;

    @Column({ name: 'capacity', type: 'int', nullable: false })
    capacity: number;

    @Column({ name: 'price', type: 'int', nullable: false })
    price: number;
}
