import React, { useState } from "react";
import AdminContent from "@/components/Admin/AdminContent/AdminContent";
import ContentHeader from "@/components/Admin/ContentHeader/ContentHeader";
import { Breadcrumb } from "antd";
// import Link from 'next/link';
import Icon from "@ant-design/icons";
import DoubleArrowSvg from "@/assets/images/icons/DoubleArrow";
// import StaticPageManagement from '@/components/Admin/StaticPageManagement/StaticPageManagement';
import HeadTitle from "@/components/Admin/HeadTitle/HeadTitle";
import SiteConfiguration from "@/components/Admin/SiteConfiguration/SiteConfiguration";
import Authguard from "@/services/Authguard/Authgaurd";

const index = () => {
  // const router = useRouter();
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Static Page Management' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb
              items={[{ title: 'Site Settings' }]}
              separator={<Icon component={DoubleArrowSvg} />}
            />
          </ContentHeader>
          <SiteConfiguration />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
