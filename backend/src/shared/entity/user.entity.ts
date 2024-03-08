import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  AfterLoad,
  Any,
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  GenderEnum,
  IsEmailVerified,
  IsLandlord,
  IsMobileVerified,
  NotificationIsEnable,
  SocialType,
} from '../../common/enum';
import { CountryEntity } from './country.entity';
import { SpokenLanguagesEntity } from './spoken_languages.entity';
import { SECRET } from '../../utils/secret';
import { StateEntity } from './state.entity';
import { CityEntity } from './city.entity';
import { BookingEntity } from './bookings.entity';
@ObjectType()
@Entity('user_details')
export class UserEntity extends BaseEntity {
  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  image: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 20 })
  first_name: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 20 })
  last_name: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  address: string;

  @Field({ nullable: true })
  @JoinColumn({ name: 'country_id' })
  @ManyToOne(() => CountryEntity, (country) => country.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Column({ type: 'int', nullable: true })
  country_id: number;

  @Field({ nullable: true })
  @JoinColumn({ name: 'state_id' })
  @ManyToOne(() => StateEntity, (state) => state.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Column({ type: 'int', nullable: true })
  state_id: number;

  @Field({ nullable: true })
  @JoinColumn({ name: 'city_id' })
  @ManyToOne(() => CityEntity, (city) => city.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Column({ type: 'int', nullable: true })
  city_id: number;

  @Field(() => Int, { nullable: true })
  @Column({
    type: 'enum',
    enum: GenderEnum,
    comment: '0-> Male 1-> Female 2-> Other',
    nullable: true,
  })
  gender: GenderEnum;

  @Field({ nullable: true })
  @Column({ type: 'date', nullable: true })
  dob: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  occupation: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  identity_proof: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  proof_of_occupation_income: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 50, unique: true, nullable: true })
  email: string;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  dialer_code: number;

  @Field({ nullable: true })
  @Column({ type: 'bigint', nullable: true, unique: true })
  mobile: number;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Field(() => Int, { nullable: true })
  @Column({
    type: 'enum',
    default: IsMobileVerified.NOTVERIFIED,
    enum: IsMobileVerified,
    comment: '0 -> Not Verified 1-> Verified',
  })
  is_mobile_verified: IsMobileVerified;

  @OneToMany(() => BookingEntity, (booking) => booking.tenant_id)
  bookings: BookingEntity[];

  @Field(() => Int, { nullable: true })
  @Column({
    type: 'enum',
    default: IsEmailVerified.NOTVERIFIED,
    enum: IsEmailVerified,
    comment: '0 -> Not Verified 1-> Verified ',
  })
  is_email_verified: IsEmailVerified;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  verification_token: string;

  @Field({ nullable: true })
  @Column({ type: 'timestamptz', nullable: true })
  verification_token_exp: Date;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  reset_password_token: string;

  @Field({ nullable: true })
  @Column({ type: 'timestamptz', nullable: true })
  reset_password_token_exp: Date;

  @Field(() => Int, { nullable: true })
  @Column({
    type: 'enum',
    default: SocialType.MANUALLY,
    comment: '0 -> Manually 1-> Google',
    enum: SocialType,
  })
  social_type: SocialType;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  social_token: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  token: string;

  @Field(() => Int, { nullable: true })
  @Column({
    type: 'enum',
    default: NotificationIsEnable.NO,
    comment: '0 ->  No 1 -> Yes',
    enum: NotificationIsEnable,
  })
  notification_is_enable: NotificationIsEnable;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 20, nullable: true })
  pincode: string;

  @Field(() => Int, { nullable: true })
  @JoinColumn({ name: 'notification_language' })
  @ManyToOne(
    () => SpokenLanguagesEntity,
    (spoken_language) => spoken_language.id,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @Column({ type: 'int', nullable: true })
  notification_language: number;

  @Field({ nullable: true })
  @Column({ type: 'timestamptz', nullable: true })
  login_at: Date;

  @Field(() => Int, { nullable: true })
  @Column({
    type: 'enum',
    default: IsLandlord.NO,
    comment: '0 ->  No 1 -> Yes',
    enum: IsLandlord,
  })
  is_landlord: IsLandlord;

  @Field(() => Date, { nullable: true })
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Field(() => Date, { nullable: true })
  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at: Date;

  @Field({ nullable: true })
  user_type: number;

  @Field(() => Int, { nullable: true })
  TotalProperties: number;

  @Field(() => [ListedProperty], { nullable: true })
  listedProperties: ListedProperty[];

  @AfterLoad()
  joinPath(): void {
    this.image =
      this.image !== null
        ? `${.IMAGE_PATH}users/profile/${this.image}`
        : `${.IMAGE_PATH}${SECRET.DEFAULT_IMAGE}`;
    this.identity_proof =
      this.identity_proof !== null
        ? `${.IMAGE_PATH}users/identity_proof/${this.identity_proof}`
        : this.identity_proof;
    this.proof_of_occupation_income =
      this.proof_of_occupation_income !== null
        ? `${.IMAGE_PATH}users/proof_of_occupation_income/${this.proof_of_occupation_income}`
        : this.proof_of_occupation_income;
  }
}
@ObjectType()
class ListedProperty {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  id: number;
}

@ObjectType()
export class UserDocumentsVerifyResponse {
  @Field(() => Boolean)
  user_details: boolean;

  @Field(() => UserEntity, { nullable: true })
  null_fields: UserEntity;
}
