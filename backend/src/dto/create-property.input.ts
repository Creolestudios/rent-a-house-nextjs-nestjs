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

 * @category   listing
 * @package    Property 
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { InputType, Int, Field, Float, PartialType } from '@nestjs/graphql';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { ERROR_MESSAGE } from '../common/constants';
import { IsFutureDate } from '../common/helper';

@InputType()
export class CreatePropertyStep2Input {
  @Field()
  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  @Field()
  name: string;

  @Field({ nullable: true })
  latitude: number;

  @Field({ nullable: true })
  longitude: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  @MaxLength(5)
  currency: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @Field()
  house_no: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: ERROR_MESSAGE.NotValidNumber })
  @Field(() => Float)
  rent: number;

  @Field(() => Int, { nullable: true })
  id: number;

  @IsNotEmpty()
  @Field()
  @IsString()
  @MaxLength(20)
  postal_code: string;

  @IsNotEmpty()
  @IsNumber({}, { message: ERROR_MESSAGE.NotValidNumber })
  @Field(() => Int)
  country_id: number;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 }, { message: ERROR_MESSAGE.NotValidNumber })
  @Field(() => Int)
  state_id: number;

  @IsNotEmpty()
  @IsNumber({}, { message: ERROR_MESSAGE.NotValidNumber })
  @Field(() => Int)
  city_id: number;

  @IsNotEmpty()
  @IsNumber({}, { message: ERROR_MESSAGE.NotValidNumber })
  @Field()
  min_rental_period: number;

  @IsNotEmpty()
  @IsNumber({}, { message: ERROR_MESSAGE.NotValidNumber })
  @Field()
  max_rental_period: number;

  @IsNotEmpty({ message: ERROR_MESSAGE.NotValidDate })
  @IsDate({ message: ERROR_MESSAGE.NotValidDate })
  @IsFutureDate()
  @Field(() => Date)
  available_from: Date;
}
@InputType()
export class UpdatePropertyStep2Input extends PartialType(
  CreatePropertyStep2Input,
) {
  @Field(() => Int)
  property_id: number;
}
