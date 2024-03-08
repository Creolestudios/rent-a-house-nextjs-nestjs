import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { UserEntity } from 'src/shared/entity/user.entity';
import { ERROR_MESSAGE } from '../common/constants';
import {
  GenderEnum,
  IsEmailVerified,
  IsLandlord,
  IsMobileVerified,
  NotificationIsEnable,
  SocialType,
} from '../common/enum';
import { IsUnique } from '../common/helper';

@InputType()
export class CreateUserInput {
  @Field({ nullable: true })
  image: string;

  @Field()
  @IsNotEmpty()
  first_name: string;

  @Field()
  @IsNotEmpty()
  last_name: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  country_id: number;

  @Field({ nullable: true })
  gender: GenderEnum;

  @Field({ nullable: true })
  dob: string;

  @Field({ nullable: true })
  occupation: string;

  @Field({ nullable: true })
  identity_proof: string;

  @Field({ nullable: true })
  proof_of_occupation_income: string;

  @Field()
  @IsNotEmpty()
  @IsEmail({}, { message: ERROR_MESSAGE.InvalidEmail })
  @IsUnique(UserEntity, 'email')
  email: string;

  @Field()
  @IsString()
  @Matches(
    /^((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[1-9])(?=.*[a-z])(?=.*[!@#$%^&*()_-]).{8,}$/,
    { message: ERROR_MESSAGE.WeakPassword },
  )
  password: string;

  @Field({ nullable: true })
  is_mobile_verified: IsMobileVerified;

  @Field({ nullable: true })
  is_email_verified: IsEmailVerified;

  @Field({ nullable: true })
  social_type: SocialType;

  @Field({ nullable: true })
  notification_is_enable: NotificationIsEnable;

  @Field({ nullable: true })
  notification_language: number;

  @Field({ nullable: true })
  is_landlord: IsLandlord;
}
