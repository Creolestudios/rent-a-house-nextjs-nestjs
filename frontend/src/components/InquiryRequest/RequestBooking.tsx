import React, { useState } from "react";
import { CustomButton } from "@/globalStyles";
import { RequestBookingWrapper } from "./InquiryRequest.styles";
import { useDispatch, useSelector } from "react-redux";
import appActions from "@/redux/app/app.action";

const RequestBooking = () => {
  const dispatch = useDispatch();

  const { changeRequestDate } = useSelector((state: any) => state.appReducer);

  const requestClick = () => {
    dispatch(appActions.requestBooking(true));
  };

  const changeDateClick = () => {
    dispatch(appActions.changeRequestDate(true));
  };

  ({ changeRequestDate });

  return (
    <RequestBookingWrapper>
      <div className="content">
        <h3>Move forward with booking this place</h3>
        <p>
          Request a booking from James in order to secure this place You will
          not be charged until your request has been accepted by James
        </p>
        <div className="btn-wrapper">
          <CustomButton className="fill" onClick={() => requestClick()}>
            Request Booking
          </CustomButton>
          <CustomButton onClick={() => changeDateClick()}>
            Change Requests Date
          </CustomButton>
        </div>
      </div>
    </RequestBookingWrapper>
  );
};

export default RequestBooking;
