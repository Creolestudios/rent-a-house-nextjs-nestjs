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

 * @category   Helper
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 */

import { createUnionType, Field, Int, ObjectType } from '@nestjs/graphql';
import { AdminEntity } from '../shared/entity/admin.entity';
import { MediaEntity } from '../shared/entity/media.entity';
import { PropertyAmenityEntity } from '../shared/entity/property-amenity.entity';
import { PropertyEntity } from '../shared/entity/property.entity';
import { RentalConditionEntity } from '../shared/entity/rental-conditions.entity';
import { RuleOrPreferenceEntity } from '../shared/entity/rules-or-preference.entity';
import { SpaceOverviewEntity } from '../shared/entity/space-overview.entity';
import { UserEntity } from '../shared/entity/user.entity';
import { CmsEntity } from '../shared/entity/cms.entity';
import { BookingEntity } from '../shared/entity/bookings.entity';
import { MessageEntity } from '../shared/entity/messages.entity';
import { ChildMessageEntity } from '../shared/entity/child-messages.entity';
/**
 * ANCHOR SendMailInterface
 * @purpose send mail interface
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 */

export interface SendMailInterface {
  subject: string;
  template: string;
  context?: any;
}

/**
 * ANCHOR UserLoginResponse
 * @purpose property verification response
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 */

@ObjectType()
export class PropertyVerificationResponse {
  @Field()
  mobile_number: string;

  @Field(() => Int)
  property_id: number;
}

@ObjectType()
export class GoogleOauthLoginResponse {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field({ nullable: true })
  first_name: string;

  @Field({ nullable: true })
  last_name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  image: string;

  @Field(() => Int, { nullable: true })
  social_type: number;

  @Field({ nullable: true })
  token: string;
}

/**
 * ANCHOR   UserLoginResponse
 * @purpose user and admin login response
 * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 */

export const UserLoginResponse = createUnionType({
  name: 'UserLoginResponse',
  types: () => [AdminEntity, UserEntity],
});

/**
 * ANCHOR   StepWisePropertyData
 * @purpose get particular property step data
 * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 */
export const StepWisePropertyData = createUnionType({
  name: 'StepWisePropertyData',
  types: () => [
    PropertyEntity,
    SpaceOverviewEntity,
    PropertyAmenityEntity,
    RentalConditionEntity,
    RuleOrPreferenceEntity,
    MediaEntity,
  ],
});

/**
 * ANCHOR MonthCount
 * @purpose MonthCount type
 * @author @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 */

@ObjectType()
export class MonthCount {
  @Field()
  month: string;
  @Field()
  monthCount: number;
}

/**
 * ANCHOR AdminDashboardDataType
 * @purpose MonthCount type
 * @author @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 */
@ObjectType()
export class AdminDashboardData {
  @Field(() => [MonthCount])
  monthWiseUser: MonthCount[];

  @Field(() => [AdminDashboardDataType])
  otherData: AdminDashboardDataType[];

  @Field(() => [Int])
  avalibleYears: number[]; // initialize to an empty array

  @Field(() => Int)
  totalUserYear: number;

  dashboardResponse: { years: any; usersByMonth: any[] };
}

@ObjectType()
export class AdminDashboardDataType {
  @Field()
  name: string;

  @Field(() => Int)
  value: number;
}

@ObjectType()
export class TenatDetils {
  @Field()
  name: string;
  @Field()
  id: number;
}

@ObjectType()
export class MangeUserResponse {
  @Field(() => [UserEntity])
  users: UserEntity[];

  @Field(() => Int)
  total_users: number;
}
@ObjectType()
export class LiveChatResponse {
  @Field()
  text: string;

  @Field({ nullable: true })
  file: string;

  @Field()
  to_id: number;

  @Field()
  tenant_name: string;

  @Field()
  from_id: number;

  @Field()
  landlord_name: string;

  @Field()
  tenant_image: string;

  @Field()
  landlord_image: string;

  @Field(() => Date, { nullable: true })
  created_at: string;
  // @Field()
  // ids: number;
}
@ObjectType()
export class MessagePayload {
  @Field(() => String)
  message: string;

  @Field(() => Int)
  bookingId: number;

  @Field(() => Int)
  from: number;

  @Field(() => String)
  landlord_name: string;

  @Field(() => Int)
  to: number;

  @Field(() => String)
  tenant_name: string;

  @Field()
  tenant_image: string;

  @Field()
  landlord_image: string;

  @Field(() => String, { nullable: true })
  messageFile: string;

  @Field(() => Date, { nullable: true })
  created_at: string;
}
@ObjectType()
class Dates {
  @Field()
  start_date: string;

  @Field()
  end_date: string;
}
@ObjectType()
export class Property {
  @Field({ nullable: true })
  id: number;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  user_id: number;
}
@ObjectType()
export class City {
  @Field(() => Int, { nullable: true })
  city_id!: number;
  @Field({ nullable: true })
  city_name: string;
}
@ObjectType()
class LastMessage {
  @Field()
  id: number;

  @Field()
  message_id: number;

  @Field()
  to_id: number;

  @Field()
  from_id: number;

  @Field()
  text: string;

  @Field(() => String, { nullable: true })
  file: string;

  @Field()
  status: number;

  @Field()
  created_at: Date;
  // Add fields for other properties in your LastMessage
  // ...

  // Make sure to match the field types with your LastMessage entity
}
@ObjectType()
export class UserMessage {
  @Field(() => LastMessage)
  userMessages: LastMessage;
}
@ObjectType()
export class LandlordData {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  first_name: string;

  @Field({ nullable: true })
  last_name: string;

  @Field({ nullable: true })
  image: string;
}

@ObjectType()
class TenantData {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  first_name: string;

  @Field({ nullable: true })
  last_name: string;

  @Field({ nullable: true })
  image: string;
}
@ObjectType()
export class MessageWithLandlordData {
  @Field()
  id: number;

  @Field()
  booking_id: number;

  @Field()
  to_id: number;

  @Field()
  from_id: number;

  @Field()
  status: number;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  // @Field(() => LandlordData, { nullable: true })
  // landlordData: LandlordData;

  @Field(() => TenantData, { nullable: true })
  tenantData: TenantData;

  @Field(() => Dates, { nullable: true }) // Add this to include the Dates object
  dates: Dates;

  @Field(() => Property, { nullable: true })
  property: Property;

  @Field(() => City, { nullable: true })
  city!: City;

  @Field(() => UserMessage, { nullable: true })
  userMessages: UserMessage;
}

@ObjectType()
export class MessageResponse {
  @Field(() => [MessageWithLandlordData])
  data: [MessageWithLandlordData];

  @Field()
  message: string;
}

@ObjectType()
export class BookingResponses {
  @Field(() => BookingEntity)
  data: BookingEntity[];

  @Field()
  message: string;
}
@ObjectType()
export class ContinueChatting {
  @Field(() => UserEntity)
  User: UserEntity[];

  @Field(() => BookingEntity)
  Bookings: BookingEntity[];

  @Field(() => PropertyEntity)
  PropertyDetail: PropertyEntity[];

  @Field(() => UserEntity)
  LandloardDetail: UserEntity[];

  @Field(() => MessageEntity)
  GetMessageData: MessageEntity[];

  @Field(() => [ChildMessageEntity])
  Message: ChildMessageEntity[];
}
@ObjectType()
export class MangeUserPropertyResponse {
  @Field(() => [PropertyEntity])
  properties: PropertyEntity[];

  @Field(() => Int)
  total_properties: number;

  @Field(() => Int, { nullable: true })
  public: number;

  @Field(() => Int, { nullable: true })
  unpublic: number;

  @Field(() => Int, { nullable: true })
  draft: number;

  @Field(() => Int, { nullable: true })
  all: number;
}
@ObjectType()
export class FindAllCMSResponse {
  @Field(() => [CmsEntity])
  page: CmsEntity[];
}

@ObjectType()
export class UserRegisterResponse {
  @Field(() => Number)
  id: number;
  @Field(() => String)
  token: string;
  @Field(() => String)
  message: string;
}
@ObjectType()
export class LanguageCreatedResponse {
  @Field(() => String)
  message: string;

  @Field(() => [String])
  avalible_pages: string[];
}

@ObjectType()
export class CMSCreatedResponse {
  @Field(() => String)
  message: string;
}
@ObjectType()
export class MangeReservation {
  @Field(() => [BookingEntity], { nullable: true })
  reservations: BookingEntity[];

  @Field(() => Int)
  totalReservations: number;
}
@ObjectType()
export class Reservation {
  @Field(() => BookingEntity)
  reservations: BookingEntity;

  @Field(() => Int)
  ServiceFee: number;
  @Field(() => Int)
  TotalAmountPaid: number;

  @Field(() => [ChildMessageEntity])
  messages: ChildMessageEntity[];
}
