import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateSiteconfigInput } from './create-siteconfig.input';

@InputType()
export class UpdateSiteconfigInput extends PartialType(CreateSiteconfigInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
