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

import {
  Mutation,
  Args,
  Query,
  Int,
  ResolveField,
  Parent,
  Resolver,
} from '@nestjs/graphql';
import { PropertyService } from './property.service';
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
  PropertyFilterResponse,
  PropertyPaginationResponse,
} from '../../shared/entity/property.entity';
import {
  CreatePropertyStep4Input,
  UpdatePropertyStep4Input,
} from '../../dto/create-property-step4.input';
import {
  CreatePropertyStep5Input,
  UpdatePropertyStep5Input,
} from '../../dto/create-property-step5.input';
import {
  CreatePropertyStep6Input,
  UpdatePropertyStep6Input,
} from '../../dto/create-property-step6.input';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserEntity } from './../../shared/entity/user.entity';
import { getUser } from '../../common/helper';
import { VerifyOTPInput } from '../../dto/verify-otp.input';
import {
  PropertyVerificationResponse,
  StepWisePropertyData,
} from '../../common/types';
import { AuthenticationRole, PropertyStepEnum } from '../../common/enum';
import { RoleGuard } from '../auth/role.guard';
import { CityEntity } from '../../shared/entity/city.entity';
import { StateEntity } from '../../shared/entity/state.entity';
import { CountryEntity } from '../../shared/entity/country.entity';
import { SearchAndFilterPropertyInput } from '../../dto/filter-property.input';
import { FavoritePropertyInput } from '../../dto/favorite-property.input';
import { MediaEntity } from '../../shared/entity/media.entity';
import { SpaceOverviewEntity } from '../../shared/entity/space-overview.entity';
import { PropertyAmenityEntity } from '../../shared/entity/property-amenity.entity';
import { RentalConditionEntity } from '../../shared/entity/rental-conditions.entity';
import { RuleOrPreferenceEntity } from '../../shared/entity/rules-or-preference.entity';
import { AdditionalRequiredCostEntity } from '../../shared/entity/additional-required-cost.entity';
import {
  AmenitiesListingResponse,
  AmenityEntity,
} from '../../shared/entity/amenity.entity';
@UseGuards(
  new RoleGuard([AuthenticationRole.SUPER_ADMIN, AuthenticationRole.USER]),
)
@Resolver(() => PropertyEntity)
export class PropertyResolver {
  constructor(private readonly propertyService: PropertyService) {}

  /**
   * ANCHOR   createPropertyStep2
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 2 data in DB
   * @param   createPropertyStep2Input create property step input fields
   * @returns success message
   */
  @Mutation(() => CreatePropertyResponse)
  createPropertyStep2(
    @Args('createPropertyInput')
    createPropertyStep2Input: CreatePropertyStep2Input,
    @getUser() user: UserEntity,
  ) {
    return this.propertyService.storeStep2(createPropertyStep2Input, user);
  }

  /**
   * ANCHOR   createPropertyStep3
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 3 data in DB
   * @param   createPropertyStep3Input create property step 3 input fields
   * @returns success message
   */
  @Mutation(() => CreatePropertyResponse)
  createPropertyStep3(
    @Args('createPropertyInput')
    createPropertyStep3Input: CreatePropertyStep3Input,
    @getUser() user: UserEntity,
  ) {
    return this.propertyService.storeStep3(createPropertyStep3Input, user);
  }

  /**
   * ANCHOR   createPropertyStep4
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 4 data in DB
   * @param   createPropertyStep4Input create property step 4 input fields
   * @returns success message
   */
  @Mutation(() => CreatePropertyResponse)
  createPropertyStep4(
    @Args('createPropertyInput')
    createPropertyStep4Input: CreatePropertyStep4Input,
    @getUser() user: UserEntity,
  ) {
    return this.propertyService.storeStep4(createPropertyStep4Input, user);
  }

  /**
   * ANCHOR   createPropertyStep5
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 5 data in DB
   * @param   createPropertyStep5Input create property step 5 input fields
   * @returns success message
   */
  @Mutation(() => CreatePropertyResponse)
  createPropertyStep5(
    @Args('createPropertyInput')
    createPropertyStep5Input: CreatePropertyStep5Input,
    @getUser() user: UserEntity,
  ) {
    return this.propertyService.storeStep5(createPropertyStep5Input, user);
  }

  /**
   * ANCHOR   createPropertyStep6
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 6 data in DB
   * @param   createPropertyStep6Input create property step 6 input fields
   * @returns success message
   */
  @Mutation(() => CreatePropertyResponse)
  createPropertyStep6(
    @Args('createPropertyInput')
    createPropertyStep6Input: CreatePropertyStep6Input,
    @getUser() user: UserEntity,
  ) {
    return this.propertyService.storeStep6(createPropertyStep6Input, user);
  }

  /**
   * ANCHOR   createPropertyStep7
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Store Step 7 data in DB
   * @param   createPropertyStep7Input create property step 7 input fields
   * @returns success message
   */
  @Mutation(() => CreatePropertyResponse)
  async createPropertyStep7(
    @Args('property_id', { type: () => Int })
    property_id: number,
    @Args('images', { type: () => [GraphQLUpload], nullable: true })
    images: [FileUpload],
    @Args('videos', { type: () => GraphQLUpload, nullable: true })
    videos: FileUpload,
    @Args('youtube_url', { type: () => String, nullable: true })
    youtube_url: string,
    @getUser() user: UserEntity,
  ) {
    return this.propertyService.storeStep7(
      property_id,
      images,
      videos,
      youtube_url,
      user,
    );
  }

  /**
   * ANCHOR   propertyVerification
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose verify property by id
   * @returns success message
   */

  @Query(() => PropertyVerificationResponse)
  async propertyVerification(
    @Args('property_id', { type: () => Int }) property_id: number,
    @getUser() user: UserEntity,
  ) {
    return this.propertyService.propertyVerification(property_id, user);
  }

  /**
   * ANCHOR   sendOTP
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Send OTP
   * @returns success message
   */

  @Query(() => PropertyVerificationResponse)
  async sendOTP(
    @Args('property_id', { type: () => Int }) property_id: number,
    @getUser() user: UserEntity,
  ) {
    return this.propertyService.sendOTP(property_id, user);
  }

  /**
   * ANCHOR   insertPhoneNo
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose insert user mobile no.
   * @returns success message
   */

  @Mutation(() => PropertyVerificationResponse)
  async insertPhoneNo(
    @Args('dialerCode', { type: () => String }) dialerCode: string,
    @Args('mobileNumber', { type: () => String }) mobileNumber: string,
    @getUser() user: UserEntity,
  ) {
    return this.propertyService.insertPhoneNo(dialerCode, mobileNumber, user);
  }

  /**
   * ANCHOR   verifyOTP
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Verify OTP
   * @returns success message
   */

  @Mutation(() => String)
  async verifyOTP(
    @Args('verifyOTPInput', {
      type: () => VerifyOTPInput,
    })
    verifyOTPInput: VerifyOTPInput,
  ) {
    return this.propertyService.verifyOTP(verifyOTPInput);
  }

  /**
   * ANCHOR   duplicatePropertyList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Authenticated user property list
   * @returns Property Listing
   */

  @Query(() => [PropertyEntity])
  async duplicatePropertyList(
    @getUser() user: UserEntity,
  ): Promise<PropertyEntity[]> {
    return this.propertyService.duplicatePropertyList(user);
  }

  /**
   * ANCHOR   duplicateProperty
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Duplicate Property
   * @returns success message and property id
   */

  @Mutation(() => CreatePropertyResponse)
  async duplicateProperty(
    @getUser() user: UserEntity,
    @Args('property_id', { type: () => Int }) property_id: number,
  ) {
    return this.propertyService.duplicateProperty(user, property_id);
  }

  /**
   * ANCHOR   ediPropertyStep2
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property information
   * @returns message and property id
   */
  @UsePipes(ValidationPipe)
  @Mutation(() => CreatePropertyResponse)
  async editPropertyStep2(
    @getUser() user: UserEntity,
    @Args('updatePropertyStep2Input', { type: () => UpdatePropertyStep2Input })
    updatePropertyStep2Input: UpdatePropertyStep2Input,
  ) {
    return this.propertyService.editPropertyStep2(
      updatePropertyStep2Input,
      user,
    );
  }

  /**
   * ANCHOR   ediPropertyStep3
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property step3 information
   * @returns message and property id
   */
  @UsePipes(ValidationPipe)
  @Mutation(() => CreatePropertyResponse)
  async editPropertyStep3(
    @getUser() user: UserEntity,
    @Args('updatePropertyStep3Input', { type: () => UpdatePropertyStep3Input })
    updatePropertyStep3Input: UpdatePropertyStep3Input,
  ): Promise<CreatePropertyResponse> {
    return this.propertyService.editPropertyStep3(
      updatePropertyStep3Input,
      user,
    );
  }

  /**
   * ANCHOR   ediPropertyStep4
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property step4 information
   * @returns message and property id
   */
  @UsePipes(ValidationPipe)
  @Mutation(() => CreatePropertyResponse)
  async editPropertyStep4(
    @getUser() user: UserEntity,
    @Args('updatePropertyStep4Input', { type: () => UpdatePropertyStep4Input })
    updatePropertyStep4Input: UpdatePropertyStep4Input,
  ): Promise<CreatePropertyResponse> {
    return this.propertyService.editPropertyStep4(
      updatePropertyStep4Input,
      user,
    );
  }

  /**
   * ANCHOR   ediPropertyStep5
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property step5 information
   * @returns message and property id
   */
  @UsePipes(ValidationPipe)
  @Mutation(() => CreatePropertyResponse)
  async editPropertyStep5(
    @getUser() user: UserEntity,
    @Args('updatePropertyStep5Input', { type: () => UpdatePropertyStep5Input })
    updatePropertyStep5Input: UpdatePropertyStep5Input,
  ): Promise<CreatePropertyResponse> {
    return this.propertyService.editPropertyStep5(
      updatePropertyStep5Input,
      user,
    );
  }

  /**
   * ANCHOR   ediPropertyStep6
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property step6 information
   * @returns message and property id
   */
  @UsePipes(ValidationPipe)
  @Mutation(() => CreatePropertyResponse)
  async editPropertyStep6(
    @getUser() user: UserEntity,
    @Args('updatePropertyStep6Input', { type: () => UpdatePropertyStep6Input })
    updatePropertyStep6Input: UpdatePropertyStep6Input,
  ): Promise<CreatePropertyResponse> {
    return this.propertyService.editPropertyStep6(
      updatePropertyStep6Input,
      user,
    );
  }

  /**
   * ANCHOR   removePropertyStep7
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose remove Property step7 information
   * @returns message
   */
  @UsePipes(ValidationPipe)
  @Mutation(() => String)
  async removePropertyStep7(@Args('id', { type: () => [Int] }) id: number[]) {
    return this.propertyService.removePropertyStep7(id);
  }

  /**
   * ANCHOR   StepWisePropertyData
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose edit Property information
   * @returns message and property id
   */
  @UsePipes(ValidationPipe)
  @Query(() => [StepWisePropertyData])
  async StepWisePropertyData(
    @Args('property_id', { type: () => Int })
    propertyId: number,
    @Args('property_step', { type: () => Int })
    propertyStep: PropertyStepEnum,
  ) {
    return this.propertyService.StepWisePropertyData(propertyId, propertyStep);
  }

  /**
   * ANCHOR   favoriteProperty
   * @param   loginUser login user information
   * @param   favoritePropertyArgs property id and like or dislike property
   * @returns success message
   */
  @Mutation(() => String)
  favoriteProperty(
    @getUser() loginUser,
    @Args('favorite', { type: () => FavoritePropertyInput })
    favoritePropertyArgs: FavoritePropertyInput,
  ) {
    return this.propertyService.favoriteProperty(
      favoritePropertyArgs,
      loginUser,
    );
  }

  /**
   * ANCHOR   userSearchAndFilterProperty
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose filter and search property
   * @param   searchAndFilterParam
   * @returns property list, field wise count and total properties
   */
  @Query(() => PropertyFilterResponse, { nullable: true })
  userSearchAndFilterProperty(
    @getUser() LoginUser,
    @Args('searchAndFilterParam', { type: () => SearchAndFilterPropertyInput })
    searchAndFilterParam: SearchAndFilterPropertyInput,
  ) {
    return this.propertyService.publicSearchAndFilterProperty(
      searchAndFilterParam,
      LoginUser,
    );
  }

  /**
   * ANCHOR   favoritePropertyList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose favorite property listing for login user
   * @returns favorite property listing
   */
  @Query(() => PropertyPaginationResponse)
  favoritePropertyList(
    @getUser() loginUser,
    @Args('page_number', { type: () => Int }) page_number: number,
    @Args('page_size', { type: () => Int }) page_size: number,
  ) {
    return this.propertyService.favoritePropertyList(
      loginUser,
      page_number,
      page_size,
    );
  }

  /**
   * ANCHOR   searchPropertyByParam
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose Search Property By param
   * @param   search_param search parameter
   * @param   property_type property type
   * @returns Property Information
   */

  @Query(() => PropertyPaginationResponse)
  async searchPropertyByParam(
    @Args('property_name', { type: () => String })
    property_name: string,
    @Args('page_number', { type: () => Int })
    page_number: number,
    @Args('page_size', { type: () => Int })
    page_size: number,
    @Args('property_type', { type: () => String })
    property_type: string,
  ): Promise<PropertyPaginationResponse> {
    return this.propertyService.searchPropertyByParam(
      property_name,
      property_type,
      page_number,
      page_size,
    );
  }

  /**
   * ANCHOR   deleteProperty
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose delete Property
   * @param   property_id
   * @returns success message or error
   */
  @Mutation(() => String)
  async deleteProperty(
    @Args('property_id', { type: () => Int })
    property_id: number,
  ): Promise<string> {
    return this.propertyService.deleteProperty(property_id);
  }

  /**
   * ANCHOR   userFeaturePropertyList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose feature Property listing
   * @returns property list
   */
  @Query(() => [PropertyEntity])
  userFeaturePropertyList(@getUser() loginUser): any {
    return this.propertyService.featurePropertyList(loginUser);
  }

  /**
   * ANCHOR   findOneProperty
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property by id
   * @param   property_id property id
   * @returns property details
   */
  @Query(() => PropertyEntity, { nullable: true })
  async findOneProperty(
    @Args('property_id', { type: () => Int }) property_id: number,
  ) {
    return await this.propertyService.findOneProperty(property_id);
  }

  /**
   * ANCHOR   amenitiesListing
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get amenities listing
   * @returns Amenities details
   */
  @Query(() => AmenitiesListingResponse, { nullable: true })
  async amenitiesListing() {
    return await this.propertyService.amenitiesListing();
  }

  /**
   * ANCHOR   host_details
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field host details
   * @returns user information
   */
  @ResolveField(() => UserEntity)
  host_details(@Parent() property: PropertyEntity): Promise<UserEntity> {
    return this.propertyService.hostDetails(property);
  }

  /**
   * ANCHOR   city_details
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field city details
   * @returns city information
   */
  @ResolveField(() => CityEntity)
  city_details(@Parent() property: PropertyEntity): Promise<CityEntity> {
    return this.propertyService.cityDetails(property);
  }

  /**
   * ANCHOR   state_details
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field state details
   * @returns state information
   */
  @ResolveField(() => StateEntity)
  state_details(@Parent() property: PropertyEntity): Promise<StateEntity> {
    return this.propertyService.stateDetails(property);
  }

  /**
   * ANCHOR   country_details
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field country details
   * @returns country information
   */
  @ResolveField(() => CountryEntity)
  country_details(@Parent() property: PropertyEntity): Promise<CountryEntity> {
    return this.propertyService.countryDetails(property);
  }

  /**
   * ANCHOR   space_overview
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field space overview details
   * @returns space overview information
   */
  @ResolveField(() => SpaceOverviewEntity)
  space_overview(
    @Parent() property: PropertyEntity,
  ): Promise<SpaceOverviewEntity> {
    return this.propertyService.spaceOverviewDetails(property);
  }

  /**
   * ANCHOR   amenity
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property amenity details
   * @returns property amenity
   */
  @ResolveField(() => [PropertyAmenityEntity])
  amenity(
    @Parent() property: PropertyEntity,
  ): Promise<PropertyAmenityEntity[]> {
    return this.propertyService.amenity(property);
  }

  /**
   * ANCHOR   facility
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property facility details
   * @returns property facilities
   */
  @ResolveField(() => [PropertyAmenityEntity])
  facility(
    @Parent() property: PropertyEntity,
  ): Promise<PropertyAmenityEntity[]> {
    return this.propertyService.facility(property);
  }

  /**
   * ANCHOR   rental_condition
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property rental condition details
   * @returns property rental condition
   */
  @ResolveField(() => RentalConditionEntity)
  rental_condition(
    @Parent() property: PropertyEntity,
  ): Promise<RentalConditionEntity> {
    return this.propertyService.rentalCondition(property);
  }

  /**
   * ANCHOR   additional_required_cost
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property additional_required_cost details
   * @returns property additional_required_cost
   */
  @ResolveField(() => [AdditionalRequiredCostEntity])
  additional_required_cost(
    @Parent() property: PropertyEntity,
  ): Promise<AdditionalRequiredCostEntity[]> {
    return this.propertyService.additionalCost(property);
  }

  /**
   * ANCHOR   rules_and_preference
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property rules and preferences details
   * @returns property rules and preferences
   */
  @ResolveField(() => RuleOrPreferenceEntity)
  rules_and_preference(@Parent() property: PropertyEntity) {
    return this.propertyService.rulesAndPreference(property);
  }

  /**
   * ANCHOR   media
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field media details
   * @returns media information
   */
  @ResolveField(() => [MediaEntity])
  media(@Parent() property: PropertyEntity): Promise<MediaEntity[]> {
    return this.propertyService.mediaDetails(property);
  }

  /**
   * ANCHOR   tenant_counts
   * @author  Harsh Bansal <harsh.bansal@creolestudios.com>
   * @purpose resolve field tenants count
   * @returns Count of tenant
   */
  @ResolveField(() => Int)
  tenant_counts(@Parent() property: PropertyEntity): Promise<number> {
    return this.propertyService.tenantCounts(property);
  }

  /**
   * ANCHOR   images
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property images
   * @returns property images
   */
  @ResolveField(() => [MediaEntity])
  images(@Parent() property: PropertyEntity): Promise<MediaEntity[]> {
    return this.propertyService.images(property);
  }
}

// ANCHOR PublicPropertyRoutes
@Resolver(() => PropertyEntity)
export class PublicPropertyRoutes {
  constructor(private readonly propertyService: PropertyService) {}
  /**
   * ANCHOR   featurePropertyList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose feature Property listing
   * @returns property list
   */
  @Query(() => [PropertyEntity])
  featurePropertyList(@getUser() loginUser): any {
    return this.propertyService.featurePropertyList(loginUser);
  }

  /**
   * ANCHOR   findOneProperty
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property by id
   * @param   property_id property id
   * @returns property details
   */
  @Query(() => PropertyEntity, { nullable: true })
  async findOneProperty(
    @Args('property_id', { type: () => Int }) property_id: number,
  ) {
    return await this.propertyService.findOneProperty(property_id);
  }

  /**
   * ANCHOR   publicSearchAndFilterProperty
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose filter and search property
   * @param   searchAndFilterParam
   * @returns property list, field wise count and total properties
   */
  @Query(() => PropertyFilterResponse, { nullable: true })
  publicSearchAndFilterProperty(
    @Args('searchAndFilterParam', { type: () => SearchAndFilterPropertyInput })
    searchAndFilterParam: SearchAndFilterPropertyInput,
  ) {
    return this.propertyService.publicSearchAndFilterProperty(
      searchAndFilterParam,
    );
  }

  /**
   * ANCHOR   host_details
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field host details
   * @returns user information
   */
  @ResolveField(() => UserEntity)
  host_details(@Parent() property: PropertyEntity): Promise<UserEntity> {
    return this.propertyService.hostDetails(property);
  }

  /**
   * ANCHOR   city_details
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field city details
   * @returns city information
   */
  @ResolveField(() => CityEntity)
  city_details(@Parent() property: PropertyEntity): Promise<CityEntity> {
    return this.propertyService.cityDetails(property);
  }

  /**
   * ANCHOR   images
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose get property images
   * @returns property images
   */
  @ResolveField(() => [MediaEntity])
  images(@Parent() property: PropertyEntity): Promise<MediaEntity[]> {
    return this.propertyService.images(property);
  }

  /**
   * ANCHOR   state_details
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field state details
   * @returns state information
   */
  @ResolveField(() => StateEntity)
  state_details(@Parent() property: PropertyEntity): Promise<StateEntity> {
    return this.propertyService.stateDetails(property);
  }

  /**
   * ANCHOR   country_details
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field country details
   * @returns country information
   */
  @ResolveField(() => CountryEntity)
  country_details(@Parent() property: PropertyEntity): Promise<CountryEntity> {
    return this.propertyService.countryDetails(property);
  }

  /**
   * ANCHOR   space_overview
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field space overview details
   * @returns space overview information
   */
  @ResolveField(() => SpaceOverviewEntity)
  space_overview(
    @Parent() property: PropertyEntity,
  ): Promise<SpaceOverviewEntity> {
    return this.propertyService.spaceOverviewDetails(property);
  }

  /**
   * ANCHOR   media
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose resolve field media details
   * @returns media information
   */
  @ResolveField(() => [MediaEntity])
  media(@Parent() property: PropertyEntity): Promise<MediaEntity[]> {
    return this.propertyService.mediaDetails(property);
  }
}
