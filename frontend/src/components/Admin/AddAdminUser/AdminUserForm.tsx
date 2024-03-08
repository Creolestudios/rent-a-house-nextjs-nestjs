import React, { useState } from 'react';
import { AdminUserFormWrapper } from './AddAdminUser.styles';
import { Form, Input } from 'antd';
import { Radio } from 'antd';
import { CustomButton } from '@/globalStyles';
import { useDispatch } from 'react-redux';
import actions from '@/redux/admin/adminListing/adminListing.action';
import { useRouter } from 'next/router';
import { appConstant, passwordValidationRegex } from '@/config/constants';

interface AdminUserData {
  user_name: string;
  email: string;
  password: string;
  role: number;
  adminListPayload?: {
    pageNo: number;
    adminSearch: string;
  };
}

const AdminUserForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onFinish = (values: AdminUserData) => {
    let data: AdminUserData = {
      user_name: values.user_name,
      email: values.email,
      password: values.password,
      role: values.role,
      adminListPayload: {
        pageNo: 1,
        adminSearch: '',
      },
    };
    dispatch(actions.createAdmin(data));
    router.push('/admin/users-roles');
  };

  return (
    <AdminUserFormWrapper>
      <Form name='basic' onFinish={onFinish} autoComplete='off'>
        <Form.Item
          label='Username'
          name='user_name'
          rules={[
            {
              required: true,
              message: appConstant.formValidation.userNameRequired,
            },
          ]}
        >
          <Input placeholder={appConstant.placeHolder.userName} />
        </Form.Item>

        <Form.Item
          label='Email ID'
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
              pattern: new RegExp(passwordValidationRegex),
              message: appConstant.formValidation.passwordValidation,
            },
          ]}
          // hasFeedback
        >
          <Input.Password placeholder={appConstant.placeHolder.password} />
        </Form.Item>

        <Form.Item
          label='Select Role'
          name='role'
          rules={[{ required: true, message: appConstant.formValidation.role }]}
        >
          <Radio.Group>
            <Radio value={1}>Admin</Radio>
            <Radio value={0}>Viewer</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <div className='btn-wrapper'>
            <CustomButton className='fill'>Save</CustomButton>
            <CustomButton>Cancel</CustomButton>
          </div>
        </Form.Item>
      </Form>
    </AdminUserFormWrapper>
  );
};

export default AdminUserForm;
