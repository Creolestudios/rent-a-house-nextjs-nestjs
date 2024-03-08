import React from 'react';
import { RequestBookingPaymentMethodWrapper } from './InquiryRequest.styles';
import Image from 'next/image';
import americanExpressCard from '@/assets/images/american-express-card.png';
import visaCard from '@/assets/images/visa-card.png';
import { CustomButton } from '@/globalStyles';
import CardDetailForm from './CardDetailForm';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '@/redux/app/app.action';
import { Form } from 'antd';

const RequestBookingPaymentMethod = ({ billingData }) => {
  const dispatch = useDispatch();

  //   const { requestBooking } = useSelector((state: any) => state.appReducer);

  return (
    <RequestBookingPaymentMethodWrapper>
      <div className='box'>
        <div className='block'>
          <div className='header'>
            <div>
              <div className='title'>Card</div>
              <div className='sub-title'>Pay with debit/credit cards</div>
            </div>
            <div>
              <div className='img-wrapper'>
                <Image
                  src={americanExpressCard}
                  width={30}
                  height={20}
                  alt='American Express Card'
                />
                <Image src={visaCard} width={25} height={20} alt='Visa Card' />
              </div>
            </div>
          </div>
        </div>
        <div className='block'>
          <CardDetailForm billingData={billingData} />
        </div>
        <div className='block'>
          <label>Total Payable</label>
          <span>$ 2,399</span>
        </div>
      </div>
      {/* <div className='seperator'>
        <span>or</span>
        <hr />
      </div>
      <div className='box'>
        <div className='block'>
          <label>Pay with Stripe</label>
          <CustomButton className='fill'>Proceed</CustomButton>
        </div>
      </div> */}
      <div className='btn-wrapper'>
        <CustomButton className='fill' onClick={() => billingData.submit()}>
          Send Payment Request
        </CustomButton>

        <CustomButton
          onClick={() => dispatch(appActions.requestBooking(false))}
        >
          Cancel
        </CustomButton>
      </div>
    </RequestBookingPaymentMethodWrapper>
  );
};

export default RequestBookingPaymentMethod;
