/**
 * Copyright 2023 Rent Smartly
 * Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

 * @category   Cancellation Policy
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { AuthenticationRole, PolicyTypeEnum } from '../../common/enum';
import { CancellationPolicyService } from './cancellation-policy.service';
import { RoleGuard } from '../auth/role.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(new RoleGuard([AuthenticationRole.SUPER_ADMIN]))
@Resolver()
export class CancellationPolicyResolver {
  constructor(
    private readonly cancellationPolicyService: CancellationPolicyService,
  ) {}
  /**
   * ANCHOR createOrUpdatePolicy
   * @param policy policy file
   * @author Jayddep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose uploading policy pdf file
   * @param name name of policy
   * @returns success message
   */
  @Mutation(() => String)
  async createOrUpdatePolicy(
    @Args('policy', { type: () => GraphQLUpload }) policy: FileUpload,
    @Args('name', { type: () => PolicyTypeEnum }) name: PolicyTypeEnum,
  ) {
    return this.cancellationPolicyService.createOrUpdatePolicy(name, policy);
  }
}
