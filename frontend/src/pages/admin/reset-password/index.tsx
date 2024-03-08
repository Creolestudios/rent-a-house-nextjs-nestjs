import React from 'react';
import ResetPassword from '@/components/Admin/LoginForm/ResetPassword';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';

const index = () => {
  return (
    <>
      <HeadTitle title='Reset Password' />
      <ResetPassword />
    </>
  );
};

export default index;
