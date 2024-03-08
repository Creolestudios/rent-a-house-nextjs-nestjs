import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { GenderEnum } from '../common/enum';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserProfileInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}

@InputType()
export class UpdateUserProfileOnly {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  first_name: string;

  @Field({ nullable: true })
  last_name: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  gender: GenderEnum;

  @Field({ nullable: true })
  dob: string;

  @Field({ nullable: true })
  occupation: string;

  @Field(() => Int, { nullable: true })
  country_id: number;
}
