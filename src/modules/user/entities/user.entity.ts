import { RoleEnum } from "src/common/enums/role.enum";
import { ID } from "src/common/types/type";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { Car } from "src/modules/car/entities/car.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: ID;

    @Column({ name: 'phone_number', type: 'text', nullable: false })
    phoneNumber: string;

    @Column({ type: 'text', nullable: false })
    password: string;

    @Column({ type: 'int', default: 0 })
    balance: number;

    @Column({ type: 'enum', enum: RoleEnum, default: RoleEnum.CLIENT })
    role: RoleEnum

    /** 
     * avat @OneToOne referense bo'ladi file entity ni
     * yozilgandan kegin yaratiladi
     */
    @Column({ name: 'file_id', type: 'int' })
    avatar: number

    @OneToMany(type => Car, (car) => car.owner)
    cars: Array<Car>
}
