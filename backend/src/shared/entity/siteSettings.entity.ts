/**
 * Copyright 2023 Rent Smartly
 * @category   Database
 * @package    Admin
 * @author     Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @since      File available since Release 1.0.0

 */
import {
  AfterLoad,
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SiteConfigStatus } from '../../common/enum';
@ObjectType()
@Entity('site_configuration')
export class SiteConfigEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  message: string;

  @Field()
  @Column({ type: 'varchar', length: 20, unique: false })
  name: string;

  @Field()
  @Column({ type: 'varchar', length: 50, nullable: true })
  logo: string;

  @Field()
  @Column({ type: 'varchar', length: 255, nullable: true })
  address?: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Field()
  @Column({ type: 'integer' })
  contact: number;

  @Field(() => Int)
  @Column({
    type: 'enum',
    default: SiteConfigStatus.ACTIVE,
    enum: SiteConfigStatus,
    comment: '0-> Inactive 1-> Active',
  })
  status: SiteConfigStatus;

  @Field()
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field({ nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;

  @AfterLoad()
  joinPath(): void {
    this.logo = `${.IMAGE_PATH}site_photos/${this.logo}`;
  }
}
@ObjectType()
export class SiteConfigResponse {
  @Field(() => [SiteConfigEntity])
  data: [SiteConfigEntity];

  @Field()
  message: string;
}
@ObjectType()
export class SiteConfigResponseSingle {
  @Field(() => SiteConfigEntity)
  data: SiteConfigEntity;

  @Field()
  message: string;
}
