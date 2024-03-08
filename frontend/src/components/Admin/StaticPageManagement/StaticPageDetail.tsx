import React from 'react';
import { StaticPageDetailWrapper } from './StaticPageManagement.styles';
import { Box } from '@/globalStyles';
// import ViewDetail from './ViewDetail';
import ViewDetail from '../PropertyListing/ViewDetail';

const StaticPageDetail = () => {
  return (
    <StaticPageDetailWrapper>
      <ViewDetail />
    </StaticPageDetailWrapper>
  );
};

export default StaticPageDetail;
