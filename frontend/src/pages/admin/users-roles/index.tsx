import React, { useState } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
import { Button } from 'antd';
import Icon from '@ant-design/icons';
import PlusIconSvg from '@/assets/images/icons/PlusIconSvg';
import { useRouter } from 'next/router';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import ManageUserRoles from '@/components/Admin/UsersRoles/UsersRoles';
import Authguard from '@/services/Authguard/Authgaurd';

const index = () => {
  const router = useRouter();
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Manage Users Roles' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb items={[{ title: 'Manage Users Roles' }]} />
            <div className='btn-wrapper'>
              <Button
                onClick={() => router.push(`/admin/users-roles/add-admin-user`)}
              >
                <Icon component={PlusIconSvg} />
                Add Admin User
              </Button>
            </div>
          </ContentHeader>
          <ManageUserRoles />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
