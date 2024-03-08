import { Test, TestingModule } from '@nestjs/testing';
import { ContactUsResolver } from './contact-us.resolver';
import { ContactUsService } from './contact-us.service';

describe('ContactUsResolver', () => {
  let resolver: ContactUsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactUsResolver, ContactUsService],
    }).compile();

    resolver = module.get<ContactUsResolver>(ContactUsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
