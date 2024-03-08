import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
// import ManageUsers from '@/components/Admin/ManageUsers/ManageUsers';
import SystemUsers from '@/components/Admin/SystemUsers/SystemUsers';
import Authguard from '@/services/Authguard/Authgaurd';

const index = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Manage Users' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb items={[{ title: 'Manage Users' }]} />
          </ContentHeader>
          <SystemUsers />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
