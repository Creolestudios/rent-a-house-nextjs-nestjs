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

 * @package    Address 
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Injectable } from '@nestjs/common';
import { CountryEntity } from '../../shared/entity/country.entity';
import { StatusEnum } from '../../common/enum';
import { StateEntity } from '../../shared/entity/state.entity';
import { CityEntity } from '../../shared/entity/city.entity';
import { GraphQLError } from 'graphql';
import { ERROR_MESSAGE } from '../../common/constants';

@Injectable()
export class AddressService {
  /**
   * ANCHOR   countryList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose getting country list
   * @returns country id and name
   */
  async countryList() {
    try {
      return await CountryEntity.find({
        select: ['id', 'name'],
        where: {
          status: StatusEnum.ACTIVE,
        },
      });
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   stateList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose getting state list
   * @param   country_id country id
   * @returns state id and name
   */
  async stateList(country_id: number) {
    try {
      return await StateEntity.find({
        select: ['id', 'name'],
        where: {
          country_id: country_id,
        },
      });
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }

  /**
   * ANCHOR   cityList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose getting city list
   * @param   state_id state id
   * @returns city id and name
   */
  async cityList(state_id: number) {
    try {
      return await CityEntity.find({
        select: ['id', 'name'],
        where: {
          state_id: state_id,
        },
      });
    } catch (error) {
      throw new GraphQLError(error.message || ERROR_MESSAGE.NotFoundException, {
        extensions: {
          code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
        },
      });
    }
  }
}
