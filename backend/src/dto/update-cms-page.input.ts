import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCmsPageInput {
  @Field(() => [UpdateCmsPageItem])
  data: UpdateCmsPageItem[];
}

@InputType()
class UpdateCmsPageItem {
  @Field()
  @IsNotEmpty()
  id: number;

  @Field()
  content: string;

  @Field()
  @IsNotEmpty()
  language_id: number;

  @Field()
  meta_description: string;

  @Field()
  meta_title: string;

  @Field()
  @IsNotEmpty()
  page_name: string;
}
