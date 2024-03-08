import React from 'react';
import Link from 'next/link';
import Title from '../Title/Title';
import { InfoListWrapper } from './PropertyDetail.styles';
import { fontFamily, color } from '@/styles/variable';
import Image from 'next/image';
import document from '@/assets/images/file.png';
import petAllow from '@/assets/images/pet.svg';
import { facilityIcon, petRule, propertyDocuments } from '@/config/constants';

const RuleList = ({ rules, title, className, link }: any) => {
  return (
    <InfoListWrapper>
      <div className='header-wrap'>
        <Title
          title={title}
          marginBottom={'0'}
          fontFamily={`${fontFamily.ptBold}`}
          color={`${color.blackColor}`}
        />
        {link && <Link href=''>See More</Link>}
      </div>
      <ul className={className}>
        <li>
          <Image
            src={facilityIcon['document']}
            width={22}
            height={22}
            alt='img'
          />
          {propertyDocuments[rules?.document]?.label}
        </li>
        {rules?.pets ? (
          <li>
            <Image
              src={facilityIcon['pet rule']}
              width={22}
              height={22}
              alt='img'
            />
            {petRule[rules?.pets]?.label}
          </li>
        ) : null}
      </ul>
    </InfoListWrapper>
  );
};

export default RuleList;
