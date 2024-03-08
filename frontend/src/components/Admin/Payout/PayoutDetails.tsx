import { Box, CustomButton } from '@/globalStyles';
import { fontFamily, color } from '@/styles/variable';
import React from 'react';
import { ReservationDetailWrapper } from '../Reservation/Reservation.styles';
import Title from '../Title/Title';
import PayoutViewDetail from './PayoutViewDetail';

const PayoutDetails = () => {
  return (
    <ReservationDetailWrapper>
      <Title
        className='title-wrapper'
        title='Payout Details'
        fontFamily={`${fontFamily.demiBold}`}
        color={`${color.blackColor}`}
      >
        <div className='btn-wrapper'>
          <CustomButton>Delete</CustomButton>
        </div>
      </Title>

      <Box className='box'>
        <PayoutViewDetail />
      </Box>
    </ReservationDetailWrapper>
  );
};

export default PayoutDetails;
