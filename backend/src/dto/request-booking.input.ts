import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class RequestBookingDto {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  id: number;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  number: string;

  @Field()
  @IsString()
  exp_month: string;

  @Field()
  @IsString()
  exp_year: string;

  @Field()
  @IsString()
  cvc: string;

  @Field()
  @IsString()
  amount: string;

  @Field()
  @IsString()
  first_name: string;

  @Field()
  @IsString()
  last_name: string;

  @Field()
  @IsString()
  address: string;

  @Field()
  @IsString()
  postal: string;

  @Field()
  @IsString()
  city: string;

  @Field()
  @IsString()
  state: string;

  @Field()
  @IsString()
  country: string;

  @Field(() => Int)
  property_id: number;

  @Field(() => Int)
  landlord_id: number;

  @Field()
  @IsOptional()
  start_date: string;

  @Field()
  @IsOptional()
  end_date: string;

  @Field({ nullable: true })
  @IsOptional()
  city_of_residence: string;
}
