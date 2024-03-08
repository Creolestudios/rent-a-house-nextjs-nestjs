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
import { StatusEnum } from '../../common/enum';
import { UserEntity } from './user.entity';
import { CmsEntity } from './cms.entity';

@ObjectType()
@Entity('languages')
export class SpokenLanguagesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Field()
  @Column({ type: 'varchar', length: 50 })
  language_code: string;

  @OneToMany((type) => UserEntity, (user) => user.country_id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  childrens: UserEntity[];

  @OneToMany((type) => CmsEntity, (cms) => cms.language_id, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  children: CmsEntity[];

  @Field()
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field()
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;
}
