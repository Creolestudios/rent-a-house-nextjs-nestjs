import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import TenantHistory from '@/components/Admin/PropertyListing/TenantHistory';
import Authguard from '@/services/Authguard/Authgaurd';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import Icon from '@ant-design/icons';
import DoubleArrowSvg from '@/assets/images/icons/DoubleArrow';

export interface Property {
  name: string;
  id: number;
}
const index = () => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const [propertyName, setPropertyName] = useState<Property | null>();
  const propertyDetails = useSelector(
    (state: RootState) => state.adminPropertyListingReducer.singleProperty
  );

  useEffect(() => {
    let property = {
      name: propertyDetails?.name,
      id: propertyDetails?.id,
    };
    propertyDetails?.name !== undefined &&
      window.sessionStorage.setItem('property', JSON.stringify(property)),
      setPropertyName(JSON.parse(sessionStorage.getItem('property')));
  }, []);
  return (
    <>
      <Authguard secure={true} role={'2'}>
        <HeadTitle title='Manage Listing' />
        <AdminContent collapse={collapse} setCollapse={setCollapse}>
          <ContentHeader setCollapse={setCollapse} collapse={collapse}>
            <Breadcrumb
              items={[
                { title: <Link href='/admin/property-listing'>Listing</Link> },
                {
                  title: (
                    <Link
                      href={`/admin/property-listing/property-page?${propertyName?.id}`}
                    >
                      {propertyName?.name}
                    </Link>
                  ),
                },
                { title: 'Tenant History' },
              ]}
              separator={<Icon component={DoubleArrowSvg} />}
            />
          </ContentHeader>
          <TenantHistory />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
