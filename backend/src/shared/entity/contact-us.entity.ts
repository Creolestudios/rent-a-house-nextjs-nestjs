import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// step 2 data entity
@ObjectType()
@Entity('contact_us')
export class ContactUsEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 15 })
  mobile: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 100 })
  message: string;

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
