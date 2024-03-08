import React, { useEffect, useState } from 'react';
import AdminContent from '@/components/Admin/AdminContent/AdminContent';
import ContentHeader from '@/components/Admin/ContentHeader/ContentHeader';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import TenantDetail from '@/components/Admin/PropertyListing/TenantDetail';
import HeadTitle from '@/components/Admin/HeadTitle/HeadTitle';
import Authguard from '@/services/Authguard/Authgaurd';
import { RootState } from '@/redux/store/rootReducer';
import { useSelector } from 'react-redux';
import { Property } from '..';
import Icon from '@ant-design/icons';
import DoubleArrowSvg from '@/assets/images/icons/DoubleArrow';

const index = () => {
  const propertyDetails = useSelector(
    (state: RootState) => state.adminPropertyListingReducer.singleProperty
  );
  const tenant = useSelector(
    (state: RootState) => state.adminPropertyListingReducer.tenant
  );
  const [collapse, setCollapse] = useState(true);
  const [propertyName, setPropertyName] = useState<Property | null>();

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
                {
                  title: (
                    <Link
                      href={`/admin/property-listing/property-page/tenant-history?${propertyDetails?.id}`}
                    >
                      Tenant History
                    </Link>
                  ),
                },
                {
                  title: `${tenant?.tenant?.first_name} ${tenant?.tenant?.last_name}`,
                },
              ]}
              separator={<Icon component={DoubleArrowSvg} />}
            />
          </ContentHeader>
          <TenantDetail />
        </AdminContent>
      </Authguard>
    </>
  );
};

export default index;
