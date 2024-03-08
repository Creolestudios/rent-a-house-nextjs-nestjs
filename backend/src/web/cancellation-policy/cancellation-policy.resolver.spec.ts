import { Test, TestingModule } from '@nestjs/testing';
import { CancellationPolicyResolver } from './cancellation-policy.resolver';
import { CancellationPolicyService } from './cancellation-policy.service';

describe('CancellationPolicyResolver', () => {
  let resolver: CancellationPolicyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CancellationPolicyResolver, CancellationPolicyService],
    }).compile();

    resolver = module.get<CancellationPolicyResolver>(
      CancellationPolicyResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
