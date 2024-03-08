import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { PropertyEntity } from './property.entity';
import { Field, Int } from '@nestjs/graphql';

@Entity('transaction')
export class TransactionEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'PK Auto Increment' })
  id: number;

  @Field()
  @Column({ comment: 'FK(tenant_id)', default: null })
  @ManyToOne(
    () => UserEntity,
    (OrganizationMasterEntity) => OrganizationMasterEntity.id,
  )
  @JoinColumn({ name: 'tenant_id' })
  tenant_id: number;

  @Field()
  @Column({ comment: 'FK(landlord_id)', default: null })
  @ManyToOne(
    () => UserEntity,
    (userSubscriptionEntity) => userSubscriptionEntity.id,
  )
  @JoinColumn({ name: 'landlord_id' })
  landlord_id: number;

  @Field()
  @Column({ comment: 'FK(property_id)', default: null })
  @ManyToOne(() => PropertyEntity, (propertyEntity) => propertyEntity.id)
  @JoinColumn({ name: 'property_id' })
  property_id: number;

  @Field()
  @Column('decimal', {
    precision: 10,
    scale: 2,
    comment: 'This will store the amount of plan',
    default: 0.0,
    nullable: true,
  })
  amount: number;

  @Field()
  @Column({ type: 'date', nullable: true })
  transaction_date: Date;

  @Field(() => Int)
  @Column({
    type: 'smallint',
    width: 4,
    comment: '0-> initialize 1-> success 2-> error',
  })
  status: number;

  @Field()
  @Column({ nullable: false, comment: 'stripe charge id' })
  charge_id: string;

  @Field({ nullable: true })
  @Column({ default: null, comment: 'stripe charge url' })
  receipt_url: string;

  @Column({ nullable: true })
  error: string;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;
}
