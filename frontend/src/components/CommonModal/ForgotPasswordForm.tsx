import React, { useState } from 'react';
import { FormWrapper } from './CommonMoal.styles';
import { Button, Form, Input } from 'antd';
import Icon from '@ant-design/icons';
import ArrowIcon from '@/assets/images/icons/LongRightArrowSvg';
import Image from 'next/image';
import googleImg from '@/assets/images/google-img.png';
import SignupModal from './SignupModal';
import { useDispatch } from 'react-redux';
import actions from '@/redux/auth/auth.action';
import ForgotPasswordModal from './ForgotPasswordModal';
import { appConstant, passwordValidationRegex } from '@/config/constants';

const ForgotPasswordForm = ({
  forgotPasswordModalOpen,
  setForgotPasswordModalOpen,
}: any) => {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    dispatch(actions.forgotPassword(values));
    setForgotPasswordModalOpen(false);
  };

  //   const handleGoogleLogin = () => {
  //     dispatch(actions.googleLogin());
  //   };

  return (
    <>
      <FormWrapper>
        <Form name='basic' onFinish={onFinish} autoComplete='off'>
          <Form.Item
            name='email'
            rules={[
              {
                required: true,
                message: appConstant.formValidation.emailRequired,
              },
              {
                type: 'email',
                message: appConstant.formValidation.emailValidate,
              },
            ]}
          >
            <Input placeholder='Email ID*' />
          </Form.Item>

          <Form.Item>
            <Button
              className='login'
              type='primary'
              htmlType='submit'
              onClick={() => setForgotPasswordModalOpen(false)}
            >
              Confirm
            </Button>

            {/* <div className='or-content'>OR</div>
            <Button
              className='google'
              type='primary'
              onClick={handleGoogleLogin}
            >
              Sign in with Google
              <Image src={googleImg} width={32} height={32} alt={'img'} />
            </Button> */}
          </Form.Item>

          {/* <Form.Item className='forgot-text'>
            <div className='forgot-psw'>Forgot your password?</div>
            <div
              className='sign-up'
              onClick={() => {
                // setForgotPasswordModalOpen(true);
                setForgotPasswordModalOpen(false);
              }}
            >
              Not signed up yet? Sign up for free
            </div>
          </Form.Item> */}
        </Form>
      </FormWrapper>
    </>
  );
};

export default ForgotPasswordForm;
