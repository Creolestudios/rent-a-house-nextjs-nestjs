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
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CommissionFromEnum, StatusEnum } from '../../common/enum';

@ObjectType()
@Entity('commission_fees')
export class CommissionFeesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({
    type: 'smallint',
    default: 0,
    comment: '0-> Fixed',
  })
  type?: number;

  @Field()
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  value: number;

  @Field()
  @Column({ type: 'varchar', length: 20 })
  currency?: string;

  @Field(() => Int)
  @Column({
    type: 'enum',
    default: StatusEnum.ACTIVE,
    enum: StatusEnum,
    comment: '0-> Inactive 1-> active',
  })
  status: StatusEnum;

  @Field(() => Int)
  @Column({
    type: 'enum',
    default: CommissionFromEnum.LANDLORD,
    enum: CommissionFromEnum,
    comment: '0-> tenant 1-> landlord 2-> both',
  })
  commission_from: CommissionFromEnum;

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
export class CommissionFeesResponse {
  @Field(() => [CommissionFeesEntity])
  data: [CommissionFeesEntity];

  @Field()
  message: string;
}
@ObjectType()
export class CommissionFeesResponseSingle {
  @Field(() => CommissionFeesEntity)
  data: CommissionFeesEntity;

  @Field()
  message: string;
}
