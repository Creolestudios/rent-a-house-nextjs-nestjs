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
 * @package    Property
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  AfterLoad,
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VirtualColumn,
} from 'typeorm';
import { PropertyStatusEnum, YesNoEnum } from '../../common/enum';
import { CityEntity } from './city.entity';
import { CountryEntity } from './country.entity';
import { MediaEntity } from './media.entity';
import { StateEntity } from './state.entity';
import { UserEntity } from './user.entity';
import { AdditionalRequiredCostEntity } from './additional-required-cost.entity';
import { SpaceOverviewEntity } from './space-overview.entity';
import { BookingEntity } from './bookings.entity';
// step 2 data entity
@ObjectType()
@Entity('properties')
export class PropertyEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'float', nullable: true })
  min_rental_period: number;

  @Field()
  @Column({ type: 'float', nullable: true })
  max_rental_period: number;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Field()
  @Column({ type: 'varchar', length: 5 })
  currency: string;

  @Field()
  @Column({ type: 'float', nullable: true })
  latitude: number;

  @Field()
  @Column({ type: 'float', nullable: true })
  longitude: number;

  @Field()
  @Column({ type: 'varchar', length: 20 })
  postal_code: string;

  @Field()
  @Column({ type: 'varchar', length: 50, nullable: true })
  house_no: string;

  @Field()
  @Column({ type: 'float' })
  rent: number;

  @Field(() => Int)
  @Column({
    type: 'enum',
    default: YesNoEnum.NO,
    enum: YesNoEnum,
    comment: '0-> No 1-> yes',
  })
  is_mobile_verified: YesNoEnum;

  @Field(() => Int)
  @Column({
    type: 'enum',
    default: PropertyStatusEnum.DRAFT,
    enum: PropertyStatusEnum,
    comment: '0-> draft 1-> unpublished 2-> published',
  })
  status: PropertyStatusEnum;

  @Field(() => Int)
  @ManyToOne(() => CountryEntity, (country) => country.id)
  @Column({ nullable: true })
  @JoinColumn({ name: 'country_id' })
  country_id: number;

  @Field(() => Int)
  @ManyToOne(() => StateEntity, (state) => state.id)
  @Column({ nullable: true })
  @JoinColumn({ name: 'state_id' })
  state_id: number;

  @Field(() => Int)
  @ManyToOne(() => CityEntity, (city) => city.id)
  @Column({ nullable: true })
  @JoinColumn({ name: 'city_id' })
  city_id: number;

  @Field(() => String)
  @Column({ type: 'date' })
  available_from: Date;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;

  @Field(() => Int)
  @Column({ type: 'int' })
  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user_id: number;

  @Field(() => [MediaEntity], { nullable: true })
  media: MediaEntity[];

  @Field(() => Int, { nullable: true })
  is_favorite: number;

  @Field(() => [MediaEntity], { nullable: true })
  @OneToMany(() => MediaEntity, (m) => m.property_id)
  images: MediaEntity[];

  @OneToMany(() => AdditionalRequiredCostEntity, (a) => a.property_id)
  additional_cost: AdditionalRequiredCostEntity[];

  @Field()
  @VirtualColumn({
    query: (p) =>
      `SELECT m.name FROM media m WHERE m.property_id = ${p}.id ORDER BY m.created_at ASC LIMIT 1`,
  })
  thumbnail: string;

  @Field(() => Int, { nullable: true })
  @VirtualColumn({
    query: (p) =>
      `SELECT COUNT(*) FROM favorite_properties fp WHERE fp.property_id = ${p}.id AND fp.is_favorite = '1'::favorite_properties_is_favorite_enum GROUP BY fp.property_id`,
  })
  total_favorites: number;

  @AfterLoad()
  joinPath(): void {
    this.thumbnail = `${.IMAGE_PATH}property/images/${this.name}`;
  }

  @Field({ nullable: true })
  first_month_rent: string;

  @Field({ nullable: true })
  @OneToOne(() => SpaceOverviewEntity, (space) => space.property_id)
  space: SpaceOverviewEntity;

  @Field({ nullable: true })
  one_time_service_fee: string;

  @Field(() => UserEntity)
  get landlord() {
    return this.user_id;
  }

  @OneToMany(() => BookingEntity, (b) => b.propertys_id)
  bookings: BookingEntity[];
}

// ANCHOR CreatePropertyResponse
@ObjectType()
export class CreatePropertyResponse {
  @Field()
  message: string;

  @Field(() => Int)
  property_id: number;
}

// ANCHOR PropertyPaginationResponse
@ObjectType()
export class PropertyPaginationResponse {
  @Field(() => [PropertyEntity])
  properties: PropertyEntity[];

  @Field(() => Int, { nullable: true })
  total_properties: number;
}

@ObjectType()
export class FieldWiseCount {
  @Field(() => [CountArray], { nullable: true })
  type: CountArray[];

  @Field(() => [CountArray], { nullable: true })
  size: CountArray[];

  @Field(() => [CountArray], { nullable: true })
  furniture: CountArray[];

  @Field(() => [CountArray], { nullable: true })
  suitable_for: CountArray[];

  @Field(() => [CountArray], { nullable: true })
  amenities: CountArray[];

  @Field(() => [CountArray], { nullable: true })
  facilities: CountArray[];
}

@ObjectType()
export class PropertyFilterResponse {
  @Field(() => [PropertyEntity])
  properties: PropertyEntity[];

  @Field(() => FieldWiseCount, { nullable: true })
  field_wise_count: FieldWiseCount;

  @Field(() => Int)
  total_properties: number;
}

@ObjectType()
export class CountArray {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  total: number;
}
