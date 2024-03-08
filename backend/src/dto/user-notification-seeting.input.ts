import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { NotificationIsEnable } from '../common/enum';

@InputType()
export class UserNotificationSettings {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field({ nullable: true })
  notification_is_enable: NotificationIsEnable;

  @Field(() => Int)
  notification_language: number;
}
