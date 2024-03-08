/**
 * Copyright 2023 Rent Smartly
 * @category   Database
 * @package    Admin
 * @author     Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @since      File available since Release 1.0.0
 */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { StateEntity } from './state.entity';
import { StatusEnum } from '../../common/enum';
import { UserEntity } from './user.entity';

@ObjectType()
@Entity('country')
export class CountryEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 50, nullable: true })
  name: string;

  @Field()
  @Column({ type: 'varchar', length: 50, nullable: true })
  code: string;

  @Field(() => Int)
  @Column({
    type: 'enum',
    default: StatusEnum.ACTIVE,
    enum: StatusEnum,
    comment: '0-> Inactive 1-> Active',
  })
  status: StatusEnum;

  @OneToMany((type) => StateEntity, (state) => state.country_id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  children: StateEntity[];

  @OneToMany((type) => UserEntity, (user) => user.country_id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  childrens: UserEntity[];

  @Field()
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field({ nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;
}
@ObjectType()
export class CountryResponse {
  @Field(() => [CountryEntity])
  data: [CountryEntity];

  @Field()
  message: string;
}
@ObjectType()
export class CountryResponseSingle {
  @Field(() => CountryEntity)
  data: CountryEntity;

  @Field()
  message: string;
}
@ObjectType()
export class CountryList {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
