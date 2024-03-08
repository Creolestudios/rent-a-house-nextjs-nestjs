import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver, publicUserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../shared/entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/jwt.strategy';
import { AuthService } from '../auth/auth.service';
import { MailModule } from '../../shared/module/mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: .JWT_KEY,
      signOptions: { expiresIn: .JWT_TIMEOUT },
    }),
    MailModule,
  ],
  providers: [
    UserService,
    UserResolver,
    publicUserResolver,
    JwtStrategy,
    AuthService,
  ],
  exports: [UserResolver],
})
export class UserModule {}
