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

import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { ERROR_MESSAGE } from '../common/constants';
import { AdminUserRoleEnum } from '../common/enum';
import { IsUnique } from '../common/helper';
import { AdminEntity } from '../shared/entity/admin.entity';

@InputType()
export class CreateAdminInput {
  @Field()
  @IsNotEmpty()
  @IsEmail({}, { message: ERROR_MESSAGE.InvalidEmail })
  @IsUnique(AdminEntity, 'email')
  email: string;

  @Field()
  @IsNotEmpty()
  @IsUnique(AdminEntity, 'user_name', { message: ERROR_MESSAGE.UserNameExist })
  user_name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[1-9])(?=.*[a-z])(?=.*[!@#$%^&*()_-]).*$/,
    { message: ERROR_MESSAGE.WeakPassword },
  )
  password: string;

  @Field(() => Int)
  @IsEnum(AdminUserRoleEnum)
  role: AdminUserRoleEnum;
}
