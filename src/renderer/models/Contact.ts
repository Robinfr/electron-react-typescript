import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, OneToOne, JoinColumn, JoinTable } from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';
import { Company } from './Company';
import { Proposal } from './Proposal';
import { User } from './User';

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
  @JoinTable()
  companies!: Company[];

  @ManyToMany(type => Proposal)
  @JoinTable()
  proposals!: Proposal[];

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