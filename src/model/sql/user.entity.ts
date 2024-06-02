import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { parentEntity } from ".";
import { DepartmentEntity } from "./department.entity";

@Entity('user')
export class UserEntity extends parentEntity {
    @Column()
    name: string

    @Column({nullable: true})
    joinedDate: Date

    @Column({ nullable: true })
    salary: number

    @ManyToMany(() => DepartmentEntity, (department) => department.user)
    @JoinTable({
        name: 'user_departments',
        joinColumn: {
            name: 'userId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'departmentId',
            referencedColumnName: 'id',
        },
    })
    departments: DepartmentEntity[];
}
