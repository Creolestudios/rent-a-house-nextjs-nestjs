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
  AfterLoad,
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
import { MediaEnum } from '../../common/enum';
import { PropertyEntity } from './property.entity';

@ObjectType()
@Entity('media')
export class MediaEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => Int)
  @Column({ type: 'enum', enum: MediaEnum })
  type: MediaEnum;

  @Field(() => Int)
  @Column({ type: 'int' })
  @JoinColumn({ name: 'property_id' })
  @ManyToOne(() => PropertyEntity, (property) => property.id)
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
  @AfterLoad()
  joinPath() {
    switch (this.type) {
      case MediaEnum.IMAGE: {
        this.name = `${.IMAGE_PATH}property/images/${this.name}`;
        break;
      }
      case MediaEnum.VIDEO: {
        this.name = `${.IMAGE_PATH}property/videos/${this.name}`;
        break;
      }
    }
  }
}
