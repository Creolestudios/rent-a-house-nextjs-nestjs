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

 * @package    Property 
 * @author     Jaydeep Gorasiya <jaydeep.gorasiya@creolestudios.com>
 * @copyright  2023 Rent Smartly
 * @license    http://www.apache.org/licenses/LICENSE-2.0
 * @since      File available since Release 1.0.0
 * @deprecated N/A 
 */

import { InputType, Int, Field, PartialType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { DocumentEnum, GenderEnum, PetsEnum, TenantEnum } from '../common/enum';

@InputType()
export class CreatePropertyStep6Input {
  @Field(() => Int)
  @IsEnum(DocumentEnum)
  document: DocumentEnum;

  @Field(() => Int)
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @Field(() => Int)
  @IsEnum(TenantEnum)
  tenant: TenantEnum;

  @Field(() => Int)
  @IsEnum(PetsEnum)
  pets: PetsEnum;

  @Field(() => Int)
  @IsNotEmpty()
  property_id: number;
}

@InputType()
export class UpdatePropertyStep6Input extends PartialType(
  CreatePropertyStep6Input,
) {
  @Field(() => Int)
  id: number;
}
