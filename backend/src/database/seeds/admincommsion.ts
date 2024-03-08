/**
 * Copyright 2023 Rent Smartly
 * @category   Database
 * @package    Seeder
 * @author     Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @since      File available since Release 1.0.0
 */
import { Seeder } from 'typeorm-seeding';
import { StatusEnum } from '../../common/enum';
import { CommissionFeesEntity } from '../../shared/entity/commissionFees.entity';
export default class SiteConfigSeeder implements Seeder {
  public async run(): Promise<any> {
    await CommissionFeesEntity.clear();
    await CommissionFeesEntity.save({
      type: 0,
      value: 25,
      currency: 'USD',
      status: StatusEnum.ACTIVE,
    });
  }
}
