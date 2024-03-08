import React from 'react';
import { BookingInvitationWrapper } from './InquiryRequest.styles';
import { CustomButton } from '@/globalStyles';

const BookingInvitation = () => {
  return (
    <BookingInvitationWrapper>
      <div className='title'>
        James has sent you an official invitation to book!
      </div>
      <p>
        In order to secure this place, you must now complete the payment. The
        offer from James will expire in 00:25:03. So it's time to make a
        decision! You can select an action from the options below. (Please note
        that this place has not been reserved for you and other users can also
        book it until you have completed the payment)
      </p>
      <div className='btn-wrapper'>
        <CustomButton>Change Requests Date</CustomButton>
        <CustomButton className='fill'>Finalize Booking Now</CustomButton>
        <CustomButton>Decline</CustomButton>
      </div>
    </BookingInvitationWrapper>
  );
};

export default BookingInvitation;
