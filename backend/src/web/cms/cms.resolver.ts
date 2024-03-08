import { Resolver, Query, Mutation, Args, Int, Field } from '@nestjs/graphql';
import { CmsService } from './cms.service';
import { CreateCmsPageInput } from '../../dto/create-cms-page.input';
import { CMSCreatedResponse, FindAllCMSResponse } from '../../common/types';
import { CmsEntity } from '../../shared/entity/cms.entity';
import { UpdateAdminInput } from '../../dto/update-admin.input';
import { UpdateCmsPageInput } from '../../dto/update-cms-page.input';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

// import { Cm } from './entities/cm.entity';
// import { CreateCmInput } from './dto/create-cm.input';
// import { UpdateCmInput } from './dto/update-cm.input';

@Resolver()
export class CmsResolver {
  constructor(private readonly cmsService: CmsService) {}

  @Mutation(() => CMSCreatedResponse)
  createCmsPage(
    @Args('CreateCmsPageInput') CreateCmsPageInput: CreateCmsPageInput,
  ): Promise<any> {
    return this.cmsService.create(CreateCmsPageInput);
  }

  @Mutation(() => String)
  uploadForCmsPage(
    @Args('file', { type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
  ): Promise<any> {
    return this.cmsService.uploadForCmsPage(file);
  }

  @Query(() => FindAllCMSResponse, { name: 'FindAllCMSResponse' })
  findAll() {
    return this.cmsService.findAll();
  }

  @Query(() => [CmsEntity], { name: 'FindOneCms', nullable: true })
  findOneCms(
    @Args('identifier', { type: () => String, nullable: true })
    identifier: string,
  ) {
    return this.cmsService.findOne(identifier);
  }

  @Mutation(() => String)
  UpdateCmsPage(@Args('updateCms') updateCmsInput: UpdateCmsPageInput) {
    return this.cmsService.updateCmsInput(updateCmsInput);
  }

  @Mutation(() => String)
  removeCmsPage(@Args('id', { type: () => Int }) id: number) {
    return this.cmsService.removeCmsPage(id);
  }
}
