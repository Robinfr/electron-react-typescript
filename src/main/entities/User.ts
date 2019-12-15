import { Entity, Column, PrimaryGeneratedColumn, Generated, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';
import { Contact } from './Contact'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  @Generated('uuid')
  uuid!: string;

  @Column({ type: 'text', length: 50, unique: true })
  username!: string;

  @Column({ type: 'text', unique: true })
  @IsEmail()
  email_primary!: string;

  @Column({ type: 'text', unique: true })
  @IsEmail()
  email_secondary!: string;

  @Column({ type: 'text', length: 100, nullable: true })
  password!: string|undefined;

  @Column({ type: 'text', length: 100, nullable: true })
  passwordHash!: string|undefined;

  @Column('boolean')
  isActive!: boolean;

  @Column('boolean')
  isDeleted!: boolean;

  @ManyToMany(type => Contact)
  @JoinTable()
  contacts!: Contact[];

  // @Column('datetime')
  // @IsDate()
  // createDate!: Date;

  // @Column('datetime')
  // @IsDate()
  // modifiedDate!: Date;
}
