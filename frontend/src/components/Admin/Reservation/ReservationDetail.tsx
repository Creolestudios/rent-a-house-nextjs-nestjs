import { Avatar } from 'antd';
import React, { useEffect } from 'react';
import { ViewDetailWrapper } from '../PropertyListing/PropertyListing.styles';
import Image from 'next/image';
import UserIcon from '@/assets/images/user5.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import { adminReservationStatus } from '@/config/constants';
import { useRouter } from 'next/router';
// import { ViewDetailWrapper } from './ManageListing.styles';

const ReservationDetail = () => {
  const router=useRouter()
  const singleReservationDetail=useSelector((state:RootState)=>state.adminReservationListingReducer.singleReservation)
  function isImageUrl(url: any) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
    const extension = url?.slice(url?.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
  }

  
  return (
    <ViewDetailWrapper>
      <div className='block'>
        <label>Tenant Name</label>
        <span>
          <Image
            src={isImageUrl(singleReservationDetail?.reservations?.tenant?.image) ?singleReservationDetail?.reservations?.tenant?.image : UserIcon}
            alt='images'
            width={24}
            height={24}
            style={{
              marginRight: '10px',
            }}
          />{' '}
          <span>{singleReservationDetail.reservations?.tenant?.first_name ? singleReservationDetail.reservations?.tenant?.first_name:'deleted-tenant' } {singleReservationDetail.reservations?.tenant?.last_name}</span>
        </span>
      </div>
      <div className='block'>
        <label>Host Name</label>
        <span>
          <Image
            src={isImageUrl(singleReservationDetail?.reservations?.landlord?.image) ? singleReservationDetail?.reservations?.landlord?.image : UserIcon}
            alt='images'
            width={24}
            height={24}
            style={{
              marginRight: '10px',
            }}
          />{' '}
          <span>{singleReservationDetail.reservations?.landlord?.first_name ? singleReservationDetail.reservations?.landlord?.first_name:'deleted-landlord'} {singleReservationDetail.reservations?.landlord?.last_name}</span>
        </span>
      </div>
      <div className='block'>
        <label>Property name</label>
        <span className='color-under'>{singleReservationDetail?.reservations?.propertys_id?.name ? singleReservationDetail?.reservations?.propertys_id?.name:'deleted-property'}</span>
      </div>
      <div className='block'>
        <label>Check-In</label>
        <span>{singleReservationDetail?.reservations?.start_date.split('T')[0]}</span>
      </div>
      <div className='block'>
        <label>Check-Out</label>
        <span>{singleReservationDetail?.reservations?.end_date.split('T')[0]}</span>
      </div>
      <div className='block'>
        <label>Rental Period</label>
        <span>{singleReservationDetail?.reservations?.month_difference} Months</span>
      </div>
      <div className='block'>
        <label>Rent Per month</label>
        <span>CA${singleReservationDetail?.reservations?.amount}</span>
      </div>
      <div className='block'>
        <label>Service Fee</label>
        <span>CA${singleReservationDetail?.ServiceFee}</span>
      </div>
      <div className='block'>
        <label>Total Amount Paid</label>
        <span>CA${singleReservationDetail?.TotalAmountPaid}</span>
      </div>
      <div className='block'>
        <label>Status</label>
        <span>{adminReservationStatus[singleReservationDetail?.reservations?.status]?.label}</span>
      </div>
    </ViewDetailWrapper>
  );
};

export default ReservationDetail;
