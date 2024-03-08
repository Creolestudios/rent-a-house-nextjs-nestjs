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
 * @package    Property Rental Conditions
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
import {
  DocumentEnum,
  GenderEnum,
  PetsEnum,
  TenantEnum,
} from '../../common/enum';
import { PropertyEntity } from './property.entity';

@ObjectType()
@Entity('rules_or_preferences')
export class RuleOrPreferenceEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column({
    type: 'enum',
    enum: DocumentEnum,
    default: DocumentEnum.NOT_REQUIRED,
    comment:
      '0 -> no required 1 -> proof of identity 2-> proof of occupation/income 3 -> both',
  })
  document: DocumentEnum;

  @Field(() => Int)
  @Column({
    type: 'enum',
    enum: GenderEnum,
    comment: '0-> Male 1-> Female 2-> Other',
  })
  gender: GenderEnum;

  @Field(() => Int)
  @Column({
    type: 'enum',
    enum: TenantEnum,
    comment: '0-> student 1-> professional 2-> any',
  })
  tenant: TenantEnum;

  @Field(() => Int)
  @Column({
    type: 'enum',
    enum: PetsEnum,
    comment: '0 -> No 1 -> Yes 2-> Negotiable',
  })
  pets: PetsEnum;

  @Field(() => Int)
  @Column({ type: 'int' })
  @JoinColumn({ name: 'property_id' })
  @OneToOne(() => PropertyEntity, (property) => property.id)
  property_id: number;

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
