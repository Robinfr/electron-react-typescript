import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique, ManyToMany, OneToOne, JoinTable, JoinColumn } from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';
import { User } from './User';
import { Contact } from './Contact';
import { Proposal } from './Proposal';
import { Document } from './Document';

@Entity()
// @Unique(["email_primary"])
export class Company {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'text', length: 100 })
    name!: string;

    @Column({ type: 'text', length: 10 })
    nameShort!: string;

    @Column({ type: 'simple-json', nullable: true })
    phone!: {
        primary: string;
        secondary: string;
        tertiary: string;
    };

    @Column({ type: 'text', nullable: false })
    @IsEmail()
    email_primary!: string;

    @Column({ type: 'text', nullable: true })
    @IsEmail()
    email_secondary!: string;

    @Column({ type: 'text', nullable: true })
    @IsFQDN()
    website_primary!: string;

    @Column({ type: 'text', nullable: true })
    @IsFQDN()
    website_secondary!: string;

    @Column({ type: 'simple-json', nullable: true })
    social!: {
        github: string;
        gitlab: string;
        bitbucket: string;
        linkedin: string;
    };

    @Column({ type: 'text', nullable: true })
    address_street!: string;

    @Column({ type: 'text', nullable: true })
    address_city!: string;

    @Column({ type: 'text', nullable: true })
    address_state!: string;

    @Column({ type: 'text', nullable: true })
    address_zip!: string;

    @Column({ type: 'text', nullable: true })
    business_type!: string;

    @Column({ type: 'text', nullable: true })
    business_type_state!: string;

    @Column({ type: 'text', nullable: true })
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
    documents!: Document[];

    // TODO: add contact owner
    // owner!: Contact;

    @Column({ type: 'boolean', default: true, nullable: true })
    isActive!: boolean;

    @Column({ type: 'boolean', default: false, nullable: true })
    isDeleted!: boolean;

    // @Column('datetime')
    // @IsDate()
    // createDate!: Date;

    // @Column('datetime')
    // @IsDate()
    // modifiedDate!: Date;
}