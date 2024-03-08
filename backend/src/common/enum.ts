/**
 * Copyright 2023 Rent Smartly
 * @category   Helper
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 */

import { registerEnumType } from '@nestjs/graphql';

/**
 * ANCHOR SiteConfigStatus
 * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @purpose SiteConfigStatus based enum
 */
export enum SiteConfigStatus {
  INACTIVE = 0,
  ACTIVE = 1,
}

/**
 * ANCHOR RoleEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose Role based enum
 */
export enum RoleEnum {
  VIEWER = 0,
  ADMIN = 1,
  SUPER_ADMIN = 2,
}
registerEnumType(RoleEnum, { name: 'RoleEnum' });

/**
 * ANCHOR AdminUserRoleEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose Role based enum
 */
export enum AdminUserRoleEnum {
  VIEWER = 0,
  ADMIN = 1,
}
registerEnumType(AdminUserRoleEnum, { name: 'AdminUserRoleEnum' });

/**
 * ANCHOR StatusEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose Status based enum
 */
export enum StatusEnum {
  INACTIVE = 0,
  ACTIVE = 1,
}
registerEnumType(StatusEnum, { name: 'StatusEnum' });

/**
 * ANCHOR   BookingStatusEnum
 * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose Status based enum
 */
export enum BookingStatusEnum {
  INQUIRY = 0,
  // PENDING = 1,
  REQUEST = 1,
  ACCEPT = 2,
  CONFIRM = 3,
  REJECT = 4,
  CHECK_IN_CONFORM = 5,
  CHECK_IN_REJECT = 6,
}
registerEnumType(BookingStatusEnum, { name: 'BookingStatusEnum' });

/**
 * ANCHOR PropertyStatusEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose Property status enum
 */
export enum PropertyStatusEnum {
  DRAFT = 0,
  UNPUBLISHED = 1,
  PUBLISHED = 2,
}
registerEnumType(PropertyStatusEnum, { name: 'PropertyStatusEnum' });

/**
 * ANCHOR AmenityEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose for amenity and facility
 */
export enum AmenityEnum {
  FACILITY = 0,
  AMENITY = 1,
}

/**
 * ANCHOR YesNoEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose Yes or No status
 */
export enum YesNoEnum {
  NO = 0,
  YES = 1,
}

registerEnumType(YesNoEnum, { name: 'YesNoEnum' });

/**
 * ANCHOR ContractTypeEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose define available contract type
 */
export enum ContractTypeEnum {
  MONTHLY = 0,
  YEARLY = 1,
}

registerEnumType(ContractTypeEnum, { name: 'ContractTypeEnum' });

/**
 * ANCHOR DocumentEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose define document types
 */
export enum DocumentEnum {
  NOT_REQUIRED = 0,
  PROOF_OF_IDENTITY = 1,
  PROOF_OF_OCCUPATION = 2,
  BOTH = 3,
}
registerEnumType(DocumentEnum, { name: 'DocumentEnum' });

/**
 * ANCHOR GenderEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose gender define
 */
export enum GenderEnum {
  MALE = 0,
  FEMALE = 1,
  OTHER = 2,
}
registerEnumType(GenderEnum, { name: 'GenderEnum' });

/**
 * ANCHOR TenantEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose available types of tenants
 */
export enum TenantEnum {
  STUDENT = 0,
  PROFESSIONAL = 1,
  ANY = 2,
}
registerEnumType(TenantEnum, { name: 'TenantEnum' });

/**
 * ANCHOR PetsEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose allow pets
 */
export enum PetsEnum {
  NO = 0,
  YES = 1,
  NEGOTIABLE = 2,
}
registerEnumType(PetsEnum, { name: 'PetsEnum' });

/**
 * ANCHOR MediaEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose available types of Media
 */
export enum MediaEnum {
  IMAGE = 0,
  VIDEO = 1,
  YOUTUBE_URL = 2,
}
registerEnumType(MediaEnum, { name: 'MediaEnum' });

/**
 * ANCHOR   CommissionFromEnum
 * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose available types of Media
 */
export enum CommissionFromEnum {
  TENANT = 0,
  LANDLORD = 1,
  BOTH = 2,
}
registerEnumType(CommissionFromEnum, { name: 'CommissionFromEnum' });

/**
 * ANCHOR PropertyStepEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose property step
 */
export enum PropertyStepEnum {
  PROPERTY_DETAILS = 2,
  SPACE_OVERVIEW = 3,
  FACILITIES = 4,
  RENTAL_CONDITION = 5,
  RULES_AND_PREFERENCE = 6,
  MEDIA = 7,
}
registerEnumType(PropertyStepEnum, { name: 'PropertyStepEnum' });

/**
 * ANCHOR MediaEnum
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose available types of Media
 */
export enum PolicyTypeEnum {
  FLEXIBLE = 'Flexible',
  STANDARD = 'Standard',
}
registerEnumType(PolicyTypeEnum, { name: 'PolicyTypeEnum' });

/**
 * ANCHOR AuthenticationRole
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose for authenticating role
 */
export enum AuthenticationRole {
  VIEWER,
  ADMIN,
  SUPER_ADMIN,
  USER = undefined,
}

/**
 * ANCHOR   PropertySortEnum
 * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose for authenticating role
 */
export enum PropertySortEnum {
  NONE = 0,
  PRICE = 1,
  DATE_AVAILABILITY = 2,
  NEWEST_FIRST = 3,
  POPULARITY = 4,
  NAME = 5,
}

registerEnumType(PropertySortEnum, { name: 'PropertySortEnum' });

export enum IsMobileVerified {
  NOTVERIFIED = 0,
  VERIFIED = 1,
}

export enum IsEmailVerified {
  NOTVERIFIED = 0,
  VERIFIED = 1,
}

export enum SocialType {
  MANUALLY = 0,
  GOOGLE = 1,
}
export enum NotificationIsEnable {
  NO = 0,
  YES = 1,
}
export enum IsLandlord {
  NO = 0,
  YES = 1,
}

/**
 * ANCHOR LoginUserTypeEnum
 * @author Parth Chokshi <parth.chokshi@creolestudios.com>
 * @purpose available types of User
 */
export enum LoginUserTypeEnum {
  ADMIN = 1,
  USER = 0,
}

export enum RentSmartlyCurrency {
  CURRENCY = 'CAD',
}
registerEnumType(LoginUserTypeEnum, { name: 'LoginUserTypeEnum' });

export enum MessageStatusEnum {
  INQUIRY = 0,
  // PENDING = 1,
  REQUEST = 1,
  ACCEPT = 2,
  CONFIRM = 3,
  REJECT = 4,
  SHORTLISTED = 5,
  ARCHIVED = 6,
  SHORTLISTEDANDARCHIVE = 7,
  EXPIRED = 8,
}

registerEnumType(MessageStatusEnum, { name: 'MessageStatusEnum' });

export enum ReadEnum {
  UNREAD = 0,
  READ = 1,
}
registerEnumType(ReadEnum, { name: 'ReadEnum' });
