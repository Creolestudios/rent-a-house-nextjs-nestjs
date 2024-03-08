import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SiteconfigService } from './siteconfig.service';
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { CreateSiteconfigInput } from '../../dto/create-siteconfig.input';
import { UpdateSiteconfigInput } from '../../dto/update-siteconfig.input';
import {
  SiteConfigEntity,
  SiteConfigResponse,
  SiteConfigResponseSingle,
} from '../../shared/entity/siteSettings.entity';
import { RoleGuard } from '../auth/role.guard';
import { AuthenticationRole } from '../../common/enum';
/**
 * ANCHOR createSiteconfig
 * Creates site configuration.
 * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @param CreateSiteconfigInput, upload_logo
 * @returns Object of created site config.
 * @version 1.0.1
 */

@UseGuards(new RoleGuard([AuthenticationRole.SUPER_ADMIN]))
@Resolver(() => SiteConfigEntity)
export class SiteconfigResolver {
  constructor(private readonly siteconfigService: SiteconfigService) {}
  @UsePipes(ValidationPipe)
  @Mutation(() => SiteConfigResponse)
  async createSiteconfig(
    @Args('createSiteconfigInput') createSiteconfigInput: CreateSiteconfigInput,
    @Args('upload_logo', { type: () => GraphQLUpload, nullable: true })
    upload_logo: FileUpload,
  ) {
    return await this.siteconfigService.create(
      createSiteconfigInput,
      upload_logo,
    );
  }
  /**
   * ANCHOR findOne
   * Returns site configuration details.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object of site configs.
   * @version 1.0.0
   */
  @Query(() => SiteConfigResponseSingle, { name: 'siteconfig' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.siteconfigService.findOne(id);
  }
  /**
   * ANCHOR findAll
   * Returns site configurations.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param
   * @returns Object of site configs.
   * @version 1.0.0
   */
  @Query(() => SiteConfigResponse, { name: 'siteconfigs' })
  async findAll() {
    return await this.siteconfigService.findAll();
  }

  /**
   * ANCHOR updateSiteconfig
   * Update site configuration.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object of site configs.
   * @version 1.0.0
   */
  @UsePipes(ValidationPipe)
  @Mutation(() => SiteConfigResponse)
  async updateSiteconfig(
    @Args('updateSiteconfigInput') updateSiteconfigInput: UpdateSiteconfigInput,
    @Args('upload_logo', { type: () => GraphQLUpload, nullable: true })
    upload_logo: FileUpload,
  ) {
    return await this.siteconfigService.update(
      updateSiteconfigInput.id,
      updateSiteconfigInput,
      upload_logo,
    );
  }

  /**
   * ANCHOR removeSiteconfig
   * Remove site configuration.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns object
   * @version 1.0.0
   */
  @UsePipes(ValidationPipe)
  @Mutation(() => SiteConfigResponse)
  removeSiteconfig(@Args('id', { type: () => Int }) id: number) {
    return this.siteconfigService.remove(id);
  }
  /**
   * ANCHOR findCommisionById
   * Returns Commision.
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param integer id
   * @returns Object of site configs.
   * @version 1.0.0
   */
  @Query(() => SiteConfigResponseSingle, { name: 'findConfigOnly' })
  async findConfigOnly() {
    return await this.siteconfigService.findConfigOnly();
  }
}
