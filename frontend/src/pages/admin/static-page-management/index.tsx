import React, { useState } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
// import Link from 'next/link';
import Icon from '@ant-design/icons';
import DoubleArrowSvg from '@/assets/images/icons/DoubleArrow';
import StaticPageManagement from '@/components/Admin/StaticPageManagement/StaticPageManagement';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import Authguard from '@/services/Authguard/Authgaurd';
import { Button } from 'antd';
import PlusIconSvg from '@/assets/images/icons/PlusIconSvg';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Static Page Management' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb
              items={[{ title: 'Static Page Management' }]}
              separator={<Icon component={DoubleArrowSvg} />}
            />
            {/* <div className='btn-wrapper'>
              <Button
                onClick={() => {
                  // router.push(`/admin/static-page-management/add-page`);
                  window.location.assign(
                    '/admin/static-page-management/add-page'
                  );
                }}
              >
                <Icon component={PlusIconSvg} />
                Add Page
              </Button>
            </div> */}
          </ContentHeader>
          <StaticPageManagement />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
