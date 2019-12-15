import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';
import { Company } from './Company';

@Entity()
export class Proposal {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToMany((type: any) => Company, (company: any) => company.proposals)
    company!: Company;
}
