import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';
import { GenderEnum } from 'src/common/enum';

@InputType()
export class UpdateUserBookingDto {
  @Field({ nullable: true })
  @IsOptional()
  image: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  gender: GenderEnum;

  @Field({ nullable: true })
  @IsOptional()
  dob: string;

  @Field({ nullable: true })
  @IsOptional()
  occupation: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  dialer_code: number;

  @Field({ nullable: true })
  @IsOptional()
  mobile: number;
}
