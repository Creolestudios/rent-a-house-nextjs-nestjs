import React from 'react';
import { BookingSpecialOfferWrapper as SentInvitationWrapper } from './InquiryRequest.styles';
import { CustomButton } from '@/globalStyles';
import BookingCancelModal from './BookingCancelModal';

const SentInvitation = ({ setIsModalOpen, isModalOpen }: any) => {
  return (
    <>
      <SentInvitationWrapper>
        <div className='title'>Invite the James to book your place!</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          suscipit quam erat, eget lacinia ante malesuada eget. Mauris dictum
          purus felis, eget rutrum urna egestas at. Nulla volutpat velit eu
          rhoncus mollis.
        </p>
        <div className='offer-detail'>
          <div className='offer-title'>Offer Details</div>
          <div className='block'>
            <label>Move - in Date</label>
            <span>23-3-2023</span>
          </div>
          <div className='block'>
            <label>Move - out Date</label>
            <span>23-8-2023</span>
          </div>
          <hr />
          <div className='block'>
            <label>Monthly Offer</label>
            <span>$ 250</span>
          </div>
        </div>
        <div className='btn-wrapper'>
          <CustomButton>Send invitation</CustomButton>
          <CustomButton className='fill'>
            Send Offer
          </CustomButton>
          <CustomButton onClick={() => setIsModalOpen(true)}>Decline</CustomButton>
        </div>
      </SentInvitationWrapper>
      <BookingCancelModal
      title="Please select reason for declining the request!"
      radioList={["Not available at the moment","Already Booked.","Not available at the moment."]}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default SentInvitation;
