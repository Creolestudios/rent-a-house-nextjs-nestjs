import { Field, InputType, Int } from '@nestjs/graphql';
import { YesNoEnum } from '../common/enum';
import { IsEnum } from 'class-validator';

@InputType()
export class FavoritePropertyInput {
  @Field(() => Int)
  @IsEnum(YesNoEnum)
  is_favorite: YesNoEnum;

  @Field(() => Int)
  property_id: number;
}
