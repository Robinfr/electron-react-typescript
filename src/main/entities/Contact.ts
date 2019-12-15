import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, OneToOne, JoinColumn, JoinTable } from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';
import { Company } from './Company';
import { Proposal } from './Proposal';
import { User } from './User';
import { Document } from './Document';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text', length: 100 })
  firstName!: string;

  @Column({ type: 'text', length: 100 })
  lastName!: string;

  @Column({ type: 'text', length: 5 })
  prefix!: string;

  @Column('text')
  contact_type!: string;

  @Column('text')
  job_title!: string;

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

  @Column('simple-json')
  website!: {
      primary: string;
      secondary: string;
      tertiary: string;
  };

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

  @ManyToMany(type => Company)
  companies!: Company[];

  @ManyToMany(type => User)
  users!: User[];

  @ManyToMany(type => Proposal)
  @JoinTable()
  proposals!: Proposal[];

  @OneToOne(type => User)
  owner!: User;

  // @OneToMany(
  //   type => Contact,
  //   contact => contact.contact
  // )
  // @JoinTable()
  // contacts!: Contact[];

  // @ManyToOne((type: any) => User, company => company.documents)
  // owner!: User;

  @ManyToMany((type: any) => Document)
  @JoinTable()
  documents!: Document[];

  @Column('boolean')
  isActive!: boolean;

  @Column('boolean')
  isDeleted!: boolean;

//   @Column('datetime')
//   @IsDate()
//   createDate!: Date;

//   @Column('datetime')
//   @IsDate()
//   modifiedDate!: Date;
}