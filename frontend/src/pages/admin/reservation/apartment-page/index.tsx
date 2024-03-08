import React, { useState } from "react";
import AdminContent from "@/components/Admin/AdminContent/AdminContent";
import ContentHeader from "@/components/Admin/ContentHeader/ContentHeader";
import { Breadcrumb } from "antd";
import Link from "next/link";
import ManageReservationDetail from "@/components/Admin/Reservation/ManageReservationDetail";
import Icon from "@ant-design/icons";
import DoubleArrowSvg from "@/assets/images/icons/DoubleArrow";
import HeadTitle from "@/components/Admin/HeadTitle/HeadTitle";
import Authguard from "@/services/Authguard/Authgaurd";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/rootReducer";

const index = () => {
  const [collapse, setCollapse] = useState(true);
  const propertyDetails = useSelector(
    (state: RootState) => state.adminReservationListingReducer.singleReservation
  );
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Manage Reservation' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb
              items={[
                { title: <Link href='/admin/reservation'>Reservations</Link> },
                {
                  title: propertyDetails.reservations?.propertys_id?.name ? propertyDetails.reservations?.propertys_id?.name:'deleted-property',
                },
              ]}
              separator={<Icon component={DoubleArrowSvg} />}
            />
          </ContentHeader>
          <ManageReservationDetail />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
