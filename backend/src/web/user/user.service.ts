import { IsLandlord, PropertyStatusEnum } from './../../common/enum';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
import { FileUpload } from 'graphql-upload';
import * as path from 'path';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../common/constants';
import { GqlNotFoundException } from '../../common/error';
import {
  createStream,
  encryptPassword,
  makeId,
  writeFileIntoDirectory,
} from '../../common/helper';
import { CreateUserInput } from '../../dto/create-user.input';
import { UpdateUserType } from '../../dto/update-user.type';
import {
  UpdateUserProfileInput,
  UpdateUserProfileOnly,
} from '../../dto/update-userprofile.input';
import { UserEntity } from '../../shared/entity/user.entity';
import { In, Repository } from 'typeorm';
import { SupportingDocument } from '../../dto/supporting-document.input';
import { ChangePasswordArgs } from '../../dto/change-user-password.input';
import { JwtService } from '@nestjs/jwt';
import { UserNotificationSettings } from '../../dto/user-notification-seeting.input';
import { UserContactInformation } from '../../dto/user-contact-Information.input';
import { AuthService } from '../auth/auth.service';
import { PropertyEntity } from '../../shared/entity/property.entity';
import { AdditionalRequiredCostEntity } from '../../shared/entity/additional-required-cost.entity';
import { MediaEntity } from '../../shared/entity/media.entity';
import { RentalConditionEntity } from '../../shared/entity/rental-conditions.entity';
import { RuleOrPreferenceEntity } from '../../shared/entity/rules-or-preference.entity';
import { SpaceOverviewEntity } from '../../shared/entity/space-overview.entity';
import { PropertyAmenityEntity } from '../../shared/entity/property-amenity.entity';
import { UserTransactionEntity } from '../../shared/entity/User_transaction.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
    private authService: AuthService,
  ) {}
  async create(
    { createUserInput }: { createUserInput: CreateUserInput },
    { user_image }: { user_image: FileUpload },
  ) {
    try {
      let uploaduseriamgeFileName = null;
      let uploaduserimageWithExtension = null;

      if (user_image) {
        let result = makeId(5);
        const uploadPhotoFile = await createStream(user_image);
        const uploadPhotoDir = './uploads/users/profile';
        const dirPath = 'uploads/users/profile/';
        uploaduseriamgeFileName = result + `${Date.now()}`;

        await writeFileIntoDirectory(
          dirPath,
          user_image,
          uploadPhotoDir,
          uploadPhotoFile,
          uploaduseriamgeFileName,
        );
        uploaduserimageWithExtension =
          `${uploaduseriamgeFileName}` + `${path.extname(user_image.filename)}`;
      }
      const password = createUserInput.password;
      createUserInput.password = await encryptPassword(
        createUserInput.password,
      );
      createUserInput.image = uploaduserimageWithExtension;
      const UserCreated = await this.userRepository.save(createUserInput);

      if (UserCreated) {
        const userInput = {
          email: createUserInput.email,
          password: password,
          user_type: 0,
        };
        const checking = await this.authService.login(userInput);
        return {
          id: checking.id,
          token: checking.token,
          message: SUCCESS_MESSAGE.UserCreated,
        };
      }
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.UserCreation, {
        extensions: { code: 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  /**
   * ANCHOR update
   * @author Parth Chokshi <parth.chokshi@creolestudios.com>
   * @purpose update user type to landlord by id
   * @param UpdateUserType,user id
   * @returns success or error message
   */
  async updateUserType(id: number, payload: UpdateUserType) {
    try {
      const isLandlord =
        payload.is_landlord == true ? IsLandlord.YES : IsLandlord.NO;
      await UserEntity.update(id, {
        is_landlord: isLandlord,
      });
      return SUCCESS_MESSAGE.UserTypeUpdated;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.UserTypeUpdation, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }
  async findOneUserById(id: number): Promise<any> {
    try {
      const userDetails = await UserEntity.findOneBy({
        id: id,
      });
      if (!userDetails) {
        throw new GqlNotFoundException(ERROR_MESSAGE.UserNotFound);
      }
      return userDetails;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.UserNotFound, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async updateUserProfileOnly(
    {
      UpdateUserProfileInput,
    }: { UpdateUserProfileInput: UpdateUserProfileOnly },
    { user_image }: { user_image: FileUpload },
  ): Promise<any> {
    try {
      const userDetails = await UserEntity.findOneBy({
        id: UpdateUserProfileInput.id,
      });
      if (!userDetails) {
        throw new GqlNotFoundException(ERROR_MESSAGE.UserNotFound);
      }
      if (userDetails) {
        let uploaduseriamgeFileName = '';
        let uploaduserimageWithExtension = '';
        let {
          first_name,
          last_name,
          image,
          address,
          gender,
          dob,
          occupation,
          country_id,
        } = UpdateUserProfileInput;

        if (user_image) {
          let result = makeId(5);
          const uploadPhotoFile = await createStream(user_image);
          const uploadPhotoDir = './uploads/users/profile';
          const dirPath = 'uploads/users/profile/';
          uploaduseriamgeFileName = result + `${Date.now()}`;
          await writeFileIntoDirectory(
            dirPath,
            user_image,
            uploadPhotoDir,
            uploadPhotoFile,
            uploaduseriamgeFileName,
          );
          uploaduserimageWithExtension =
            user_image.filename !== ''
              ? `${uploaduseriamgeFileName}${path.extname(user_image.filename)}`
              : '';
          userDetails.image = uploaduserimageWithExtension;

          image = uploaduserimageWithExtension;
          Object.assign(userDetails, {
            first_name,
            last_name,
            address,
            gender,
            dob,
            occupation,
            image,
            country_id,
          });

          await UserEntity.save(userDetails);
          return SUCCESS_MESSAGE.UserUpdated;
        } else if (!user_image || image === null) {
          image == null;
          Object.assign(userDetails, {
            first_name,
            last_name,
            address,
            gender,
            dob,
            occupation,
            image,
            country_id,
          });
          await UserEntity.save(userDetails);
        }
        Object.assign(userDetails, {
          first_name,
          last_name,
          address,
          gender,
          dob,
          occupation,
          image,
          country_id,
        });

        await UserEntity.save(userDetails);
        return SUCCESS_MESSAGE.UserUpdated;
      }
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.UserUpdate, {
        extensions: { code: 'INTERNAL_SERVER_ERROR' },
      });
    }
  }
  async deleteUser(UsersId: number): Promise<string> {
    try {
      // find user by id
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

      if (propertyId.length === 0)
        throw GqlNotFoundException(ERROR_MESSAGE.PropertyNotFound);

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

  async supportingDocument(
    { SupportingDocument }: { SupportingDocument: SupportingDocument },
    { identity_proof }: { identity_proof: FileUpload },
    { proof_of_occupation_income }: { proof_of_occupation_income: FileUpload },
  ): Promise<any> {
    try {
      const userDetails = await UserEntity.findOneBy({
        id: SupportingDocument.id,
      });

      if (!userDetails) {
        throw new GqlNotFoundException(ERROR_MESSAGE.UserNotFound);
      }
      // Upload identity proof, if provided
      if (identity_proof) {
        let result = makeId(5);
        const uploadPhotoFile = await createStream(identity_proof);
        const uploadPhotoDir = './uploads/users/identity_proof';
        const dirPath = 'uploads/users/identity_proof/';
        const filename = `${result}${Date.now()}`;

        const check_extension = path
          .extname(identity_proof.filename)
          .toLowerCase();
        if (!['.jpg', '.jpeg', '.png'].includes(check_extension)) {
          throw new GqlNotFoundException(ERROR_MESSAGE.ImageFormat);
        }

        await writeFileIntoDirectory(
          dirPath,
          identity_proof,
          uploadPhotoDir,
          uploadPhotoFile,
          filename,
        );
        let extension = '';
        if (identity_proof.filename) {
          extension = path.extname(identity_proof.filename);
        }
        const uploaduserimageWithExtension = `${filename}${extension}`;
        userDetails.identity_proof = uploaduserimageWithExtension;
      } else if (SupportingDocument.identity_proof === 'delete') {
        userDetails.identity_proof = null;
      }

      // Upload proof of occupation income, if provided
      if (proof_of_occupation_income) {
        let result = makeId(5);
        const uploadPhotoFile = await createStream(proof_of_occupation_income);
        const uploadPhotoDir = './uploads/users/proof_of_occupation_income';
        const dirPath = 'uploads/users/proof_of_occupation_income/';
        const filename = `${result}${Date.now()}`;

        const check_extension = path
          .extname(proof_of_occupation_income.filename)
          .toLowerCase();
        if (!['.jpg', '.jpeg', '.png'].includes(check_extension)) {
          throw new GqlNotFoundException(ERROR_MESSAGE.ImageFormat);
        }
        await writeFileIntoDirectory(
          dirPath,
          proof_of_occupation_income,
          uploadPhotoDir,
          uploadPhotoFile,
          filename,
        );
        let extension = '';
        if (proof_of_occupation_income.filename) {
          extension = path.extname(proof_of_occupation_income.filename);
        }
        const uploaduserimageWithExtension = `${filename}${extension}`;
        userDetails.proof_of_occupation_income = uploaduserimageWithExtension;
      } else if (SupportingDocument.proof_of_occupation_income === 'delete') {
        userDetails.proof_of_occupation_income = null;
      }

      await UserEntity.save(userDetails);
      return SUCCESS_MESSAGE.UserSupportingDocument;
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async changeUserPassword({
    changeUserPassword,
  }: {
    changeUserPassword: ChangePasswordArgs;
  }): Promise<any> {
    try {
      const userDetails = await UserEntity.findOneBy({
        id: changeUserPassword.id,
      });
      if (!userDetails) {
        throw new GqlNotFoundException(ERROR_MESSAGE.UserNotFound);
      }
      if (userDetails) {
        const token = changeUserPassword.token;
        const decode = this.jwtService.verify(token);
        if (decode) {
          userDetails.password = await encryptPassword(
            changeUserPassword.confirmPassword,
          );
          await UserEntity.save(userDetails);
          return SUCCESS_MESSAGE.PasswordUpdate;
        }
      }
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.UserUpdate, {
        extensions: { code: 'INTERNAL_SERVER_ERROR' },
      });
    }
  }
  async notificationSetting({
    userNotificationSettings,
  }: {
    userNotificationSettings: UserNotificationSettings;
  }): Promise<any> {
    try {
      const userDetails = await UserEntity.findOneBy({
        id: userNotificationSettings.id,
      });
      if (!userDetails) {
        throw new GqlNotFoundException(ERROR_MESSAGE.UserNotFound);
      }
      if (userDetails) {
        userDetails.notification_is_enable =
          userNotificationSettings.notification_is_enable;
        userDetails.notification_language =
          userNotificationSettings.notification_language;
        await UserEntity.save(userDetails);
        return SUCCESS_MESSAGE.UserUpdated;
      }
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.UserUpdate, {
        extensions: { code: 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  async userContactInformation({
    userContactInformation,
  }: {
    userContactInformation: UserContactInformation;
  }): Promise<any> {
    try {
      const userDetails = await UserEntity.findOneBy({
        id: userContactInformation.id,
      });
      if (!userDetails) {
        throw new GqlNotFoundException(ERROR_MESSAGE.UserNotFound);
      }
      if (userDetails) {
        userDetails.email = userContactInformation.email;
        userDetails.dialer_code = userContactInformation.dialer_code;
        userDetails.mobile = userContactInformation.mobile;
        await UserEntity.save(userDetails);
        return SUCCESS_MESSAGE.UserUpdated;
      }
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.UserUpdate, {
        extensions: { code: 'INTERNAL_SERVER_ERROR' },
      });
    }
  }
  async findUserPropetry(
    name: string,
    page: number,
    pagesize: number,
    PropertyStatus: string,
    user: UserEntity,
  ) {
    try {
      const userDetails = await UserEntity.findOneBy({
        id: user.id,
      });

      if (!userDetails) {
        throw new GqlNotFoundException(ERROR_MESSAGE.UserNotFound);
      }
      const lowercaseName = name.toLowerCase();
      const MAX_PAGE_SIZE = 100; // maximum page size
      const skip = (page - 1) * pagesize;
      const take = Math.min(pagesize, MAX_PAGE_SIZE);
      if (PropertyStatus == 'published') {
        const query = PropertyEntity.createQueryBuilder('user')
          .where('LOWER(user.name) LIKE :name', {
            name: `%${lowercaseName}%`,
          })
          .andWhere({ status: PropertyStatusEnum.PUBLISHED })
          .andWhere({ user_id: user.id })
          .take(take)
          .skip(skip)
          .orderBy('user.id', 'ASC');
        const [properties, total] = await query.getManyAndCount();

        let total_properties = total;
        let finalData = await this.totalProperty(user);

        return {
          properties,
          total_properties,
          all: finalData.allMessages,
          draft: finalData.total_Draft.length,
          unpublic: finalData.total_unpublic.length,
          public: finalData.total_public.length,
        };
      } else if (PropertyStatus == 'unpublished') {
        const query = PropertyEntity.createQueryBuilder('user')
          .where('LOWER(user.name) LIKE :name', {
            name: `%${lowercaseName}%`,
          })
          .andWhere({ status: PropertyStatusEnum.UNPUBLISHED })
          .andWhere({ user_id: user.id })
          .take(take)
          .skip(skip)
          .orderBy('user.id', 'ASC');
        const [properties, total] = await query.getManyAndCount();

        let total_properties = total;
        let finalData = await this.totalProperty(user);

        return {
          properties,
          total_properties,
          all: finalData.allMessages,
          draft: finalData.total_Draft.length,
          unpublic: finalData.total_unpublic.length,
          public: finalData.total_public.length,
        };
      } else if (PropertyStatus == 'draft') {
        const query = PropertyEntity.createQueryBuilder('user')
          .where('LOWER(user.name) LIKE :name', {
            name: `%${lowercaseName}%`,
          })
          .andWhere({ status: PropertyStatusEnum.DRAFT })
          .andWhere({ user_id: user.id })
          .take(take)
          .skip(skip)
          .orderBy('user.id', 'ASC');
        const [properties, total] = await query.getManyAndCount();

        let total_properties = total;
        let finalData = await this.totalProperty(user);

        return {
          properties,
          total_properties,
          all: finalData.allMessages,
          draft: finalData.total_Draft.length,
          unpublic: finalData.total_unpublic.length,
          public: finalData.total_public.length,
        };
      } else {
        const query = PropertyEntity.createQueryBuilder('user')
          .where('LOWER(user.name) LIKE :name', {
            name: `%${lowercaseName}%`,
          })
          .andWhere({ user_id: user.id })
          .take(take)
          .skip(skip)
          .orderBy('user.id', 'ASC');
        const [properties, total] = await query.getManyAndCount();

        let total_properties = total;
        let finalData = await this.totalProperty(user);

        return {
          properties,
          total_properties,
          all: finalData.allMessages,
          draft: finalData.total_Draft.length,
          unpublic: finalData.total_unpublic.length,
          public: finalData.total_public.length,
        };
      }
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.UserNotFound, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }
  async totalProperty(user) {
    try {
      const query = PropertyEntity.createQueryBuilder('user')
        .where({ user_id: user.id })
        .orderBy('user.id', 'ASC');
      const [properties, total] = await query.getManyAndCount();

      let allMessages = total;

      let total_public = [];
      let total_unpublic = [];
      let total_Draft = [];
      properties.map((e) => {
        if (e.status === 2) {
          total_public.push(e.status);
        } else if (e.status === 0) {
          total_Draft.push(e.status);
        } else if (e.status === 1) {
          total_unpublic.push(e.status);
        }
      });
      return {
        total_public,
        total_unpublic,
        total_Draft,
        allMessages,
      };
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.UserNotFound, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }
  async deleteProperty(property_id: number): Promise<string> {
    try {
      // find property
      const property = await PropertyEntity.findOneBy({ id: property_id });
      const additional_cost = await AdditionalRequiredCostEntity.findBy({
        property_id: property_id,
      });

      const medias = await MediaEntity.findBy({ property_id: property_id });
      const rentalCondition = await RentalConditionEntity.findOneBy({
        property_id: property_id,
      });
      const rulesAndPreference = await RuleOrPreferenceEntity.findOneBy({
        property_id: property_id,
      });
      const spaceOverview = await SpaceOverviewEntity.findOneBy({
        property_id: property_id,
      });
      const propertyAmenity = await PropertyAmenityEntity.findBy({
        property_id: property_id,
      });

      // if property not found throw error
      if (property) await PropertyEntity.softRemove(property);
      if (additional_cost)
        await AdditionalRequiredCostEntity.softRemove(additional_cost);

      if (medias) await MediaEntity.softRemove(medias);

      if (rentalCondition)
        await RentalConditionEntity.softRemove(rentalCondition);
      if (rulesAndPreference)
        await RuleOrPreferenceEntity.softRemove(rulesAndPreference);

      if (spaceOverview) await SpaceOverviewEntity.softRemove(spaceOverview);

      if (propertyAmenity)
        await PropertyAmenityEntity.softRemove(propertyAmenity);

      // return success message
      return SUCCESS_MESSAGE.Success;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }
}
