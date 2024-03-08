import React, { useEffect, useState } from 'react';
import { EditUserFormWrapper } from './EditAdminUser.styles';
import { Form, Input } from 'antd';
import { Radio } from 'antd';
import { useSelector } from 'react-redux';
import { appConstant } from '@/config/constants';
import { RootState } from '@/redux/store/rootReducer';

interface AdminEditData {
  email: string;
  role: number;
  status: number;
}
const EditUserForm = ({
  setEditFormData,
  editFormData,
  adminForm,
  onFinish,
}: any) => {
  const adminData: AdminEditData = useSelector(
    (state: RootState) => state.adminListingReducer.admin
  );
  const [adminRole, setAdminRole] = useState<number>(adminData.role);
  const [adminStatus, setAdminStatus] = useState<number>(adminData.status);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  useEffect(() => {
    setAdminRole(adminData.role);
    setAdminStatus(adminData.status);
    adminForm.setFieldValue('email', adminData.email);
    adminForm.setFieldValue('role', adminData.role);
    adminForm.setFieldValue('status', adminData.status);
  }, [adminData.status, adminData.role, adminData.email]);

  return (
    <EditUserFormWrapper>
      <Form
        name='basic'
        autoComplete='off'
        form={adminForm}
        onFinish={onFinish}
        initialValues={{
          email: adminData.email,
          role: adminRole,
          status: adminStatus,
        }}
      >
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
          <Input
            placeholder={appConstant.placeHolder.email}
            onChange={handleInputChange}
            name='email'
          />
        </Form.Item>

        <Form.Item
          label='Select Role'
          name='role'
          valuePropName='checked'
          id='role'
          initialValue={adminRole}
          rules={[{ required: true, message: appConstant.formValidation.role }]}
        >
          <Radio.Group
            onChange={(e) => (
              handleInputChange(e), setAdminRole(e.target.value)
            )}
            name='role'
            id='role'
            value={adminRole}
            defaultValue={adminRole}
          >
            <Radio id='role' name='role' value={1}>
              Admin
            </Radio>
            <Radio id='role' name='role' value={0}>
              Viewer
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label='Select Status'
          name='status'
          valuePropName='checked'
          id='status'
          initialValue={adminStatus}
          rules={[
            { required: true, message: appConstant.formValidation.status },
          ]}
        >
          <Radio.Group
            onChange={(e) => (
              handleInputChange(e), setAdminStatus(e.target.value)
            )}
            name='status'
            id='status'
            value={adminStatus}
            defaultValue={adminStatus}
          >
            <Radio value={1}>Active</Radio>
            <Radio value={0}>Inactive</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </EditUserFormWrapper>
  );
};

export default EditUserForm;
