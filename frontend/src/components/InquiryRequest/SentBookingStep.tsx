import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookingConfirm from './BookingConfirm';
import BookingInvitation from './BookingInvitation';
import BookingSpecialOffer from './BookingSpecialOffer';
import CancelBooking from './CancelBooking';
import ChangeRequestDate from './ChangeRequestDate';
import ChatBox from './ChatBox';
import DeclinedBookingRequest from './DeclinedBookingRequest';
import DeclineOffer from './DeclineOffer';
import { SentBookingStepWrapper } from './InquiryRequest.styles';
import LandlordBookingConfirm from './LandlordBookingConfirm';
import LandlordSentOffer from './LandlordSentOffer';
import LandlordSpecialOffer from './LandlordSpecialOffer';
import RequestBooking from './RequestBooking';
import RequestBookingDetail from './RequestBookingDetail';
import SendBookingFaq from './SendBookingFaq';
import SentInvitation from './SentInvitation';

const SentBookingStep = ({ landlord }: any) => {
  const { requestBooking, changeRequestDate, inquiryStep, cancelBook } =
    useSelector((state: any) => state.appReducer);

  const [isModalOpen, setIsModalOpen] = useState<any>(false);

  return (
    <SentBookingStepWrapper>
      {!requestBooking && (
        <>
          {!landlord && cancelBook && inquiryStep === 3 && <CancelBooking />}
          {!landlord && !cancelBook && inquiryStep === 3 && (
            <BookingConfirm
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}

          {!landlord && inquiryStep === 2 && <BookingInvitation />}

          {/* this is the component for the special offer */}
          {/* {!landlord && inquiryStep === 2 && <BookingSpecialOffer />} */}

          {!landlord &&
            !changeRequestDate &&
            inquiryStep !== 2 &&
            inquiryStep !== 3 && <RequestBooking />}

          {/* component for landlord Sent Invitation for send invitation to book step */}
          {landlord && inquiryStep === 1 && (
            <SentInvitation
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}

          {/* component for landlord special offer for send invitation to book step */}
          {landlord && inquiryStep === 1 && <LandlordSpecialOffer />}

          {/* component for landlord Declined Booking Request for send invitation to book step */}
          {landlord && inquiryStep === 1 && <DeclinedBookingRequest />}

          {/* component for landlord Sent Offer for wair confirmation step */}
          {landlord && inquiryStep === 2 && <LandlordSentOffer />}

          {/* component for landlord Sent Offer for wait confirmation step */}
          {landlord && inquiryStep === 3 && (
            <LandlordBookingConfirm
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          )}

          {changeRequestDate && <ChangeRequestDate />}

          {/* this is the component for the declined offer */}
          {/* <DeclineOffer /> */}

          <ChatBox />
        </>
      )}
      {requestBooking && <RequestBookingDetail />}
      <SendBookingFaq />
    </SentBookingStepWrapper>
  );
};

export default SentBookingStep;
