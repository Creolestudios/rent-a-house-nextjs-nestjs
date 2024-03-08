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

import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { AddressService } from './address.service';
import { CountryList } from '../../shared/entity/country.entity';
import { StateList } from '../../shared/entity/state.entity';
import { CityList } from '../../shared/entity/city.entity';

@Resolver()
export class AddressResolver {
  constructor(private readonly addressService: AddressService) {}

  /**
   * ANCHOR   countryList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose getting country list
   * @returns country id and name
   */
  @Query(() => [CountryList], { nullable: true })
  countryList() {
    return this.addressService.countryList();
  }

  /**
   * ANCHOR   stateList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose getting state list
   * @param   country_id country id
   * @returns state id and name
   */
  @Query(() => [StateList], { nullable: true })
  stateList(@Args('country_id', { type: () => Int }) country_id: number) {
    return this.addressService.stateList(country_id);
  }

  /**
   * ANCHOR   cityList
   * @author  Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
   * @purpose getting city list
   * @param   state_id state id
   * @returns city id and name
   */
  @Query(() => [CityList], { nullable: true })
  cityList(@Args('state_id', { type: () => Int }) state_id: number) {
    return this.addressService.cityList(state_id);
  }
}
