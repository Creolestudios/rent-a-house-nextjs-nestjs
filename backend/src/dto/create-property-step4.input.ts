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

import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEnum, IsNumber, ValidateNested } from 'class-validator';
import { YesNoEnum } from '../common/enum';

@InputType()
export class CreatePropertyStep4Input {
  @ValidateNested({ each: true })
  @Field(() => [CreatePropertyStep4InputType])
  step4inputList: CreatePropertyStep4Input[];

  @Field(() => Int)
  property_id: number;
}

@InputType()
export class CreatePropertyStep4InputType {
  @Field(() => Int)
  @IsNumber()
  amenities_id: number;

  @Field(() => Int)
  @IsEnum(YesNoEnum)
  availability: YesNoEnum;
}

@InputType()
export class UpdatePropertyStep4InputType {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  @IsNumber()
  amenities_id: number;

  @Field(() => Int)
  @IsEnum(YesNoEnum)
  availability: YesNoEnum;
}

@InputType()
export class UpdatePropertyStep4Input {
  @ValidateNested({ each: true })
  @Field(() => [UpdatePropertyStep4InputType])
  step4inputList: UpdatePropertyStep4Input[];

  @Field(() => Int)
  property_id: number;
}
