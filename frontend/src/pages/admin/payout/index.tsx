import React, { useState } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
// import Link from 'next/link';
import Icon from '@ant-design/icons';
import DoubleArrowSvg from '@/assets/images/icons/DoubleArrow';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import Payout from '@/components/Admin/Payout/Payout';
import Authguard from '@/services/Authguard/Authgaurd';

const index = () => {
  // const router = useRouter();
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Manage Payout' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb
              items={[{ title: 'Payout' }]}
              separator={<Icon component={DoubleArrowSvg} />}
            />
            {/* <div className='btn-wrapper'>
          <Button
            onClick={() => router.push(`/manage-users-roles/add-admin-user`)}
          >
            <Icon component={PlusIconSvg} />
            Add Admin User
          </Button>
        </div> */}
          </ContentHeader>
          <Payout />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
