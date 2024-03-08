import { Module } from '@nestjs/common';
import { CommissionService } from './commission.service';
import { CommissionResolver } from './commission.resolver';

@Module({
  providers: [CommissionResolver, CommissionService],
})
export class CommissionModule {}
