import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContactUsService } from './contact-us.service';
import { ContactUsEntity } from '../../../shared/entity/contact-us.entity';
import { CreateContactUsInput } from '../../../dto/contact-us.input';

@Resolver(() => ContactUsEntity)
export class ContactUsResolver {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Mutation(() => String)
  createContactUs(
    @Args('createContactUsInput') createContactUsInput: CreateContactUsInput,
  ) {
    return this.contactUsService.create(createContactUsInput);
  }

  @Query(() => [ContactUsEntity], { name: 'contactUs' })
  findAll() {
    return this.contactUsService.findAll();
  }
}
