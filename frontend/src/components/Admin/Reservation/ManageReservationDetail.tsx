import { Box, CustomButton, UserHeader } from '@/globalStyles';
import { fontFamily, color } from '@/styles/variable';
import React, { useEffect } from 'react';
import Title from '../Title/Title';
import { ReservationDetailWrapper } from './Reservation.styles';
import ManageReservationHistory from './ManageReservationHistory';
import ReservationDetail from './ReservationDetail';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import reservationActions from '@/redux/admin/Reservation/adminReservationListing.action';

const ManageReservationDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(()=>{
    let id = parseInt(router.asPath.split('?')[1]);
    dispatch(reservationActions.getSingleReservation({id}))
  },[])
  return (
    <ReservationDetailWrapper>
      <Title
        className='title-wrapper'
        title='Reservation Details'
        fontFamily={`${fontFamily.demiBold}`}
        color={`${color.blackColor}`}
      >
        {/* <div className='btn-wrapper'>
          <CustomButton>Delete</CustomButton>
        </div> */}
      </Title>

      <Box className='box'>
        <ReservationDetail />
      </Box>
      <ManageReservationHistory />
    </ReservationDetailWrapper>
  );
};

export default ManageReservationDetail;
