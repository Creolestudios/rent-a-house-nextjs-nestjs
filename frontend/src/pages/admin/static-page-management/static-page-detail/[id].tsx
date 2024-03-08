import React, { useState } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import Icon from '@ant-design/icons';
import DoubleArrowSvg from '@/assets/images/icons/DoubleArrow';
import StaticPageDetail from '@/components/Admin/StaticPageManagement/StaticPageDetail';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import Authguard from '@/services/Authguard/Authgaurd';
import { useRouter } from 'next/router';
import AddPages from '@/components/Admin/StaticPageManagement/AddPages';

const index = () => {
  const router = useRouter();

  const pageName = router.query.id;

  const [collapse, setCollapse] = useState<boolean>(true);

  // const [disable, setDisable] = useState<boolean>(true);

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
                { title: pageName },
              ]}
              separator={<Icon component={DoubleArrowSvg} />}
            />
          </ContentHeader>
          <AddPages
            header={true}
            // disable={disable} setDisable={setDisable}
          />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
