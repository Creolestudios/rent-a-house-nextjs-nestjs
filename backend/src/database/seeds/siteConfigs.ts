/**
 * Copyright 2023 Rent Smartly
 * @category   Database
 * @package    Seeder
 * @author     Vinay kaithwas <vinay.kaithwas@creolestudios.com>
 * @since      File available since Release 1.0.0
 */
import { Seeder } from 'typeorm-seeding';
import { SiteConfigEntity } from '../../shared/entity/siteSettings.entity';
export default class SiteConfigSeeder implements Seeder {
  public async run(): Promise<any> {
    await SiteConfigEntity.createQueryBuilder()
      .insert()
      .values([
        {
          name: 'RentSmartly',
          logo: '',
          address: 'Ratnaakar Nine Square Opp',
          email: 'contactsupport@rentsmartly.com',
          status: 1,
          contact: 123456,
        },
      ])
      .execute();
  }
}
