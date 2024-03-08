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
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { createCipheriv, createDecipheriv } from 'crypto';
import * as dotenv from 'dotenv';
import * as Bcrypt from 'bcrypt';
import * as path from 'path';
import * as fs from 'fs';
import * as moment from 'moment';

import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraintInterface,
  ValidatorConstraint,
} from 'class-validator';
import { ERROR_MESSAGE } from './constants';
import { AdminUserRoleEnum, IsEmailVerified } from './enum';
import {
  GqlBadRequestException,
  GqlInternalServerErrorException,
} from './error';
import { UserEntity } from '../shared/entity/user.entity';
import { Between, EntityManager } from 'typeorm';
import { subDays } from 'date-fns';
import { GraphQLError } from 'graphql';
import { PropertyEntity } from '../shared/entity/property.entity';
import { startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';
import {
  createParamDecorator,
  ExecutionContext,
  ValidationPipe,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

dotenv.config();

/**
 * ANCHOR TokenGenerator
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose  URL Token generator
 * @returns token
 */
//
export function TokenGenerator(): string {
  try {
    const token = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 17).toString(17))
      .join('');
    return token;
  } catch (error) {
    throw GqlBadRequestException(ERROR_MESSAGE.TokenError);
  }
}

/**
 * ANCHOR encryptId
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose encryption data
 * @param text encryption text
 * @returns encrypted text
 */
export function encryptId(text: string) {
  try {
    const cipher = createCipheriv(
      'aes-256-cbc',
      .ENCRYPT_KEY,
      Buffer.from(.ENCRYPT_KEY, 'hex'),
    );
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
  } catch (error) {
    throw GqlInternalServerErrorException();
  }
}

/**
 * ANCHOR decryptId
 * @purpose decryption text or id
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @param text decryption text
 * @returns decrypted text
 */
export function decryptId(text: string) {
  try {
    const decipher = createDecipheriv(
      'aes-256-cbc',
      Buffer.from(.ENCRYPT_KEY),
      Buffer.from(.ENCRYPT_KEY, 'hex'),
    );
    let decrypted = decipher.update(Buffer.from(text, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  } catch (error) {
    throw GqlBadRequestException(ERROR_MESSAGE.InvalidId);
  }
}

/**
 * ANCHOR Match
 * @purpose custom validator for checking two field value are same or not
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @param property matching property
 * @param validationOptions validation option
 */
export function Match(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'match',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return value === relatedValue;
        },
      },
    });
  };
}

/**
 * ANCHOR encryptPassword
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose password encryptor
 * @param pwd Password
 * @returns hash
 */
export async function encryptPassword(pwd: string) {
  try {
    return await Bcrypt.hash(pwd, parseInt(.SALT));
  } catch (error) {
    throw GqlInternalServerErrorException(ERROR_MESSAGE.PasswordEncryption);
  }
}

// SECTION
// ##########################################################
// ############# Custom Validator section start #############
// ##########################################################

/**
 * ANCHOR IsValidViewerOrAdmin
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose checking user roles
 * @returns boolean
 */
// Register Custom validator class
@ValidatorConstraint({ name: 'isValidViewerOrAdmin', async: false })
export class IsValidViewerOrAdminConstraint
  implements ValidatorConstraintInterface
{
  // Define a set of valid roles
  private validRoles = new Set([
    AdminUserRoleEnum.VIEWER,
    AdminUserRoleEnum.ADMIN,
  ]);

  // Validate the provided value
  validate(value: any) {
    return this.validRoles.has(value);
  }

  // Optional: Define a custom error message
  defaultMessage() {
    return 'Role must be either viewer or admin';
  }
}

/**
 * ANCHOR IsUnique
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @purpose checking entered value is unique or not in db
 * @param entity database table
 * @param field unique field
 * @param validationOptions Validation Options
 */
export function IsUnique(
  entity: any,
  field: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isUnique',
      async: true,
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        async validate(value: any) {
          const record = await entity.findOne({ where: { [field]: value } });
          return !record;
        },
        defaultMessage() {
          return `${field} already exists`;
        },
      },
    });
  };
}
// export function IsInt(validationOptions?: ValidationOptions) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       name: 'IsInt',
//       async: true,
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       validator: {
//         async validate(value: any) {
//           console.log('email', value);

//           return isInt(value);
//         },
//         defaultMessage() {
//           return `${propertyName} Must be a Integer value`;
//         },
//       },
//     });
//   };
// }
/**
 * ANCHOR IsFutureDateConstraint
 * @author Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 */
@ValidatorConstraint({ name: 'IsFutureDate' })
export class IsFutureDateConstraint implements ValidatorConstraintInterface {
  validate(date: Date) {
    const currentDate = moment().format('YYYY-MM-DD');
    return moment(currentDate).isSameOrBefore(date);
  }

  defaultMessage(args: ValidationArguments) {
    return `Date ${args.property} can not before now.`;
  }
}
/**
 * ANCHOR IsFutureDate
 * @param validationOptions default class validator validation options
 * @purpose checking entered date is future date or not
 * @returns true or false
 */
export function IsFutureDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsFutureDateConstraint,
    });
  };
}
// !SECTION
// ##########################################################
// ############## Custom Validator section end ##############
// ##########################################################

// SECTION
// ##########################################################
// ############## File upload section start ##############
// ##########################################################

/**
 * ANCHOR createStream
 * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @purpose Creaing file stream.
 * @param file object
 * @returns buffer data
 */
export const createStream = (file): any => {
  const { createReadStream } = file;
  const stream = createReadStream();
  const chunks = [];
  const buffer = new Promise<Buffer>((resolve, reject) => {
    let buffer: Buffer;

    stream.on('data', function (chunk) {
      chunks.push(chunk);
    });

    stream.on('end', function () {
      buffer = Buffer.concat(chunks);
      resolve(buffer);
    });

    stream.on('error', reject);
    buffer = Buffer.concat(chunks);
  });

  return buffer;
};
/**
 * ANCHOR writeFileIntoDirectory
 * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @purpose store file into directory
 * @param  dirPath file..
 * @returns NA
 */
export const writeFileIntoDirectory = (
  dirPath: string,
  file: any,
  Dir: string,
  fileBuffer: Buffer,
  FilePath: string,
): any => {
  if (!fs.existsSync(Dir)) {
    fs.mkdirSync(Dir, { recursive: true });
  }
  fs.writeFileSync(
    dirPath + FilePath + path.extname(file.filename),
    fileBuffer,
  );
};
// !SECTION
// ##########################################################
// ############## File upload section End ##############
// ##########################################################

// SECTION
// ##########################################################
// #############  Custome functions for dashboard #############
// ##########################################################
/**
 * ANCHOR getLastThirtyDaysData
 * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @purpose getLast 30 days data for dashboard.
 * @param
 * @returns integer
 */
export async function getLastThirtyDaysData(entity) {
  try {
    const today = new Date();
    const thirtyDaysAgoDate = subDays(today, 30);

    switch (entity) {
      case UserEntity:
        return await UserEntity.count({
          where: {
            created_at: Between(thirtyDaysAgoDate, today),
            is_email_verified: IsEmailVerified.VERIFIED,
          },
        });
        break;
      case PropertyEntity:
        return await PropertyEntity.count({
          where: {
            created_at: Between(thirtyDaysAgoDate, today),
          },
        });
        break;
      default:
        break;
    }
  } catch (error) {
    throw new GraphQLError(error.message || ERROR_MESSAGE.SomethingWentWrong, {
      extensions: {
        code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
      },
    });
  }
}
/**
 * ANCHOR getUsersByMonth
 * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @purpose getLast users by month data for dashboard.
 * @param
 * @returns object
 */

export async function getUsersByMonth(year: number) {
  try {
    const startDate = startOfYear(new Date(year, 0, 1));
    const endDate = endOfYear(new Date(year, 11, 31));
    const usersByMonth = [];

    for (let i = 0; i < 12; i++) {
      const startDateOfMonth = startOfMonth(startDate);
      const endDateOfMonth = endOfMonth(startDate);

      const users = await UserEntity.count({
        where: {
          is_email_verified: IsEmailVerified.VERIFIED,
          created_at: Between(startDateOfMonth, endDateOfMonth),
        },
      });

      const monthName = startDate.toLocaleString('default', {
        month: 'short',
      });

      usersByMonth.push({
        month: monthName,
        monthCount: users,
      });
      startDate.setMonth(startDate.getMonth() + 1);
    }

    return usersByMonth;
  } catch (error) {
    throw new GraphQLError(error.message || ERROR_MESSAGE.SomethingWentWrong, {
      extensions: {
        code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
      },
    });
  }
}
export async function totalUserYear(year: number) {
  try {
    const startOfYearq = new Date(year, 0, 1);
    const endOfYearq = new Date(year, 11, 31);

    const totalUserYear = await UserEntity.count({
      where: {
        is_email_verified: IsEmailVerified.VERIFIED,
        created_at: Between(startOfYearq, endOfYearq),
      },
    });

    return totalUserYear;
  } catch (error) {
    throw new GraphQLError(error.message || ERROR_MESSAGE.SomethingWentWrong, {
      extensions: {
        code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
      },
    });
  }
}
export async function getAvalibleYears(entityManager: EntityManager) {
  try {
    const queryResult = await entityManager
      .createQueryBuilder(UserEntity, 'user_details')
      .select('DISTINCT EXTRACT(YEAR FROM user_details.created_at)', 'year')
      .getRawMany();
    const avalible_years = queryResult.map((row) => row.year);

    return avalible_years;
  } catch (error) {
    throw new GraphQLError(error.message || ERROR_MESSAGE.SomethingWentWrong, {
      extensions: {
        code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
      },
    });
  }
}

// !SECTION
// ##########################################################
// ############# Custome functions for dashboard #############
// ##########################################################

// ANCHOR getUser

export const getUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);

//convert currency
export const convertToCents = (amount: number) => {
  return Math.round(amount * 100);
};
export const convertFloatNumberToString = (amount: any) => {
  return parseFloat(amount).toFixed(2);
};

import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class TrimPipe extends ValidationPipe implements PipeTransform<any> {
  transform(value: any, metadata: ArgumentMetadata) {
    if (
      metadata.type === 'body' ||
      metadata.type === 'param' ||
      metadata.type === 'query'
    ) {
      return this.trimValues(value);
    }
    return value;
  }

  private trimValues(value: any): any {
    if (value === null) {
      return value; // Return undefined or null as is
    }
    if (typeof value === 'string') {
      return value.trim();
    } else if (Array.isArray(value)) {
      return value.map((item) => this.trimValues(item));
    } else if (typeof value === 'object') {
      const trimmedObject = {};
      const keys = Object.keys(value);
      if (keys.length > 0) {
        for (const key of Object.keys(value)) {
          trimmedObject[key] = this.trimValues(value[key]);
        }
        return trimmedObject;
      }
    }
    return value;
  }
}
export function makeId(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
