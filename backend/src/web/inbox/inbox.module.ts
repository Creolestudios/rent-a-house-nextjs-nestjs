import { Module } from '@nestjs/common';
import { InboxService } from './inbox.service';
import { InboxResolver, MessageResponseResolver } from './inbox.resolver';
import { ChatGateway } from './inbox-gateway';

@Module({
  providers: [
    InboxResolver,
    InboxService,
    ChatGateway,
    MessageResponseResolver,
  ],
})
export class InboxModule {}
