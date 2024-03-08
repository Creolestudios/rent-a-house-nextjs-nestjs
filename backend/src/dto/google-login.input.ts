import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LogInArgs {
  @Field()
  @IsNotEmpty()
  @IsString()
  code: string;
}
