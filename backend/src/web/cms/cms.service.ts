import { Injectable } from '@nestjs/common';
import { CreateCmsPageInput } from '../../dto/create-cms-page.input';
import { CmsEntity } from '../../shared/entity/cms.entity';
import { GraphQLError } from 'graphql';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../common/constants';
import { SpokenLanguagesEntity } from '../../shared/entity/spoken_languages.entity';
import { GqlNotFoundException } from '../../common/error';
import { UpdateCmsPageInput } from '../../dto/update-cms-page.input';
import { createStream } from '../../common/helper';
import * as fs from 'fs';
@Injectable()
export class CmsService {
  async create(createCmsInput: CreateCmsPageInput) {
    try {
      let getLanguageLength = await SpokenLanguagesEntity.find({
        select: ['id', 'name'],
      });

      if (getLanguageLength.length !== createCmsInput.data.length) {
        throw new GqlNotFoundException(ERROR_MESSAGE.InvalidLanguageData);
      }

      let storeIdentifer = createCmsInput.data.filter(
        (e1) => e1.language_id == 1,
      );

      for (const element of createCmsInput.data) {
        const cmsPage = new CmsEntity();
        cmsPage.content = element.content;
        cmsPage.identifier = storeIdentifer[0].page_name;
        cmsPage.language_id = element.language_id;
        cmsPage.page_name = element.page_name;
        cmsPage.meta_title = element.meta_title;
        cmsPage.meta_description = element.meta_description;

        await CmsEntity.save(cmsPage);
      }

      return { message: SUCCESS_MESSAGE.PageCreated };
    } catch (error) {
      throw new GraphQLError(error.message || '', {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }
  async uploadForCmsPage(file) {
    try {
      let uploaduseriamgeFileName = '';
      if (file) {
        const uploadPhotoFile = await createStream(file);
        const uploadPhotoDir = './uploads/cms/';
        const dirPath = 'uploads/cms/';

        uploaduseriamgeFileName = file.filename;

        if (!fs.existsSync(uploadPhotoDir)) {
          fs.mkdirSync(uploadPhotoDir, { recursive: true });
        }

        fs.writeFileSync(dirPath + uploaduseriamgeFileName, uploadPhotoFile);

        return `${.IMAGE_PATH}cms/${uploaduseriamgeFileName}`;
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
      const pages = await CmsEntity.findBy({ language_id: 1 });
      return { page: pages };
    } catch (error) {}
  }

  async findOne(identifier: string) {
    try {
      const CmsDetails = await CmsEntity.findBy({
        identifier: identifier,
      });

      if (CmsDetails.length === 0) {
        throw GqlNotFoundException(ERROR_MESSAGE.NotFoundException);
      }
      return CmsDetails;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: { code: error?.extensions?.code || 'NOT_FOUND' },
      });
    }
  }

  async updateCmsInput(updateCmsInput: UpdateCmsPageInput) {
    try {
      let storeIdentifer = updateCmsInput.data.filter(
        (e1) => e1.language_id == 1,
      );
      if (storeIdentifer.length != 0) {
        for (let i = 0; i < updateCmsInput.data.length; i++) {
          let cmsDetails = await CmsEntity.findOneBy({
            id: updateCmsInput.data[i].id,
          });

          cmsDetails.id = updateCmsInput.data[i].id;
          cmsDetails.content = updateCmsInput.data[i].content;
          cmsDetails.language_id = updateCmsInput.data[i].language_id;
          cmsDetails.meta_description = updateCmsInput.data[i].meta_description;
          cmsDetails.meta_title = updateCmsInput.data[i].meta_title;
          cmsDetails.page_name = updateCmsInput.data[i].page_name;
          cmsDetails.identifier = storeIdentifer[0].page_name;
          await CmsEntity.save(cmsDetails);
        }
        return SUCCESS_MESSAGE.PageUpdated;
      } else {
        for (let i = 0; i < updateCmsInput.data.length; i++) {
          let cmsDetails = await CmsEntity.findOneBy({
            id: updateCmsInput.data[i].id,
          });

          cmsDetails.id = updateCmsInput.data[i].id;
          cmsDetails.content = updateCmsInput.data[i].content;
          cmsDetails.language_id = updateCmsInput.data[i].language_id;
          cmsDetails.meta_description = updateCmsInput.data[i].meta_description;
          cmsDetails.meta_title = updateCmsInput.data[i].meta_title;
          cmsDetails.page_name = updateCmsInput.data[i].page_name;

          await CmsEntity.save(cmsDetails);
        }
        return SUCCESS_MESSAGE.PageUpdated;
      }
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: { code: error?.extensions?.code || 'NOT_FOUND' },
      });
    }
  }
  async removeCmsPage(id: number) {
    try {
      let getIdentifer = await CmsEntity.findBy({ id: id });
      if (!getIdentifer) {
        throw GqlNotFoundException(ERROR_MESSAGE.PageNotFound);
      }
      let getDatafordeletePage = await CmsEntity.findBy({
        identifier: getIdentifer[0].identifier,
      });

      const deletePromises = getDatafordeletePage.map((page) =>
        CmsEntity.softRemove(page),
      );
      await Promise.all(deletePromises);
      return SUCCESS_MESSAGE.PageDeleted;
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: { code: error?.extensions?.code || 'NOT_FOUND' },
      });
    }
  }
}
