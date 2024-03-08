import React, { useState } from "react";
import AdminContent from "@/components/Admin/AdminContent/AdminContent";
import ContentHeader from "@/components/Admin/ContentHeader/ContentHeader";
import { Breadcrumb } from "antd";
import Link from "next/link";
// import ManageReservationDetail from '@/components/Admin/Reservation/ManageReservationDetail';
import Icon from "@ant-design/icons";
import DoubleArrowSvg from "@/assets/images/icons/DoubleArrow";
import HeadTitle from "@/components/Admin/HeadTitle/HeadTitle";
import PropertyPage from "@/components/Admin/PropertyListing/PropertyPage";
import Authguard from "@/services/Authguard/Authgaurd";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/rootReducer";

const index = () => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const propertyDetails = useSelector(
    (state: RootState) => state.adminPropertyListingReducer.singleProperty
  );
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Property Listing' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb
              items={[
                { title: <Link href='/admin/property-listing'>Listing</Link> },
                { title: propertyDetails?.name },
              ]}
              separator={<Icon component={DoubleArrowSvg} />}
            />
          </ContentHeader>
          <PropertyPage />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
