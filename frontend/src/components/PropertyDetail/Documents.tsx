import React from 'react';
import SubTitle from '../SubTitle/SubTitle';
import Title from '../Title/Title';
import { DocumentsWrapper } from './PropertyDetail.styles';
import { fontFamily, color } from '@/styles/variable';
import Icon from '@ant-design/icons';
import passportIcon from '@/assets/images/icons/PassportSvg';

const Documents = () => {
  return (
    <DocumentsWrapper>
      <Title
        title='Documents required to book'
        marginBottom={'4px'}
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.blackColor}`}
      />
      <SubTitle
        className='sub-title'
        title='The landlord will ask for them to accept your booking request.'
        marginBottom={'4px'}
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.greyColor}`}
      />
      <div className='doc-proof'>
        <div className='icon'>
          <Icon component={passportIcon} />
        </div>
        <div className='text'>
          <span>Proof of identity</span>
          <span>Government issued ID, passport, driver’s license.</span>
        </div>
      </div>
    </DocumentsWrapper>
  );
};

export default Documents;
