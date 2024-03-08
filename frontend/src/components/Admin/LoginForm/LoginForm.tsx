import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import ForgotPasswordModal from './ForgotPasswordModal';
import { FormWrapper } from './LoginForm.styles';
import actions from '@/redux/admin/superAdminAuth/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { appConstant, passwordValidationRegex } from '@/config/constants';

const LoginForm = () => {
  const forgotPasswordSuccess = useSelector(
    (state: any) => state.forgotPasswordModal
  );
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onFinish = (values: any) => {
    dispatch(actions.login(values));
  };

  useEffect(() => {
    setIsModalOpen(forgotPasswordSuccess);
  }, [forgotPasswordSuccess]);

  return (
    <>
      <FormWrapper>
        <Form
          name='basic'
          autoComplete='off'
          initialValues={undefined}
          onFinish={onFinish}
        >
          <Form.Item
            label='Email'
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
            <Input placeholder={appConstant.placeHolder.email} />
          </Form.Item>

          <Form.Item
            label='Password'
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
            <Input.Password placeholder={appConstant.placeHolder.password} />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            className='remember-forgot'
          >
            <div
              className='forgotPassword'
              onClick={() => setIsModalOpen(true)}
            >
              Forgot Password?
            </div>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
      <ForgotPasswordModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default LoginForm;
