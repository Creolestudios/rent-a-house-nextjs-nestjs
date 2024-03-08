import React from 'react';
import { Button, Form, Input } from 'antd';
import { FormWrapper, ResetPasswordWrapper } from './LoginForm.styles';
import Title from '../Title/Title';
import { color, fontFamily } from '@/styles/variable';
import { LoginWrapper, RightImgWrapper } from '../Login/Login.styles';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import homeImg from '@/assets/images/home.png';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPassword = () => {
  return (
    <ResetPasswordWrapper>
      <FormWrapper className='form-wrapper'>
        <Image
          src={logo}
          alt='logo'
          width={200}
          height={42}
        />
        <Title
          title='Reset Password'
          color={color.blackColor}
          marginBottom='30px'
          lineHeight='20px'
          fontFamily={fontFamily.demiBold}
          textTransform='uppercase'
          underline={true}
          className='title'
        />
        <ResetPasswordForm />
      </FormWrapper>
      <RightImgWrapper>
        <Image
          className='right-img'
          src={homeImg}
          alt='Picture of the author'
          width={750}
          height={750}
        />
      </RightImgWrapper>
    </ResetPasswordWrapper>
  );
};

export default ResetPassword;
