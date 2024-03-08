import { Module } from '@nestjs/common';
import { CancellationPolicyService } from './cancellation-policy.service';
import { CancellationPolicyResolver } from './cancellation-policy.resolver';

@Module({
  providers: [CancellationPolicyResolver, CancellationPolicyService],
})
export class CancellationPolicyModule {}
