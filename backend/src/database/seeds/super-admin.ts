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
import { RoleEnum } from '../../common/enum';
import { AdminEntity } from '../../shared/entity/admin.entity';

export default class CreateSuperAdmin implements Seeder {
  public async run(): Promise<any> {
    await AdminEntity.createQueryBuilder()
      .insert()
      .values([
        {
          user_name: 'super_admin',
          email: 'superadmin@yopmail.com',
          password:
            '$2a$15$gTjMizWEZKCpyjbskRJYweVZgSH0bWIE9qlVY4GNrCb6nxLDabvlC',
          role: RoleEnum.SUPER_ADMIN,
          status: 1,
        },
      ])
      .execute();
  }
}
