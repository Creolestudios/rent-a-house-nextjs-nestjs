import { Container } from '@/globalStyles';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TabList from '../TabList/TabList';
import GetStartedSection from './GetStartedSection';
import LendlordList from './LendlordList';
import { RenterLendlordWrapper } from './RenterLendlord.styles';
import RenterList from './RenterList';

const tabList = [
  { id: 1, label: 'Tenants' },
  { id: 2, label: 'Landlords' },
];

const Renter = () => {
  const { activeTab } = useSelector((state: any) => state.appReducer);
  const [tabId, setTabId] = useState(1);

  return (
    <RenterLendlordWrapper>
      <Container className='container'>
        <div className='heading-section'>
          <div className='left'>
            <h1>Become a {activeTab === 1 ? 'Renter' : 'Landlord'}</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className='right'>
            <TabList tabList={tabList} setTabId={setTabId} tabId={tabId} />
          </div>
        </div>
        {activeTab === 1 ? <RenterList /> : <LendlordList isHome={true} />}
        <GetStartedSection />
      </Container>
    </RenterLendlordWrapper>
  );
};

export default Renter;
