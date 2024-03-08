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
 * @package    Auth
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { ERROR_MESSAGE } from '../common/constants';
import { Match } from '../common/helper';

@InputType()
export class ResetPasswordArgs {
  @Field()
  @IsNotEmpty()
  @IsString()
  reset_password_token: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[1-9])(?=.*[a-z])(?=.*[!@#$%^&*()_-]).*$/,
    { message: ERROR_MESSAGE.WeakPassword },
  )
  password: string;

  @Field()
  @Match('password', { message: ERROR_MESSAGE.PasswordNotMatch })
  confirmPassword: string;
}
