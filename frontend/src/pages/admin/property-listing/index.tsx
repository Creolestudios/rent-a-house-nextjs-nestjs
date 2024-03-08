import React, { useState } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
// import { useRouter } from 'next/router';
// import ManageListing from '@/components/Admin/ManageListing/ManageListing';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import PropertyListing from '@/components/Admin/PropertyListing/PropertyListing';
import Authguard from '@/services/Authguard/Authgaurd';

const index = () => {
  // const router = useRouter();
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Manage Listing' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb items={[{ title: 'Listing' }]} />
          </ContentHeader>
          <PropertyListing />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
