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

 * @category   Database
 * @package    Seeder
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Seeder } from 'typeorm-seeding';
import { AmenityEnum, StatusEnum } from '../../common/enum';
import { AmenityEntity } from '../../shared/entity/amenity.entity';

export default class Amenity implements Seeder {
  public async run(): Promise<any> {
    await AmenityEntity.createQueryBuilder()
      .insert()
      .values([
        {
          name: 'Basement Parking',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.FACILITY,
        },
        {
          name: 'Shared Garden',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.FACILITY,
        },
        {
          name: 'Private Room',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.FACILITY,
        },
        {
          name: 'Balcony',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.FACILITY,
        },
        {
          name: 'Kitchen',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.FACILITY,
        },
        {
          name: 'TV',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.AMENITY,
        },
        {
          name: 'WiFi',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.AMENITY,
        },
        {
          name: 'Closet',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.AMENITY,
        },
        {
          name: 'Dishwasher',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.AMENITY,
        },
        {
          name: 'Gas Heating',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.AMENITY,
        },
        {
          name: 'Living Room Furniture',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.AMENITY,
        },
        {
          name: 'Private Kitchenware',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.AMENITY,
        },
        {
          name: 'Washing Machine',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.AMENITY,
        },
        {
          name: 'Stone Flooring',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.AMENITY,
        },
        {
          name: 'Desk',
          status: StatusEnum.ACTIVE,
          type: AmenityEnum.AMENITY,
        },
      ])
      .execute();
  }
}
