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

 * @category   Configuration
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class GetTypeormConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: .DATABASE_HOST,
      port: parseInt(.DATABASE_PORT),
      database: .DATABASE_NAME,
      username: .DATABASE_USERNAME,
      password: .DATABASE_PASSWORD,
      entities: [join(__dirname, '../shared/entity/*.entity.{js,ts}')],
      autoLoadEntities: true,
      migrations: [`${__dirname}/../database/migrations/*.{.ts,.js}`],
      synchronize: .NODE_ENV === 'dev' ? true : false,
    };
  }
}

export const TypeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: .DATABASE_HOST,
  port: parseInt(.DATABASE_PORT),
  database: .DATABASE_NAME,
  username: .DATABASE_USERNAME,
  password: .DATABASE_PASSWORD,
  entities: [join(__dirname, '../shared/entity/*.entity.{js,ts}')],
  autoLoadEntities: true,
  migrations: [`${__dirname}/../database/migrations/*.{.ts,.js}`],
  synchronize: .NODE_ENV === 'dev' ? true : false,
};

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: .DATABASE_HOST,
  port: parseInt(.DATABASE_PORT),
  username: .DATABASE_USERNAME,
  password: .DATABASE_PASSWORD,
  database: .DATABASE_NAME,
  entities: [join(__dirname, '../shared/entity/*.entity.{js,ts}')],
  migrations: [join(__dirname, '../database/migrations/*.{ts,js}')],
  logging: true,
  synchronize: false,
  migrationsRun: false,
  // migrationsTableName: 'migrations',
});
