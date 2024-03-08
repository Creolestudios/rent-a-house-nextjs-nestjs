import React from 'react';
import { CustomButton } from '@/globalStyles';
import { BookingSpecialOfferWrapper as BookingConfirmWrapper } from './InquiryRequest.styles';
import BookingCancelModal from './BookingCancelModal';

const BookingConfirm = ({ isModalOpen, setIsModalOpen }: any) => {
  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };

  //   const handleCancel = () => {
  //     setIsModalOpen(false);
  //   };

  return (
    <>
      <BookingConfirmWrapper>
        <div className='title'>Your booking is confirmed.</div>
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
            Cancel the Booking
          </CustomButton>
        </div>
      </BookingConfirmWrapper>
      <BookingCancelModal
       title="Please select reason for canceling the booking!"
       radioList={["Property listing is fake","Property not clean","Doesn’t match with shown images."]}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        // handleCancel={handleCancel}
        // handleOk={handleOk}
      />
    </>
  );
};

export default BookingConfirm;
