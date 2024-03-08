import React from 'react';
import Title from '../Title/Title';
import { SendBookingInquiryRequestWrapper } from './InquiryRequest.styles';
import { fontFamily, color } from '@/styles/variable';
import CardSlider from '../CommonCard/CardSlider';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import { useRouter } from 'next/router';
import moment from 'moment';

const SendBookingInquiryRequest = () => {
  const propertyData = useSelector(
    (state: RootState) => state.inquiryRequestReducer.propertyInfo
  );
  const propertyBookingData = useSelector(
    (state: RootState) => state.inquiryRequestReducer.chatingData?.booking_data
  );

  return (
    <SendBookingInquiryRequestWrapper>
      <Title
        className='title'
        title={propertyData?.name}
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.blackColor}`}
        marginBottom={'4px'}
      />
      <ul className='list-wrapper'>
        <li>{propertyData?.type}</li>
        <li>{propertyData?.space?.bedrooms} Bedroom</li>
        <li>{propertyData?.space?.size} sq.ft.</li>
      </ul>
      <CardSlider />
      <ul className='contract-info'>
        <li>
          <label>
            Move-in date<span className='seperator'>:</span>
          </label>
          <span>
            {moment(propertyBookingData?.start_date).format('DD MMM YYYY')}
          </span>
        </li>
        <li>
          <label>
            Move-out date<span className='seperator'>:</span>
          </label>
          <span>
            {moment(propertyBookingData?.end_date).format('DD MMM YYYY')}
          </span>
        </li>
        <li>
          <label>
            Rental period<span className='seperator'>:</span>
          </label>
          <span>
            {moment(propertyBookingData?.end_date).diff(
              moment(propertyBookingData?.start_date),
              'month'
            )}{' '}
            months
          </span>
        </li>
        <li>
          <label>
            Contract type<span className='seperator'>:</span>
          </label>
          <span>Monthly</span>
        </li>
      </ul>
    </SendBookingInquiryRequestWrapper>
  );
};

export default SendBookingInquiryRequest;
