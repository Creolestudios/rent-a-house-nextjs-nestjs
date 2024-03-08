import React from 'react';
import MainComp from '@/components/MainComp/MainComp';
import Chat from '@/components/Chat/Chat';
import Authguard from '@/services/Authguard/Authgaurd';

const index = () => {
  return (
    <Authguard secure={true} role={'0'}>
      <MainComp>
        <Chat />
      </MainComp>
    </Authguard>
  );
};

export default index;
