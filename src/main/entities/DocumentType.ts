import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';

@Entity()
export class DocumentType {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    name!: string;

}
