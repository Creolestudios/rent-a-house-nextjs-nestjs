import React, { use, useEffect, useState } from 'react';
import { Container, SectionTitle } from '@/globalStyles';
import { color, fontFamily } from '@/styles/variable';
import CommonCard from '../CommonCard/CommonCard';
import { CardWrapper } from '../CommonCard/CommonCard.styles';
import SubTitle from '../SubTitle/SubTitle';
import Title from '../Title/Title';
import { FeaturePlaceSectionWrapper } from './LendingPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/propertyListing/propertyListing.action';

const FeaturePlaceSection = () => {
  const dispatch = useDispatch();
  const FeaturePropertyList = useSelector(
    (state: any) => state.propertyListingReducer.featurePropertyList
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    let token = window.sessionStorage.getItem('token');
    token !== null
      ? dispatch(actions.getAuthPropertyFeatureList())
      : dispatch(actions.getPropertyFeatureList());
  }, []);

  useEffect(() => {
    setData(FeaturePropertyList);
  }, [FeaturePropertyList]);

  return (
    <FeaturePlaceSectionWrapper>
      <Container className='container'>
        <SectionTitle className='section-title'>
          <Title
            title='Featured Places'
            color={`${color.blackColor}`}
            fontFamily={`${fontFamily.ptBold}`}
            marginBottom={'8px'}
            className='title'
          />
          <SubTitle
            title={
              'Discover thousands of apartments and homes for rent in Vancouver   '
            }
            color={`${color.greyColor}`}
            fontFamily={`${fontFamily.ptRegular}`}
            marginBottom={'8px'}
            className='sub-title'
          />
        </SectionTitle>

        <CardWrapper>
          {data.map((item: any) => (
            <div className='card-item' key={item?.id}>
              <CommonCard
                route={`/home/property-listing/${item?.id}`}
                item={item}
                className=''
              />
            </div>
          ))}
        </CardWrapper>
      </Container>
    </FeaturePlaceSectionWrapper>
  );
};

export default FeaturePlaceSection;
