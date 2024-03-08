import React, { useState } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import Commission from '@/components/Admin/Commission/Commission';
import Authguard from '@/services/Authguard/Authgaurd';

const index = () => {
  const [collapse, setCollapse] = useState<boolean>(true);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Manage Commission' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb items={[{ title: 'Commission' }]} />
          </ContentHeader>
          <Commission />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
