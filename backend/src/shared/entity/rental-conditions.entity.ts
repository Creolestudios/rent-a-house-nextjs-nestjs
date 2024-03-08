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
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ContractTypeEnum } from '../../common/enum';
import { AdditionalRequiredCostEntity } from './additional-required-cost.entity';
import { CancellationPolicyEntity } from './cancellation-policy.entity';
import { PropertyEntity } from './property.entity';

@ObjectType()
@Entity('rental_conditions')
export class RentalConditionEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column({
    type: 'enum',
    enum: ContractTypeEnum,
    comment: '0-> Monthly 1-> Yearly',
  })
  contract_type: ContractTypeEnum;

  @Field(() => Int)
  @Column({ type: 'int' })
  @JoinColumn({ name: 'property_id' })
  @OneToOne(() => PropertyEntity, (property) => property.id)
  property_id: number;

  @Field(() => Int)
  @Column({ type: 'int' })
  @JoinColumn({ name: 'cancellation_policy_id' })
  @ManyToOne(() => CancellationPolicyEntity, (policy) => policy.id)
  cancellation_policy_id: number;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;

  @Field(() => [AdditionalRequiredCostEntity], { nullable: true })
  additional_required_cost: AdditionalRequiredCostEntity[];
}
