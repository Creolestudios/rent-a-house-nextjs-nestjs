import React from 'react';
import { fontFamily, color } from '@/styles/variable';
import { MessageReservationHistoryWrapper } from './Reservation.styles';
import Title from '../Title/Title';
import { Box } from '@/globalStyles';
import MessageHistoryList from './MessageHistoryList';

const ManageReservationHistory = () => {
  return (
    <MessageReservationHistoryWrapper>
      <Title
        className='title'
        title='Message History'
        fontFamily={`${fontFamily.demiBold}`}
        color={`${color.blackColor}`}
      />
      <Box className='box'>
        <MessageHistoryList />
      </Box>
    </MessageReservationHistoryWrapper>
  );
};

export default ManageReservationHistory;
