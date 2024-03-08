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

import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { YesNoEnum } from '../common/enum';

@InputType()
export class CreatePropertyStep3Input {
  @Field(() => Int)
  @IsNotEmpty()
  bedrooms: number;

  @Field(() => Int)
  @IsNotEmpty()
  peoples: number;

  @Field(() => Int)
  @IsNotEmpty()
  size: number;

  @Field(() => Int)
  @IsNotEmpty()
  property_id: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  details: string;

  @Field(() => Int)
  @IsEnum(YesNoEnum)
  is_furnished: YesNoEnum;
}

@InputType()
export class UpdatePropertyStep3Input extends PartialType(
  CreatePropertyStep3Input,
) {
  @Field(() => Int)
  id: number;
}
