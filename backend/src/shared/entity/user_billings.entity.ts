import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import {
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

import { BookingEntity } from './bookings.entity';
@ObjectType()
@Entity('user_billings')
export class UserBillingEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @JoinColumn({ name: 'booking_id' })
  @ManyToOne(() => BookingEntity, (bookings) => bookings.id)
  @Column({ type: 'int', nullable: true })
  booking_id: number;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 50, nullable: true })
  city_of_residence: string;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;

  //   @Field(() => UserEntity)
  //   get tenant() {
  //     return this.tenant_id;
  //   }

  //   @Field(() => PropertyEntity)
  //   get property() {
  //     return this.property_id;
  //   }
}

// @ObjectType()
// export class BookingResponse {
//   @Field(() => [BookingEntity])
//   data: [BookingEntity];

//   @Field()
//   message: string;
// }

// @ObjectType()
// export class TenantResponse {
//   @Field(() => BookingEntity)
//   data: BookingEntity;

//   @Field()
//   message: string;
// }

// // ANCHOR PropertyPaginationResponse
// @ObjectType()
// export class BookingPaginationResponse {
//   @Field(() => [BookingEntity])
//   booking: BookingEntity[];

//   @Field(() => Int)
//   total_booking: number;
// }
