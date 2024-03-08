import { Container } from '@/globalStyles';
import { color, fontFamily } from '@/styles/variable';
import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Title from '../Title/Title';
import Faq from './Faq';
import { FaqSectionWrapper } from './Pricing.styles';

const FaqSection = ({data,isEdit,activeTab}:any) => {
  return (
    <FaqSectionWrapper>
      <Container>
        <Title
          title={activeTab === 1 ? data.pricing29 : data.priceFaqlandlordTitle }
          marginBottom={'8px'}
          fontFamily={fontFamily.ptBold}
          color={color.blackColor}
          id={activeTab === 1 ? 'priceFaqTenantTitle':'priceFaqlandlordTitle'}
          isEdit={isEdit}
        />
        <SubTitle
          title={activeTab === 1 ? data.pricing30 : data.priceFaqlandlordSubTitle }
          fontFamily={fontFamily.ptRegular}
          color={color.greyColor}
          id={activeTab === 1 ? 'priceFaqTenantSubTitle':'priceFaqlandlordSubTitle'}
          isEdit={isEdit}

        />
            {activeTab === 1 &&   <Faq content={data} isEdit={isEdit} id={'PriceTenant'}/>   }
            {activeTab === 2 &&   <Faq content={data} isEdit={isEdit} id={'PriceLandlord'}/>   }

        {/* <Faq content={data} isEdit={isEdit} id={activeTab === 1 && 'tenantFaqPrice':'landlordFaqPrice'}/> */}
      </Container>
    </FaqSectionWrapper>
  );
};

export default FaqSection;
