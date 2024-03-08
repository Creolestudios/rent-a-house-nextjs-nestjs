import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';
import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { CreateCommissionInput } from './create-commisionfees.input';
import { CommissionFromEnum } from 'src/common/enum';

@InputType()
export class UpdateCommissionInput extends PartialType(CreateCommissionInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}

@InputType()
export class UpdateCommissionOnly {
  @Field(() => Float, { description: 'value of commision' })
  @IsNotEmpty()
  @IsInt()
  value: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsEnum(CommissionFromEnum)
  commission_from: number;
}
