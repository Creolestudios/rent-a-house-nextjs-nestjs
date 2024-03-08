import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import { StepperRightContentWrap } from './InquiryRequest.styles';
import { fontFamily, color } from '@/styles/variable';
import CardSlider from '../CommonCard/CardSlider';
import Icon from '@ant-design/icons';
import editIcon from '@/assets/images/icons/EditSvg';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/inquiryRequest/inquiryRequest.action';
import downArrow from '@/assets/images/icons/DownArrowSvg';
import { useRouter } from 'next/router';
import { RootState } from '@/redux/store/rootReducer';
import { DatePicker } from 'antd';

const StepperRightContent = ({ requiredDetails, setRequiredDetails }) => {
  const { RangePicker } = DatePicker;

  const dispatch = useDispatch();
  const propertyInfo = useSelector(
    (state: RootState) => state.inquiryRequestReducer.propertyInfo
  );
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const router = useRouter();

  const handleDateChange = (dates) => {
    const [startDate, endDate] = dates;
    setCheckIn(startDate.format('YYYY-MM-DD'));
    setCheckOut(endDate.format('YYYY-MM-DD'));
    setRequiredDetails({
      ...requiredDetails,
      checkIn: startDate.format('YYYY-MM-DD'),
      checkOut: endDate.format('YYYY-MM-DD'),
    });
  };
  useEffect(() => {
    const propertyId = parseInt(router.asPath.split('?')[1]);
    setCheckIn(router.asPath.split('?')[1].split(':')[1]);
    setCheckOut(router.asPath.split('?')[1].split(':')[2]);

    dispatch(actions.getDetails({ propertyId }));
  }, []);
  return (
    <StepperRightContentWrap>
      <Title
        className='title'
        title={propertyInfo?.name}
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.blackColor}`}
        marginBottom={'4px'}
      />
      <ul className='list-wrapper'>
        <li>{propertyInfo?.type}</li>
        <li>{`${propertyInfo?.space?.bedrooms} Bedroom`}</li>
        <li>{`${propertyInfo?.space?.size} Sq. Ft.`}</li>
      </ul>
      <CardSlider propertyImage={propertyInfo?.images} />
      <div className='rate'>
        <div>
          <span className='price'>{`CA$${propertyInfo?.rent}`}</span>/ month
        </div>
        <div>Bills Included</div>
      </div>
      <div className='book-block'>
        <div className='title'>Pay to Book</div>
        <div>
          <label>First Rent payment</label>
          <span>{`CA$${propertyInfo?.rent}`}</span>
        </div>
        {/* <div>
          <label>One time service fee</label>
          <span>{`CA$${propertyInfo?.one_time_service_fee}`}</span>
        </div> */}
      </div>
      <div className='total'>
        <label>Total</label>
        <span>{`CA$${propertyInfo?.rent}`}</span>
      </div>
      <div className='payment-text'>Full payment overview</div>
      <div className='period'>
        <div className='title-wrapper'>
          <span className='title'>Rental Period</span>
          <span className='icon' style={{ position: 'relative' }}>
            <RangePicker
              suffixIcon={<Icon component={downArrow} />}
              separator={' '}
              style={{
                position: 'absolute',
                top: '0',
                opacity: '0',
                width: '100px',
              }}
              onChange={handleDateChange}
            />
            <Icon component={editIcon} />
          </span>
        </div>
        <div className='date'>
          <span>{checkIn}</span>
          <span className='saperator'> to </span>
          <span>{checkOut}</span>
        </div>
      </div>
    </StepperRightContentWrap>
  );
};

export default StepperRightContent;
