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

 * @package    Property 
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { InputType, Int, Field, Float, PartialType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ContractTypeEnum } from '../common/enum';

@InputType()
export class CreatePropertyStep5Input {
  @Field(() => Int)
  @IsEnum(ContractTypeEnum)
  contract_type: ContractTypeEnum;

  @Field(() => Int)
  @IsNotEmpty()
  property_id: number;

  @Field(() => Int)
  @IsNotEmpty()
  cancellation_policy_id: number;

  @Field(() => [AdditionalRequiredCostInput], { nullable: 'itemsAndList' })
  additional_required_cost: AdditionalRequiredCostInput[];
}

@InputType()
export class AdditionalRequiredCostInput {
  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => Float, { nullable: true })
  @IsNotEmpty()
  amount: number;
}

@InputType()
export class UpdateAdditionalRequiredCostInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => Float, { nullable: true })
  @IsNotEmpty()
  amount: number;
}

@InputType()
export class UpdatePropertyStep5Input extends PartialType(
  CreatePropertyStep5Input,
) {
  @Field(() => Int)
  id: number;

  @Field(() => [UpdateAdditionalRequiredCostInput], {
    nullable: 'itemsAndList',
  })
  additional_required_cost: UpdateAdditionalRequiredCostInput[];
}
