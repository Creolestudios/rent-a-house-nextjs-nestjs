import React, { useState } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
// import Link from 'next/link';
// import ManageReservation from '@/components/Admin/ManageReservation/ManageReservation';
import Icon from '@ant-design/icons';
import DoubleArrowSvg from '@/assets/images/icons/DoubleArrow';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import Reservation from '@/components/Admin/Reservation/Reservation';
import Authguard from '@/services/Authguard/Authgaurd';

const index = () => {
  // const router = useRouter();
  const [collapse, setCollapse] = useState(true);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Manage Reservation' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb items={[{ title: 'Reservations' }]} />
          </ContentHeader>
          <Reservation />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
