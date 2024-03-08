import { Container } from '@/globalStyles';
import React from 'react';
import LendlordList from '../RenterLendlord/LendlordList';
import BenifitLendlord from './BenifitLendlord';
import { PricingLendlordWrapper } from './Pricing.styles';
import RentLendlord from './RentLendlord';

const PricingLendlord = ({data,isEdit}:any) => {
  return (
    <PricingLendlordWrapper>
      <RentLendlord data={data}  isEdit={isEdit}/>
      <BenifitLendlord isEdit={isEdit} data={data}/>
    </PricingLendlordWrapper>
  );
};

export default PricingLendlord;
