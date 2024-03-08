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

 * @category   Registration
 * @package    Admin 
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { CreateAdminInput } from './create-admin.input';
import { InputType, Field, PickType, Int } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { StatusEnum } from '../common/enum';
import { ERROR_MESSAGE } from 'src/common/constants';

@InputType()
export class UpdateAdminInput extends PickType(CreateAdminInput, ['role']) {
  @Field(() => Int)
  id: number;

  @Field()
  @IsNotEmpty()
  @IsEmail({}, { message: ERROR_MESSAGE.InvalidEmail })
  email: string;

  @Field(() => Int)
  @IsEnum(StatusEnum)
  status: StatusEnum;
}
