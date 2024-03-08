import { Box, CustomButton, UserHeader } from '@/globalStyles';
import { fontFamily, color } from '@/styles/variable';
import React, { useEffect } from 'react';
import Title from '../Title/Title';
import PropertyDetail from './PropertyDetail';
import { PropertyPageWrapper } from './PropertyListing.styles';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import actions from '@/redux/admin/propertyListing/adminPropertyListing.action';

const PropertyPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePropertyDelete = () => {
    let value = {
      propertyId: parseInt(router.asPath.split('?')[1]),
      listingPayload: {
        pageNo: 1,
        propertyName: '',
        propertyType: '',
      },
    };
    dispatch(actions.deletePropertyAdmin(value));
    router.push('/admin/property-listing');
  };

  useEffect(() => {
    let id = parseInt(router.asPath.split('?')[1]);

    dispatch(actions.getSingleProperty({ id }));
  }, []);

  return (
    <PropertyPageWrapper>
      <Title
        className='title-wrapper'
        title=''
        fontFamily={`${fontFamily.demiBold}`}
        color={`${color.blackColor}`}
      >
        <div className='btn-wrapper'>
          <CustomButton onClick={handlePropertyDelete}>Delete</CustomButton>
        </div>
      </Title>

      <Box className='box'>
        <PropertyDetail
          route={'/admin/property-listing/property-page/tenant-history'}
        />
      </Box>
    </PropertyPageWrapper>
  );
};

export default PropertyPage;
