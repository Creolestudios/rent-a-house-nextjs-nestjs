import React from 'react';
import { FormWrapper, LoginWrapper, RightImgWrapper } from './Login.styles';
import homeImg from '@/assets/images/home.png';
import logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import LoginForm from '../LoginForm/LoginForm';
import Title from '../Title/Title';
import { fontFamily } from '@/styles/variable';
import { color } from '@/styles/variable';

const Login = () => {
  return (
    <LoginWrapper>
      <FormWrapper>
        <Image className='logo' src={logo} alt='logo' width={200} height={42} />
        <Title
          title='Welcome Back !'
          color={color.greyColor}
          marginBottom='40px'
          lineHeight='25px'
          fontFamily={fontFamily.demiBold}
          textTransform='capitalize'
        />
        <Title
          title='LOGIN'
          color={color.blackColor}
          marginBottom='30px'
          lineHeight='20px'
          fontFamily={fontFamily.demiBold}
          textTransform='uppercase'
          underline={true}
        />
        <LoginForm />
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
    </LoginWrapper>
  );
};

export default Login;
