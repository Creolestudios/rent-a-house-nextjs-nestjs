import { CustomButton } from '@/globalStyles';
import React from 'react';
import { BookingSpecialOfferWrapper } from './InquiryRequest.styles';

const BookingSpecialOffer = () => {
  return (
    <BookingSpecialOfferWrapper>
        <div className="title">James is making you special offer!</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit quam erat, eget lacinia ante malesuada eget.</p>
        <div className="offer-detail">
            <div className="offer-title">Offer Details</div>
            <div className="block">
                <label>Move - in Date</label>
                <span>23-3-2023</span>
            </div>
            <div className="block">
                <label>Move - out Date</label>
                <span>23-8-2023</span>
            </div>
            <hr/>
            <div className="block">
                <label>Monthly Offer</label>
                <span>$ 250</span>
            </div>
        </div>
        <div className="btn-wrapper">
            <CustomButton className="fill">Book Now</CustomButton>
            <CustomButton>Decline</CustomButton>
        </div>
    </BookingSpecialOfferWrapper>
  );
};

export default BookingSpecialOffer;
