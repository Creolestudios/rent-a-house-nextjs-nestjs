import { Avatar } from 'antd';
import React from 'react';
import { ViewDetailWrapper } from './PropertyListing.styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import moment from 'moment';
import { tenantStatus } from '@/config/constants';

interface TenantDetails {
  tenant: {
    image: string;
    first_name: string;
    last_name: string;
  };
  status: number;
  start_date: string;
  end_date: string;
  month_difference: number;
  service_cost: number;
  amount: number;
  property: {
    rent: number;
  };
}

const ViewDetail = () => {
  const tenantDetails: TenantDetails = useSelector(
    (state: RootState) => state.adminPropertyListingReducer.tenant
  );

  return (
    <ViewDetailWrapper>
      <div className='block'>
        <label>Tenant Name</label>
        <span>
          <Avatar size={24} src={tenantDetails?.tenant?.image} />
          <span>{`${tenantDetails?.tenant?.first_name} ${tenantDetails?.tenant?.last_name}`}</span>
        </span>
      </div>
      <div className='block'>
        <label>Check-In</label>
        <span>{moment(tenantDetails?.start_date).format('YYYY-MM-DD')}</span>
      </div>
      <div className='block'>
        <label>Check-Out</label>
        <span>{moment(tenantDetails?.end_date).format('YYYY-MM-DD')}</span>
      </div>
      <div className='block'>
        <label>Rental Period</label>
        <span>{tenantDetails?.month_difference} Months</span>
      </div>
      <div className='block'>
        <label>Rent Per month</label>
        <span>CA${tenantDetails?.property?.rent}/month</span>
      </div>
      <div className='block'>
        <label>Service Fee</label>
        <span>CA${tenantDetails?.service_cost}</span>
      </div>
      <div className='block'>
        <label>Total Amount Paid</label>
        <span>CA${tenantDetails?.amount}</span>
      </div>
      <div className='block'>
        <label>Status</label>
        <span>{tenantStatus[tenantDetails?.status]?.label}</span>
      </div>
    </ViewDetailWrapper>
  );
};

export default ViewDetail;
