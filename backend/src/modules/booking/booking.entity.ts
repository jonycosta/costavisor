import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    experience: string;

    @Column({ nullable: true })
    date: string;

    @Column('float')
    total: number;

    @Column('float')
    deposit: number;

    @Column({ default: 'pending' })
    status: string; // pending, confirmed, cancelled

    @CreateDateColumn()
    createdAt: Date;
}
