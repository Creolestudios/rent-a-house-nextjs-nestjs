import React from 'react';
import Image from 'next/image';
// import dollarSign from '@/assets/images/dollar-sign.png';
import { StripeWrapper } from './UtilityComp.styles';
import { Button } from 'antd';
import Icon from '@ant-design/icons';
import arrowIcon from '@/assets/images/icons/LongRightArrowSvg';
import { useRouter } from 'next/router';

const Stripe = ({ className, title, symbol, btn, route,isEdit }: any) => {
  const router = useRouter();
  return (
    <StripeWrapper className={className}>
      <div className='left'>
        <div className='symbol'>
          <Image src={symbol} width={24} height={24} alt='img' />
        </div>
        <div className='title' contentEditable={isEdit} id='faqStrip'>{title}</div>
      </div>
      {btn && (
        <div className='right'>
          <Button onClick={() => router.push(`${route}`)}>
            CONTACT US
            <Icon component={arrowIcon} />
          </Button>
        </div>
      )}
    </StripeWrapper>
  );
};

export default Stripe;
