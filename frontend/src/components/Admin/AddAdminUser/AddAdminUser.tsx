import { Box } from '@/globalStyles';
import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Title from '../Title/Title';
import { AdminUserWrapper } from './AddAdminUser.styles';
import { color, fontFamily } from '@/styles/variable';
import AdminUserForm from './AdminUserForm';

const AddAdminUser = () => {
  return (
    <AdminUserWrapper>
      <Box className='box'>
        <Title
          title={'Add Admin User'}
          fontFamily={fontFamily.mediumFont}
          lineHeight={'20px'}
          color={color.blackColor}
        />
        <SubTitle
          title={''}
          fontSize={'12px'}
          color={color.greyColor}
          fontFamily={fontFamily.regularFont}
          marginBottom={'10px'}
          lineHeight={'15px'}
        />
        <AdminUserForm />
      </Box>
    </AdminUserWrapper>
  );
};

export default AddAdminUser;
