import React from 'react';
import MainComp from '@/components/MainComp/MainComp';
import PropertyListing from '@/components/PropertyListing/PropertyListing';
import PropertyListingOption from '@/components/PropertyListingOption/PropertyListingOption';

const index = () => {
  return (
    <MainComp>
      <PropertyListingOption />
    </MainComp>
  );
};

export default index;
