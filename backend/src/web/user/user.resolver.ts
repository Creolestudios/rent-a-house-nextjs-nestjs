import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { CreateUserInput } from '../../dto/create-user.input';
import { UpdateUserProfileOnly } from '../../dto/update-userprofile.input';
import { UserService } from './user.service';
import { UpdateUserType } from '../../dto/update-user.type';
import { SupportingDocument } from '../../dto/supporting-document.input';
import { ChangePasswordArgs } from '../../dto/change-user-password.input';
import { UserNotificationSettings } from '../../dto/user-notification-seeting.input';
import { UserContactInformation } from '../../dto/user-contact-Information.input';
import { RoleGuard } from '../auth/role.guard';
import { AuthenticationRole } from '../../common/enum';
import { UserEntity } from '../../shared/entity/user.entity';

import {
  MangeUserPropertyResponse,
  UserRegisterResponse,
} from '../../common/types';
import { PropertyEntity } from '../../shared/entity/property.entity';
import { getUser } from '../../common/helper';
@UseGuards(new RoleGuard([AuthenticationRole.USER]))
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Mutation(() => String)
  updateUserType(
    @Args('updateUser') updateUser: UpdateUserType,
  ): Promise<string> {
    return this.userService.updateUserType(updateUser.id, updateUser);
  }

  @Query(() => UserEntity, { name: 'FindOneUserById' })
  findOneUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOneUserById(id);
  }

  @UsePipes(ValidationPipe)
  @Mutation(() => String)
  async updateUserProfileOnly(
    @Args('UpdateUserProfileOnly')
    UpdateUserProfileInput: UpdateUserProfileOnly,
    @Args('image', { type: () => GraphQLUpload, nullable: true })
    user_image: FileUpload,
  ) {
    return await this.userService.updateUserProfileOnly(
      { UpdateUserProfileInput },
      { user_image },
    );
  }

  @Mutation(() => String, { name: 'deleteUserUser' })
  async deleteUser(
    @Args('user_id', { type: () => Int }) User_id: number,
  ): Promise<string> {
    return this.userService.deleteUser(User_id);
  }
  @UsePipes(ValidationPipe)
  @Mutation(() => String)
  async supportingDocument(
    @Args('supportingDocument')
    SupportingDocument: SupportingDocument,
    @Args('identity_proof', { type: () => GraphQLUpload, nullable: true })
    identity_proof: FileUpload,
    @Args('proof_of_occupation_income', {
      type: () => GraphQLUpload,
      nullable: true,
    })
    proof_of_occupation_income: FileUpload,
  ) {
    return await this.userService.supportingDocument(
      { SupportingDocument },
      { identity_proof },
      { proof_of_occupation_income },
    );
  }

  @UsePipes(ValidationPipe)
  @Mutation(() => String)
  async changeUserPassword(
    @Args('ChangeUserPassword')
    changeUserPassword: ChangePasswordArgs,
  ) {
    return await this.userService.changeUserPassword({ changeUserPassword });
  }

  @UsePipes(ValidationPipe)
  @Mutation(() => String)
  async notificationSetting(
    @Args('NotificationSetting')
    userNotificationSettings: UserNotificationSettings,
  ) {
    return await this.userService.notificationSetting({
      userNotificationSettings,
    });
  }

  @UsePipes(ValidationPipe)
  @Mutation(() => String)
  async userContactInformation(
    @Args('UserContactInformation')
    userContactInformation: UserContactInformation,
  ) {
    return await this.userService.userContactInformation({
      userContactInformation,
    });
  }

  @Query(() => MangeUserPropertyResponse, { name: 'findUserPropetry' })
  findUserPropetry(
    @Args('name', { type: () => String }) name: string,
    @Args('page', { type: () => Int }) page: number,
    @Args('pagesize', { type: () => Int }) pagesize: number = 10,
    @Args('PropertyStatus', { type: () => String })
    PropertyStatus: string,
    @getUser()
    user: UserEntity,
  ) {
    return this.userService.findUserPropetry(
      name,
      page,
      pagesize,
      PropertyStatus,
      user,
    );
  }
  /**
   * ANCHOR   deleteProperty
   * @author  divyarajsinh champavat <divyarajsinh.champavat@creolestudios.com>
   * @purpose delete Property
   * @param   property_id
   * @returns success message or error
   */
  @Mutation(() => String, { name: 'deletePropertyUser' })
  async deleteProperty(
    @Args('property_id', { type: () => Int }) property_id: number,
  ): Promise<string> {
    return this.userService.deleteProperty(property_id);
  }
}
@Resolver()
export class publicUserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserRegisterResponse)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
    @Args('image', { type: () => GraphQLUpload, nullable: true })
    user_image: FileUpload,
  ) {
    return this.userService.create({ createUserInput }, { user_image });
  }
}
