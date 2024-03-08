import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { ERROR_MESSAGE } from '../common/constants';
import { Match } from '../common/helper';


  @InputType()
  export class ChangePasswordArgs {
    @Field()
    @IsNotEmpty()
    id: number;

    @Field()
    @IsNotEmpty()
    @IsString()
    token: string;
  
    @Field()
    @IsNotEmpty()
    @IsString()
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[1-9])(?=.*[a-z])(?=.*[!@#$%^&*()_-]).*$/,
        { message: ERROR_MESSAGE.WeakPassword },
      )
    password: string;
  
    @Field()
    @Match('password', { message: ERROR_MESSAGE.PasswordNotMatch })
    confirmPassword: string;
  }