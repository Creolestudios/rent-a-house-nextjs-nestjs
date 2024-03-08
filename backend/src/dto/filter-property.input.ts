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

 * @category   Listing
 * @package    Property
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Field, InputType, Int } from '@nestjs/graphql';
import { IsArray } from 'class-validator';
import { PropertySortEnum } from '../common/enum';

@InputType()
export class SearchAndFilterPropertyInput {
  @Field({ nullable: true })
  min_price: number;

  @Field({ nullable: true })
  max_price: number;

  @Field(() => Int, {
    nullable: true,
    description: '0 -> both 1 -> furnished 2 -> unfurnished',
  })
  is_furnished: number;

  @Field(() => [Int], { nullable: true })
  size: number[];

  @Field(() => Int, { nullable: true })
  page_number: number;

  @Field(() => Int, { nullable: true })
  page_size: number;

  @Field({ nullable: true })
  start_date: string;

  @Field({ nullable: true })
  end_date: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  locations: string[];

  @Field(() => [String], { nullable: true })
  type: string[];

  @Field(() => [String], { nullable: true })
  facilities: string[];

  @Field(() => [String], {
    nullable: true,
  })
  suitable: string[];

  @Field(() => Boolean, { nullable: true })
  bills_includes: boolean;

  @Field(() => Int)
  sort_by: PropertySortEnum;
}
