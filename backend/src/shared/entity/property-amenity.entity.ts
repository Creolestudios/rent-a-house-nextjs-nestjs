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
 * @package    Property Amenity
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
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { YesNoEnum } from '../../common/enum';
import { AmenityEntity } from './amenity.entity';
import { PropertyEntity } from './property.entity';

@Entity('property_amenities')
@Index(['property_id', 'amenities_id'], { unique: true })
@ObjectType()
export class PropertyAmenityEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => AmenityEntity)
  @Column({ type: 'int' })
  @ManyToOne(() => AmenityEntity, (amenity) => amenity.id)
  @JoinColumn({ name: 'amenities_id' })
  amenities_id: number;

  @Field(() => Int)
  @Column({ type: 'int' })
  @ManyToOne(() => PropertyEntity, (property) => property.id)
  @JoinColumn({ name: 'property_id' })
  property_id: number;

  @Field(() => Int)
  @Column({ type: 'enum', enum: YesNoEnum, default: YesNoEnum.NO })
  availability: YesNoEnum;

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
