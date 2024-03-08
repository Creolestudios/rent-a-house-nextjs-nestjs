import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

import { ERROR_MESSAGE } from '../common/constants';
import { IsUnique } from '../common/helper';
import { UserEntity } from '../shared/entity/user.entity';

@InputType()
export class UserContactInformation {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail({}, { message: ERROR_MESSAGE.InvalidEmail })
  @IsUnique(UserEntity, 'email')
  email: string;

  @Field(() => Int, { nullable: true })
  dialer_code: number;

  @Field({ nullable: true })
  @IsUnique(UserEntity, 'mobile')
  mobile: number;
}
