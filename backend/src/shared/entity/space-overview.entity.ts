/**
 * Copyright 2023 Rent Smartly
 * Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.


 * @category   Database
 * @package    Property Space Overview
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { YesNoEnum } from '../../common/enum';
import { PropertyEntity } from './property.entity';

/**
 * ANCHOR SpaceOverviewEntity
 * step 3 data entity
 */

@ObjectType()
@Entity('space_overview')
export class SpaceOverviewEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column({ type: 'int' })
  bedrooms: number;

  @Field(() => Int)
  @Column({ type: 'int' })
  peoples: number;

  @Field(() => Int)
  @Column({ type: 'int' })
  size: number;

  @Field(() => Int)
  @Column({ type: 'int' })
  @JoinColumn({ name: 'property_id' })
  @OneToOne(() => PropertyEntity, (property) => property.id)
  property_id: number;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  details: string;

  @Field(() => Int)
  @Column({ type: 'enum', enum: YesNoEnum, default: YesNoEnum.NO })
  is_furnished: YesNoEnum;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;
}
