import React from 'react';
import { FormWrapper } from './CommonMoal.styles';
import { Button, Checkbox, Form, Input } from 'antd';
import Icon from '@ant-design/icons';
import ArrowIcon from '@/assets/images/icons/LongRightArrowSvg';
import Image from 'next/image';
import googleImg from '@/assets/images/google-img.png';
import { useDispatch } from 'react-redux';
import actions from '@/redux/auth/auth.action';
import { appConstant, passwordValidationRegex } from '@/config/constants';

const SignupFormModal = ({ setIsModalOpen, setSignupIsModalOpen }: any) => {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    dispatch(actions.createUser(values));
    setSignupIsModalOpen(false);
  };
  return (
    <>
      <FormWrapper>
        <Form name='basic' onFinish={onFinish} autoComplete='off'>
          <Form.Item
            name='firstName'
            rules={[
              {
                required: true,
                message: appConstant.formValidation.firstNameRequired,
              },
            ]}
          >
            <Input placeholder='First Name*' />
          </Form.Item>
          <Form.Item
            name='lastName'
            rules={[
              {
                required: true,
                message: appConstant.formValidation.lastNameRequired,
              },
            ]}
          >
            <Input placeholder='Last Name*' />
          </Form.Item>
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
              Sign Up <Icon component={ArrowIcon} />
            </Button>
            <div className='or-content'>OR</div>
            <Button className='google' type='primary' htmlType='submit'>
              Sign in with Google
              <Image src={googleImg} width={32} height={32} alt={'img'} />
            </Button>
          </Form.Item>
          <Form.Item className='forgot-text'>
            <div
              className='sign-up'
              onClick={() => {
                setIsModalOpen(true);
                setSignupIsModalOpen(false);
              }}
            >
              Already have an account ? Log in
            </div>
          </Form.Item>
        </Form>
      </FormWrapper>
    </>
  );
};

export default SignupFormModal;
