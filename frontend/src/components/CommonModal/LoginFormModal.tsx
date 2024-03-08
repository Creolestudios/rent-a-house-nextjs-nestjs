import React, { useEffect, useState } from 'react';
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

const LoginFormModal = ({
  singIn,
  setIsModalOpen,
  setSignupIsModalOpen,
  isModalOpen,
}: any) => {
  const [forgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);

  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    dispatch(actions.loginUser(values));
    setIsModalOpen(false);
  };

  const handleGoogleLogin = () => {
    dispatch(actions.googleLogin());
  };

  console.log('hello', isModalOpen);

  return (
    <>
      <FormWrapper>
        <Form name='basic' onFinish={onFinish} autoComplete='off' form={singIn}>
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

          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: appConstant.formValidation.passwordRequired,
              },
              {
                pattern: passwordValidationRegex,
                message: appConstant.formValidation.passwordValidation,
              },
            ]}
          >
            <Input.Password placeholder='Enter Password*' />
          </Form.Item>

          <Form.Item>
            <Button className='login' type='primary' htmlType='submit'>
              Sign in <Icon component={ArrowIcon} />
            </Button>

            <div className='or-content'>OR</div>
            <Button
              className='google'
              type='primary'
              onClick={handleGoogleLogin}
            >
              Sign in with Google
              <Image src={googleImg} width={32} height={32} alt={'img'} />
            </Button>
          </Form.Item>

          <Form.Item className='forgot-text'>
            <div
              className='forgot-psw'
              onClick={() => {
                setForgotPasswordModalOpen(true);
                setIsModalOpen(false);
              }}
            >
              Forgot your password?
            </div>
            <div
              className='sign-up'
              onClick={() => {
                setSignupIsModalOpen(true);
                setIsModalOpen(false);
              }}
            >
              Not signed up yet? Sign up for free
            </div>
          </Form.Item>
        </Form>
      </FormWrapper>
      <ForgotPasswordModal
        forgotPasswordModalOpen={forgotPasswordModalOpen}
        setForgotPasswordModalOpen={setForgotPasswordModalOpen}
      />
    </>
  );
};

export default LoginFormModal;
