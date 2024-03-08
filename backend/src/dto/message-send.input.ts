import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';
// import { GenderEnum } from 'src/common/enum';

@InputType()
export class MessageSendDto {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  id: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  landlord_id: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  property_id: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  start_date: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  end_date: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  amount: number;

  @Field({ nullable: true })
  @IsOptional()
  message: string;

  @Field({ nullable: true })
  @IsOptional()
  currency: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  status: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  to_id: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  from_id: number;
}

@InputType()
export class MessageListingDto {
  @Field(() => Int)
  @IsNumber()
  booking_id: number;

  @Field(() => Int)
  @IsNumber()
  to_id: number;

  @Field(() => Int)
  @IsNumber()
  from_id: number;
}
