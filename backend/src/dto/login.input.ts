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

 * @category   Authentication
 * @paackage   Admin 
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { LoginUserTypeEnum } from '../common/enum';
import { ERROR_MESSAGE } from '../common/constants';

@InputType()
export class LoginUserArgs {
  @Field({ name: 'email' })
  @IsNotEmpty()
  @IsEmail({}, { message: ERROR_MESSAGE.InvalidEmail })
  email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  password: string;

  @Field(() => Int)
  @IsEnum(LoginUserTypeEnum)
  user_type: LoginUserTypeEnum;
}
