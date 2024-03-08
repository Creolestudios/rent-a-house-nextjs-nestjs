import React, { useEffect, useState } from 'react';
import { EditAdminUserWrapper } from './EditAdminUser.styles';
import { CustomButton, Box, UserHeader } from '@/globalStyles';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import EditUserForm from './EditUserForm';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/admin/adminListing/adminListing.action';
import { useForm } from 'antd/lib/form/Form';
import { RootState } from '@/redux/store/rootReducer';

interface EditAdmin {
  id: number;
  user_name?: string;
  email: string;
  role: number;
  status: number;
  adminListPayload?: {};
}
const EditAdminUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const adminData: EditAdmin = useSelector(
    (state: RootState) => state.adminListingReducer.admin
  );
  const [adminForm] = useForm();

  const adminID: string = router.asPath.split('?')[1];

  const [editFormData, setEditFormData] = useState<EditAdmin>({
    id: parseInt(adminID),
    email: adminData?.email,
    role: adminData?.role,
    status: adminData?.status,
    adminListPayload: {
      pageNo: 1,
      adminSearch: '',
    },
  });

  const handleSave = () => {
    dispatch(actions.updateAdmin(editFormData)),
      router.push('/admin/users-roles');
  };

  const handleDeleteAdmin = () => {
    let value = {
      userId: parseInt(adminID),
      adminListPayload: {
        pageNo: 1,
        adminSearch: '',
      },
    };
    dispatch(actions.deleteAdmin(value));
    router.push('/admin/users-roles');
  };

  useEffect(() => {
    setEditFormData({
      id: parseInt(adminID),
      email: adminData?.email,
      role: adminData?.role,
      status: adminData?.status,
      adminListPayload: {
        pageNo: 1,
        adminSearch: '',
      },
    });
  }, [adminData]);

  useEffect(() => {
    let value = {
      id: parseInt(adminID),
    };
    dispatch(actions.getSingleAdmin(value));
  }, []);

  return (
    <EditAdminUserWrapper>
      <Box>
        <UserHeader className='user-header'>
          <div className='user-name'>
            <span className='user'>{adminData.user_name}</span>
          </div>
          <div className='btn-wrapper'>
            <CustomButton className='fill' onClick={() => adminForm.submit()}>
              Save
            </CustomButton>
            <CustomButton onClick={handleDeleteAdmin}>Delete</CustomButton>
          </div>
        </UserHeader>
        <Box className='box'>
          <EditUserForm
            setEditFormData={setEditFormData}
            editFormData={editFormData}
            adminForm={adminForm}
            onFinish={handleSave}
          />
        </Box>
      </Box>
    </EditAdminUserWrapper>
  );
};

export default EditAdminUser;
