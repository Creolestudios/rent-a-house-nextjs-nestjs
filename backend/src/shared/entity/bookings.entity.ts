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

import { PropertyEntity } from './property.entity';
import { UserEntity } from './user.entity';
import { BookingStatusEnum } from '../../common/enum';
// import { MessageEntity } from './messages.entity';
// import { ChildMessageEntity } from './child-messages.entity';
@ObjectType()
@Entity('bookings')
export class BookingEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @JoinColumn({ name: 'tenant_id' })
  @ManyToOne(() => UserEntity, (user) => user.id)
  @Column({ type: 'int', nullable: true })
  tenant_id: number;

  @Field()
  @JoinColumn({ name: 'property_id' })
  @ManyToOne(() => PropertyEntity, (property) => property.id)
  @Column({ type: 'int', nullable: true })
  property_id: number;

  @Field(() => PropertyEntity, { nullable: true })
  // @ManyToOne(() => PropertyEntity, (property) => property.bookings)
  propertys_id: PropertyEntity;

  @Field()
  @JoinColumn({ name: 'landlord_id' })
  @ManyToOne(() => UserEntity, (user) => user.id)
  @Column({ type: 'int', nullable: true })
  landlord_id: number;

  @Field(() => Int)
  @Column({
    type: 'enum',
    enum: BookingStatusEnum,
    default: BookingStatusEnum.INQUIRY,
    comment:
      '0-> inquiry  1-> request 2-> accept 3-> confirm 4-> reject, 5-> check-in confirm 6-> check-in reject ',
  })
  status: BookingStatusEnum;

  @Field({ nullable: true })
  @Column({ type: 'date', nullable: true })
  start_date: Date;

  @Field({ nullable: true })
  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Field(() => Float)
  @Column({ type: 'float' })
  amount: number;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 50, nullable: true })
  is_special_amount: number;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  reason_for_rejection: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  currency: string;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;

  @Field({ nullable: true })
  month_difference: number;

  @Field({ nullable: true })
  service_cost: string;

  @Field(() => UserEntity, { nullable: true })
  get tenant() {
    return this.tenant_id;
  }

  @Field(() => PropertyEntity, { nullable: true })
  get property() {
    return this.property_id;
  }

  @Field(() => UserEntity, { nullable: true })
  get landlord() {
    return this.landlord_id;
  }
}

@ObjectType()
export class BookingResponse {
  @Field(() => [BookingEntity])
  data: [BookingEntity];

  @Field()
  message: string;
}

@ObjectType()
export class TenantResponse {
  @Field(() => BookingEntity)
  data: BookingEntity;

  @Field()
  message: string;
}

// ANCHOR PropertyPaginationResponse
@ObjectType()
export class BookingPaginationResponse {
  @Field(() => [BookingEntity])
  booking: BookingEntity[];

  @Field(() => Int)
  total_booking: number;
}
