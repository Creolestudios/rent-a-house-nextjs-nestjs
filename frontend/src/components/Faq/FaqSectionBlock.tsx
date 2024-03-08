import React, { useState } from 'react';
import { Container } from '@/globalStyles';
import { FaqSectionBlockWrapper } from './Faq.styles';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import { fontFamily, color } from '@/styles/variable';
import Faq from '../Pricing/Faq';
import { Input } from 'antd';
import Icon from '@ant-design/icons';
import searchIcon from '@/assets/images/icons/SearchIconSvg';
import Stripe from '../UtilityComp/Stripe';
import exclamationImg from '@/assets/images/exclamation.png';

const FaqSectionBlock = ({isEdit,data}:any) => {
  const [activeId,setActiveId]=useState<string>('tenant');

  return (
    <FaqSectionBlockWrapper>
      <Container>
        <Title
          title={data?.faq7}
          marginBottom={'8px'}
          fontFamily={`${fontFamily.ptBold}`}
          color={color.blackColor}
          isEdit={isEdit}
          id={'faqTitleId'}
        />
        <SubTitle
          title={data?.faq8}
          marginBottom={'8px'}
          fontFamily={`${fontFamily.ptRegular}`}
          color={color.greyColor}
          isEdit={isEdit}
          id={"faqSubTitleId"}

        />
        <div className='faq-wrapper'>
          <div className='left'>
            <div className='search'>
              <div className='search-wrapper'>
                <Input placeholder='Search' />
                <span className='icon'>
                  <Icon component={searchIcon} />
                </span>
              </div>
            </div>
            <div className='badge-wrapper'>
              <div className={`badge ${activeId === 'tenant' ? 'active' : ''}`} onClick={() => setActiveId("tenant")}>Tenants</div>
              <div className={`badge ${activeId === 'landlord' ? 'active' : ''}`} onClick={() => setActiveId('landlord')}>Landlords</div>
            </div>
          </div>
          <div className='right'>
            <Faq isEdit={isEdit} content={data} id={activeId==='tenant'?'tenant':'landlord'}/>
          </div>
        </div>
        <Stripe
        isEdit={isEdit}
          className='stripe no-bg-img'
          title={data?.faq13}
          symbol={exclamationImg}
          btn={true}
          route={"/home/contact-us"}
        />
      </Container>
    </FaqSectionBlockWrapper>
  );
};

export default FaqSectionBlock;
