/**
 *  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

 * @category   Authentication
 * @package    Admin
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { GqlForbiddenException } from '../../common/error';
import { ERROR_MESSAGE } from '../../common/constants';

@Injectable()
export class RoleGuard extends AuthGuard('jwt') {
  private role: number[];
  constructor(role: number[]) {
    super();
    this.role = role;
  }

  handleRequest(error, user, info) {
    if (!user) {
      return GqlForbiddenException();
    }
    if (!this.role.includes(user.role)) {
      throw GqlForbiddenException(ERROR_MESSAGE.UnAuthorizedAccess);
    }
    return user;
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
