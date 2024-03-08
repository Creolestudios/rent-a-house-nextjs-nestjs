import React from 'react';
import LendingPage from '@/components/LendingPage/LendingPage';
import MainComp from '@/components/MainComp/MainComp';
import Authguard from '@/services/Authguard/Authgaurd';

const index = () => {
  return (
    <MainComp>
      <LendingPage />
    </MainComp>
  );
};

export default index;
