import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCommissionInput {
  @Field(() => Int, { description: 'Type of commision' })
  @IsInt()
  type: number;

  @Field(() => Float, { description: 'value of commision' })
  @IsNotEmpty()
  @IsInt()
  value: number;

  @Field(() => String, { description: 'Currency of commision' })
  @IsString()
  currency: string;
}
