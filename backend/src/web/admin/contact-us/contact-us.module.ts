import { Module } from '@nestjs/common';
import { ContactUsService } from './contact-us.service';
import { ContactUsResolver } from './contact-us.resolver';
import { MailModule } from '../../../shared/module/mail/mail.module';

@Module({
  imports: [MailModule],
  providers: [ContactUsResolver, ContactUsService],
})
export class ContactUsModule {}
