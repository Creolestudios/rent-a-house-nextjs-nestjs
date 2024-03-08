import React from 'react';
import { FormWrapper } from './LoginForm.styles';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/admin/superAdminAuth/auth.action';
import { appConstant, passwordValidationRegex } from '@/config/constants';

const ForgotPassword = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    dispatch(actions.forgotPassword(values));
    setIsModalOpen(false);
  };

  return (
    <FormWrapper>
      <Form
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
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

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default ForgotPassword;
