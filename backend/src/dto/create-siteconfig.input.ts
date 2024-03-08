import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateSiteconfigInput {
  @Field(() => String, { description: 'Site name' })
  @IsNotEmpty()
  @IsString()
  name: string;
  @Field(() => String, { description: 'Site logo' })
  @Field(() => String, { description: 'Site address' })
  @IsNotEmpty()
  @IsString()
  address: string;
  @Field(() => Int, { description: 'Site contact' })
  @IsNotEmpty()
  contact: number;
  @Field(() => Int, { description: 'Config status' })
  @IsNotEmpty()
  status: number;
}
