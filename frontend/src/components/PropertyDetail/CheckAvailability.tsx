import { Avatar, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { CheckAvailabilityWrapper } from './PropertyDetail.styles';
import { DatePicker } from 'antd';
import Icon from '@ant-design/icons';
import calenderIcon from '@/assets/images/icons/CalenderSvg';
import helpIcon from '@/assets/images/icons/HelpSvg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import moment from 'moment';
import LoginModal from '../CommonModal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/propertyListing/propertyListing.action';
import { RootState } from '@/redux/store/rootReducer';

const CheckAvailability = ({ landlord, availableFrom, propertyData }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const monthRent = useSelector(
    (state: RootState) => state.propertyListingReducer.perMonthRent
  );
  const datePopup = useSelector(
    (state:any)=>state.propertyListingReducer
  )
  const additional=useSelector(
    (state:any)=>state.propertyListingReducer
  )
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const checkAvailability = (current) => {
    const today = moment().startOf('day');
    const availableFromDate = moment(availableFrom, 'YYYY-MM-DD').startOf(
      'day'
    );
    const greaterDate = moment.max(today, availableFromDate);
    return current && current < greaterDate;
  };

  const checkOutAvailability = (current) => {
    const today = moment().startOf('day');
    const availableFromDate = moment(availableFrom, 'YYYY-MM-DD').startOf(
      'day'
    );
    const greaterDate = moment.max(today, availableFromDate).add(1, 'day');

    const targetDate = moment(checkInDate, 'YYYY-MM-DD').add(
      propertyData?.min_rental_period,
      'months'
    );

    return current && (current < greaterDate || current < targetDate);
  };

  const handleCheckInDate = (value) => {
    dispatch(actions.datePopupOpen(false))
    setCheckInDate(moment(value?.$d).format('YYYY-MM-DD'));
  };
  const handleCheckOutDate = (value) => {
    setCheckOutDate(moment(value?.$d).format('YYYY-MM-DD'));
  };

  const handleCheckout = (value) => {
    let id = parseInt(router.asPath.split('/')[3]);
    router.asPath.split('/');
    handleCheckOutDate(value);
    dispatch(actions.getPerMonthRent({ id }));
  };

  const handleAvailabilty = () => {
    let token = sessionStorage.getItem('token');
    window.sessionStorage.setItem('stepper', '0');

    checkInDate.length > 0 &&
      checkInDate.length > 0 &&
      (token !== null
        ? router.push(
            `/home/inquiry-request?${propertyData?.id}:${checkInDate}:${checkOutDate}`
          )
        : setIsModalOpen(true));
  };
  useEffect(()=>{
    if(datePopup.datePopUp){
      document.getElementById('#date').click()
    }
  },[datePopup.datePopUp,additional.additional])


  return (
    <CheckAvailabilityWrapper>
      <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className='header'>
        <Avatar size={60}>{`${Array.from(`${landlord?.first_name}`)[0]} ${
          Array.from(`${landlord?.last_name}`)[0]
        }`}</Avatar>
        <div className='detail'>
          <div className='title'>{`${landlord?.first_name} ${landlord?.last_name}`}</div>
          <div className='sub-title'>Landlord</div>
        </div>
      </div>
      <div className='content'>
        <div className='date-wrapper'>
          <div className={`filter-content`}>
            <div className='block-content'>
              <div className='block-item'>
                <div className='date-wrapper'>
                  <div className='placeholder-text'>Move in date</div>
                  <div className='icon'>
                    <Icon component={calenderIcon} />
                  </div>
                  
                  <DatePicker  
                    id='#date'
                    placeholder='Start date'
                    suffixIcon={''}
                    disabledDate={(current) => checkAvailability(current)}
                    onChange={handleCheckInDate}   
                  />
                </div>
              </div>
              <div className='block-item'  >
                <div className='date-wrapper'>
                  <div className='placeholder-text'>Move out date</div>
                  <div className='icon'>
                    <Icon component={calenderIcon} />
                  </div>
                  <DatePicker
                    placeholder='End date'
                    suffixIcon={''}
                    disabledDate={checkOutAvailability}
                    onChange={handleCheckout}
                   
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='min-time-error'>
          {`*This property requires a ${propertyData?.min_rental_period}  month minimum stay.`}
        </p>
        <Button onClick={() => handleAvailabilty()}>Check Availability</Button>
      </div>
      {monthRent > 0 && (
        <div className='per-month'>
          <label>First month's rent</label>
          <span className='seperator'>:</span>
          <span>CA${monthRent}</span>
        </div>
      )}
      <div className='footer'>
        <div className='block'>
          <Icon component={helpIcon} />
          <Link href='' className='link'>
            How to book this property?
          </Link>
        </div>
      </div>
    </CheckAvailabilityWrapper>
  );
};

export default CheckAvailability;
