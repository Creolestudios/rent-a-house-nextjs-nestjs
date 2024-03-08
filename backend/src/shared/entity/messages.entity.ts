import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BookingEntity } from './bookings.entity';
import { UserEntity } from './user.entity';
import { MessageStatusEnum } from '../../common/enum';
import { ChildMessageEntity } from './child-messages.entity';
@ObjectType()
@Entity('messages')
export class MessageEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @JoinColumn({ name: 'booking_id' })
  @ManyToOne(() => BookingEntity, (booking) => booking.id)
  @Column({ type: 'int', nullable: true })
  booking_id: number;

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

  @OneToMany(() => ChildMessageEntity, (cm) => cm.message_id)
  child_messages: ChildMessageEntity[];

  @Field(() => Int)
  @Column({
    type: 'enum',
    enum: MessageStatusEnum,
    default: MessageStatusEnum.INQUIRY,
    comment:
      '0-> inquiry 1-> request 2-> accept 3-> confirm 4-> reject 5-> shortlisted 6-> archive 7-> shortlistedandarchive',
    nullable: true,
  })
  status: MessageStatusEnum;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;

  @Field(() => UserEntity)
  get tenant() {
    return this.from_id;
  }

  @Field(() => BookingEntity)
  get booking() {
    return this.booking_id;
  }

  // @Field(() => PropertyEntity)
  // get property() {
  //   return this.property_id;
  // }

  @Field(() => UserEntity)
  get landlord() {
    return this.to_id;
  }
}
