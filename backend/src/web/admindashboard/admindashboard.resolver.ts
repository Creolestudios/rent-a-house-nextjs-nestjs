import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { AdminDashboardData } from '../../common/types';
import { AdmindashboardService } from './admindashboard.service';
import { UseGuards } from '@nestjs/common';
import { RoleGuard } from '../auth/role.guard';
import { AuthenticationRole } from '../../common/enum';

@UseGuards(new RoleGuard([AuthenticationRole.SUPER_ADMIN]))
@Resolver()
export class AdmindashboardResolver {
  constructor(private readonly admindashboardService: AdmindashboardService) {}
  /**
   * ANCHOR adminDashboardData
   * .
   * @author Vinay kaithwas <vinay.kaithwas@creolestudios.com>
   * @param
   * @returns Object.
   * @version 1.0.0
   */
  @Query(() => AdminDashboardData, { name: 'adminDashboard' })
  async adminDashboardData(
    @Args({ name: 'Year', type: () => Int }) Year: number,
  ) {
    return this.admindashboardService.adminDashboardData(Year);
  }
}
