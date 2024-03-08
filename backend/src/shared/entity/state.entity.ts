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
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CountryEntity } from './country.entity';

@ObjectType()
@Entity('state')
export class StateEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 50, nullable: true })
  name: string;

  @Field()
  @JoinColumn({ name: 'country_id' })
  @ManyToOne(() => CountryEntity, (country) => country.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Column({ type: 'int' })
  country_id: number;

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
export class StateEntityResponse {
  @Field(() => [StateEntity])
  data: [StateEntity];

  @Field()
  message: string;
}
@ObjectType()
export class StateEntityResponseSingle {
  @Field(() => StateEntity)
  data: StateEntity;

  @Field()
  message: string;
}

@ObjectType()
export class StateList {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
