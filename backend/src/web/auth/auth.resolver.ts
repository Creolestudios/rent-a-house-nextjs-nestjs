/**
 *  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

 * @category   Authentication
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginUserArgs } from '../../dto/login.input';
import { UserEntity } from './../../shared/entity/user.entity';
import { ResetPasswordArgs } from '../../dto/reset-password.input';
import { LogInArgs } from '../../dto/google-login.input';
import { AdminEntity } from '../../shared/entity/admin.entity';
import { AuthService } from './auth.service';
import {
  GoogleOauthLoginResponse,
  UserLoginResponse,
} from '../../common/types';
import { Google } from './google/Google';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  /**
   * ANCHOR user or admin login
   * @author Parth Chokshi <parth.chokshi@creolestudios.com>
   * @purpose validate user or admin credential
   * @param userInput name, password and user type credential
   * @returns user
   */
  @Mutation(() => UserLoginResponse)
  async login(
    @Args({ name: 'userInput', type: () => LoginUserArgs })
    userInput: LoginUserArgs,
  ): Promise<AdminEntity | UserEntity> {
    return this.authService.login(userInput);
  }
  /**
   * ANCHOR forgetPassword
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose check email if found send reset password link
   * @param email email id
   * @returns success message
   */
  @Mutation(() => String)
  async forgetPassword(@Args({ name: 'email' }) email: string) {
    return this.authService.forgetPassword(email);
  }

  /**
   * ANCHOR resetPassword
   * @purpose reset password and update token
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @param inputArgs password, encrypted id and token
   * @returns success message
   */
  @Mutation(() => String)
  async resetPassword(
    @Args({ name: 'inputArgs' }) inputArgs: ResetPasswordArgs,
  ) {
    return this.authService.resetPassword(inputArgs);
  }

  @Mutation(() => String)
  async forgetPasswordUser(@Args({ name: 'email' }) email: string) {
    return this.authService.forgetPasswordUser(email);
  }
  @Mutation(() => String)
  async resetPasswordUser(
    @Args({ name: 'inputArgs' }) inputArgs: ResetPasswordArgs,
  ) {
    return this.authService.resetPasswordUser(inputArgs);
  }

  @Query(() => String)
  async authUrl() {
    try {
      return Google.authUrl;
    } catch (err) {
      throw new Error(`Failed to Query Google Auth Url:${err}`);
    }
  }

  @Mutation(() => GoogleOauthLoginResponse)
  async LogInGoogle(@Args({ name: 'input' }) input: LogInArgs) {
    return this.authService.LogIn(input);
  }

  @Mutation(() => String)
  LogOut() {
    return 'Mutation.LogOut';
  }
}
