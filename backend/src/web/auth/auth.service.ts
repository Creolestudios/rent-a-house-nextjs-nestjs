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

import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../common/constants';
import { LoginUserArgs } from '../../dto/login.input';
import { UserEntity } from './../../shared/entity/user.entity';
import { AdminEntity } from '../../shared/entity/admin.entity';
import * as Bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../../shared/module/mail/mail.service';
import { encryptPassword, TokenGenerator } from '../../common/helper';
import { ResetPasswordArgs } from '../../dto/reset-password.input';
import {
  GqlBadRequestException,
  GqlBadUserInput,
  GqlNotFoundException,
} from '../../common/error';
import { SendMailInterface } from '../../common/types';
import { RoleEnum } from '../../common/enum';
import * as moment from 'moment';
import crypto from 'crypto';
import { Google } from './google/Google';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  /**
   * ANCHOR Login method
   * @author Jaydeep Gorasiya  <jaydeep.gorasiya@creolestudios.com>
   * @purpose validate user type -> user or admin credential and update token in db
   * @param userInput email, password and user type
   * @returns users details with access token
   */

  async login(userInput: LoginUserArgs): Promise<AdminEntity | UserEntity> {
    try {
      // store user information
      const userData = await this.validate(userInput);

      // check if user data have a role or not
      // if yes then return admin otherwise return user
      if (userData && Object.values(RoleEnum).includes(userData?.['role'])) {
        const payload = {
          id: userData.id,
          email: userData.email,
          role: userData['role'],
        };

        // create and assign jwt token to user object
        userData.token = this.jwtService.sign(payload);

        // save updated user information
        await AdminEntity.save(userData);

        // return user information
        return userData;
      } else {
        // create payload
        const payload = {
          id: userData.id,
          email: userData.email,
        };

        //crate and assign jwt token to user object
        userData.token = this.jwtService.sign(payload);

        // store updated user information in db
        await UserEntity.save(userData);

        // return user information
        return userData;
      }
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR validate
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose validate user credential
   * @param adminInput email and password
   * @returns user or error
   */
  async validate(userInput: LoginUserArgs): Promise<AdminEntity | UserEntity> {
    try {
      switch (Number(userInput.user_type)) {
        case 0: {
          const user = await UserEntity.findOneBy({ email: userInput.email });

          //check user is found or not if user is not found return error
          if (!user) {
            throw GqlNotFoundException(ERROR_MESSAGE.EmailNotFound);
          }

          //if password not match throw error
          if (!Bcrypt.compareSync(userInput.password, user.password)) {
            throw GqlBadUserInput(ERROR_MESSAGE.WrongPassword);
          }
          return user;
        }
        case 1: {
          const admin = await AdminEntity.findOneBy({ email: userInput.email });
          //check admin is found or not if admin is not found return error
          if (!admin) {
            throw GqlNotFoundException(ERROR_MESSAGE.EmailNotFound);
          }

          //if password not match throw error
          if (!Bcrypt.compareSync(userInput.password, admin.password)) {
            throw GqlBadUserInput(ERROR_MESSAGE.WrongPassword);
          }
          return admin;
        }
      }
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR find user
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose find user by id
   * @param id user id
   * @returns user
   */
  async findUserById(id: any): Promise<AdminEntity> {
    try {
      return await AdminEntity.findOneBy({ id: id });
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: { code: error?.extensions?.code || 'NOT_FOUND' },
      });
    }
  }

  /**
   * ANCHOR forgetPassword
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose check email if found send reset password link
   * @param email email id
   * @returns success message
   */
  async forgetPassword(email: string) {
    try {
      //find admin by email
      const admin = await AdminEntity.findOneBy({ email });

      //if admin not found throw error
      if (!admin) {
        throw GqlNotFoundException();
      }

      //generate token
      const resetPasswordToken = TokenGenerator();

      //create mail sending data
      const mailData: SendMailInterface = {
        subject: 'reset password',
        template: 'forget-password',
        context: {
          name: admin.user_name,
          url: `${.APP_URL}/admin/reset-password?token=${resetPasswordToken}`,
        },
      };

      //update token
      AdminEntity.update(admin.id, {
        reset_password_token: resetPasswordToken,
      });

      //send mail
      await this.mailService.sendUserConfirmation(mailData, admin);

      //return success message
      return SUCCESS_MESSAGE.MailCheck;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.MailNotSend, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR resetPassword
   * @purpose reset password and update token
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @param inputArgs password, encrypted id and token
   * @returns success message
   */
  async resetPassword(inputArgs: ResetPasswordArgs) {
    try {
      // store decrypt id

      // store admin
      const admin = await AdminEntity.findOneBy({
        reset_password_token: inputArgs.reset_password_token,
      });

      // check token in db if token is null return error
      if (admin.reset_password_token === null) {
        throw GqlBadRequestException(ERROR_MESSAGE.ExpiredURL);
      }

      // compare token if token is same update password and set token to null
      if (
        admin &&
        admin.reset_password_token === inputArgs.reset_password_token
      ) {
        admin.reset_password_token = null;
        admin.password = await encryptPassword(inputArgs.password);

        await AdminEntity.save(admin);
        return SUCCESS_MESSAGE.PasswordUpdate;
      }
      // if token is not same throw an error
      throw GqlBadRequestException(ERROR_MESSAGE.IncorrectUrl);
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.ExpiredURL, {
        extensions: { code: error?.extensions?.code || 'BAD_REQUEST' },
      });
    }
  }

  /**
   * ANCHOR find user
   * @author Parth Chokshi <parth.chokshi@creolestudios.com>
   * @purpose find user by email and also check role to find out user and admin
   * @param payload
   * @returns user
   */
  async findUser(payload: any): Promise<AdminEntity | UserEntity> {
    try {
      if (payload && payload.role) {
        return await AdminEntity.findOneBy({ id: payload.id });
      }
      return await UserEntity.findOneBy({ id: payload.id });
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: { code: error?.extensions?.code || 'NOT_FOUND' },
      });
    }
  }
  async forgetPasswordUser(email: string) {
    try {
      //find admin by email
      const user = await UserEntity.findOneBy({ email });

      //if admin not found throw error
      if (!user) {
        throw GqlNotFoundException();
      }

      //generate token
      const resetPasswordToken =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      //create mail sending data
      const mailData: SendMailInterface = {
        subject: 'reset password',
        template: 'forget-password',
        context: {
          name: user.first_name.concat(user.last_name),
          url: `${.APP_URL}/home/reset-password?token=${resetPasswordToken}`,
        },
      };

      // update token
      UserEntity.update(user.id, {
        reset_password_token: resetPasswordToken,
        reset_password_token_exp: moment().add(10, 'm').format(),
      });

      //send mail
      await this.mailService.sendUsersConfirmation(mailData, user);

      //return success message
      return SUCCESS_MESSAGE.MailCheck;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.MailNotSend, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async resetPasswordUser(inputArgs: ResetPasswordArgs) {
    try {
      // store decrypt id

      // store admin
      const user = await UserEntity.findOneBy({
        reset_password_token: inputArgs.reset_password_token,
      });
      //check token in db if token is null return error
      if (user.reset_password_token === null) {
        throw new GqlBadRequestException(ERROR_MESSAGE.ExpiredURL);
      } else {
        if (
          moment().format() > moment(user.reset_password_token_exp).format()
        ) {
          throw new GqlBadRequestException('Token has already expired');
        } else {
          // compare token if token is same update password and set token to null
          if (
            user &&
            user.reset_password_token === inputArgs.reset_password_token
          ) {
            user.reset_password_token = null;
            user.reset_password_token_exp = null;
            user.password = await encryptPassword(inputArgs.password);
            await UserEntity.save(user);
            return SUCCESS_MESSAGE.PasswordUpdate;
          }
          // if token is not same throw an error
          throw GqlBadRequestException(ERROR_MESSAGE.IncorrectUrl);
        }
      }
    } catch (error) {
      if (
        error.message ==
        `Cannot read properties of null (reading 'reset_password_token')`
      ) {
        throw GqlBadRequestException(ERROR_MESSAGE.ExpiredURL);
      }
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async LogIn(input) {
    try {
      const { user, token } = await Google.logIn(input.code);

      if (!user) {
        throw new Error('Google Log in Error');
      }

      const userNamesList = user.names && user.names.length ? user.names : null;
      const userPhotosList =
        user.photos && user.photos.length ? user.photos : null;
      const userEmailsList =
        user.emailAddresses && user.emailAddresses.length
          ? user.emailAddresses
          : null;

      const givenName = userNamesList ? userNamesList[0].givenName : null;
      const familyName = userNamesList ? userNamesList[0].familyName : null;

      const userId =
        userNamesList &&
        userNamesList[0].metadata &&
        userNamesList[0].metadata.source
          ? userNamesList[0].metadata.source.id
          : null;
      const userAvatar =
        userPhotosList && userPhotosList[0].url ? userPhotosList[0].url : null;
      const userEmail =
        userEmailsList && userEmailsList[0].value
          ? userEmailsList[0].value
          : null;

      if (!userId || !givenName || !familyName || !userAvatar || !userEmail) {
        throw new Error('Google login error');
      }

      let systemUser = await UserEntity.findOne({
        where: {
          email: userEmail,
        },
      });

      let socialInsertUser;

      if (!systemUser) {
        // create and assign jwt token to user object

        socialInsertUser = await UserEntity.save({
          first_name: givenName,
          last_name: familyName,
          email: userEmail,
          is_email_verified: 1,
          social_token: token.access_token,
          image: userAvatar,
          social_type: 1,
        });

        const payload = {
          id: socialInsertUser.id,
          email: userEmail,
        };

        const tokens = this.jwtService.sign(payload);

        const userToken = await UserEntity.findOne({
          where: {
            id: socialInsertUser.id,
          },
        });

        userToken.token = tokens;
        await UserEntity.save(userToken);

        systemUser = socialInsertUser;
      }

      const payload = {
        id: systemUser.id,
        email: systemUser.email,
      };

      systemUser.token = this.jwtService.sign(payload);
      await UserEntity.save(systemUser);

      return {
        id: systemUser.id || socialInsertUser.id,
        first_name: systemUser.first_name || socialInsertUser.first_name,
        last_name: systemUser.last_name || socialInsertUser.last_name,
        email: systemUser.email || socialInsertUser.email,
        image: systemUser.image || socialInsertUser.image,
        social_type: systemUser.social_type || socialInsertUser.social_type,
        token: systemUser.token || socialInsertUser.token,
      };
    } catch (err) {
      throw new Error(`Failed to log in with Google: ${err}`);
    }
  }
}
