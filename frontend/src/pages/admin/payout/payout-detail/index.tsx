import React, { useState } from "react";
import AdminContent from "@/components/Admin/AdminContent/AdminContent";
import ContentHeader from "@/components/Admin/ContentHeader/ContentHeader";
import { Breadcrumb } from "antd";
import Link from "next/link";
import Icon from "@ant-design/icons";
import DoubleArrowSvg from "@/assets/images/icons/DoubleArrow";
import PayoutDetails from "@/components/Admin/Payout/PayoutDetails";
import HeadTitle from "@/components/Admin/HeadTitle/HeadTitle";
import Authguard from "@/services/Authguard/Authgaurd";

const index = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Manage Payout' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb
              separator={<Icon component={DoubleArrowSvg} />}
              items={[
                { title: <Link href='/admin/payout'>Payouts</Link> },
                { title: 'Payout History' },
              ]}
            />
          </ContentHeader>
          <PayoutDetails />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
