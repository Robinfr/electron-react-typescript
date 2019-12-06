import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, OneToOne, JoinTable, JoinColumn } from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';
import { User } from './User';
import { Contact } from './Contact';
import { Proposal } from './Proposal';
import { Document } from './Document';

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'text', length: 100 })
    name!: string;

    @Column({ type: 'text', length: 10 })
    nameShort!: string;

    @Column('simple-json')
    phone!: {
        primary: string;
        secondary: string;
        tertiary: string;
    };

    @Column({ type: 'text', unique: true })
    @IsEmail()
    email_primary!: string;

    @Column({ type: 'text', unique: true })
    @IsEmail()
    email_secondary!: string;

    @Column('text')
    @IsFQDN()
    website_primary!: string;

    @Column('text')
    @IsFQDN()
    website_secondary!: string;

    @Column('simple-json')
    social!: {
        github: string;
        gitlab: string;
        bitbucket: string;
        linkedin: string;
    };

    @Column('text')
    address_street!: string;

    @Column('text')
    address_city!: string;

    @Column('text')
    address_state!: string;

    @Column('text')
    address_zip!: string;

    @Column('text')
    business_type!: string;

    @Column('text')
    business_type_state!: string;

    @Column('text')
    products_services!: string;

    @ManyToMany(type => Contact)
    @JoinTable()
    contacts!: Contact[];

    @ManyToMany(type => Proposal)
    @JoinTable()
    proposals!: Proposal[];

    @OneToMany(
        type => Document,
        document => document.company
    )
    @JoinTable()
    documents!: Document[];

    @OneToOne(type => User)
    @JoinColumn()
    owner!: User;

    @Column('boolean')
    isActive!: boolean;

    @Column('boolean')
    isDeleted!: boolean;

    @Column('datetime')
    @IsDate()
    createDate!: Date;

    @Column('datetime')
    @IsDate()
    modifiedDate!: Date;
}