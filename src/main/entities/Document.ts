import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';
import { Contact } from './Contact';
import { Company } from './Company';

@Entity()
export class Document {
    @PrimaryGeneratedColumn()
    id!: number;

    // @Column('int')
    // docType!: DocumentType;

    // @Column()
    // orientation: string;

    // @Column()
    // compressed: boolean;

    // @Column()
    // comment: string;

    @ManyToOne((type: any) => Company, company => company.documents)
    company!: Company;

    @ManyToMany((type: any) => Contact)
    contacts!: Contact[];
}
