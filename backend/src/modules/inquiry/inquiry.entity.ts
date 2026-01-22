import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Inquiry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column('text')
    message: string;

    @Column({ nullable: true })
    selectedProperty: string;

    @Column({ default: 'new' })
    status: string; // new, read, responded

    @CreateDateColumn()
    createdAt: Date;
}
