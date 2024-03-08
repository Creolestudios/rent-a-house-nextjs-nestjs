import React from 'react';
import { CustomButton } from '@/globalStyles';
import { BookingSpecialOfferWrapper as LandlordBookingConfirmWrapper } from './InquiryRequest.styles';
import BookingCancelModal from './BookingCancelModal';

const LandlordBookingConfirm = ({ isModalOpen, setIsModalOpen }: any) => {
  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };

  //   const handleCancel = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <>
      <LandlordBookingConfirmWrapper>
        <div className='title'>James has booked the place!</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          suscipit quam erat, eget lacinia ante malesuada eget.
        </p>
        <div className='offer-detail'>
          <div className='offer-title'>Booking Details</div>
          <div className='block'>
            <label>Move - in Date</label>
            <span>23-3-2023</span>
          </div>
          <div className='block'>
            <label>Move - out Date</label>
            <span>23-8-2023</span>
          </div>
          <div className='block'>
            <label>Booking Period</label>
            <span>5 Months</span>
          </div>
          <hr />
          <div className='block'>
            <label>Monthly Offer</label>
            <span>$ 250</span>
          </div>
          <hr />
          <div className='block'>
            <label>Renewal Date</label>
            <span>23-5-2023</span>
          </div>
          <div className='block'>
            <label>Renewal Amount</label>
            <span>$250</span>
          </div>
        </div>
        <div className='btn-wrapper'>
          <CustomButton className='fill' onClick={() => setIsModalOpen(true)}>
            Send Payment Reminder
          </CustomButton>
        </div>
      </LandlordBookingConfirmWrapper>
      <BookingCancelModal
        title='Please select reason for reporting the user!'
        radioList={[
          'Lorem ipsum dolor sit amet',
          'Lorem ipsum dolor sit amet',
          'Lorem ipsum dolor sit amet',
        ]}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default LandlordBookingConfirm;
