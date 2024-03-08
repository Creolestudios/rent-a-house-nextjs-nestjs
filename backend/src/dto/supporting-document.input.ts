import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateUserInput } from './create-user.input';

@InputType()
export class SupportingDocumentInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}

@InputType()
export class SupportingDocument {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field({ nullable: true })
  identity_proof: string;

  @Field({ nullable: true })
  proof_of_occupation_income: string;
}
