import React, { useState, useEffect } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
import Dashboard from '@/components/Admin/Dashboard/Dashboard';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import Authguard from '@/services/Authguard/Authgaurd';

const index = () => {
  const [collapse, setCollapse] = useState<any>(true);

  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Dashboard' />
        <AdminContent setCollapse={setCollapse} collapse={collapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb items={[{ title: 'Dashboard' }]} />
          </ContentHeader>
          <Dashboard />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;

// export const getServerSideProps = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");

//   // const d = data.json();
//   (data, "json data");

//   return { props: {} };
// };
