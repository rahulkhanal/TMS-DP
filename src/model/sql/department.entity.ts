import { Column, Entity, ManyToMany } from "typeorm";
import { parentEntity } from ".";
import { UserEntity } from "./user.entity";

@Entity('department')
export class DepartmentEntity extends parentEntity {
    @Column()
    name: string;

    @ManyToMany(() => UserEntity, (user) => user.departments)
    user: UserEntity[];
}
