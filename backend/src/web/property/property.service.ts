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

 * @package    Property 
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../common/constants';
import {
  CreatePropertyStep2Input,
  UpdatePropertyStep2Input,
} from '../../dto/create-property.input';
import {
  CreatePropertyStep3Input,
  UpdatePropertyStep3Input,
} from '../../dto/create-property-step3.input';
import {
  CreatePropertyResponse,
  PropertyEntity,
} from '../../shared/entity/property.entity';
import { SpaceOverviewEntity } from '../../shared/entity/space-overview.entity';
import {
  CreatePropertyStep4Input,
  UpdatePropertyStep4Input,
} from '../../dto/create-property-step4.input';
import { PropertyAmenityEntity } from '../../shared/entity/property-amenity.entity';
import {
  CreatePropertyStep5Input,
  UpdatePropertyStep5Input,
} from '../../dto/create-property-step5.input';
import { RentalConditionEntity } from '../../shared/entity/rental-conditions.entity';
import { AdditionalRequiredCostEntity } from '../../shared/entity/additional-required-cost.entity';
import {
  CreatePropertyStep6Input,
  UpdatePropertyStep6Input,
} from '../../dto/create-property-step6.input';
import { RuleOrPreferenceEntity } from '../../shared/entity/rules-or-preference.entity';
import {
  createStream,
  makeId,
  writeFileIntoDirectory,
} from '../../common/helper';
import * as path from 'path';
import { MediaEntity } from '../../shared/entity/media.entity';
import { Twilio } from 'twilio';
import {
  GqlBadRequestException,
  GqlNotFoundException,
} from '../../common/error';
import {
  AmenityEnum,
  BookingStatusEnum,
  IsLandlord,
  MediaEnum,
  PropertySortEnum,
  PropertyStatusEnum,
  PropertyStepEnum,
  StatusEnum,
  YesNoEnum,
} from '../../common/enum';
import { UserEntity } from './../../shared/entity/user.entity';
import { VerifyOTPInput } from '../../dto/verify-otp.input';
import { In, Not } from 'typeorm';
import { CountryEntity } from '../../shared/entity/country.entity';
import { StateEntity } from '../../shared/entity/state.entity';
import { CityEntity } from '../../shared/entity/city.entity';
import { BookingEntity } from 'src/shared/entity/bookings.entity';
import { FavoritePropertyInput } from '../../dto/favorite-property.input';
import { FavoritePropertyEntity } from '../../shared/entity/favourites.entity';
import { AmenityEntity } from '../../shared/entity/amenity.entity';
import { SearchAndFilterPropertyInput } from '../../dto/filter-property.input';
import { async } from 'rxjs';
import axios from 'axios';
import { type } from 'os';

@Injectable()
export class PropertyService {
  constructor() {
    this.twilioClient = new Twilio(
      .TWILIO_ACCOUNT_SID,
      .TWILIO_AUTH_TOKEN,
    );
  }
  private twilioClient: Twilio;
  /**
   * ANCHOR   storeStep2
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 2 data in DB
   * @param   createPropertyStep2Input create property step input fields
   * @returns success message and property id
   */
  async getPlaceAutocomplete(input: string) {
   
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw new Error(
        'Failed to fetch place autocomplete data from Google Maps API',
      );
    }
  }
  async getPlaceLetLong(input: string) {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      throw new Error(
        'Failed to fetch place autocomplete data from Google Maps API',
      );
    }
  }
  async storeStep2(
    createPropertyInput: CreatePropertyStep2Input,

    user: UserEntity,
  ) {
    try {
      // find user by id
      await UserEntity.update(user.id, { is_landlord: IsLandlord.YES });
      let citydata = await CityEntity.findOne({
        where: { id: createPropertyInput.city_id },
      });
      let Statedata = await StateEntity.findOne({
        where: { id: createPropertyInput.state_id },
      });
      let Countrydata = await CountryEntity.findOne({
        where: { id: createPropertyInput.country_id },
      });
      const input = `${createPropertyInput.house_no}  ${citydata.name} ${Statedata.name} ${Countrydata.name} ${createPropertyInput.postal_code}`; // Replace with the desired input
      const placeAutocompleteData = await this.getPlaceAutocomplete(input);

      if (placeAutocompleteData.status === 'ZERO_RESULTS') {
        throw new GqlNotFoundException(ERROR_MESSAGE.InvalidAddress);
      }
      if (placeAutocompleteData.status === 'OK') {
        let input1 = placeAutocompleteData.predictions[0].place_id;

        // Replace with the desired input
        const getPlaceLetLong = await this.getPlaceLetLong(input1);

        createPropertyInput.latitude =
          getPlaceLetLong?.result?.geometry?.location.lat;
        createPropertyInput.longitude =
          getPlaceLetLong?.result?.geometry?.location.lng;
      }

      // save property data in DB
      const newProperty = await PropertyEntity.save({
        ...(createPropertyInput as PropertyEntity),
        user_id: user.id,
      });
      return { message: SUCCESS_MESSAGE.Step2, property_id: newProperty.id };
    } catch (error) {
      throw new GraphQLError(error.message || '', {});
    }
  }

  /**
   * ANCHOR   storeStep3
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 3 data in DB
   * @param   createPropertyStep3Input create property step 3 input fields
   * @returns success message and property id
   */
  async storeStep3(
    createPropertyInput: CreatePropertyStep3Input,
    user: UserEntity,
  ) {
    try {
      //store data in db
      const checkExistingData = await SpaceOverviewEntity.findOneBy({
        property_id: createPropertyInput.property_id,
      });
      if (checkExistingData) {
        const updateInput = {
          ...createPropertyInput,
          id: checkExistingData.id,
        };
        await this.editPropertyStep3(updateInput, user);
      } else {
        await SpaceOverviewEntity.save(
          createPropertyInput as SpaceOverviewEntity,
        );
      }

      return {
        message: SUCCESS_MESSAGE.Step3,
        property_id: createPropertyInput.property_id,
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   storeStep4
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 4 data in DB
   * @param   createPropertyStep4Input create property step 4 input fields
   * @returns success message and property id
   */
  async storeStep4(
    createPropertyInput: CreatePropertyStep4Input,
    user: UserEntity,
  ) {
    try {
      createPropertyInput.step4inputList.every((e) => {
        e['property_id'] = createPropertyInput.property_id;
        return e;
      });
      //store data in db
      await PropertyAmenityEntity.createQueryBuilder('amenity')
        .insert()
        .into(PropertyAmenityEntity)
        .values(createPropertyInput.step4inputList)
        .orUpdate(['availability'], ['property_id', 'amenities_id'], {
          skipUpdateIfNoValuesChanged: true,
        })
        .execute();

      return {
        message: SUCCESS_MESSAGE.Step4,
        property_id: createPropertyInput.property_id,
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   storeStep5
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 4 data in DB
   * @param   createPropertyStep4Input create property step 5 input fields
   * @returns success message and property id
   */
  async storeStep5(
    createPropertyInput: CreatePropertyStep5Input,
    user: UserEntity,
  ) {
    try {
      const { additional_required_cost, ...rental } = createPropertyInput;

      //check additional required cost is null or not if not null store data in DB
      if (additional_required_cost && additional_required_cost.length > 0) {
        additional_required_cost.every((e) => {
          e['property_id'] = rental.property_id;
          e['deleted_at'] = null;
          return e;
        });
        const additionalCost = await AdditionalRequiredCostEntity.findBy({
          property_id: rental.property_id,
          name: Not(In(additional_required_cost.map((e) => e.name))),
        });

        await AdditionalRequiredCostEntity.softRemove(additionalCost);

        await AdditionalRequiredCostEntity.createQueryBuilder('add_cost')
          .insert()
          .into(AdditionalRequiredCostEntity)
          .values(additional_required_cost)
          .orUpdate(['amount', 'deleted_at'], ['property_id', 'name'])
          .execute();
      }

      //store data in rental conditions table
      const checkExistingData = await RentalConditionEntity.findOneBy({
        property_id: createPropertyInput.property_id,
      });
      if (checkExistingData) {
        const updateInput = { ...rental, id: checkExistingData.id };
        await RentalConditionEntity.save(updateInput as RentalConditionEntity);
      } else {
        await RentalConditionEntity.save(rental as RentalConditionEntity);
      }

      return {
        message: SUCCESS_MESSAGE.Step5,
        property_id: createPropertyInput.property_id,
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   storeStep6
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 6 data in DB
   * @param   createPropertyStep6Input create property step 6 input fields
   * @returns success message and property id
   */
  async storeStep6(
    createPropertyInput: CreatePropertyStep6Input,
    user: UserEntity,
  ) {
    try {
      //store data in db

      const checkExistingData = await RuleOrPreferenceEntity.findOneBy({
        property_id: createPropertyInput.property_id,
      });
      if (checkExistingData) {
        const updateInput = {
          ...createPropertyInput,
          id: checkExistingData.id,
        };
        await RuleOrPreferenceEntity.save(
          updateInput as RuleOrPreferenceEntity,
        );
      } else {
        await RuleOrPreferenceEntity.save(
          createPropertyInput as RuleOrPreferenceEntity,
        );
      }

      return {
        message: SUCCESS_MESSAGE.Step6,
        property_id: createPropertyInput.property_id,
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   storeStep7
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 7 data in DB
   * @param   createPropertyStep6Input create property step 7 input fields
   * @returns success message and property id
   */
  async storeStep7(property_id, images, videos, youtube_url, user: UserEntity) {
    try {
      let uploadFileName = '';
      let uploadWithExtension = '';

      //store image in db
      if (images) {
        const imageFiles = await Promise.all(images);
        for await (let image of imageFiles) {
          let result = makeId(5);
          const uploadFile = await createStream(image);
          const uploadDir = './uploads/property/images';
          const dirPath = 'uploads/property/images/';
          uploadFileName = result + `${Date.now()}`;

          await writeFileIntoDirectory(
            dirPath,
            image,
            uploadDir,
            uploadFile,
            uploadFileName,
          );
          uploadWithExtension =
            `${uploadFileName}` + `${path.extname(image.filename)}`;
          await MediaEntity.save({
            name: uploadWithExtension,
            type: MediaEnum.IMAGE,
            property_id: property_id,
          });
        }
      }

      // store video in db
      if (videos) {
        let result = makeId(5);
        const uploadFile = await createStream(videos);
        const uploadDir = './uploads/property/videos';
        const dirPath = 'uploads/property/videos/';
        uploadFileName = result + `${Date.now()}`;

        await writeFileIntoDirectory(
          dirPath,
          videos,
          uploadDir,
          uploadFile,
          uploadFileName,
        );
        uploadWithExtension =
          `${uploadFileName}` + `${path.extname(videos.filename)}`;
        await MediaEntity.save({
          name: uploadWithExtension,
          type: MediaEnum.VIDEO,
          property_id: property_id,
        });
      }

      //store youtube url in db
      if (youtube_url) {
        await MediaEntity.save({
          name: youtube_url,
          type: MediaEnum.YOUTUBE_URL,
          property_id: property_id,
        });
      }

      //return success message
      return { message: SUCCESS_MESSAGE.Step7, property_id: property_id };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   Property Verification
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Send and verify OTP
   * @returns mobile number and property id
   */

  async propertyVerification(property_id: number, user: UserEntity) {
    try {
      //get login user information from DB
      const currentUser = await UserEntity.findOneBy({ id: user.id });

      // if mobile number is not found throw an error
      if (!currentUser.mobile || currentUser.mobile === null) {
        throw GqlNotFoundException(ERROR_MESSAGE.UpdateMobileNumber);
      }
      // return data
      return {
        mobile_number: `+${currentUser.dialer_code}${currentUser.mobile}`,
        property_id: property_id,
      };
    } catch (error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }
  /**
   * ANCHOR   sendOTP
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Send OTP
   * @returns mobile number and property id
   */

  async sendOTP(property_id: number, user) {
    try {
      //get login user information from DB
      const userPhone = await UserEntity.findOne({
        where: {
          id: user.id,
        },
      });

      // if mobile number is not found throw an error
      if (!userPhone.mobile || userPhone.mobile === null) {
        throw GqlNotFoundException(ERROR_MESSAGE.UpdateMobileNumber);
      }

      const phoneNo = `+${userPhone.dialer_code}${userPhone.mobile}`;

      // console.log(phoneNo);

      // send otp
      this.twilioClient.verify.v2
        .services(.TWILIO_VERIFICATION_SERVICE_SID)
        .verifications.create({
          to: phoneNo,
          channel: 'sms',
        });

      // return success message
      return { mobile_number: phoneNo, property_id: property_id };
    } catch (error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   insertPhoneNo
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose Send OTP
   * @returns mobile number and property id
   */

  async insertPhoneNo(dialerCode: string, mobileNumber: string, user) {
    try {
      //get login user information from DB
      const userPhone = await UserEntity.findOne({
        where: {
          id: user.id,
        },
      });
      const isNumberExist = await UserEntity.findOneBy({
        mobile: +mobileNumber,
      });
      if (isNumberExist) {
        throw new GqlBadRequestException(ERROR_MESSAGE.MobileNumberExist);
      } else {
        userPhone.dialer_code = Number(dialerCode);
        userPhone.mobile = Number(mobileNumber);
        const phone = await UserEntity.save(userPhone);

        // return success message

        const phoneNo = `+${phone.dialer_code}${phone.mobile}`;

        this.twilioClient.verify.v2
          .services(.TWILIO_VERIFICATION_SERVICE_SID)
          .verifications.create({
            to: phoneNo,
            channel: 'sms',
          });

        return { mobile_number: phoneNo };
      }
    } catch (error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   verifyOTP
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @param   verifyOTPInput mobileNumber, otp and property id
   * @purpose Verify OTP
   * @returns success message
   */
  async verifyOTP(verifyOTPInput: VerifyOTPInput) {
    try {
      // verify otp
      const result = await this.twilioClient.verify.v2
        .services(.TWILIO_VERIFICATION_SERVICE_SID)
        .verificationChecks.create({
          to: verifyOTPInput.mobileNumber,
          code: verifyOTPInput.otp,
        });

      // check otp is valid or not and status
      if (!result.valid || result.status !== 'approved') {
        throw new GqlBadRequestException(ERROR_MESSAGE.InvalidOTP);
      }

      // update mobile verification in property
      await PropertyEntity.update(verifyOTPInput.property_id, {
        is_mobile_verified: YesNoEnum.YES,
        status: PropertyStatusEnum.PUBLISHED,
      });

      // return success message
      return SUCCESS_MESSAGE.PropertyCreated;
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   duplicatePropertyList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Authenticated user property list for duplicate property
   * @returns Property Listing
   */
  async duplicatePropertyList(user: UserEntity) {
    try {
      return await PropertyEntity.findBy({ user_id: user.id });
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   duplicateProperty
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Duplicate Property
   * @returns
   */
  async duplicateProperty(user: UserEntity, property_id: number) {
    try {
      //find property by id and store it
      const property = await PropertyEntity.findOneBy({ id: property_id });
      const { is_mobile_verified, status, id, ...rest } = property;

      // insert data
      const duplicateProperty = await PropertyEntity.createQueryBuilder()
        .insert()
        .values(rest)
        .execute();
      const duplicatePropertyId = duplicateProperty.identifiers[0].id;

      // find space overview by property id id and store it
      const spaceOverview = await SpaceOverviewEntity.findOneBy({
        property_id: property_id,
      });

      spaceOverview.property_id = duplicatePropertyId;
      await SpaceOverviewEntity.createQueryBuilder()
        .insert()
        .values(spaceOverview)
        .execute();

      // find property amenity by property id and store it
      const amenity = await PropertyAmenityEntity.findBy({
        property_id: property_id,
      });

      amenity.every((e) => {
        e.property_id = duplicatePropertyId;
        return e;
      });
      await PropertyAmenityEntity.createQueryBuilder()
        .insert()
        .values(amenity)
        .execute();

      // find rental conditions by property id and store it
      const rentalConditions = await RentalConditionEntity.findOneBy({
        property_id: property_id,
      });

      rentalConditions.property_id = duplicatePropertyId;

      await RentalConditionEntity.createQueryBuilder()
        .insert()
        .values(rentalConditions)
        .execute();

      // find additional required cost by property id
      const addRequiredCost = await AdditionalRequiredCostEntity.findBy({
        property_id: property_id,
      });
      addRequiredCost.every((e) => {
        e.property_id = duplicatePropertyId;
        return e;
      });
      await AdditionalRequiredCostEntity.createQueryBuilder()
        .insert()
        .values(addRequiredCost)
        .execute();

      // find rules and preference by property id
      const rulesAndPreference = await RuleOrPreferenceEntity.findOneBy({
        property_id: property_id,
      });
      rulesAndPreference.property_id = duplicatePropertyId;
      await RuleOrPreferenceEntity.createQueryBuilder()
        .insert()
        .values(rulesAndPreference)
        .execute();

      // find media by property id
      const medias = await MediaEntity.findBy({
        property_id: property_id,
      });

      medias.every((e) => {
        e.property_id = duplicatePropertyId;
        return e;
      });
      await MediaEntity.createQueryBuilder().insert().values(medias).execute();

      return {
        message: SUCCESS_MESSAGE.PropertyCreated,
        property_id: duplicatePropertyId,
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   featurePropertyList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Get Property List
   * @returns property list
   */
  async featurePropertyList(user) {
    try {
      let featurePropertyList: any = await PropertyEntity.find({
        where: {
          total_favorites: Not(0),
          status: PropertyStatusEnum.PUBLISHED,
        },
        order: {
          total_favorites: {
            direction: 'desc',
          },
        },
        take: 4,
      });

      if (!user) {
        return featurePropertyList;
      }
      let favoritePropertyIds: any = await FavoritePropertyEntity.find({
        where: { user_id: user.id, is_favorite: YesNoEnum.YES },
        select: { property_id: true },
      });

      favoritePropertyIds = favoritePropertyIds.map((e) => e.property_id);

      featurePropertyList = featurePropertyList.map((e) => {
        if (favoritePropertyIds.includes(e.id)) {
          e['is_favorite'] = 1;
        }
        return e;
      });

      return featurePropertyList;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.PropertyNotFound, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   ediPropertyStep2
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property information
   * @returns message and property id
   */
  async editPropertyStep2(
    updatePropertyStep2Input: UpdatePropertyStep2Input,
    user: UserEntity,
  ): Promise<CreatePropertyResponse> {
    try {
      const { property_id, ...updatePropertyData } = updatePropertyStep2Input;
      let citydata = await CityEntity.findOne({
        where: { id: updatePropertyStep2Input.city_id },
      });
      let Statedata = await StateEntity.findOne({
        where: { id: updatePropertyStep2Input.state_id },
      });
      let Countrydata = await CountryEntity.findOne({
        where: { id: updatePropertyStep2Input.country_id },
      });
      const input = `${updatePropertyStep2Input.name}${updatePropertyStep2Input.house_no} ${citydata.name} ${Statedata.name} ${Countrydata.name} ${updatePropertyStep2Input.postal_code}`; // Replace with the desired input
      const placeAutocompleteData = await this.getPlaceAutocomplete(input);

      if (placeAutocompleteData.status === 'OK') {
        let input1 = placeAutocompleteData.predictions[0].place_id;
        // Replace with the desired input
        const getPlaceLetLong = await this.getPlaceLetLong(input1);

        updatePropertyStep2Input.latitude =
          getPlaceLetLong?.result?.geometry?.location.lat;
        updatePropertyStep2Input.longitude =
          getPlaceLetLong?.result?.geometry?.location.lng;
      }
      await PropertyEntity.update(property_id, updatePropertyData);
      return { message: SUCCESS_MESSAGE.Success, property_id: property_id };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   ediPropertyStep3
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property step3 information
   * @returns message and property id
   */
  async editPropertyStep3(
    updatePropertyStep3Input: UpdatePropertyStep3Input,
    user: UserEntity,
  ): Promise<CreatePropertyResponse> {
    try {
      const { id, property_id, ...updatePropertyData } =
        updatePropertyStep3Input;
      await SpaceOverviewEntity.update(id, updatePropertyData);
      return { message: SUCCESS_MESSAGE.Success, property_id: property_id };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   ediPropertyStep4
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property step4 information
   * @returns message and property id
   */
  async editPropertyStep4(
    updatePropertyStep4Input: UpdatePropertyStep4Input,
    user: UserEntity,
  ): Promise<CreatePropertyResponse> {
    try {
      const { property_id, ...updatePropertyData } = updatePropertyStep4Input;
      updatePropertyData.step4inputList.every((e) => {
        e['property_id'] = property_id;
        return e;
      });
      await PropertyAmenityEntity.save(updatePropertyData.step4inputList);
      return { message: SUCCESS_MESSAGE.Success, property_id: property_id };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   ediPropertyStep5
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property step5 information
   * @returns message and property id
   */
  async editPropertyStep5(
    updatePropertyStep5Input: UpdatePropertyStep5Input,
    user: UserEntity,
  ): Promise<CreatePropertyResponse> {
    try {
      const { property_id, ...updatePropertyData } = updatePropertyStep5Input;
      await RentalConditionEntity.update(
        { property_id: property_id },
        {
          cancellation_policy_id: updatePropertyData.cancellation_policy_id,
          contract_type: updatePropertyData.contract_type,
        },
      );

      updatePropertyData.additional_required_cost.every((e) => {
        e['property_id'] = property_id;
        return e;
      });
      await AdditionalRequiredCostEntity.save(
        updatePropertyData.additional_required_cost as AdditionalRequiredCostEntity[],
      );
      return { message: SUCCESS_MESSAGE.Success, property_id: property_id };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   ediPropertyStep6
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property step6 information
   * @returns message and property id
   */
  async editPropertyStep6(
    updatePropertyStep6Input: UpdatePropertyStep6Input,
    user: UserEntity,
  ): Promise<CreatePropertyResponse> {
    try {
      const { property_id, id, ...result } = updatePropertyStep6Input;

      await RuleOrPreferenceEntity.update(id, result as RuleOrPreferenceEntity);
      return {
        message: SUCCESS_MESSAGE.Success,
        property_id: property_id,
      };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   ediPropertyStep7
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property step6 information
   * @returns message and property id
   */
  async removePropertyStep7(id: number[]) {
    try {
      const mediaData = await MediaEntity.findBy({ id: In(id) });
      await MediaEntity.softRemove(mediaData);
      return SUCCESS_MESSAGE.Success;
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   StepWisePropertyData
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get step wise property information
   * @returns message and property id
   */
  async StepWisePropertyData(propertyId, propertyStep: PropertyStepEnum) {
    try {
      switch (propertyStep) {
        case PropertyStepEnum.PROPERTY_DETAILS: {
          const propertyDetails = await PropertyEntity.findBy({
            id: propertyId,
          });
          if (propertyDetails.length === 0) {
            throw new GqlNotFoundException('Property data not found');
          }
          return propertyDetails;
        }
        case PropertyStepEnum.SPACE_OVERVIEW: {
          const spaceOverview = await SpaceOverviewEntity.findBy({
            property_id: propertyId,
          });
          if (spaceOverview.length === 0) {
            throw new GqlNotFoundException('Property data not found');
          }
          return spaceOverview;
        }
        case PropertyStepEnum.FACILITIES: {
          const propertyFacilities =
            await PropertyAmenityEntity.createQueryBuilder('pro_a')
              .leftJoinAndSelect('pro_a.amenities_id', 'amenity')
              .where('amenity.status = :aStatus', {
                aStatus: StatusEnum.ACTIVE,
              })
              .andWhere('pro_a.property_id = :pId', { pId: propertyId })
              .getMany();
          if (propertyFacilities.length === 0) {
            throw new GqlNotFoundException('Property data not found');
          }
          return propertyFacilities;
        }
        case PropertyStepEnum.RENTAL_CONDITION: {
          const rentalCondition = await RentalConditionEntity.findBy({
            property_id: propertyId,
          });
          if (rentalCondition.length === 0) {
            throw new GqlNotFoundException('Property data not found');
          }
          rentalCondition[0].additional_required_cost =
            await AdditionalRequiredCostEntity.findBy({
              property_id: propertyId,
            });
          return rentalCondition;
        }
        case PropertyStepEnum.RULES_AND_PREFERENCE: {
          const rulesAndPreference = await RuleOrPreferenceEntity.findBy({
            property_id: propertyId,
          });
          if (rulesAndPreference.length === 0) {
            throw new GqlNotFoundException('Property data not found');
          }
          return rulesAndPreference;
        }
        case PropertyStepEnum.MEDIA: {
          const media = await MediaEntity.findBy({ property_id: propertyId });
          if (media.length === 0) {
            throw new GqlNotFoundException('Property data not found');
          }
          return media;
        }

        default:
          throw new GqlNotFoundException();
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
   * ANCHOR   favoriteProperty
   * @param   favoritePropertyArgs property id and favorite property
   * @param   loginUser login user info
   * @returns success message
   */
  async favoriteProperty(
    favoritePropertyArgs: FavoritePropertyInput,
    loginUser: UserEntity,
  ) {
    try {
      const favoriteProperty = await FavoritePropertyEntity.findOneBy({
        property_id: favoritePropertyArgs.property_id,
        user_id: loginUser.id,
      });
      if (favoriteProperty) {
        favoriteProperty.is_favorite = favoritePropertyArgs.is_favorite;
        await FavoritePropertyEntity.update(favoriteProperty.id, {
          is_favorite: favoritePropertyArgs.is_favorite,
        });
      } else {
        await FavoritePropertyEntity.save({
          ...(favoritePropertyArgs as FavoritePropertyEntity),
          user_id: loginUser.id,
        });
      }

      const message =
        favoritePropertyArgs.is_favorite === 1
          ? SUCCESS_MESSAGE.PropertyToFavorite
          : SUCCESS_MESSAGE.PropertyFromFavorite;
      return message;
    } catch (error) {
      throw new GraphQLError(error.message, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   favoritePropertyList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose favorite property listing for login user
   * @returns favorite property listing
   */
  async favoritePropertyList(loginUser, page_number, page_size) {
    const skipData = (page_number - 1) * page_size;
    const favoritePropertyList = await FavoritePropertyEntity.find({
      where: { user_id: loginUser.id, is_favorite: YesNoEnum.YES },
      select: { property_id: true },
    });

    const favoritePropertyListIds = favoritePropertyList.map(
      (e) => e.property_id,
    );

    const result = await PropertyEntity.findAndCount({
      where: { id: In(favoritePropertyListIds) },
      skip: skipData,
      take: page_size,
    });

    return { properties: result[0], total_properties: result[1] };
  }

  /**
   * ANCHOR   hostDetails
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field host details
   * @returns user information
   */
  async hostDetails(property: PropertyEntity) {
    return await UserEntity.findOneBy({ id: property.user_id });
  }

  /**
   * ANCHOR   countryDetails
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field country details
   * @returns country information
   */
  async countryDetails(property: PropertyEntity) {
    return await CountryEntity.findOneBy({ id: property.country_id });
  }

  /**
   * ANCHOR   spaceOverviewDetails
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field country details
   * @returns country information
   */
  async spaceOverviewDetails(property: PropertyEntity) {
    return await SpaceOverviewEntity.findOneBy({ property_id: property.id });
  }

  /**
   * ANCHOR   amenity
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property amenity details
   * @returns property amenity
   */
  async amenity(property: PropertyEntity) {
    return await PropertyAmenityEntity.createQueryBuilder('pro_a')
      .leftJoinAndSelect('pro_a.amenities_id', 'amenity')
      .where('amenity.status = :aStatus AND amenity.type = :aType', {
        aStatus: StatusEnum.ACTIVE,
        aType: AmenityEnum.AMENITY,
      })
      .andWhere('pro_a.property_id = :pId', { pId: property.id })
      .getMany();
  }

  /**
   * ANCHOR   facility
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property facility details
   * @returns property facilities
   */
  async facility(property: PropertyEntity) {
    return await PropertyAmenityEntity.createQueryBuilder('pro_a')
      .leftJoinAndSelect('pro_a.amenities_id', 'amenity')
      .where('amenity.status = :aStatus AND amenity.type = :aType', {
        aStatus: StatusEnum.ACTIVE,
        aType: AmenityEnum.FACILITY,
      })
      .andWhere('pro_a.property_id = :pId', { pId: property.id })
      .getMany();
  }

  /**
   * ANCHOR   rental_condition
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property rental condition details
   * @returns property rental condition
   */
  async rentalCondition(property: PropertyEntity) {
    return await RentalConditionEntity.findOne({
      where: { property_id: property.id },
    });
  }

  /**
   * ANCHOR   additional_required_cost
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property additional_required_cost details
   * @returns property additional_required_cost
   */
  async additionalCost(property: PropertyEntity) {
    return await AdditionalRequiredCostEntity.find({
      where: { property_id: property.id },
      order: { id: 'ASC' },
    });
  }

  /**
   * ANCHOR   rules_and_preference
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property rules and preferences details
   * @returns property rules and preferences
   */
  async rulesAndPreference(property: PropertyEntity) {
    return await RuleOrPreferenceEntity.findOne({
      where: { property_id: property.id },
    });
  }

  /**
   * ANCHOR   mediaDetails
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field media details
   * @returns media information
   */
  async mediaDetails(property: PropertyEntity) {
    return await MediaEntity.findBy({ property_id: property.id });
  }

  /**
   * ANCHOR   amenities_id
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field amenity
   * @returns amenity information
   */
  async amenities_id(amenity: PropertyAmenityEntity) {
    return await AmenityEntity.findOneBy({ id: amenity.amenities_id });
  }

  /**
   * ANCHOR   tenant_counts
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose resolve field tenants count
   * @returns Count of tenant
   */
  async tenantCounts(property: PropertyEntity) {
    return await BookingEntity.count({
      where: {
        property_id: property.id,
      },
    });
  }

  /**
   * ANCHOR   state_details
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field state details
   * @returns state information
   */
  async stateDetails(property: PropertyEntity) {
    return await StateEntity.findOneBy({ id: property.state_id });
  }

  /**
   * ANCHOR   city_details
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field city details
   * @returns city information
   */
  async cityDetails(property: PropertyEntity) {
    return await CityEntity.findOneBy({ id: property.city_id });
  }

  /**
   * ANCHOR   images
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property images
   * @returns property images
   */
  async images(property: PropertyEntity) {
    return await MediaEntity.findBy({
      property_id: property.id,
      type: MediaEnum.IMAGE,
    });
  }

  /**
   * ANCHOR   searchPropertyByParam
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose search property by param
   * @returns Property Information
   */
  async searchPropertyByParam(
    property_name: string,
    property_type: string,
    page_number: number,
    page_size: number,
  ) {
    const skipData = (page_number - 1) * page_size;
    const propertyQuery = PropertyEntity.createQueryBuilder('properties')
      .where('properties.status = :pStatus', {
        pStatus: PropertyStatusEnum.PUBLISHED,
      })
      .andWhere(
        (qb) =>
          `properties.user_id IN( ${qb
            .subQuery()
            .select('user.id')
            .from(UserEntity, 'user')
            .getQuery()})`,
      );
    if (property_name)
      propertyQuery.where('LOWER(properties.name) like :name', {
        name: `%${property_name.toLowerCase()}%`,
      });
    if (property_type)
      propertyQuery.andWhere('LOWER(properties.type) like :type', {
        type: `%${property_type.toLowerCase()}%`,
      });

    const [properties, total_properties] = await propertyQuery
      .skip(skipData)
      .take(page_size)
      .orderBy({ id: 'ASC' })
      .getManyAndCount();
    return { properties, total_properties };
  }

  /**
   * ANCHOR   deleteProperty
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose delete property
   * @returns success or error message
   */
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
      const propertyAmenity = await PropertyAmenityEntity.findOneBy({
        property_id: property_id,
      });

      // if property not found throw error
      if (!property)
        throw GqlNotFoundException(ERROR_MESSAGE.NotFoundException);

      // if property found delete it
      await PropertyEntity.softRemove(property);
      await AdditionalRequiredCostEntity.softRemove(additional_cost);
      await MediaEntity.softRemove(medias);
      await RentalConditionEntity.softRemove(rentalCondition);
      await RuleOrPreferenceEntity.softRemove(rulesAndPreference);
      await SpaceOverviewEntity.softRemove(spaceOverview);
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

  /**
   * ANCHOR   publicSearchAndFilterProperty
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose search and filter property
   * @param   filter filter object
   * @returns filtered property
   */
  async publicSearchAndFilterProperty(
    filter: SearchAndFilterPropertyInput,
    loginUser?,
  ) {
    try {
      const skipData =
        ((filter.page_number || 0) - 1) * (filter.page_size || 0);
      const propertyList = PropertyEntity.createQueryBuilder('property')
        .leftJoin('property.city_id', 'city', 'city.id = property.city_id')
        .leftJoin(
          'property.country_id',
          'country',
          'country.id = property.country_id',
        )
        .leftJoin('property.state_id', 'state', 'state.id = property.state_id')
        .where('property.status = :pStatus', {
          pStatus: PropertyStatusEnum.PUBLISHED,
        });

      // filter by end date
      if (filter.end_date) {
        propertyList
          .andWhere('property.available_from <= :endDate', {
            endDate: filter.end_date,
          })
          .andWhere(
            `property.id NOT IN(${propertyList
              .subQuery()
              .select('booking.property_id')
              .from(BookingEntity, 'booking')
              .where(
                'booking.status = :bStatus AND :endDate BETWEEN booking.start_date AND booking.end_date OR booking.start_date = :endDate OR booking.end_date = :endDate',
                {
                  bStatus: BookingStatusEnum.CONFIRM,
                  endDate: filter.end_date,
                },
              )
              .getQuery()})`,
          );
      }

      // filter by location
      if (filter.locations && filter.locations.length > 0) {
        const locations = filter.locations.map((e) => `${e.toLowerCase()}%`);

        const l: number = filter.locations.length;
        switch (l) {
          case 1: {
            propertyList.andWhere(
              '(LOWER(country.name) LIKE ANY (ARRAY [:...locations]) OR LOWER(state.name) LIKE ANY (ARRAY [:...locations]) OR LOWER(city.name) LIKE ANY (ARRAY [:...locations]))',
              {
                locations: locations.map((e) => `${e}`),
              },
            );
            break;
          }
          case 2: {
            propertyList.andWhere(
              '((LOWER(city.name) LIKE ANY(ARRAY[:...locations]) AND LOWER(state.name) LIKE ANY(ARRAY[:...locations])) OR (LOWER(state.name) LIKE ANY(ARRAY[:...locations]) AND LOWER(country.name) LIKE ANY(ARRAY[:...locations])) OR (LOWER(country.name) LIKE ANY(ARRAY[:...locations]) AND LOWER(city.name) LIKE ANY(ARRAY[:...locations])))',
              {
                locations: locations.map((e) => `${e}`),
              },
            );

            break;
          }
          case 3: {
            propertyList.andWhere(
              '(LOWER(city.name) LIKE ANY(ARRAY[:...locations]) AND LOWER(state.name) LIKE ANY(ARRAY[:...locations]) AND LOWER(country.name) LIKE ANY(ARRAY[:...locations]))',
              {
                locations: locations.map((e) => `${e}`),
              },
            );

            break;
          }
        }
      }

      // filter by min price
      if (filter.min_price) {
        // if bills are including
        if (filter.bills_includes) {
          propertyList.andWhere(
            `property.id IN( ${propertyList
              .subQuery()
              .select('addCost.property_id')
              .from(AdditionalRequiredCostEntity, 'addCost')
              .where('addCost.property_id = property.id')
              .groupBy('addCost.property_id')
              .having('SUM(addCost.amount) + property.rent >= :minTotalCost', {
                minTotalCost: filter.min_price,
              })
              .getQuery()})`,
          );
        } else {
          propertyList.andWhere('property.rent >= :minRent ', {
            minRent: filter.min_price,
          });
        }
      }

      // filter by max price
      if (filter.max_price) {
        // if bills are including
        if (filter.bills_includes) {
          propertyList.andWhere(
            `property.id IN( ${propertyList
              .subQuery()
              .select('addCost.property_id')
              .from(AdditionalRequiredCostEntity, 'addCost')
              .where('addCost.property_id = property.id')
              .groupBy('addCost.property_id')
              .having('SUM(addCost.amount) + property.rent <= :maxTotalCost', {
                maxTotalCost: filter.max_price,
              })
              .getQuery()})`,
          );
        } else {
          propertyList.andWhere('property.rent <= :maxRent ', {
            maxRent: filter.max_price,
          });
        }
      }

      // filter by start date
      if (filter.start_date) {
        propertyList.andWhere('property.available_from >= :startDate', {
          startDate: filter.start_date,
        });
      }

      // filter by property type
      if (filter.type && filter.type.length > 0) {
        propertyList.andWhere(
          'LOWER(property.type) LIKE ANY(ARRAY[:...propertyType])',
          { propertyType: filter.type.map((e) => `${e.toLowerCase()}%`) },
        );
      }

      // filter by property size and furnished
      if (filter.is_furnished || (filter.size && filter.size.length > 0)) {
        propertyList.leftJoin(
          SpaceOverviewEntity,
          'space',
          'space.property_id = property.id ',
        );
        if (filter.is_furnished) {
          const is_furnished =
            filter.is_furnished === 1 ? YesNoEnum.YES : YesNoEnum.NO;
          propertyList.andWhere('space.is_furnished = :sFurnished', {
            sFurnished: is_furnished,
          });
        }
        if (filter.size.length > 0) {
          propertyList.andWhere('space.size IN(:...sSize)', {
            sSize: filter.size,
          });
        }
      }

      // filter by facilities and amenities
      if (filter.facilities && filter.facilities.length > 0) {
        propertyList
          .leftJoin(
            PropertyAmenityEntity,
            'pro_ame',
            'pro_ame.property_id = property.id',
          )
          .leftJoin(AmenityEntity, 'ame', 'ame.id = pro_ame.amenities_id')
          .andWhere(
            'LOWER(ame.name) LIKE ANY(ARRAY[:...aName]) AND ame.status = :aStatus',
            {
              aName: filter.facilities.map((e) => `${e.toLowerCase()}`),
              aStatus: StatusEnum.ACTIVE,
            },
          );
      }

      // filter by suitability
      if (filter.suitable && filter.suitable.length > 0) {
        const tenantArray = [];
        const genderArray = [];
        filter.suitable.map((e) => {
          if (e === 'Male') genderArray.push(0);
          if (e === 'Female') genderArray.push(1);
          if (e === 'Other') genderArray.push(2);

          if (e === 'Student') tenantArray.push(0);
          if (e === 'Professional') tenantArray.push(1);
          if (e === 'Any') tenantArray.push(2);
        });
        propertyList.leftJoin(
          RuleOrPreferenceEntity,
          'rule',
          'rule.property_id = property.id',
        );
        if (genderArray.length > 0) {
          propertyList.andWhere('rule.gender IN(:...rGender)', {
            rGender: genderArray,
          });
        }

        if (tenantArray.length > 0) {
          propertyList.andWhere('rule.tenant IN(:...rTenant)', {
            rTenant: tenantArray,
          });
        }
      }

      const availablePropertyIds = (await propertyList.getMany()).map(
        (e) => e.id,
      );

      if (availablePropertyIds.length === 0) {
        availablePropertyIds.push(0);
      }

      // Sort property
      if (filter.sort_by) {
        switch (filter.sort_by) {
          case PropertySortEnum.NAME: {
            propertyList.orderBy('property.name');
            break;
          }
          case PropertySortEnum.DATE_AVAILABILITY: {
            propertyList.orderBy('property.available_from');
            break;
          }
          case PropertySortEnum.NEWEST_FIRST: {
            propertyList.orderBy('property.created_at');
            break;
          }
          case PropertySortEnum.POPULARITY: {
            propertyList
              .leftJoin(
                FavoritePropertyEntity,
                'fav',
                'fav.property_id = property.id ',
              )
              .addSelect('COUNT(fav.property_id)', 'f_pro')
              .groupBy('fav.property_id, property.id')
              .orderBy('f_pro', 'DESC');
            break;
          }
          case PropertySortEnum.PRICE: {
            propertyList.orderBy('property.rent');
            break;
          }
          default: {
            propertyList.orderBy('property.id');
            break;
          }
        }
      }
      const availableProperty = await propertyList
        .skip(skipData)
        .take(filter.page_size)
        .getRawAndEntities();

      const total_properties = await propertyList.getCount();

      const availablePropertyCountQuery = PropertyEntity.createQueryBuilder(
        'property',
      )
        .where('property.id IN(:...pId)', { pId: availablePropertyIds })
        .leftJoin(
          SpaceOverviewEntity,
          'space',
          'space.property_id = property.id',
        )
        .leftJoin(
          RuleOrPreferenceEntity,
          'rule',
          'rule.property_id = property.id',
        )
        .leftJoin(
          PropertyAmenityEntity,
          'pro_amenity',
          'pro_amenity.property_id = property.id',
        )
        .leftJoin(
          AmenityEntity,
          'amenity',
          'amenity.id = pro_amenity.amenities_id AND amenity.type = :aType',
          { aType: AmenityEnum.AMENITY },
        )
        .leftJoin(
          AmenityEntity,
          'facility',
          'facility.id = pro_amenity.amenities_id AND facility.type = :fType',
          { fType: AmenityEnum.FACILITY },
        );
      const availablePropertyCount = await availablePropertyCountQuery
        .select([
          'property.type AS Type',
          'space.size AS Size',
          "CASE WHEN space.is_furnished = '0' THEN 'Furnished' WHEN space.is_furnished = '1' THEN 'Unfurnished' END AS Furniture",
          "CASE WHEN rule.gender = '0' THEN 'Male' WHEN rule.gender = '1' THEN 'Female' WHEN rule.gender = '2' THEN 'Other' WHEN rule.tenant = '0' THEN 'Student' WHEN rule.tenant = '1' THEN 'Professional' WHEN rule.tenant = '2' THEN 'Any' END AS Suitable_For",
          'amenity.name AS Amenities',
          'facility.name AS Facilities',
          'COUNT(DISTINCT property.id) AS count',
        ])
        .groupBy(
          'GROUPING SETS ((property.type), (space.size),(space.is_furnished),(rule.gender), (rule.tenant), (amenity.name), (facility.name))',
        )
        .getRawMany();

      let type: any = (
        await PropertyEntity.find({ select: { type: true } })
      ).map((e) => e.type);

      let amenities: any = (
        await AmenityEntity.find({
          select: { name: true },
          where: { type: AmenityEnum.AMENITY },
        })
      ).map((e) => e.name);

      let facilities: any = (
        await AmenityEntity.find({
          select: { name: true },
          where: { type: AmenityEnum.FACILITY },
        })
      ).map((e) => e.name);

      let size: any = await SpaceOverviewEntity.find({
        select: { size: true },
      });

      size = size.map((e) => e.size);

      const suitable_for = [
        { name: 'Male', total: 0 },
        { name: 'Female', total: 0 },
        { name: 'Other', total: 0 },
      ];

      const furniture = [
        { name: 'Furnished', total: 0 },
        { name: 'Unfurnished', total: 0 },
      ];

      const typeList = new Set(type);
      const amenitiesList = new Set(amenities);
      const facilitiesList = new Set(facilities);
      const sizeList = new Set(size);

      size = [];
      sizeList.forEach((e) => {
        size.push({ name: e, total: 0 });
      });

      type = [];
      typeList.forEach((e) => {
        type.push({ name: e, total: 0 });
      });

      amenities = [];
      amenitiesList.forEach((e) => {
        amenities.push({ name: e, total: 0 });
      });

      facilities = [];
      facilitiesList.forEach((e) => {
        facilities.push({ name: e, total: 0 });
      });

      const result = {
        size,
        type,
        furniture,
        suitable_for,
        amenities,
        facilities,
      };

      availablePropertyCount.map((obj) => {
        const singleEntry = Object.fromEntries(
          Object.entries(obj).filter(([key, value]) => value !== null),
        );

        const key = Object.keys(singleEntry)[0];
        const value = singleEntry[key];

        if (key !== 'count') {
          if (result[key]) {
            result[key].forEach((e) => {
              if (e.name === value) {
                e.total = singleEntry.count;
              }
            });
          }
        }
      });

      if (loginUser) {
        let favoritePropertyIds: any = await FavoritePropertyEntity.find({
          select: { property_id: true },
          where: { user_id: loginUser.id, is_favorite: YesNoEnum.YES },
        });

        favoritePropertyIds = favoritePropertyIds.map((e) => e.property_id);

        availableProperty.entities.map((e) => {
          if (favoritePropertyIds.includes(e.id)) {
            e['is_favorite'] = 1;
          }
          return e;
        });
      }

      return {
        field_wise_count: result,
        properties: availableProperty.entities,
        total_properties: total_properties,
      };
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async addDataOnQuery() {}

  /**
   * ANCHOR   findOneProperty
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property by id
   * @param   property_id property id
   * @returns property details
   */
  async findOneProperty(property_id: number) {
    return await PropertyEntity.findOneBy({ id: property_id });
  }

  /**
   * ANCHOR   amenitiesListing
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get amenities listing
   * @returns Amenities details
   */
  async amenitiesListing() {
    let amenities: any = await AmenityEntity.findBy({
      status: StatusEnum.ACTIVE,
      type: AmenityEnum.AMENITY,
    });

    amenities = amenities.map((e) => {
      e['availability'] = 0;
      return e;
    });

    let facilities: any = await AmenityEntity.findBy({
      status: StatusEnum.ACTIVE,
      type: AmenityEnum.FACILITY,
    });

    facilities = facilities.map((e) => {
      e['availability'] = 0;
      return e;
    });

    return { amenities: amenities, facilities: facilities };
  }
}
