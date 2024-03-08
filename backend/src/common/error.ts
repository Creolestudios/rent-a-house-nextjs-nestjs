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

 * @category   Helper
 * @package    Error
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { GraphQLError } from 'graphql';
import { ERROR_MESSAGE } from './constants';

/**
 * ANCHOR GqlInternalServerErrorException
 * @param message error message
 */
export function GqlInternalServerErrorException(message?: string) {
  throw new GraphQLError(message || ERROR_MESSAGE.InternalServerError, {
    extensions: { code: 'INTERNAL_SERVER_ERROR' },
  });
}

/**
 * ANCHOR GqlBadRequestException
 * @param message error message
 */
export function GqlBadRequestException(message?: string) {
  throw new GraphQLError(message || ERROR_MESSAGE.BadRequest, {
    extensions: { code: 'BAD_REQUEST' },
  });
}

/**
 * ANCHOR GqlNotFoundException
 * @param message error message
 */
export function GqlNotFoundException(message?: string) {
  throw new GraphQLError(message || ERROR_MESSAGE.NotFoundException, {
    extensions: { code: 'NOT_FOUND_EXCEPTION' },
  });
}

/**
 * ANCHOR GqlBadUserInput
 * @param message error message
 */
export function GqlBadUserInput(message?: string) {
  throw new GraphQLError(message || ERROR_MESSAGE.BadUserInput, {
    extensions: { code: 'BAD_USER_INPUT' },
  });
}

/**
 * ANCHOR GqlForbiddenException
 * @param message error message
 */
export function GqlForbiddenException(message?: string) {
  throw new GraphQLError(message || ERROR_MESSAGE.NotLogin, {
    extensions: { code: 'FORBIDDEN' },
  });
}
