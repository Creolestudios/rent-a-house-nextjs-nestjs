import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LanguageService } from './language.service';
import { SpokenLanguagesEntity } from '../../shared/entity/spoken_languages.entity';
import { CreatelanguageInput } from '../../dto/create-language.input';
import { LanguageCreatedResponse } from '../../common/types';

@Resolver()
export class LanguageResolver {
  constructor(private readonly languageService: LanguageService) {}

  @Mutation(() => LanguageCreatedResponse)
  createLanguage(
    @Args('createLanguageInput') createLanguageInput: CreatelanguageInput,
  ) {
    return this.languageService.create(createLanguageInput);
  }

  @Query(() => [SpokenLanguagesEntity], { name: 'language_list' })
  findAll() {
    return this.languageService.findAll();
  }

  @Mutation(() => String)
  removeLanguage(@Args('id', { type: () => Int }) Id: number) {
    return this.languageService.remove(Id);
  }
}
