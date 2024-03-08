import { Injectable } from '@nestjs/common';
import { CreatelanguageInput } from '../../dto/create-language.input';
import { SpokenLanguagesEntity } from '../../shared/entity/spoken_languages.entity';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../common/constants';
import { GqlNotFoundException } from '../../common/error';
import { GraphQLError } from 'graphql';
import { ILike } from 'typeorm';
import { CmsEntity } from '../../shared/entity/cms.entity';

@Injectable()
export class LanguageService {
  async create(createLanguageInput: CreatelanguageInput) {
    try {
      let checkLanguage = await SpokenLanguagesEntity.findOneBy({
        name: ILike(createLanguageInput.name),
      });
      if (checkLanguage) {
        throw new GqlNotFoundException(ERROR_MESSAGE.LanguageExist);
      } else {
        let getPagedata = await CmsEntity.findBy({ language_id: 1 });
        let avalible_pages = getPagedata.map((e1) => e1.page_name);
        let spoken_language = new SpokenLanguagesEntity();
        spoken_language.name = createLanguageInput.name;
        spoken_language.language_code = createLanguageInput.language_code;
        await SpokenLanguagesEntity.save(spoken_language);
        return {
          message: SUCCESS_MESSAGE.LanguageCreate,
          avalible_pages: avalible_pages,
        };
      }
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async findAll() {
    try {
      return await SpokenLanguagesEntity.find({
        select: ['id', 'name', 'language_code'],
      });
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  async remove(id: number) {
    try {
      // find language by id
      const language = await SpokenLanguagesEntity.findOneBy({ id: id });
      // if language not found throw error
      if (!language)
        throw GqlNotFoundException(ERROR_MESSAGE.NotFoundException);
      if (
        language.name.toLowerCase() === 'english' ||
        language.language_code.toLowerCase() === 'en'
      ) {
        throw GqlNotFoundException(ERROR_MESSAGE.LanguageNotDelete);
      }
      const Cms = await CmsEntity.findBy({ language_id: id });
      // // if language and cms page found with id found delete language
      let cmsId = Cms.map((e1) => e1.id);
      for (let i = 0; i < cmsId.length; i++) {
        await CmsEntity.softRemove(Cms[i]);
      }
      await SpokenLanguagesEntity.softRemove(language);

      // return success message
      return SUCCESS_MESSAGE.LanguageDeleted;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }
}
