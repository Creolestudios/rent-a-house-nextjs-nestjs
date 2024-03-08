import { Test, TestingModule } from '@nestjs/testing';
import { AdmindashboardResolver } from './admindashboard.resolver';
import { AdmindashboardService } from './admindashboard.service';

describe('AdmindashboardResolver', () => {
  let resolver: AdmindashboardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdmindashboardResolver, AdmindashboardService],
    }).compile();

    resolver = module.get<AdmindashboardResolver>(AdmindashboardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
