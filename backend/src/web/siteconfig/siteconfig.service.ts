import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import * as path from 'path';
import { FileUpload } from 'graphql-upload';
import { SiteConfigEntity } from '../../shared/entity/siteSettings.entity';
import {
  createStream,
  makeId,
  writeFileIntoDirectory,
} from '../../common/helper';
import { SiteConfigStatus } from '../../common/enum';
import { GqlBadUserInput, GqlNotFoundException } from '../../common/error';
import { CreateSiteconfigInput } from '../../dto/create-siteconfig.input';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../common/constants';
import { UpdateSiteconfigInput } from '../../dto/update-siteconfig.input';
@Injectable()
export class SiteconfigService {
  /**
   * ANCHOR create
   * Creates site configuration.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param CreateSiteconfigInput, upload_logo
   * @returns Object of created site config.
   * @version 1.0.0
   */
  async create(
    _createSiteconfigArgs: CreateSiteconfigInput,
    upload_logo: FileUpload,
  ) {
    try {
      let uploadLogoFileName = '';
      let uploadLogoWithExtension = '';

      if (upload_logo) {
        let result = makeId(5);
        const uploadPhotoFile = await createStream(upload_logo);
        const uploadPhotoDir = './uploads/site_photos';
        const dirPath = 'uploads/site_photos/';
        uploadLogoFileName = result + `${Date.now()}`;

        await writeFileIntoDirectory(
          dirPath,
          upload_logo,
          uploadPhotoDir,
          uploadPhotoFile,
          uploadLogoFileName,
        );
        uploadLogoWithExtension =
          uploadLogoFileName + path.extname(upload_logo.filename);
        _createSiteconfigArgs['logo'] = uploadLogoWithExtension;
      } else {
        let siteconfigdata = await SiteConfigEntity.findOneBy({ id: 1 });
        _createSiteconfigArgs['logo'] = siteconfigdata.logo;
      }
      const siteConfigs: any = await SiteConfigEntity.findOne({
        where: {
          status: SiteConfigStatus.ACTIVE,
        },
      });
      if (!siteConfigs) {
        const siteConfigInfo: any = await SiteConfigEntity.save(
          _createSiteconfigArgs,
        );
        return {
          data: siteConfigInfo,
          message: SUCCESS_MESSAGE.ConfigurationCreated,
        };
      } else {
        Object.assign(siteConfigs, _createSiteconfigArgs);
        const siteConfigInfo: any = await SiteConfigEntity.save(siteConfigs);
        return {
          data: siteConfigInfo,
          message: SUCCESS_MESSAGE.ConfigurationUpdated,
        };
      }
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  /**
   * ANCHOR findOne
   * Returns site configuration.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object of site configs.
   * @version 1.0.0
   */
  async findOne(id) {
    try {
      const siteConfigs = await SiteConfigEntity.findOne({
        where: {
          id: id,
        },
      });
      // siteConfigs.logo = siteConfigs.logo
      //   ? `${.APP_URL}` + '/' + siteConfigs.logo
      //   : '';
      // ${.IMAGE_PATH}users/profile/${this.image}
      if (!siteConfigs) {
        throw GqlNotFoundException(ERROR_MESSAGE.SiteConfigNotFound);
      }

      return {
        data: siteConfigs,
        message: SUCCESS_MESSAGE.ConfigurationsDetailsFound,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }
  /**
   * ANCHOR findOne
   * Returns site configuration.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object of site configs.
   * @version 1.0.0
   */
  async findConfigOnly() {
    try {
      const siteConfigs = await SiteConfigEntity.findOne({
        where: {
          status: SiteConfigStatus.ACTIVE,
        },
      });
      // siteConfigs.logo = siteConfigs.logo
      //   ? .BaseUrl + '/' + siteConfigs.logo
      //   : '';
      if (!siteConfigs) {
        throw GqlNotFoundException(ERROR_MESSAGE.SiteConfigNotFound);
      }

      return {
        data: siteConfigs,
        message: SUCCESS_MESSAGE.ConfigurationsDetailsFound,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  /**
   * ANCHOR findAll
   * Returns site configuration.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param
   * @returns array of Object of site configs.
   * @version 1.0.0
   */
  async findAll() {
    try {
      const siteConfigs = await SiteConfigEntity.find();
      if (!siteConfigs) {
        throw GqlNotFoundException(ERROR_MESSAGE.SiteConfigNotFound);
      }

      return {
        data: siteConfigs,
        message: SUCCESS_MESSAGE.ConfigurationListing,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  /**
   * ANCHOR update
   * Update site configuration.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object of site configs.
   * @version 1.0.0
   */
  async update(
    id: number,
    updateSiteconfigInput: UpdateSiteconfigInput,
    upload_logo: FileUpload,
  ) {
    try {
      if (!updateSiteconfigInput) {
        throw GqlBadUserInput(ERROR_MESSAGE.InvalidInputs);
      }
      let uploadLogoFileName;
      let uploadLogoWithExtension = '';

      if (upload_logo) {
        let result = makeId(5);
        const uploadPhotoFile = await createStream(upload_logo);
        const uploadPhotoDir = './uploads/site_photos';
        const dirPath = 'uploads/site_photos/';
        uploadLogoFileName = result + `${Date.now()}`;
        await writeFileIntoDirectory(
          dirPath,
          upload_logo,
          uploadPhotoDir,
          uploadPhotoFile,
          uploadLogoFileName,
        );
        uploadLogoWithExtension =
          uploadLogoFileName + path.extname(upload_logo.filename);
        updateSiteconfigInput['logo'] = uploadLogoWithExtension;
      } else {
        let siteconfigdata = await SiteConfigEntity.findOneBy({ id: 1 });
        //updateSiteconfigInput.logo = siteconfigdata.logo;
      }
      const siteUpdated = await SiteConfigEntity.update(
        updateSiteconfigInput.id,
        updateSiteconfigInput,
      );
      return {
        data: siteUpdated,
        message: SUCCESS_MESSAGE.ConfigurationUpdated,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }

  /**
   * ANCHOR remove
   * Remove site configuration.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns object, with message property
   * @version 1.0.0
   */
  async remove(id: number) {
    try {
      if (!id) {
        throw GqlBadUserInput(ERROR_MESSAGE.InvalidInputs);
      }
      await SiteConfigEntity.delete(id);
      return {
        data: {},
        message: SUCCESS_MESSAGE.ConfigurationDeleted,
      };
    } catch (error) {
      throw new GraphQLError(error.message || 'Internal server error', {
        extensions: { code: error.extensions?.code || 'INTERNAL_SERVER_ERROR' },
      });
    }
  }
}
