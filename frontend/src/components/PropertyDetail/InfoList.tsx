import React, { useState } from 'react';
import Link from 'next/link';
import Title from '../Title/Title';
import { InfoListWrapper } from './PropertyDetail.styles';
import { fontFamily, color } from '@/styles/variable';
import Image from 'next/image';
import { facilityIcon } from '@/config/constants';

const InfoList = ({ data, title, className, link }: any) => {
  const [totalItems, setTotalItems] = useState(3);

  return (
    <InfoListWrapper>
      <div className='header-wrap'>
        <Title
          title={title}
          marginBottom={'0'}
          fontFamily={`${fontFamily.ptBold}`}
          color={`${color.blackColor}`}
        />
        {data && data.length === totalItems ? (
          <div onClick={() => setTotalItems(3)}>See Less</div>
        ) : (
          <div onClick={() => setTotalItems(data.length)}>See More</div>
        )}
      </div>
      <ul className={className}>
        {data &&
          data.slice(0, totalItems).map((item: any, key: number) => (
            <li key={key}>
              <Image
                src={facilityIcon[item?.amenities_id?.name]}
                width={22}
                height={22}
                alt='img'
              />
              {item?.amenities_id?.name}
            </li>
          ))}
      </ul>
    </InfoListWrapper>
  );
};

export default InfoList;
