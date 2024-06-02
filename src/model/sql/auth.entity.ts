import { Column, Entity } from "typeorm";
import { parentEntity } from ".";

@Entity("auth")
export class AuthEntity extends parentEntity {
    @Column()
    id: string

    @Column()
    email: string

    @Column()
    role: number

    @Column()
    password: string

    @Column()
    rToken: string
} 