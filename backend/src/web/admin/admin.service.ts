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

 * @paackage   Admin 
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { ILike, In, Not } from 'typeorm';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../common/constants';
import { RoleEnum } from '../../common/enum';
import { GqlBadUserInput, GqlNotFoundException } from '../../common/error';
import { encryptPassword } from '../../common/helper';
import { CreateAdminInput } from '../../dto/create-admin.input';
import { UpdateAdminInput } from '../../dto/update-admin.input';
import { AdminEntity } from '../../shared/entity/admin.entity';
import { UserEntity } from '../../shared/entity/user.entity';
import { PropertyEntity } from '../../shared/entity/property.entity';
import { UserTransactionEntity } from '../../shared/entity/User_transaction.entity';
import { BookingEntity } from '../../shared/entity/bookings.entity';
import { MessageEntity } from '../../shared/entity/messages.entity';
import { ChildMessageEntity } from '../../shared/entity/child-messages.entity';
import { AdditionalRequiredCostEntity } from '../../shared/entity/additional-required-cost.entity';
import { MediaEntity } from '../../shared/entity/media.entity';
import { RentalConditionEntity } from '../../shared/entity/rental-conditions.entity';
import { RuleOrPreferenceEntity } from '../../shared/entity/rules-or-preference.entity';
import { SpaceOverviewEntity } from '../../shared/entity/space-overview.entity';
import { PropertyAmenityEntity } from '../../shared/entity/property-amenity.entity';

@Injectable()
export class AdminService {
  /**
   * ANCHOR create
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose add admin based role user
   * @param createAdminInput email, username, password and role
   * @returns success message
   */
  async create({
    createAdminInput,
  }: {
    createAdminInput: CreateAdminInput;
  }): Promise<string> {
    try {
      createAdminInput.password = await encryptPassword(
        createAdminInput.password,
      );
      await AdminEntity.save(createAdminInput as AdminEntity);
      return SUCCESS_MESSAGE.AdminCreated;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.AdminCreation, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR findAll
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get all admin users
   * @returns all admin users
   */
  async findAll() {
    try {
      return await AdminEntity.find({
        where: { role: Not(RoleEnum.SUPER_ADMIN) },
        order: { id: 'ASC' },
      });
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: { code: error?.extensions?.code || 'NOT_FOUND' },
      });
    }
  }

  /**
   * ANCHOR findOne
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose find admin user by id
   * @param id user id
   * @returns user information
   */
  async findOne(id: number) {
    try {
      return await AdminEntity.findOneBy({ id: id });
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: { code: error?.extensions?.code || 'NOT_FOUND' },
      });
    }
  }

  /**
   * ANCHOR update
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose update admin user
   * @param updateAdminInput id, status, email, role
   * @returns success message
   */
  async update(id: number, updateAdminInput: UpdateAdminInput) {
    try {
      const admin = await AdminEntity.findOneBy({ id: id });

      const emailExist = await AdminEntity.findOneBy({
        email: updateAdminInput.email,
        id: Not(id),
      });

      if (emailExist) {
        throw new GqlBadUserInput(ERROR_MESSAGE.EmailExist);
      }
      if (updateAdminInput.email === admin.email) {
        await AdminEntity.update(id, {
          status: updateAdminInput.status,
          role: updateAdminInput.role,
        });
      }
      await AdminEntity.update(id, {
        email: updateAdminInput.email,
        status: updateAdminInput.status,
        role: updateAdminInput.role,
      });
      return SUCCESS_MESSAGE.AdminUpdated;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.AdminCreation, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR deleteAdmin
   * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose delete admin user
   * @param adminUserId admin user id
   * @returns success message
   */
  async deleteAdmin(adminUserId: number): Promise<string> {
    try {
      // find user bby id
      const adminUser = await AdminEntity.findOneBy({ id: adminUserId });

      // if user not found throw error
      if (!adminUser)
        throw GqlNotFoundException(ERROR_MESSAGE.NotFoundException);

      // if user found delete user
      await AdminEntity.softRemove(adminUser);

      // return success message
      return SUCCESS_MESSAGE.AdminUserDeleted;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async findAllUser(name: string, page: number, pagesize: number) {
    try {
      const lowercaseName = name.toLowerCase();
      const MAX_PAGE_SIZE = 100; // maximum page size
      const skip = (page - 1) * pagesize;
      const take = Math.min(pagesize, MAX_PAGE_SIZE);
      const query = UserEntity.createQueryBuilder('user')
        .where('LOWER(user.first_name) LIKE :name', {
          name: `%${lowercaseName}%`,
        })
        .orWhere('LOWER(user.last_name) LIKE :name', {
          name: `%${lowercaseName}%`,
        })
        .orWhere(
          "LOWER(CONCAT(user.first_name, ' ', user.last_name)) LIKE :name",
          { name: `%${lowercaseName}%` },
        )
        .take(take)
        .skip(skip)
        .orderBy('user.id', 'ASC');
      const [users, total] = await query.getManyAndCount();
      let total_users = total;

      return { users, total_users };
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: { code: error?.extensions?.code || 'NOT_FOUND' },
      });
    }
  }

  async findOneUser(id: number) {
    try {
      const Isproperty = await PropertyEntity.findBy({ user_id: id });
      const userDetails = await UserEntity.findOneBy({ id: id });
      if (!userDetails) {
        throw GqlNotFoundException(ERROR_MESSAGE.NotFoundException);
      }
      const TotalProperties = Isproperty.length;
      const listedProperties = Isproperty.flatMap((a) => {
        return [{ name: a.name, id: a.id }];
      });

      const result = {
        ...userDetails,
        TotalProperties,
        listedProperties,
      };
      return result;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: { code: error?.extensions?.code || 'NOT_FOUND' },
      });
    }
  }
  async deleteUser(UsersId: number): Promise<string> {
    try {
      // find user bby id
      const User = await UserEntity.findOneBy({ id: UsersId });

      // if user not found throw error
      if (!User) throw GqlNotFoundException(ERROR_MESSAGE.UserNotFound);
      if (User.is_landlord === 0) {
        const usertransaction = new UserTransactionEntity();
        usertransaction.user_id = User.id;
        usertransaction.content = JSON.parse(JSON.stringify(User));
        await usertransaction.save();

        User.email = null;
        User.dialer_code = null;
        User.mobile = null;
        await User.save();

        await User.softRemove();

        return SUCCESS_MESSAGE.UserDeleted;
      }
      const usertransaction = new UserTransactionEntity();
      usertransaction.user_id = User.id;
      usertransaction.content = JSON.parse(JSON.stringify(User));
      await usertransaction.save();

      const property: any = await PropertyEntity.createQueryBuilder('p')

        .where('p.user_id =:userId', { userId: User.id })
        .getMany();

      const propertyId = property.map((p) => {
        return p.id;
      });

      const additional_cost = await AdditionalRequiredCostEntity.findBy({
        property_id: In(propertyId),
      });

      const medias = await MediaEntity.findBy({ property_id: In(propertyId) });

      const rentalCondition = await RentalConditionEntity.findOneBy({
        property_id: In(propertyId),
      });

      const rulesAndPreference = await RuleOrPreferenceEntity.findOneBy({
        property_id: In(propertyId),
      });
      const spaceOverview = await SpaceOverviewEntity.findOneBy({
        property_id: In(propertyId),
      });

      const propertyAmenity = await PropertyAmenityEntity.findBy({
        property_id: In(propertyId),
      });

      if (!propertyId)
        throw GqlNotFoundException(ERROR_MESSAGE.PropertyNotFound);
      // if property found delete it
      await PropertyEntity.softRemove(property);

      if (additional_cost) {
        await AdditionalRequiredCostEntity.softRemove(additional_cost);
      }
      if (medias) {
        await MediaEntity.softRemove(medias);
      }
      if (rentalCondition)
        await RentalConditionEntity.softRemove(rentalCondition);
      if (rulesAndPreference)
        await RuleOrPreferenceEntity.softRemove(rulesAndPreference);
      if (spaceOverview) await SpaceOverviewEntity.softRemove(spaceOverview);
      if (propertyAmenity) {
        await PropertyAmenityEntity.softRemove(propertyAmenity);
      }

      User.email = null;
      User.dialer_code = null;
      User.mobile = null;
      await User.save();

      await User.softRemove();
      return SUCCESS_MESSAGE.UserDeleted;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
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

  async searchAdmin(
    page_number: number,
    page_size: number,
    admin_name: string,
  ) {
    const skipData = (page_number - 1) * page_size;

    const [admins, total_admins] = await AdminEntity.createQueryBuilder('admin')
      .where('LOWER(admin.user_name) LIKE :adminName', {
        adminName: `%${admin_name}%`,
      })
      .andWhere('admin.role !=:adminRole', { adminRole: RoleEnum.SUPER_ADMIN })
      .skip(skipData)
      .take(page_size)
      .orderBy({ id: 'ASC' })
      .getManyAndCount();

    return { admins, total_admins };
  }
}
