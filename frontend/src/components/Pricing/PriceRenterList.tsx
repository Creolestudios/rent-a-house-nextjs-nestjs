import React from 'react';
import { PriceRenterListWrapper } from './Pricing.styles';
import { Button } from 'antd';
import Icon from '@ant-design/icons';
import arrowIcon from '@/assets/images/icons/LongRightArrowSvg';

const data = [
  {
    id: 1,
    title: 'Search fast, search smart',
    description: [
      'Browse through hundreds of properties in 30+ countries. Save your favourites and create search alerts so you don’t miss your dream place.',
    ],
    link: 'Start your search now',
    fees: ['free'],
    feesDescription: 'Access to all our properties, completely free.',
    btnText: 'Start your search now',
  },
  {
    id: 2,
    title: 'Chat in real-time with verified landlords',
    description: [
      'For properties in The Netherlands: You can buy a subscription and enjoy unlimited messaging with landlords. We offer various subscription plans, all at a low price. Pick the one that suits you best.',
    ],
    link: 'How do I get in touch with landlords?',
    fees: ['The Netherlands — Buy a plan', 'Other countries — Free'],
    feesDescription: 'Unlimited messaging with landlords',
    btnText: 'How do I get in touch with landlords?',
  },
  {
    id: 3,
    title: 'Book and pay securely online',
    description: [
      'For properties in The Netherlands: Pay the first month’s rent, and the place is yours. There are no other fees.',
    ],
    link: 'Learn more',
    fees: [
      'The Netherlands — No service fee',
      'Other countries — One-time service fee',
    ],
    feesDescription: 'Only applied to the first-month’s rent (min. CA$165)',
    btnText: 'Learn more',
  },
  {
    id: 4,
    title: 'Pay your deposit, monthly rent and any extras',
    description: [
      'Any post-booking costs (e.g. administration or furnishing fees) are between you and your landlord, so no extra charges apply. You can transfer any of these funds for free via our secure online payments system.',
    ],
    link: 'More about post-booking payments',
    fees: ['Free'],
    feesDescription: 'No transaction costs apply.',
    btnText: 'More about post-booking payments',
  },
];

const PriceRenterList = ({content,isEdit}:any) => {
  return (
    <PriceRenterListWrapper>
      <ul>
        {data?.map((item: any) => (

          <li key={item?.id}>
            <div className='number'>{item?.id}</div>
            <div className='content-area'>
              <div className='left'>
                <h2 contentEditable={isEdit} id={`priceRender${item?.id}`}>{content[`pricing${item?.id+2}`]}</h2>
                {item?.description.map((desc: any) => (
                  <p key={item?.id} contentEditable={isEdit} id={`priceRenderdesc${item?.id}`}>{content[`pricing${item?.id+6}`]}</p>
                  // <p key={item?.id} contentEditable={true} id={`priceRenderdesc${item?.id}`}>{content.pricing8}</p>

                ))}
                <div className='link' contentEditable={isEdit} id={`priceRenderlink${item?.id}`}>
                  {/* {item?.link} */}
                  
                  {content[`pricing${item?.id+10}`]}
                  </div>
              </div>
              <div className='right'>
                <div className='fees'>
                  {item?.fees.map((fee: any) => ( 
                    <div key={item?.id} contentEditable={isEdit} id={`pricingRenderHighlight${item?.id}`}>
                      {/* {fee} */}
                      {content[`pricing${item?.id+14}`]}
                      </div>
                  ))}
                </div>
                <p contentEditable={isEdit} id={`pricingRenderHighlightDescription${item?.id}`}>
                {content[`pricing${item?.id+20}`]}

                  {/* {item?.feesDescription} */}
                  </p>
                <Button contentEditable={isEdit} id={`pricingRenderButton${item?.id}`}>
                  {/* {item?.btnText} */}
                {content[`pricing${item?.id+24}`]}

                  <Icon component={arrowIcon} />
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </PriceRenterListWrapper>
  );
};

export default PriceRenterList;
