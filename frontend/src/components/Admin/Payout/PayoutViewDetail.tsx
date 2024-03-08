import { Avatar } from 'antd';
import React from 'react';
import { ViewDetailWrapper } from '../PropertyListing/PropertyListing.styles';
import Image from 'next/image';
import UserIcon from '@/assets/images/user5.png';

const PayoutViewDetail = () => {
  function isImageUrl(url: any) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
    const extension = url.slice(url.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
  }
  return (
    <ViewDetailWrapper>
      <div className='block'>
        <label>Host Name</label>
        <span>
          <Image
            src={isImageUrl('UserIcon') ? UserIcon : UserIcon}
            alt='images'
            width={24}
            height={24}
            style={{
              marginRight: '10px',
            }}
          />{' '}
          <span>James Harper</span>
        </span>
      </div>
      <div className='block'>
        <label>Tenant Name</label>
        <span>
          <Image
            src={isImageUrl('UserIcon') ? UserIcon : UserIcon}
            alt='images'
            width={24}
            height={24}
            style={{
              marginRight: '10px',
            }}
          />{' '}
          <span>James Harper</span>
        </span>
      </div>
      <div className='block'>
        <label>Property name</label>
        <span className='color-under'>ABC</span>
      </div>
      <div className='block'>
        <label>Booking date</label>
        <span>05/05/2019</span>
      </div>
      <div className='block'>
        <label>Booking Status</label>
        <span>Confirmed</span>
      </div>
      <div className='block'>
        <label>Rent Amount</label>
        <span>CA$150/month</span>
      </div>
      <div className='block'>
        <label>Services Fees</label>
        <span>CA$50</span>
      </div>
      <div className='block'>
        <label>Total Amount Paid</label>
        <span>CA$200</span>
      </div>
      <div className='block'>
        <label>Commission Charges</label>
        <span>CA$25</span>
      </div>
      <div className='block'>
        <label>Payout Amount</label>
        <span>CA$175</span>
      </div>
      <div className='block'>
        <label>Payout </label>
        <span>Grant</span>
      </div>
      <div className='block'>
        <label>Payout Status</label>
        <span>Successful</span>
      </div>
    </ViewDetailWrapper>
  );
};

export default PayoutViewDetail;
