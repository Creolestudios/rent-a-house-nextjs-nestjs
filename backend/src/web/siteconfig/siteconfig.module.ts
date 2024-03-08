import { Module } from '@nestjs/common';
import { SiteconfigService } from './siteconfig.service';
import { SiteconfigResolver } from './siteconfig.resolver';

@Module({
  providers: [SiteconfigResolver, SiteconfigService],
  exports: [SiteconfigResolver],
})
export class SiteconfigModule {}
