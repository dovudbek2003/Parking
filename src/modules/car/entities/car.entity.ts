import { User } from "src/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cars')
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 36, unique: true, nullable: false })
    index: string;

    @Column({ name: 'docs', type: 'json', nullable: true })
    docs: object;

    @ManyToOne(type => User, (user) => user.cars, { onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'owner_id' })
    owner: User
}
