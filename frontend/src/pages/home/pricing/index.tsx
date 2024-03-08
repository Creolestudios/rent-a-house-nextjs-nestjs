import React from 'react';
import MainComp from '@/components/MainComp/MainComp';
import Pricing from '@/components/Pricing/Pricing';

const index = ( {isEdit}:any) => {
  return (
    <MainComp>
     
        <Pricing isEdit={isEdit} />
      
    </MainComp>
  );
};

export default index;
