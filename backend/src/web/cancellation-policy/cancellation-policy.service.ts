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

import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { FileUpload } from 'graphql-upload';
import * as path from 'path';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../../common/constants';
import {
  createStream,
  makeId,
  writeFileIntoDirectory,
} from '../../common/helper';
import { CancellationPolicyEntity } from '../../shared/entity/cancellation-policy.entity';

@Injectable()
export class CancellationPolicyService {
  /**
   * ANCHOR createOrUpdatePolicy
   * @author Jayddep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose uploading policy pdf file
   * @param name name of the policy
   * @param policy police file
   * @returns success message
   */
  async createOrUpdatePolicy(name: string, policy: FileUpload) {
    try {
      let uploadPolicyFileName = '';
      let uploadPolicyWithExtension = '';
      if (policy) {
        let result = makeId(5);
        const uploadPolicyFile = await createStream(policy);
        const uploadPolicyDir = './uploads/policy';
        const dirPath = 'uploads/policy/';
        uploadPolicyFileName = result + `${Date.now()}`;

        await writeFileIntoDirectory(
          dirPath,
          policy,
          uploadPolicyDir,
          uploadPolicyFile,
          uploadPolicyFileName,
        );
        uploadPolicyWithExtension =
          `${uploadPolicyFileName}` + `${path.extname(policy.filename)}`;

        const policyDetails = await CancellationPolicyEntity.findOneBy({
          name: name,
        });

        if (!policyDetails) {
          await CancellationPolicyEntity.save({
            name: name,
            file_name: uploadPolicyWithExtension,
          });

          return SUCCESS_MESSAGE.PolicyCreated;
        } else {
          policyDetails.file_name = uploadPolicyWithExtension;
          await CancellationPolicyEntity.save(policyDetails);

          return SUCCESS_MESSAGE.PolicyUpdated;
        }
      }
    } catch (error) {
      throw new GraphQLError(
        error.message || ERROR_MESSAGE.SomethingWentWrong,
        {
          extensions: {
            code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
          },
        },
      );
    }
  }
}
