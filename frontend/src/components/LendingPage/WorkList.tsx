import React, { ReactNode, useEffect, useState } from 'react';
import { WorkListWrapper } from './LendingPage.styles';
import Icon from '@ant-design/icons';
import RollerSketingImg from '@/assets/images/RollerSketingSvg';
import ReadingSideImg from '@/assets/images/ReadingSideSvg';
import BalletImg from '@/assets/images/BalletSvg';
import numberOne from '@/assets/images/NumberOneSvg';
import numberTwo from '@/assets/images/NumberTwoSvg';
import numberThree from '@/assets/images/NumberThreeSvg';

const data = [
  {
    id: 1,
    title: 'Search fast',
    description:
      "Browse hundreds of properties in your city of choice. Save your favorites and set up search alerts so you don't miss your dream place!",
    numberImg: <Icon component={numberOne} />,
    listImg: <Icon component={RollerSketingImg} />,
    x: 45,
  },
  {
    id: 2,
    title: 'Real-Time Chat',
    description:
      'Communicate directly with advertisers. If all goes well, one of these verified users will become your new landlord!',
    numberImg: <Icon component={numberTwo} />,
    listImg: <Icon component={ReadingSideImg} />,
    x: 45,
  },
  {
    id: 3,
    title: 'Book & Pay Online',
    description:
      'Once you pay the first’s month rent, the place is yours. We protect your money and transfer it to the landlord only 48 hours after you’ve moved-in.',
    numberImg: <Icon component={numberThree} />,
    listImg: <Icon component={BalletImg} />,
    x: 45,
  },
];

const WorkList = ({id,isEdit,content}:any) => {
  const [workDataList, setWorkDataList] = useState<any>(data);
  return (
    <WorkListWrapper>
      {workDataList.map((item: any) => (
        <div className='list-item' key={item?.id} id={`item-${item?.id}`}>
          <div className='number'>{item?.numberImg}</div>
          <div className='list-img'>{item?.listImg}</div>
          <div className='title' contentEditable={isEdit} id={`${id}${item?.id}Title`}>
            {/* {item?.title} */}
            {content[`${id}${item?.id}Title`]}
            </div>
          <p contentEditable={isEdit} id={`${id}${item?.id}Description`}>
          {content[`${id}${item?.id}Description`]}

            {/* {item?.description} */}
            </p>
        </div>
      ))}
    </WorkListWrapper>
  );
};

export default WorkList;
