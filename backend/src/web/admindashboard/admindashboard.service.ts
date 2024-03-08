import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { ERROR_MESSAGE } from '../../common/constants';
import { IsEmailVerified } from '../../common/enum';
import { PropertyEntity } from '../../shared/entity/property.entity';
import { UserEntity } from '../../shared/entity/user.entity';
import {
  getAvalibleYears,
  getLastThirtyDaysData,
  getUsersByMonth,
  totalUserYear,
} from '../../common/helper';
import { AdminDashboardData, AdminDashboardDataType } from '../../common/types';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class AdmindashboardService {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  /**
   * ANCHOR adminDashboardData
   * .
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param
   * @returns Object.
   * @version 1.0.0
   */
  async adminDashboardData(Year: number) {
    try {
      const dashboardResponse = new AdminDashboardData();
      const users = await UserEntity.count({
        where: {
          is_email_verified: IsEmailVerified.VERIFIED,
        },
      });

      const totalProperty = await PropertyEntity.count();

      const data = new Array<AdminDashboardDataType>();
      data.push({
        name: 'Total Property Listed',
        value: totalProperty,
      });
      data.push({ name: 'Total Users ', value: users });

      data.push({
        name: 'Last 30 days User Registration',
        value: await getLastThirtyDaysData(UserEntity),
      });
      data.push({
        name: 'Last 30 days listings',
        value: await getLastThirtyDaysData(PropertyEntity),
      });
      data.push({
        name: 'Total Revenue Generated',
        value: 0, //TODO Will be dynamic
      });
      data.push({
        name: 'Last 30 days earning',
        value: 0, //TODO Will be dynamic
      });
      dashboardResponse.otherData = data;
      dashboardResponse.monthWiseUser = await getUsersByMonth(Year);
      dashboardResponse.totalUserYear = await totalUserYear(Year);
      dashboardResponse.avalibleYears = await getAvalibleYears(
        this.entityManager,
      );
      return dashboardResponse;
    } catch (error) {
      throw new GraphQLError(
        error.message || ERROR_MESSAGE.SomethingWentWrong,
        {
          extensions: {
            code: error?.extensions?.code || 'INTERNAL_SERVER_ERROR',
          },
        },
      );
    }
  }
}
