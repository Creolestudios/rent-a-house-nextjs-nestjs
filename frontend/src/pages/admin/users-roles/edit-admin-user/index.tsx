import React, { useState } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import EditAdminUser from '@/components/Admin/EditAdminUser/EditAdminUser';
import Icon from '@ant-design/icons';
import DoubleArrowSvg from '@/assets/images/icons/DoubleArrow';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import Authguard from '@/services/Authguard/Authgaurd';

const index = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Manage Users Roles' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb
              items={[
                {
                  title: (
                    <Link href='/admin/users-roles'>Manage Users Roles</Link>
                  ),
                },
                { title: 'Edit Admin User' },
              ]}
              separator={<Icon component={DoubleArrowSvg} />}
            />
          </ContentHeader>
          <EditAdminUser />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
