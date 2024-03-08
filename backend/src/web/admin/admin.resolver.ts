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

 * @package    Admin 
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { CreateAdminInput } from '../../dto/create-admin.input';
import { UpdateAdminInput } from '../../dto/update-admin.input';
import {
  AdminEntity,
  AdminPaginationResponse,
} from '../../shared/entity/admin.entity';
import { AdminService } from './admin.service';
import { UseGuards } from '@nestjs/common';
import { RoleGuard } from '../auth/role.guard';
import { AuthenticationRole, RoleEnum } from '../../common/enum';
import { UserEntity } from '../../shared/entity/user.entity';
import { MangeUserResponse } from '../../common/types';

const DEFAULT_PAGE_SIZE = 10;
@UseGuards(new RoleGuard([AuthenticationRole.SUPER_ADMIN]))
@Resolver(() => AdminEntity)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  /**
   * ANCHOR createAdmin
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose add admin based role user
   * @param createAdminInput email, username, password and role
   * @returns success message
   */
  @Mutation(() => String)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminService.create({ createAdminInput });
  }

  /**
   * ANCHOR findAll
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get all admin users
   * @returns all admin users
   */
  @Query(() => [AdminEntity], { name: 'admins' })
  findAll() {
    return this.adminService.findAll();
  }

  /**
   * ANCHOR findOne
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose find admin user by id
   * @param id user id
   * @returns user information
   */
  @Query(() => AdminEntity, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOne(id);
  }

  /**
   * ANCHOR updateAdmin
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose update admin user
   * @param updateAdminInput id, status, email, role
   * @returns success message
   */
  @Mutation(() => String)
  updateAdmin(
    @Args('updateAdminInput') updateAdminInput: UpdateAdminInput,
  ): Promise<string> {
    return this.adminService.update(updateAdminInput.id, updateAdminInput);
  }

  /**
   * ANCHOR deleteAdmin
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose delete admin user
   * @param adminUsersId admin user id
   * @returns success message
   */
  @Mutation(() => String)
  async deleteAdmin(
    @Args({ name: 'adminUsersId', type: () => Int }) adminUsersId: number,
  ): Promise<string> {
    return this.adminService.deleteAdmin(adminUsersId);
  }

  @Query(() => MangeUserResponse, { name: 'MangeUser' })
  findAllUser(
    @Args('name', { type: () => String }) name: string,
    @Args('page', { type: () => Int }) page: number,
    @Args('pagesize', { type: () => Int })
    pagesize: number = DEFAULT_PAGE_SIZE,
  ) {
    return this.adminService.findAllUser(name, page, pagesize);
  }

  @Query(() => UserEntity, { name: 'FindOneUser' })
  findOneUser(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOneUser(id);
  }

  @Mutation(() => String)
  async deleteUser(
    @Args({ name: 'UsersId', type: () => Int }) UsersId: number,
  ): Promise<string> {
    return this.adminService.deleteUser(UsersId);
  }

  /**
   * ANCHOR   searchAdmins
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Search admin by user name from listing
   * @param   page_size   show how many records
   * @param   page_number page number
   * @param   admin_name  admin user name
   * @returns admins listing and counts
   */
  @Query(() => AdminPaginationResponse)
  async searchAdmins(
    @Args({ name: 'page_size', type: () => Int }) page_size: number,
    @Args({ name: 'page_number', type: () => Int }) page_number: number,
    @Args({ name: 'admin_name', type: () => String, nullable: true })
    admin_name: string,
  ): Promise<AdminPaginationResponse> {
    return this.adminService.searchAdmin(page_number, page_size, admin_name);
  }
}
