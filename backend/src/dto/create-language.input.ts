import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { StatusEnum } from '../common/enum';

@InputType()
export class CreatelanguageInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  language_code: string;
}
