import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@/globalStyles';
import ListingOption from './ListingOption';
import { PropertyListingOptionWrapper } from './PropertyListingOptionWrapper.styles';
import { RootState } from '@/redux/store/rootReducer';

const PropertyListingOption = () => {
  let { listOptionValue } = useSelector((state: any) => state.appReducer);
  const stepperValue = useSelector((state: RootState) => state.addPropertyReducer.addPropertyStepper);

  return (
    <PropertyListingOptionWrapper className={listOptionValue === 2 && stepperValue === 2 && 'duplicate-wrap'}>
      <Container>
        <ListingOption />
      </Container>
    </PropertyListingOptionWrapper>
  );
};

export default PropertyListingOption;
