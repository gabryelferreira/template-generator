import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false, unique: true })
    username: string;

    @Column({ nullable: false })
    password: string;

    @Column({ default: Date.now(), name: "created_at" })
    createdAt: Date;

    @Column({ default: Date.now(), name: "updated_at" })
    updatedAt: Date;
}