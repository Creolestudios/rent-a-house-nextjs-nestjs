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
import { StateEntity } from './state.entity';

@ObjectType()
@Entity('city')
export class CityEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Field()
  @JoinColumn({ name: 'state_id' })
  @ManyToOne(() => StateEntity, (state) => state.id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Column({ type: 'int' })
  state_id: number;

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
export class CityEntityResponse {
  @Field(() => [CityEntity])
  data: [CityEntity];

  @Field()
  message: string;
}
@ObjectType()
export class CityEntityResponseSingle {
  @Field(() => CityEntity)
  data: CityEntity;

  @Field()
  message: string;
}

@ObjectType()
export class CityList {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
