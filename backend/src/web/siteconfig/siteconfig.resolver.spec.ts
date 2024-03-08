import { Test, TestingModule } from '@nestjs/testing';
import { SiteconfigResolver } from './siteconfig.resolver';
import { SiteconfigService } from './siteconfig.service';

describe('SiteconfigResolver', () => {
  let resolver: SiteconfigResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteconfigResolver, SiteconfigService],
    }).compile();

    resolver = module.get<SiteconfigResolver>(SiteconfigResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
