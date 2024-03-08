import { Field, Int, ObjectType } from '@nestjs/graphql';
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
import { SpokenLanguagesEntity } from './spoken_languages.entity';

@ObjectType()
@Entity('cms')
export class CmsEntity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  identifier: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  page_name: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  meta_title: string;

  @Field()
  @Column({ type: 'varchar', length: 255 })
  meta_description: string;

  @Field(() => Int)
  @JoinColumn({ name: 'language_id' })
  @ManyToOne(() => SpokenLanguagesEntity, (language_id) => language_id.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Column({ type: 'int' })
  language_id: number;

  @Field(() => String)
  @Column({ type: 'text' })
  content: string;

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
