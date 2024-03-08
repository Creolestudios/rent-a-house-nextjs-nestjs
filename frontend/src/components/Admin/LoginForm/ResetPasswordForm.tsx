import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { FormWrapper } from './LoginForm.styles';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import actions from '@/redux/admin/superAdminAuth/auth.action';
import { appConstant, passwordValidationRegex } from '@/config/constants';

const ResetPasswordForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  console.log('router', router.asPath.split('/')[1]);

  const onFinish = (values: any) => {
    let data = {
      password: values.password,
      confirmPassword: values.confirmpassword,
      token: token,
    };

    dispatch(actions.resetPassword(data));
  };

  useEffect(() => {
    setToken(router.asPath.split('=')[1]);
  }, []);

  return (
    <FormWrapper>
      <Form
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          label='New Password'
          name='password'
          rules={[
            {
              required: true,
              message: appConstant.formValidation.passwordRequired,
            },
            {
              pattern: new RegExp(passwordValidationRegex),
              message: appConstant.formValidation.passwordValidation,
            },
          ]}
          // hasFeedback
        >
          <Input.Password placeholder={appConstant.placeHolder.password} />
        </Form.Item>
        <Form.Item
          label='Confirm Password'
          name='confirmpassword'
          rules={[
            {
              required: true,
              message: appConstant.formValidation.passwordRequired,
            },
            {
              pattern: new RegExp(passwordValidationRegex),
              message: appConstant.formValidation.passwordValidation,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(appConstant.formValidation.passwordNotMatch)
                );
              },
            }),
          ]}
          // hasFeedback
        >
          <Input.Password
            placeholder={appConstant.placeHolder.confirmPassword}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default ResetPasswordForm;
