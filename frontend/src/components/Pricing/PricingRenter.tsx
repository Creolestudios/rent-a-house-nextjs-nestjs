import React from 'react';
import { Container } from '@/globalStyles';
import { PricingRenterWrapper } from './Pricing.styles';
import PriceRenterList from './PriceRenterList';
import Stripe from '../UtilityComp/Stripe';
import dollarSign from '@/assets/images/dollar-sign.png';

const PricingRenter = ({data,isEdit}:any) => {
  return (
    <PricingRenterWrapper>
      <Container>
        <Stripe
          className='stripe'
          title='What you’ll pay to book depends on where you’re moving to'
          symbol={dollarSign}
          btn={false}
          // isEdit={isEdit}
        />
        <PriceRenterList content={data} isEdit={isEdit}/>
      </Container>
    </PricingRenterWrapper>
  );
};

export default PricingRenter;
