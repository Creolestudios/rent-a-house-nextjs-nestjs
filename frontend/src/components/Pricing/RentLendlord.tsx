import React from 'react';
import LendlordList from '../RenterLendlord/LendlordList';
import SubTitle from '../SubTitle/SubTitle';
import Title from '../Title/Title';
import { fontFamily, color } from '@/styles/variable';
import { PricingLendlordListWrapper } from './Pricing.styles';
import { Container } from '@/globalStyles';

const RentLendlord = ({data,isEdit}:any) => {
  return (
    <PricingLendlordListWrapper>
      <Container className='container'>
        <div className='title-wrapper'>
          <Title
            title={data.pricingId1}
            marginBottom={'8px'}
            fontFamily={fontFamily.ptBold}
            color={color.blackColor}
            id={"pricingHeadingId1"}
            isEdit={isEdit}
          />
          <SubTitle

            title={data.pricingId3}
            fontFamily={fontFamily.ptRegular}
            color={color.greyColor}
            id={'pricingSubtitleId1'}
            isEdit={isEdit}
          />
        </div>
        <LendlordList isEdit={isEdit} content={data} isHome={false}/>
      </Container>
    </PricingLendlordListWrapper>
  );
};

export default RentLendlord;
