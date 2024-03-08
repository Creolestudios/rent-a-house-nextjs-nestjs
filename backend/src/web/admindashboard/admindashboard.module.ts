import { Module } from '@nestjs/common';
import { AdmindashboardService } from './admindashboard.service';
import { AdmindashboardResolver } from './admindashboard.resolver';

@Module({
  providers: [AdmindashboardResolver, AdmindashboardService],
})
export class AdmindashboardModule {}
