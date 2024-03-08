import React, { useState } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
import Icon from '@ant-design/icons';
import DoubleArrowSvg from '@/assets/images/icons/DoubleArrow';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import Authguard from '@/services/Authguard/Authgaurd';
import { useRouter } from 'next/router';
import AddPages from '@/components/Admin/StaticPageManagement/AddPages';
import Link from 'next/link';

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
              items={[
                {
                  title: (
                    <Link href='/admin/static-page-management'>
                      Static Pages
                    </Link>
                  ),
                },
                { title: '' },
              ]}
              separator={<Icon component={DoubleArrowSvg} />}
            />
          </ContentHeader>
          <AddPages />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
