import React from 'react';
import MainComp from '@/components/MainComp/MainComp';
import ListedProperty from '@/components/ListedProperty/ListedProperty';
import Booking from '@/components/Booking/Booking';

const index = () => {
  return (
    <MainComp>
      <Booking />
    </MainComp>
  );
};

export default index;
