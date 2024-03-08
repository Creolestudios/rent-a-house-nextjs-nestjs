import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCmsPageInput {
  @Field(() => [CreateCmsPageItem])
  data: CreateCmsPageItem[];
}

@InputType()
class CreateCmsPageItem {
  @Field()
  content: string;

  @Field()
  language_id: number;

  @Field()
  meta_description: string;

  @Field()
  meta_title: string;

  @Field()
  page_name: string;
}
