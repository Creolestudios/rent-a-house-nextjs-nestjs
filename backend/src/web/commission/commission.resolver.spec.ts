import { Test, TestingModule } from '@nestjs/testing';
import { CommissionResolver } from './commission.resolver';
import { CommissionService } from './commission.service';

describe('CommissionResolver', () => {
  let resolver: CommissionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommissionResolver, CommissionService],
    }).compile();

    resolver = module.get<CommissionResolver>(CommissionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
