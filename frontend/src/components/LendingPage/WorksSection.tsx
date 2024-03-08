import React, { useState } from 'react';
import { Container, SectionTitle } from '@/globalStyles';
import { color, fontFamily } from '@/styles/variable';
import SubTitle from '../SubTitle/SubTitle';
import Title from '../Title/Title';
import { WorksSectionWrapper } from './LendingPage.styles';
import TabList from '../TabList/TabList';
import WorkList from './WorkList';
import Icon from '@ant-design/icons';
import longArrow from '@/assets/images/icons/LongRightArrowSvg';
import Link from 'next/link';
import LendlordList from '../RenterLendlord/LendlordList';
import { useSelector } from 'react-redux';

const tabList = [
  { id: 1, label: 'Tenants' },
  { id: 2, label: 'Landlords' },
];

const WorksSection = ({isEdit,content}:any) => {
  const { activeTab } = useSelector((state: any) => state.appReducer);
  const [tabId, setTabId] = useState(1);

  return (
    <WorksSectionWrapper>
      <Container className='container'>
        <SectionTitle className='section-title'>
          <div className='left'>
            <Title
              title={content.workSectionTitle1}
              color={`${color.blackColor}`}
              fontFamily={`${fontFamily.ptBold}`}
              marginBottom={'8px'}
              className='title'
              isEdit={isEdit}
              id={'workSectionTitle1'}
            />
            <SubTitle
              title={
               content.workSectionSubTitle1
              }
              color={`${color.greyColor}`}
              fontFamily={`${fontFamily.ptRegular}`}
              marginBottom={'8px'}
              className='sub-title'
              isEdit={isEdit}
              id={'workSectionSubTitle1'}
            />
          </div>
          <div className='right'>
            <TabList tabList={tabList} setTabId={setTabId} tabId={tabId} />
          </div>
        </SectionTitle>
        {activeTab === 1 ? <WorkList content={content}  id={'workListTenant'} isEdit={isEdit}/> : <LendlordList isEdit={isEdit}  content={content} selected={false} isHome={true} id={'landlordHome'}/>}
        <div className='see-more-btn'>
          <Link href='/renter-lendlord'>
            See More
            <Icon component={longArrow} />
          </Link>
        </div>
      </Container>
    </WorksSectionWrapper>
  );
};

export default WorksSection;
