import React from 'react';
import MainComp from '@/components/MainComp/MainComp';
import ListedProperty from '@/components/ListedProperty/ListedProperty';
import Account from '@/components/Account/Account';
import Payment from '@/components/Payment/Payment';

const index = () => {
  return (
    <MainComp>
      <Payment />
    </MainComp>
  );
};

export default index;
