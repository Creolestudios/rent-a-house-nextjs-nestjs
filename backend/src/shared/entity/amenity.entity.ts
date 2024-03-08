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
 * @package    Admin
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
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AmenityEnum, StatusEnum } from '../../common/enum';
@ObjectType()
@Entity('amenities')
export class AmenityEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Field(() => Int)
  @Column({
    type: 'enum',
    default: StatusEnum.ACTIVE,
    enum: StatusEnum,
    comment: '0-> Inactive 1-> Active',
  })
  status: StatusEnum;

  @Field(() => Int)
  @Column({
    type: 'enum',
    enum: AmenityEnum,
    comment: '0 -> Facility 1 -> Amenity',
  })
  type: AmenityEnum;

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

@ObjectType()
export class AmenitiesListingResponse {
  @Field(() => [AmenitiesListingResponseType])
  amenities: AmenitiesListingResponseType[];

  @Field(() => [AmenitiesListingResponseType])
  facilities: AmenitiesListingResponseType[];
}

@ObjectType()
export class AmenitiesListingResponseType {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  availability: number;
}
