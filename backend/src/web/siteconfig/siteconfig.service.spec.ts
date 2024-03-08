import { Test, TestingModule } from '@nestjs/testing';
import { SiteconfigService } from './siteconfig.service';

describe('SiteconfigService', () => {
  let service: SiteconfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteconfigService],
    }).compile();

    service = module.get<SiteconfigService>(SiteconfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
