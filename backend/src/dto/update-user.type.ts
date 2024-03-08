import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserType {
  @Field()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  is_landlord: boolean;
}