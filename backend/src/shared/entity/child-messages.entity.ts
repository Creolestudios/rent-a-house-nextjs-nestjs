import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  AfterLoad,
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { MessageEntity } from './messages.entity';
import { ReadEnum, StatusEnum } from '../../common/enum';
import { PropertyEntity } from './property.entity';
import { BookingEntity } from './bookings.entity';
@ObjectType()
@Entity('child_messages')
export class ChildMessageEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @JoinColumn({ name: 'message_id' })
  @ManyToOne(() => MessageEntity, (message) => message.id)
  @Column({ type: 'int', nullable: true })
  message_id: number;

  @Field()
  @JoinColumn({ name: 'to_id' })
  @ManyToOne(() => UserEntity, (user) => user.id)
  @Column({ type: 'int', nullable: true })
  to_id: number;

  @Field()
  @JoinColumn({ name: 'from_id' })
  @ManyToOne(() => UserEntity, (user) => user.id)
  @Column({ type: 'int', nullable: true })
  from_id: number;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  text: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  file: string;

  @Field(() => Int)
  @Column({
    type: 'enum',
    default: ReadEnum.READ,
    enum: ReadEnum,
    comment: '0-> Unread 1-> read',
  })
  status: StatusEnum;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;

  @Field(() => MessageEntity)
  get message_ids() {
    return this.message_id;
  }

  @Field(() => UserEntity)
  get from_ids() {
    return this.from_id;
  }
  @Field(() => UserEntity)
  get to_ids() {
    return this.to_id;
  }
  @AfterLoad()
  joinPath(): void {
    this.file =
      this.file !== null
        ? `${.IMAGE_PATH}document/message_file/${this.file}`
        : // : `${.IMAGE_PATH}${.DEFAULT_IMAGE}`;
          null;
  }
}

@ObjectType()
export class ChildMessageResponse {
  @Field(() => [ChildMessageEntity])
  data: [ChildMessageEntity];

  @Field(() => BookingEntity)
  booking_data: [BookingEntity];

  @Field(() => UserEntity, { nullable: true })
  tenant_data: [UserEntity];

  @Field(() => UserEntity, { nullable: true })
  landlord_data: [UserEntity];

  @Field(() => PropertyEntity, { nullable: true })
  property_data: [PropertyEntity];

  @Field()
  message: string;
}
