import React, { useEffect, useState } from 'react';
import { DataWrapper } from './Account.styles';
import { Avatar, DatePicker, Form, Input, Select } from 'antd';
import Icon from '@ant-design/icons';
import downArrow from '@/assets/images/icons/DownArrowSvg';
import { CustomButton } from '@/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import actions from '@/redux/account/account.action';
import { appConstant, passwordValidationRegex } from '@/config/constants';

const PasswordSetting = ({ title }: any) => {
  const dispatch = useDispatch();
  const [id, setId] = useState<Number>();
  const userDetails = useSelector(
    (state: RootState) => state.accountReducer.userDetails
  );
  const handleChange = (value) => {
    let payload = {
      id: id,
      token: sessionStorage.getItem('token'),
      password: value.password,
      confirmPassword: value.confirmPassword,
    };
    dispatch(actions.changePassword({ ChangeUserPassword: payload }));
  };
  useEffect(() => {
    setId(Number(sessionStorage.getItem('user_id')));
  });
  return (
    <DataWrapper>
      <h3>{title}</h3>
      <Form style={{ maxWidth: '470px' }} onFinish={handleChange}>
        <Form.Item
          name='password'
          label='Add New Password'
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
        >
          <Input placeholder='Enter new password*' />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          label='Confirm Password'
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
        >
          <Input placeholder='confirm new password*' />
        </Form.Item>
        <Form.Item className='btn-wrapper'>
          <CustomButton className='fill' type='submit'>
            Save
          </CustomButton>
        </Form.Item>
      </Form>
    </DataWrapper>
  );
};

export default PasswordSetting;
